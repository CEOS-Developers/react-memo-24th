import { useState, type FormEvent } from "react";
import Input from "../components/common/Input";

function SignUpPage() {
  const [loginId, setLoginId] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const isFormComplete =
    loginId.trim().length > 0 &&
    password.trim().length > 0 &&
    passwordConfirm.trim().length > 0;

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
          value={loginId}
          onChange={(event) => setLoginId(event.target.value)}
          placeholder="아이디를 입력하세요"
          autoComplete="username"
        />

        <Input
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          placeholder="비밀번호를 입력하세요"
          autoComplete="new-password"
        />

        <Input
          type="password"
          value={passwordConfirm}
          onChange={(event) => setPasswordConfirm(event.target.value)}
          placeholder="비밀번호를 다시 입력하세요"
          autoComplete="new-password"
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
          회원가입
        </button>
      </form>
    </main>
  );
}

export default SignUpPage;
