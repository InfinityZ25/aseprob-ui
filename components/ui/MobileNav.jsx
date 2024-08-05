import { FaUser } from "react-icons/fa"; // Assuming you're using react-icons
import NavLink from "./NavLink";
import { Button } from "./button";

const MobileNav = ({ isOpen, handleLogout }) => (
  <div
    className={`md:hidden bg-background/90 backdrop-blur-md shadow-[0_2px_4px_rgba(0,0,0,0.1)] dark:shadow-[0_2px_4px_rgba(255,255,255,0.1)] transition-all duration-300 ease-in-out ${
      isOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
    }`}
  >
    <nav className="flex flex-col space-y-4 p-4">
      <NavLink href="#">Dashboard</NavLink>
      <NavLink href="#">Orders</NavLink>
      <NavLink href="#">Products</NavLink>
      <NavLink href="#">Customers</NavLink>
      <div className="flex justify-center items-center space-x-4 mt-4">
        <button className="p-2 rounded-full bg-black text-white hover:bg-white hover:text-black dark:bg-white dark:text-black dark:hover:bg-black dark:hover:text-white">
          <FaUser />
        </button>
        <Button
          variant="outline"
          onClick={handleLogout}
          className="hover:bg-gray-200 dark:hover:bg-gray-700"
        >
          Logout
        </Button>
      </div>
    </nav>
  </div>
);

export default MobileNav;
