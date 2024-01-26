import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Register from "./pages/Register";
import Navbar from "./components/Navbar";
// for showing toast messages
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "./pages/Login";
import  AdminDashboard from "./pages/Admin/AdminDashboard"
import AdminRoutes from "./protected_routes/AdminRoutes";
import UserRoutes from "./protected_routes/UserRoutes";
import AdminEditProducts from "./pages/Admin/AdminEditProduct";
import ForgotPassword from "./pages/forgetpassword";


function App() {
  return (
    <Router>
      <Navbar />
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/cartpage" element={<cartpage/>} />
        {/* <Route path="/forgetpassword" element={<ForgotPassword/>} /> */}
        {/* <Route path="*" element={<h1>404</h1>} /> */}

        <Route element={<UserRoutes/>}>
          <Route path="/profile" element={<h1>test</h1>} />
        </Route>
        <Route element={<AdminRoutes/>}>
          <Route path="/admin/dashboard" element={<AdminDashboard/>} />
          <Route
            path="/admin/edit-product/:id" 
            element={<AdminEditProducts />}
          />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;