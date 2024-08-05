import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from './button';
import { Globe } from 'lucide-react';
import { useTheme } from 'next-themes';

export function LanguageSelector() {
  const { i18n } = useTranslation();
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'es' : 'en';
    i18n.changeLanguage(newLang);
  };

  const isEnglish = i18n.language === 'en';

  return (
    <Button
      onClick={toggleLanguage}
      className="transition-colors duration-300 ease-in-out text-sm p-2 rounded-full flex items-center gap-1 bg-primary text-primary-foreground hover:bg-primary/90"
      style={{ transform: `scale(${isEnglish ? 1.0 : 1.1})` }}
    >
      <Globe size={16} />
      {isEnglish ? 'EN' : 'ES'}
    </Button>
  );
}