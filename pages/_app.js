import '../styles/globals.css';
import { ThemeProvider } from 'next-themes';
import { I18nextProvider } from 'react-i18next';
import i18n from '../lib/i18n'; // Import your i18n configuration

function MyApp({ Component, pageProps }) {
  return (
    <I18nextProvider i18n={i18n}>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <Component {...pageProps} />
      </ThemeProvider>
    </I18nextProvider>
  );
}

export default MyApp;
