import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import AccountContent from "../components/ui/AccountContent";
import Spinner from "../components/ui/Spinner";
import Link from "next/link";

const Account = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      setIsLoggedIn(true);
    } else {
      router.push("/login");
    }
    setIsLoading(false);
  }, [router]);

  const handleLogout = () => {
    setIsLoading(true);
    setTimeout(() => {
      localStorage.removeItem("user");
      setIsLoggedIn(false);
      router.push("/");
    }, 1000);
  };

  if (isLoading) {
    return <Spinner />;
  }

  if (!isLoggedIn) return null;

  return (
    <div className="min-h-screen bg-background">
      <main className="pt-14">
        <AccountContent />
      </main>
    </div>
  );
};

export default Account;