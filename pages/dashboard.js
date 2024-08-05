import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import DashboardContent from "../components/ui/DashboardContent";
import Navbar from "../components/ui/Navbar";
import Spinner from "../components/ui/Spinner";

const Dashboard = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      setIsLoggedIn(true);
    } else {
      router.push("/login");
    }
    setIsLoading(false);
    setIsLoaded(true);
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
      <Navbar handleLogout={handleLogout} />
      <main className="pt-14">
        <DashboardContent />
      </main>
    </div>
  );
};

export default Dashboard;