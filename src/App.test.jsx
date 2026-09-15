import { StrictMode } from "react";
import { afterEach, expect, test, vi } from "vitest";
import { cleanup, render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";
import EmptyState from "./components/EmptyState";

afterEach(cleanup);

test("태그와 검색어를 함께 적용하고 초기화한다", async () => {
  const user = userEvent.setup();
  render(<App />);
  expect(screen.getAllByRole("listitem")).toHaveLength(12);
  await user.selectOptions(screen.getByLabelText("태그 선택"), "daily");
  expect(screen.getAllByRole("listitem")).toHaveLength(4);
  await user.type(screen.getByLabelText("메모 검색"), "장보기");
  expect(screen.getAllByRole("listitem")).toHaveLength(1);
  await user.selectOptions(screen.getByLabelText("태그 선택"), "work");
  expect(screen.getByRole("status").textContent).toContain(
    "검색 결과가 없습니다",
  );
  await user.clear(screen.getByLabelText("메모 검색"));
  await user.selectOptions(screen.getByLabelText("태그 선택"), "all");
  expect(screen.getAllByRole("listitem")).toHaveLength(12);
});

test("고정한 메모는 별도 목록으로 이동하고 해제된다", async () => {
  const user = userEvent.setup();
  render(<App />);
  await user.click(screen.getByLabelText("오늘의 기록 고정"));
  expect(
    within(screen.getByRole("region", { name: "고정된 메모" })).getAllByRole(
      "listitem",
    ),
  ).toHaveLength(1);
  expect(screen.queryByRole("dialog")).toBeNull();
  await user.click(screen.getByLabelText("오늘의 기록 고정 해제"));
  expect(screen.queryByRole("region", { name: "고정된 메모" })).toBeNull();
});

test("선택한 메모의 상세 창을 열고 닫는다", async () => {
  HTMLDialogElement.prototype.showModal = vi.fn(function () {
    this.setAttribute("open", "");
  });
  HTMLDialogElement.prototype.close = vi.fn(function () {
    this.removeAttribute("open");
  });
  const user = userEvent.setup();
  render(
    <StrictMode>
      <App />
    </StrictMode>,
  );
  const previousOverflow = document.body.style.overflow;
  await user.click(screen.getByLabelText("오늘의 기록 상세 보기"));
  expect(document.body.style.overflow).toBe("hidden");
  expect(
    within(screen.getByRole("dialog")).getByRole("heading").textContent,
  ).toBe("오늘의 기록");
  await user.click(screen.getByLabelText("닫기"));
  expect(screen.queryByRole("dialog")).toBeNull();
  expect(document.body.style.overflow).toBe(previousOverflow);
});

test("메모가 없는 안내는 검색 실패 안내와 구분한다", () => {
  render(<EmptyState isEmpty={true} />);
  expect(screen.getByRole("status").textContent).toContain(
    "새로운 메모를 작성해보세요!",
  );
  expect(screen.queryByText("검색 결과가 없습니다")).toBeNull();
});

test("수정 저장은 목록에도 반영되고 취소는 원래 내용을 유지한다", async () => {
  HTMLDialogElement.prototype.showModal = vi.fn(function () {
    this.setAttribute("open", "");
  });
  HTMLDialogElement.prototype.close = vi.fn(function () {
    this.removeAttribute("open");
  });
  const user = userEvent.setup();
  render(<App />);
  await user.click(screen.getByLabelText("오늘의 기록 상세 보기"));
  await user.click(screen.getByLabelText("메모 수정"));
  await user.clear(screen.getByLabelText("제목"));
  expect(screen.getByRole("button", { name: "저장" }).disabled).toBe(true);
  await user.type(screen.getByLabelText("제목"), "수정한 기록");
  await user.clear(screen.getByLabelText("내용"));
  await user.type(screen.getByLabelText("내용"), "수정한 내용입니다");
  await user.click(screen.getByRole("button", { name: "저장" }));
  expect(
    within(screen.getByRole("dialog")).getByText("수정한 내용입니다"),
  ).toBeTruthy();
  await user.click(screen.getByLabelText("메모 수정"));
  await user.type(screen.getByLabelText("제목"), " 취소할 변경");
  await user.click(screen.getByRole("button", { name: "취소" }));
  expect(
    within(screen.getByRole("dialog")).getByRole("heading").textContent,
  ).toBe("수정한 기록");
  await user.click(screen.getByLabelText("닫기"));
  expect(screen.getByLabelText("수정한 기록 상세 보기")).toBeTruthy();
});
