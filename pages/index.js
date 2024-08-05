import LoginPage from "./login";

export default function HomePage({ isLoggedIn }) {
  return (
    <div className="relative">
      {isLoggedIn && (
        <div className="absolute top-4 right-4 flex items-center space-x-4"></div>
      )}
      <LoginPage isLoggedIn={isLoggedIn} />
    </div>
  );
}
