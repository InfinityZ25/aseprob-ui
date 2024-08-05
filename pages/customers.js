import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import CustomersContent from "../components/ui/CustomersContent";
import Spinner from "../components/ui/Spinner";

const Customers = () => {
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
        <CustomersContent />
      </main>
    </div>
  );
};

export default Customers;
