import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Button } from "../components/ui/button";
import DashboardContent from "../components/ui/DashboardContent";
import MenuIcon from "../components/ui/menu-icon";
import MountainIcon from "../components/ui/mountain-icon";
import Spinner from "../components/ui/Spinner";
import { ThemeToggle } from "../components/ui/ThemeToggle";

const Dashboard = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false); // Add this state for animation
  const router = useRouter();

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      setIsLoggedIn(true);
    } else {
      router.push("/login");
    }
    setIsLoading(false);

    setIsLoaded(true); // Trigger the animation once the component is ready
  }, [router]);

  const handleLogout = () => {
    setIsLoading(true); // Start the loading animation
    setTimeout(() => {
      localStorage.removeItem("user");
      setIsLoggedIn(false);
      router.push("/");
    }, 1000); // Adjust the delay as needed
  };

  if (isLoading) {
    return <Spinner />;
  }

  if (!isLoggedIn) return null;

  return (
    <div
      className={`min-h-screen bg-background transition-opacity transform duration-1000 ${
        isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <header className="fixed w-full bg-background bg-opacity-20 backdrop-blur-lg shadow-md z-20">
        <div className="container mx-auto flex items-center justify-between px-4 py-4">
          <div className="flex items-center">
            <MountainIcon className="h-8 w-8 mr-2" />
            <span className="text-xl font-bold">Acme Inc</span>
          </div>
          <nav className="hidden md:flex space-x-8">
            <NavLink href="#">Dashboard</NavLink>
            <NavLink href="#">Orders</NavLink>
            <NavLink href="#">Products</NavLink>
            <NavLink href="#">Customers</NavLink>
          </nav>
          <div className="flex items-center space-x-4">
            <Button
              variant="outline"
              className="hidden md:block"
              onClick={handleLogout}
            >
              Logout
            </Button>
            <ThemeToggle />
            <button
              className="md:hidden p-2 rounded-md focus:outline-none"
              onClick={() => setIsNavOpen(!isNavOpen)}
            >
              <MenuIcon isOpen={isNavOpen} />
            </button>
          </div>
        </div>

        <MobileNav isOpen={isNavOpen} handleLogout={handleLogout} />
      </header>
      <DashboardContent />
    </div>
  );
};

const NavLink = ({ href, children }) => (
  <a
    href={href}
    className="text-lg font-medium hover:text-primary transition-colors"
  >
    {children}
  </a>
);

const MobileNav = ({ isOpen, handleLogout }) => (
  <div
    className={`md:hidden bg-background bg-opacity-20 backdrop-blur-lg shadow-lg transition-all duration-300 ease-in-out ${
      isOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
    }`}
  >
    <nav className="flex flex-col space-y-4 p-4">
      <NavLink href="#">Dashboard</NavLink>
      <NavLink href="#">Orders</NavLink>
      <NavLink href="#">Products</NavLink>
      <NavLink href="#">Customers</NavLink>
      <Button variant="outline" onClick={handleLogout} className="w-full">
        Logout
      </Button>
    </nav>
  </div>
);

export default Dashboard;
