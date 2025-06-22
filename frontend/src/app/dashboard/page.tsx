
"use client"; // ✅ IMPORTANT for Next.js
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Package, Clock, TrendingUp,  Truck } from "lucide-react";
import Link from "next/link";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, LineChart, Line, PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const Dashboard = () => {
  const topStats = [
    { label: "Total Shipments", value: "1,234", icon: Package },
    { label: "On-Time Delivery Rate", value: "95%", icon: Clock },
    { label: "Customer Satisfaction", value: "4.8/5", icon: TrendingUp },
  ];

  const shipmentsData = [
    { month: "Jan", shipments: 890 },
    { month: "Feb", shipments: 1200 },
    { month: "Mar", shipments: 980 },
    { month: "Apr", shipments: 1400 },
    { month: "May", shipments: 1234 },
  ];

  const categoryData = [
    { name: "Electronics", value: 35, color: "#3B82F6" },
    { name: "Clothing", value: 25, color: "#10B981" },
    { name: "Food", value: 20, color: "#F59E0B" },
    { name: "Books", value: 20, color: "#EF4444" },
  ];

  const delayData = [
    { region: "North", delays: 12 },
    { region: "South", delays: 8 },
    { region: "East", delays: 15 },
    { region: "West", delays: 6 },
  ];

  const quickInsights = [
    { label: "Daily Shipments", value: "156", trend: "+12%" },
    { label: "Delayed Shipments", value: "8", trend: "-3%" },
    { label: "Positive Feedback", value: "142", trend: "+5%" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                <Truck className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">OptiShip</span>
            </Link>
          </div>
     <nav className="hidden md:flex items-center space-x-6">
  <Link href="/dashboard" className="text-blue-500 font-medium">Dashboard</Link>
  <Link href="/warehouse" className="text-gray-600 hover:text-blue-500 transition-colors">Warehouse</Link>
  <Link href="/routes" className="text-gray-600 hover:text-blue-500 transition-colors">Routes</Link>
  <Link href="/products" className="text-gray-600 hover:text-blue-500 transition-colors">Products</Link>
</nav>
  </div>

      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Page Title */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">📊 Welcome to Your Logistics Command Center</h1>
          <p className="text-gray-600">Track key performance indicators, monitor shipment trends, and gain real-time insights to make smarter, data-driven decisions.</p>
          <p className="text-blue-600 font-medium mt-2">Stay ahead with metrics that matter.</p>
        </div>

        {/* Top Stats Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {topStats.map((stat, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">{stat.label}</p>
                    <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                  </div>
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <stat.icon className="w-6 h-6 text-blue-600" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Graphs Section */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {/* Line Chart */}
          <Card className="col-span-1">
            <CardHeader>
              <CardTitle>Shipments Over Time</CardTitle>
            </CardHeader>
            <CardContent>
              <ChartContainer config={{ shipments: { label: "Shipments", color: "#3B82F6" } }} className="h-[200px]">
                <LineChart data={shipmentsData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Line type="monotone" dataKey="shipments" stroke="#3B82F6" strokeWidth={2} />
                </LineChart>
              </ChartContainer>
            </CardContent>
          </Card>

          {/* Pie Chart */}
          <Card className="col-span-1">
            <CardHeader>
              <CardTitle>Shipment Categories</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[200px]">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={categoryData}
                      cx="50%"
                      cy="50%"
                      innerRadius={40}
                      outerRadius={80}
                      dataKey="value"
                    >
                      {categoryData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <ChartTooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          {/* Bar Chart */}
          <Card className="col-span-1">
            <CardHeader>
              <CardTitle>Delays by Region</CardTitle>
            </CardHeader>
            <CardContent>
              <ChartContainer config={{ delays: { label: "Delays", color: "#EF4444" } }} className="h-[200px]">
                <BarChart data={delayData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="region" />
                  <YAxis />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Bar dataKey="delays" fill="#EF4444" />
                </BarChart>
              </ChartContainer>
            </CardContent>
          </Card>
        </div>

        {/* Quick Insights */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Insights</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              {quickInsights.map((insight, index) => (
                <div key={index} className="text-center">
                  <p className="text-2xl font-bold text-gray-900 mb-1">{insight.value}</p>
                  <p className="text-sm text-gray-600 mb-2">{insight.label}</p>
                  <Badge className={`${insight.trend.startsWith('+') ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                    {insight.trend}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
