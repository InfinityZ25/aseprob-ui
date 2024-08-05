import React from "react";
import { useTranslation } from "react-i18next";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

const getStatusColor = (status) => {
  // ... existing getStatusColor function ...
};

const OrderPage = ({ orderId }) => {
  const { t } = useTranslation();

  // Mock function to fetch order details
  const getOrderDetails = (id) => {
    // In a real application, this would fetch data from an API
    return {
      id: id,
      date: "2023-04-15",
      total: 125.99,
      status: "processing",
      items: [
        { name: "Product 1", quantity: 2, price: 49.99 },
        { name: "Product 2", quantity: 1, price: 26.01 },
      ],
      shippingAddress: "123 Main St, Anytown, AN 12345",
    };
  };

  const order = getOrderDetails(orderId);

  return (
    <main className="container mx-auto px-4 py-20">
      <h1 className="text-3xl font-bold mb-8">{t("orderDetails")}</h1>
      <Card>
        <CardHeader>
          <CardTitle>{t("orderNumber", { id: order.id })}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
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
                {t(order.status)}
              </span>
            </p>
            <div>
              <h2 className="text-xl font-semibold mb-2">{t("items")}</h2>
              <ul className="space-y-2">
                {order.items.map((item, index) => (
                  <li key={index} className="flex justify-between">
                    <span>{item.name} (x{item.quantity})</span>
                    <span>${(item.price * item.quantity).toFixed(2)}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-2">{t("shippingAddress")}</h2>
              <p>{order.shippingAddress}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </main>
  );
};

export default OrderPage;
