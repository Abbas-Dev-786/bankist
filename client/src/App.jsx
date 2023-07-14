import { BrowserRouter, Route, Routes } from "react-router-dom";
import Auth from "./features/auth/Index";
import Main from "./features/main/Index";
import ProtectedRoutes from "./components/ProtectedRoutes";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProtectedRoutes children={<Main />} />} />
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
