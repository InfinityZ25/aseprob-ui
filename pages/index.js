import LoginPage from './login';
import { ThemeToggle } from '../components/ui/ThemeToggle';
import { LanguageSelector } from '../components/ui/LanguageSelector';

export default function HomePage() {
  return (
    <div className="relative">
      <div className="absolute top-4 right-4 flex items-center space-x-4">
        <ThemeToggle />
        <LanguageSelector />
      </div>
      <LoginPage />
    </div>
  );
}
