const NavLink = ({ href, children }) => (
  <a
    href={href}
    className="text-base font-medium text-foreground hover:text-primary transition-colors"
  >
    {children}
  </a>
);

export default NavLink;
