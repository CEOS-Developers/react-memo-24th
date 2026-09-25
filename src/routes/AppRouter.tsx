import { Route, Routes } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import MemoCreatePage from "../pages/MemoCreatePage";
import MemoPage from "../pages/MemoPage";
import MyPage from "../pages/MyPage";
import SignUpPage from "../pages/SignUpPage";

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/signup" element={<SignUpPage />} />

      <Route path="/memos" element={<MemoPage />} />
      <Route path="/memos/new" element={<MemoCreatePage />} />
      <Route path="/memos/mypage" element={<MyPage />} />
    </Routes>
  );
}

export default AppRouter;
