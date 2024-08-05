// _app.js
import { ThemeProvider } from "next-themes";
import Head from "next/head";
import { I18nextProvider } from "react-i18next";
import i18n from "../lib/i18n";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"
        />
      </Head>
      <I18nextProvider i18n={i18n}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Component {...pageProps} />
        </ThemeProvider>
      </I18nextProvider>
    </>
  );
}

export default MyApp;