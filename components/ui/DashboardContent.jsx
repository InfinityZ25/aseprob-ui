import React from "react";
import { useTranslation } from "react-i18next";
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

const mockChartData = [
  { name: "Jan", value: 400 },
  { name: "Feb", value: 300 },
  { name: "Mar", value: 600 },
  { name: "Apr", value: 800 },
  { name: "May", value: 500 },
  { name: "Jun", value: 700 },
];

const DashboardContent = () => {
  const { t } = useTranslation();

  return (
    <main className="container mx-auto px-4 py-20">
      <h1 className="text-3xl font-bold mb-8">{t("dashboardOverview")}</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <MetricCard
          t={t}
          title={t("totalUsers")}
          value="1,234"
          change="+5.2%"
        />
        <MetricCard
          t={t}
          title={t("totalRevenue")}
          value="$45,678"
          change="+8.1%"
        />
        <MetricCard
          t={t}
          title={t("activeSubscriptions")}
          value="789"
          change="+3.4%"
        />
        <MetricCard t={t} title={t("newSignups")} value="456" change="+7.9%" />
        <MetricCard
          t={t}
          title={t("bounceRate")}
          value="23%"
          change="-2.1%"
          isNegative
        />
        <MetricCard
          t={t}
          title={t("conversionRate")}
          value="5.6%"
          change="+1.2%"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>{t("revenueTrend")}</CardTitle>
          </CardHeader>
          <CardContent className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={mockChartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke="#8884d8"
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>{t("recentActivity")}</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>{t("newUserSignedUp")}</span>
                <span className="text-sm text-muted-foreground ml-auto">
                  2 {t("minutesAgo")}
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span>{t("productRestocked", { product: "XYZ" })}</span>
                <span className="text-sm text-muted-foreground ml-auto">
                  1 {t("hourAgo")}
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                <span>{t("newOrderPlaced", { orderId: "12345" })}</span>
                <span className="text-sm text-muted-foreground ml-auto">
                  3 {t("hoursAgo")}
                </span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </main>
  );
};

const MetricCard = ({ t, title, value, change, isNegative = false }) => {
  return (
    <Card>
      <CardContent className="pt-6">
        <div className="text-2xl font-bold">{value}</div>
        <p className="text-muted-foreground">{title}</p>
        <div
          className={`mt-2 text-sm font-medium ${
            isNegative ? "text-red-500" : "text-green-500"
          }`}
        >
          {change} {t("fromLastMonth")}
        </div>
      </CardContent>
    </Card>
  );
};

export default DashboardContent;
