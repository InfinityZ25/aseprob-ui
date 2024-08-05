import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { Button } from './button';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const toggleTheme = (e) => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    
    const x = e.clientX;
    const y = e.clientY;
    
    document.documentElement.style.setProperty('--theme-transition', '1');
    document.documentElement.style.setProperty('--ripple-x', `${x}px`);
    document.documentElement.style.setProperty('--ripple-y', `${y}px`);
    
    setTimeout(() => {
      document.documentElement.style.setProperty('--theme-transition', '0');
    }, 1000);
  };

  return (
    <Button
      onClick={toggleTheme}
      className="transition-colors duration-300 ease-in-out text-xl p-2 rounded-full"
    >
      {theme === 'light' ? '🌙' : '☀️'}
    </Button>
  );
}