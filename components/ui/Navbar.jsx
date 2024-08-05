import { useState } from "react";
import { Button } from "./button";
import { LanguageSelector } from "./LanguageSelector"; // Import LanguageSelector
import MenuIcon from "./menu-icon";
import MobileNav from "./MobileNav";
import MountainIcon from "./mountain-icon";
import NavLink from "./NavLink";
import { ThemeToggle } from "./ThemeToggle";

const Navbar = ({ handleLogout }) => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isClicked, setIsClicked] = useState(false); // Add clicked state

  const handleButtonClick = () => {
    setIsClicked(true);
    handleLogout();
    setTimeout(() => setIsClicked(false), 300); // Reset clicked state after 300ms
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-background/90 backdrop-blur-md z-50 shadow-[0_2px_4px_rgba(0,0,0,0.1)] dark:shadow-[0_2px_4px_rgba(255,255,255,0.1)]">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <div className="flex items-center">
          <MountainIcon className="h-6 w-6 mr-2 text-primary" />
          <span className="text-lg font-bold text-foreground">Acme Inc</span>
        </div>
        <nav className="hidden md:flex space-x-6">
          <NavLink href="#">Dashboard</NavLink>
          <NavLink href="#">Orders</NavLink>
          <NavLink href="#">Products</NavLink>
          <NavLink href="#">Customers</NavLink>
        </nav>
        <div className="flex items-center space-x-4">
          <Button
            variant="outline"
            className={`hidden md:inline-flex relative overflow-hidden group ${
              isClicked ? "bg-clicked" : ""
            } hover:bg-hoverColor`} // Apply class when clicked and hover class
            onClick={handleButtonClick}
          >
            <span className="absolute inset-0 w-full h-full bg-accent transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out"></span>
            <span className="relative z-10 text-accent group-hover:text-background transition-colors duration-300 ease-in-out">
              Logout
            </span>
          </Button>
          <ThemeToggle />
          <LanguageSelector /> {/* Add LanguageSelector */}
          <button
            className="md:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            onClick={() => setIsNavOpen(!isNavOpen)}
          >
            <MenuIcon isOpen={isNavOpen} />
          </button>
        </div>
      </div>
      <MobileNav isOpen={isNavOpen} handleLogout={handleLogout} />
    </header>
  );
};

export default Navbar;
