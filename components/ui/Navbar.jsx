import { useRouter } from "next/router";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { FaUser } from "react-icons/fa";
import { Button } from "./button";
import { LanguageSelector } from "./LanguageSelector";
import MenuIcon from "./menu-icon";
import MobileNav from "./MobileNav";
import MountainIcon from "./mountain-icon";
import NavLink from "./NavLink";
import { ThemeToggle } from "./ThemeToggle";

const Navbar = ({ handleLogout }) => {
  const { t } = useTranslation();
  const router = useRouter();
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const handleButtonClick = () => {
    setIsClicked(true);
    handleLogout();
    setTimeout(() => setIsClicked(false), 300);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-background dark:bg-background-dark text-foreground dark:text-foreground-dark backdrop-blur-md z-50 shadow-md dark:shadow-lg">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <div className="flex items-center space-x-2">
          <MountainIcon className="h-6 w-6 text-primary dark:text-primary-dark" />
          <span className="text-lg font-bold">{t("companyName")}</span>
        </div>
        <nav className="hidden md:flex space-x-8">
          <NavLink href="/dashboard">{t("dashboard")}</NavLink>
          <NavLink href="/orders">{t("orders")}</NavLink>
          <NavLink href="/products">{t("products")}</NavLink>
          <NavLink href="/customers">{t("customers")}</NavLink>
        </nav>
        <div className="flex items-center space-x-4">
          <button
            className="hidden md:block p-2 rounded-full bg-black text-white hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200"
            onClick={() => router.push("/account")}
          >
            <FaUser />
          </button>
          <Button
            variant="outline"
            className={`hidden md:inline-flex relative overflow-hidden group ${
              isClicked ? "bg-gray-200" : ""
            } hover:bg-gray-100 dark:hover:bg-gray-700`}
            onClick={handleButtonClick}
          >
            <span className="relative z-10">{t("logout")}</span>
          </Button>
          <ThemeToggle />
          <LanguageSelector />
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
