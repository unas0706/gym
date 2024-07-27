import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import User from "./pages/User";
import NotFound from "./pages/NotFound";
import "./style/App.css";
import "./style/responsive.css";
import LogIn from "./components/LogIn";
import { Bounce, ToastContainer } from "react-toastify";
import ChangePassword from "./components/ChangePassword";
import Admin from "./pages/Admin";
import AdminLogIn from "./components/AdminLogIn";
import AdminUser from "./components/AdminUser";
import AddUser from "./components/AddUser";
import AddMonth from "./components/AddMonth";
import EditUser from "./components/EditUser";
import Request from "./components/Request";
import AdminPwdChange from "./components/AdminPwdChange";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/singleUser" element={<User />} />
          <Route path="/changePassword" element={<ChangePassword />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/admin/changePassword" element={<AdminPwdChange />} />
          <Route path="/AdminLogIn" element={<AdminLogIn />} />
          <Route path="/admin/:id" element={<AdminUser />} />
          <Route path="/admin/addUser" element={<AddUser />} />
          <Route path="/admin/addMonth/:id" element={<AddMonth />} />
          <Route path="/admin/editUser/:id" element={<EditUser />} />
          <Route path="/admin/request" element={<Request />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
