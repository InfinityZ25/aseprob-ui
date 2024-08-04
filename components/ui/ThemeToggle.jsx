import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { Button } from './button';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Ensure the component is mounted before showing the theme toggle
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Render nothing on the server, ensuring client and server HTML match
    return null;
  }

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <Button
      onClick={toggleTheme}
      className={`transition-colors duration-300 ease-in-out text-xl p-2 rounded-full ${
        theme === 'light'
          ? 'text-gray-800 hover:bg-gray-200'
          : 'text-gray-200 hover:bg-gray-700'
      }`}
      style={{ transform: `scale(${theme === 'light' ? 1.0 : 1.1})` }}
    >
      {theme === 'light' ? '🌜' : '🌞'}
    </Button>
  );
}
