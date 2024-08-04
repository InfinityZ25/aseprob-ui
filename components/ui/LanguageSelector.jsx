import { useTranslation } from 'react-i18next';

export function LanguageSelector() {
  const { i18n } = useTranslation();

  const handleLanguageChange = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <select
      onChange={handleLanguageChange}
      defaultValue={i18n.language}
      className="p-2 rounded-md border bg-background text-foreground"
    >
      <option value="en">English</option>
      <option value="es">Español</option>
    </select>
  );
}
