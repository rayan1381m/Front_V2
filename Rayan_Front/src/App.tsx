//https://www.youtube.com/watch?v=Ul3y1LXxzdU
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Admin from "./pages/Admin";
import User from "./pages/User";
import AddAdminForm from "./pages/addAdminForm";
import AddGameForm from "./pages/AddGameForm";
import SearchGame from "./pages/SearchGame";
import UserEditProfile from "./pages/userEditProfile";
import ShowAllGames from "./pages/ShowListOfGames";
import UserInventory from "./pages/UserInventory";

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
        <Route path="/user/search-game" element={<SearchGame />} />
        <Route path="/user/edit-info" element={<UserEditProfile />} />
        <Route path="/admin/all-games-admin" element={<ShowAllGames />} />
        <Route path="/user/inventory" element={<UserInventory />} />
      </Routes>
    </>
  );
}

export default App;
