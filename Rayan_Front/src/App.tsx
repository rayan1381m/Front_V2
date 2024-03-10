//https://www.youtube.com/watch?v=Ul3y1LXxzdU
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Admin from "./pages/Admin";
import User from "./pages/User";
import AddAdminForm from "./pages/addAdminForm"; 
import AddGameForm from "./pages/AddGameForm"; 


function App() {
  return (
    <>
      <nav></nav>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/user" element={<User />} />
        <Route path="/admin/add-admin" element={<AddAdminForm />} />
        <Route path="/admin/add-game" element={<AddGameForm />} />
      </Routes>
    </>
  );
}

export default App;
