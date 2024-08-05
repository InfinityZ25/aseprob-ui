import LoginPage from "./login";

export default function HomePage() {
  return (
    <div className="relative">
      <div className="absolute top-4 right-4 flex items-center space-x-4"></div>
      <LoginPage />
    </div>
  );
}
