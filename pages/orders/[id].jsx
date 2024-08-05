import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import OrderPage from "../../components/ui/ OrderPage";
import Spinner from "../../components/ui/Spinner";

// Function to fetch order data by ID
const getOrderById = (id) => {
  const sampleOrders = [
    { id: 1, date: "2023-04-15", total: 125.99, status: "processing" },
    { id: 2, date: "2023-04-14", total: 79.5, status: "shipped" },
    { id: 3, date: "2023-04-13", total: 249.99, status: "delivered" },
  ];
  return sampleOrders.find((order) => order.id === parseInt(id));
};

const OrderDetailPage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  const { t } = useTranslation();
  const { id } = router.query;

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
    return (
      <div className="flex justify-center items-center min-h-screen bg-background">
        <Spinner />
      </div>
    );
  }

  if (!isLoggedIn) return null;

  const order = id ? getOrderById(id) : null;

  return (
    <div className="min-h-screen bg-background">
      <main className="pt-16 px-4 sm:px-6 lg:px-8">
        <button
          type="button"
          className="mb-4 flex items-center gap-2 px-4 py-2 bg-primary text-background rounded hover:bg-primary-foreground hover:text-primary transition focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50"
          onClick={() => router.back()}
        >
          <span className="text-xl">←</span>
          {t("back")}
        </button>

        {order ? (
          <OrderPage order={order} />
        ) : (
          <div className="text-center text-muted">{t("orderNotFound")}</div>
        )}
      </main>
    </div>
  );
};

export default OrderDetailPage;
