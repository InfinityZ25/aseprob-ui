import Link from "next/link";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";
import { FaSignOutAlt, FaUser } from "react-icons/fa";
import { Button } from "./button";

const MobileNav = ({ isOpen, handleLogout, closeNav }) => {
  const { t } = useTranslation();
  const router = useRouter();

  return (
    <div
      className={`md:hidden bg-background dark:bg-background-dark text-foreground dark:text-foreground-dark backdrop-blur-md shadow-md dark:shadow-lg transition-all duration-300 ease-in-out ${
        isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
      }`}
    >
      <nav className="flex flex-col space-y-4 p-4">
        <Link
          href="/dashboard"
          onClick={() => {
            closeNav(); // Close nav after navigating
          }}
          className={`${
            router.pathname === "/dashboard"
              ? "text-primary bg-highlight dark:bg-highlight-dark font-bold border-l-4 border-primary pl-2"
              : ""
          }`}
        >
          {t("dashboard")}
        </Link>
        <Link
          href="/orders"
          onClick={() => {
            closeNav(); // Close nav after navigating
          }}
          className={`${
            router.pathname === "/orders"
              ? "text-primary bg-highlight dark:bg-highlight-dark font-bold border-l-4 border-primary pl-2"
              : ""
          }`}
        >
          {t("orders")}
        </Link>
        <Link
          href="/products"
          onClick={() => {
            closeNav(); // Close nav after navigating
          }}
          className={`${
            router.pathname === "/products"
              ? "text-primary bg-highlight dark:bg-highlight-dark font-bold border-l-4 border-primary pl-2"
              : ""
          }`}
        >
          {t("products")}
        </Link>
        <Link
          href="/customers"
          onClick={() => {
            closeNav(); // Close nav after navigating
          }}
          className={`${
            router.pathname === "/customers"
              ? "text-primary bg-highlight dark:bg-highlight-dark font-bold border-l-4 border-primary pl-2"
              : ""
          }`}
        >
          {t("customers")}
        </Link>
        <div className="flex justify-end items-center space-x-2 mt-4">
          <Button
            variant="outline"
            onClick={handleLogout}
            className="p-2 border border-gray-300 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
            aria-label={t("logout")}
          >
            <FaSignOutAlt />
          </Button>
          <Button
            className="p-2 rounded-full bg-black text-white hover:bg-white hover:text-black dark:bg-white dark:text-black dark:hover:bg-black dark:hover:text-white"
            onClick={() => {
              router.push("/account");
              closeNav(); // Close nav after navigating to account
            }}
            aria-label={t("profile")}
          >
            <FaUser />
          </Button>
        </div>
      </nav>
    </div>
  );
};

export default MobileNav;
