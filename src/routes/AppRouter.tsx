import { Routes, Route } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import SignUpPage from "../pages/SignUpPage";
import MemoPage from "../pages/MemoPage";
import MemoCreatePage from "../pages/MemoCreatePage";
import MyPage from "../pages/MyPage";

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/memos" element={<MemoPage />} />
      <Route path="/mypage" element={<MyPage />} />
      <Route path="/memos/new" element={<MemoCreatePage />} />
    </Routes>
  );
}

export default AppRouter;
