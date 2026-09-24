import { useState, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { signUp } from "../api/auth";
import Input from "../components/common/Input";

function SignUpPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const isFormComplete =
    email.trim().length > 0 &&
    password.trim().length > 0 &&
    passwordConfirm.trim().length > 0 &&
    password === passwordConfirm;

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!isFormComplete || isSubmitting) {
      return;
    }

    try {
      setIsSubmitting(true);
      setErrorMessage("");

      const response = await signUp({
        email,
        password,
      });

      if (!response.success) {
        throw new Error(response.message);
      }

      navigate("/");
    } catch (error) {
      setErrorMessage(
        error instanceof Error ? error.message : "회원가입에 실패했습니다.",
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-blue-01">
      <form
        onSubmit={handleSubmit}
        className="flex w-full max-w-[544px] flex-col gap-4"
      >
        <Input
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="아이디를 입력하세요"
          ariaLabel="아이디"
          autoComplete="email"
        />

        <Input
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          placeholder="비밀번호를 입력하세요"
          ariaLabel="비밀번호"
          autoComplete="new-password"
        />

        <Input
          type="password"
          value={passwordConfirm}
          onChange={(event) => setPasswordConfirm(event.target.value)}
          placeholder="비밀번호를 다시 입력하세요"
          ariaLabel="비밀번호 확인"
          autoComplete="new-password"
        />

        {errorMessage && (
          <p role="alert" className="text-body-small text-alert-01">
            {errorMessage}
          </p>
        )}

        <button
          type="submit"
          disabled={!isFormComplete || isSubmitting}
          className={`h-14 rounded-xl px-5 font-bold ${
            isFormComplete
              ? "bg-blue-05 text-white"
              : "cursor-not-allowed bg-blue-03 text-gray-01"
          }`}
        >
          {isSubmitting ? "회원가입 중..." : "회원가입"}
        </button>
      </form>
    </main>
  );
}

export default SignUpPage;
