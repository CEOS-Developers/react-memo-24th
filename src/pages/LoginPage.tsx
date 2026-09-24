import { useState, type FormEvent } from "react";

function LoginPage() {
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
        <input
          type="text"
          value={loginId}
          onChange={(event) => setLoginId(event.target.value)}
          placeholder="아이디를 입력하세요"
          aria-label="아이디"
          autoComplete="username"
          className="h-14 rounded-xl bg-white px-5 text-gray-05 placeholder:text-gray-02"
        />

        <input
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          placeholder="비밀번호를 입력하세요"
          aria-label="비밀번호"
          autoComplete="current-password"
          className="h-14 rounded-xl bg-white px-5 text-gray-05 placeholder:text-gray-02"
        />

        <button
          type="submit"
          disabled={!isFormComplete}
          className={`h-14 rounded-xl px-5 font-bold ${
            isFormComplete
              ? "bg-blue-05 text-white"
              : "cursor-not-allowed bg-blue-03 text-gray-01"
          }`}
        >
          로그인
        </button>

        {/* 로그인 하단 메뉴 */}
        <div className="mt-3 flex items-center justify-center text-gray-03">
          <button type="button" className="cursor-pointer px-4 text-gray-03">
            회원가입
          </button>

          <span className="text-gray-03">|</span>

          <button type="button" className="cursor-pointer px-4 text-gray-03">
            아이디 찾기
          </button>

          <span className="text-gray-03">|</span>

          <button type="button" className="cursor-pointer px-4 text-gray-03">
            비밀번호 찾기
          </button>
        </div>
      </form>
    </main>
  );
}

export default LoginPage;
