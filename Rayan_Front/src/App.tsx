//https://www.youtube.com/watch?v=Ul3y1LXxzdU
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Admin from "./pages/Admin";
import User from "./pages/User";

function App() {
  return (
    <>
      <nav></nav>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/user" element={<User />} />
      </Routes>
    </>
  );
}

export default App;
