import { Route, Routes } from "react-router-dom";
import LoginPage from "../pages/LoginPage";

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
    </Routes>
  );
}

export default AppRouter;
