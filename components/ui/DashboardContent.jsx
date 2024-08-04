import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const mockChartData = [
  { name: 'Jan', value: 400 },
  { name: 'Feb', value: 300 },
  { name: 'Mar', value: 600 },
  { name: 'Apr', value: 800 },
  { name: 'May', value: 500 },
  { name: 'Jun', value: 700 },
];

const DashboardContent = () => {
  return (
    <main className="container mx-auto px-4 py-20">
      <h1 className="text-3xl font-bold mb-8">Dashboard Overview</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <MetricCard title="Total Users" value="1,234" change="+5.2%" />
        <MetricCard title="Total Revenue" value="$45,678" change="+8.1%" />
        <MetricCard title="Active Subscriptions" value="789" change="+3.4%" />
        <MetricCard title="New Signups" value="456" change="+7.9%" />
        <MetricCard title="Bounce Rate" value="23%" change="-2.1%" isNegative />
        <MetricCard title="Conversion Rate" value="5.6%" change="+1.2%" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Revenue Trend</CardTitle>
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
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>New user signed up</span>
                <span className="text-sm text-muted-foreground ml-auto">
                  2 min ago
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span>Product "XYZ" restocked</span>
                <span className="text-sm text-muted-foreground ml-auto">
                  1 hour ago
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                <span>New order placed #12345</span>
                <span className="text-sm text-muted-foreground ml-auto">
                  3 hours ago
                </span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </main>
  );
};

const MetricCard = ({ title, value, change, isNegative = false }) => {
  return (
    <Card>
      <CardContent className="pt-6">
        <div className="text-2xl font-bold">{value}</div>
        <p className="text-muted-foreground">{title}</p>
        <div
          className={`mt-2 text-sm font-medium ${
            isNegative ? 'text-red-500' : 'text-green-500'
          }`}
        >
          {change} from last month
        </div>
      </CardContent>
    </Card>
  );
};

export default DashboardContent;
