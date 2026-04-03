import "./Nav.css";
import { NavLink } from "react-router-dom";
import Adminnav from "./Adminnav";
import Usernav from "./Usernav";
function Navbar({ isAdmin, setIsAdmin }) {
  return (
    <>
      {isAdmin ? <Adminnav setIsAdmin={setIsAdmin} /> : <Usernav />}
    </>
  );
} export default Navbar