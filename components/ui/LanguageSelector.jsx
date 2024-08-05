import { Globe } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from './button';

export function LanguageSelector() {
  const { i18n } = useTranslation();
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isFlipping, setIsFlipping] = useState(false);
  const [isPressed, setIsPressed] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const toggleLanguage = () => {
    setIsFlipping(true);
    setIsPressed(true);
    setTimeout(() => {
      const newLang = i18n.language === 'en' ? 'es' : 'en';
      i18n.changeLanguage(newLang);
      setIsFlipping(false);
      setIsPressed(false);
    }, 250); // Half of the animation duration
  };

  const isEnglish = i18n.language === 'en';

  return (
    <Button
      onClick={toggleLanguage}
      className={`relative overflow-hidden text-sm p-2 rounded-full flex items-center gap-1 transition-colors duration-300 ease-in-out ${
        theme === 'light'
          ? 'text-gray-800 hover:bg-gray-200'
          : 'text-gray-200 hover:bg-gray-700'
      } ${
        isPressed ? 'scale-95 opacity-80' : ''
      }`}
      style={{ transform: `scale(${isPressed ? 0.95 : 1.0})` }}
    >
      <Globe size={16} className="transition-transform group-hover:scale-110" />
      <div className="relative w-5 h-5">
        <span
          className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ${
            isFlipping ? 'animate-flip-out' : ''
          }`}
        >
          {isEnglish ? 'EN' : 'ES'}
        </span>
        <span
          className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ${
            isFlipping ? 'animate-flip-in' : 'opacity-0 transform rotate-x-90'
          }`}
        >
          {isEnglish ? 'ES' : 'EN'}
        </span>
      </div>
    </Button>
  );
}