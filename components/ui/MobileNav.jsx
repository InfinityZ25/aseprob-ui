import { useTranslation } from "react-i18next";
import { FaUser } from "react-icons/fa";
import NavLink from "./NavLink";
import { Button } from "./button";

const MobileNav = ({ isOpen, handleLogout }) => {
  const { t } = useTranslation();

  return (
    <div
      className={`md:hidden bg-background dark:bg-background-dark text-foreground dark:text-foreground-dark backdrop-blur-md shadow-md dark:shadow-lg transition-all duration-300 ease-in-out ${
        isOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
      }`}
    >
      <nav className="flex flex-col space-y-4 p-4">
        <NavLink href="#">{t("dashboard")}</NavLink>
        <NavLink href="#">{t("orders")}</NavLink>
        <NavLink href="#">{t("products")}</NavLink>
        <NavLink href="#">{t("customers")}</NavLink>
        <div className="flex justify-between items-center mt-4">
          <Button
            variant="outline"
            onClick={handleLogout}
            className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            {t("logout")}
          </Button>
          <button className="ml-4 p-2 rounded-full bg-black text-white hover:bg-white hover:text-black dark:bg-white dark:text-black dark:hover:bg-black dark:hover:text-white">
            <FaUser />
          </button>
        </div>
      </nav>
    </div>
  );
};

export default MobileNav;
