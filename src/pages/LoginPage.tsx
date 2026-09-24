import { useState, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../components/common/Input";

function LoginPage() {
  const navigate = useNavigate();
  const [loginId, setLoginId] = useState("");
  const [password, setPassword] = useState("");

  const isFormComplete =
    loginId.trim().length > 0 && password.trim().length > 0;

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-blue-01">
      <form
        onSubmit={handleSubmit}
        className="flex w-full max-w-[544px] flex-col gap-4"
      >
        <Input
          type="text"
          value={loginId}
          onChange={(event) => setLoginId(event.target.value)}
          placeholder="아이디를 입력하세요"
          ariaLabel="아이디"
          autoComplete="username"
        />

        <Input
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          placeholder="비밀번호를 입력하세요"
          ariaLabel="비밀번호"
          autoComplete="current-password"
        />

        <button
          type="submit"
          disabled={!isFormComplete}
          className={`h-14 rounded-xl px-5 font-bold ${
            isFormComplete
              ? "cursor-pointer bg-blue-05 text-white"
              : "cursor-not-allowed bg-blue-03 text-gray-01"
          }`}
        >
          로그인
        </button>

        {/* 하단 메뉴 */}
        <div className="mt-3 flex items-center justify-center text-gray-03">
          <button
            type="button"
            onClick={() => navigate("/signup")}
            className="cursor-pointer px-4"
          >
            회원가입
          </button>

          <span>|</span>

          <button type="button" className="cursor-pointer px-4">
            아이디 찾기
          </button>

          <span>|</span>

          <button type="button" className="cursor-pointer px-4">
            비밀번호 찾기
          </button>
        </div>
      </form>
    </main>
  );
}

export default LoginPage;
