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
  const [isLoaded, setIsLoaded] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      setIsLoggedIn(true);
    } else {
      router.push("/login");
    }
    setIsLoading(false);

    setIsLoaded(true);
  }, [router]);

  const handleLogout = () => {
    setIsLoading(true);
    setTimeout(() => {
      localStorage.removeItem("user");
      setIsLoggedIn(false);
      router.push("/");
    }, 1000);
  };

  if (isLoading) {
    return <Spinner />;
  }

  if (!isLoggedIn) return null;

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 left-0 right-0 bg-background/90 backdrop-blur-md shadow-sm z-50">
        <div className="container mx-auto flex items-center justify-between px-4 py-4">
          <div className="flex items-center">
            <MountainIcon className="h-8 w-8 mr-2 text-primary" />
            <span className="text-xl font-bold text-foreground">Acme Inc</span>
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
              className="hidden md:inline-flex"
              onClick={handleLogout}
            >
              Logout
            </Button>
            <ThemeToggle />
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
      <main className="pt-20">
        <DashboardContent />
      </main>
    </div>
  );
};

const NavLink = ({ href, children }) => (
  <a
    href={href}
    className="text-lg font-medium text-foreground hover:text-primary transition-colors"
  >
    {children}
  </a>
);

const MobileNav = ({ isOpen, handleLogout }) => (
  <div
    className={`md:hidden bg-background/90 backdrop-blur-md shadow-sm transition-all duration-300 ease-in-out ${
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
