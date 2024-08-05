// _app.js
import { ThemeProvider } from "next-themes";
import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";
import { I18nextProvider } from "react-i18next";
import Navbar from "../components/ui/Navbar"; // Import the Navbar component
import i18n from "../lib/i18n";
import "../styles/globals.css";
import Link from "next/link";

function MyApp({ Component, pageProps }) {
  const [isLoading, setIsLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const router = useRouter();
  const noNavbarRoutes = ["/login", "/"]; // Add routes where you don't want the Navbar

  const handleLogout = () => {
    setIsLoading(true);
    setTimeout(() => {
      localStorage.removeItem("user");
      setIsLoggedIn(false);
      router.push("/");
    }, 500);
  };

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
          {!noNavbarRoutes.includes(router.pathname) && isLoggedIn && (
            <Navbar handleLogout={handleLogout} />
          )}{" "}
          {/* Conditionally render Navbar */}
          <Component {...pageProps} isLoggedIn={isLoggedIn} />
        </ThemeProvider>
      </I18nextProvider>
    </>
  );
}

export default MyApp;