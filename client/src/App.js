import "./index.css";
// bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
// react router dom
import { Route, Routes } from "react-router-dom";
// pages | component
import IndexPage from "./pages/IndexPage";
import Layout from "./pages/Laout";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import { UserContextProvider } from "./context/UserContext";
import Account from "./pages/account/Account";

function App() {
  return (
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<IndexPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/account/:subpage?" element={<Account />} />
        </Route>
      </Routes>
    </UserContextProvider>
  );
}

export default App;
