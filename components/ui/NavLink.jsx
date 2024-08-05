import { useRouter } from "next/router";
import { cn } from "../../lib/utils";

const NavLink = ({ href, children }) => {
  const router = useRouter();
  const isActive = router.pathname === href;

  return (
    <a
      href={href}
      className={cn(
        "text-base font-medium px-3 py-2 transition-all duration-200 ease-in-out rounded-md",
        isActive
          ? "text-primary dark:text-primary-dark border-b-2 border-primary dark:border-primary-dark bg-transparent dark:bg-transparent"
          : "text-foreground hover:text-primary dark:hover:text-primary-dark"
      )}
    >
      {children}
    </a>
  );
};

export default NavLink;
