import { ExclamationCircleIcon, XCircleIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Alert, AlertDescription } from "../components/ui/alert";
import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { LanguageSelector } from "../components/ui/LanguageSelector";
import Spinner from "../components/ui/Spinner";
import { ThemeToggle } from "../components/ui/ThemeToggle";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const { t } = useTranslation();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => {
        setError("");
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [error]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError(t("invalidEmail"));
      return;
    }

    if (email.endsWith("@mail.com")) {
      setError(t("mailComNotAllowed"));
      return;
    }

    setIsLoading(true);

    setTimeout(() => {
      localStorage.setItem("user", JSON.stringify({ email }));
      router.push("/dashboard");
    }, 1000);
  };

  if (isLoading) {
    return <Spinner />;
  }

  const currentYear = new Date().getFullYear();

  return (
    <div
      className={`flex flex-col items-center justify-center min-h-screen bg-background transition-opacity transform duration-1000 ${
        isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="absolute top-4 right-4 flex space-x-4">
        <ThemeToggle />
        <LanguageSelector />
      </div>
      <div className="flex items-center justify-center w-full h-full">
        <Card className="w-[350px] mx-auto">
          <CardHeader>
            <h2 className="text-2xl font-bold text-center">
              {t("welcomeBack")}
            </h2>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">{t("email")}</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder={t("email")}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">{t("password")}</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder={t("password")}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              {error && (
                <Alert
                  variant="destructive"
                  className="flex items-center bg-red-50 text-red-800 border border-red-200 p-3 rounded-lg relative transition-opacity duration-300 ease-in-out shadow-md"
                  style={{ width: "100%" }} // Ensure the alert takes the full width available
                >
                  <ExclamationCircleIcon className="h-5 w-5 text-red-600 mr-2" />
                  <AlertDescription className="text-sm font-semibold flex-grow leading-relaxed">
                    {error}
                  </AlertDescription>
                  <button
                    onClick={() => setError("")}
                    className="ml-2"
                    aria-label={t("dismissAlert")}
                  >
                    <XCircleIcon className="h-5 w-5 text-red-600" />
                  </button>
                </Alert>
              )}

              <Button type="submit" className="w-full custom-login-button">
                {t("login")}
              </Button>
            </form>
          </CardContent>
          <CardFooter className="flex justify-between items-center"></CardFooter>
        </Card>
      </div>
      <footer className="mt-8 text-center text-sm text-muted-foreground">
        <span>{`\u00A9 ${currentYear} ${t("companyName")}. ${t(
          "allRightsReserved"
        )}`}</span>
        <div className="mt-2 space-x-4">
          <a href="/privacy-policy" className="hover:underline">
            {t("privacyPolicy")}
          </a>
          <a href="/tos" className="hover:underline">
            {t("termsOfService")}
          </a>
        </div>
      </footer>
    </div>
  );
}
