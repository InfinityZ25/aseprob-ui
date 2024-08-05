import Link from "next/link";
import React from "react";
import { useTranslation } from "react-i18next";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

const getStatusColor = (status) => {
  switch (status.toLowerCase()) {
    case "processing":
      return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200";
    case "shipped":
      return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200";
    case "delivered":
      return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200";
    default:
      return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200";
  }
};

const OrderCard = ({ order }) => {
  const { t } = useTranslation();

  return (
    <Card className="h-full transition-shadow hover:shadow-lg">
      <CardHeader>
        <CardTitle className="text-xl">
          {t("orderNumber", { id: order.id })}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-2 mb-4">
          <p className="flex justify-between">
            <span className="text-muted-foreground">{t("date")}:</span>
            <span className="font-medium">{order.date}</span>
          </p>
          <p className="flex justify-between">
            <span className="text-muted-foreground">{t("total")}:</span>
            <span className="font-medium">${order.total.toFixed(2)}</span>
          </p>
          <p className="flex justify-between items-center">
            <span className="text-muted-foreground">{t("status")}:</span>
            <span
              className={`px-2 py-1 rounded-full text-sm font-medium ${getStatusColor(
                order.status
              )}`}
            >
              {order.status}
            </span>
          </p>
        </div>
        <div className="flex flex-col items-center space-y-2">
          <Link href={`/orders/${order.id}`} passHref>
            <button className="primary-button" aria-label={t("viewDetails")}>
              {t("viewDetails")}
            </button>
          </Link>
          <button className="secondary-button" aria-label={t("updateStatus")}>
            {t("updateStatus")}
          </button>
          <button className="destructive-button" aria-label={t("cancelOrder")}>
            {t("cancelOrder")}
          </button>
        </div>
      </CardContent>
    </Card>
  );
};

const OrdersContent = () => {
  const { t } = useTranslation();

  const sampleOrders = [
    { id: 1, date: "2023-04-15", total: 125.99, status: "processing" },
    { id: 2, date: "2023-04-14", total: 79.5, status: "shipped" },
    { id: 3, date: "2023-04-13", total: 249.99, status: "delivered" },
  ];

  return (
    <main className="container mx-auto px-4 py-20">
      <h1 className="text-3xl font-bold mb-8">{t("orders")}</h1>
      <Card>
        <CardHeader>
          <CardTitle>{t("orderManagement")}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground mb-4">
            {t("orderManagementDescription")}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {sampleOrders.map((order) => (
              <OrderCard key={order.id} order={order} />
            ))}
          </div>
        </CardContent>
      </Card>
    </main>
  );
};

export default OrdersContent;
