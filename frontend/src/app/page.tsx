
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Truck, Package, MapPin, BarChart3, Clock, TrendingUp } from "lucide-react";
import Link from "next/link";

const Index = () => {
  const stats = [
    { label: "Current Deliveries", value: "1,245", status: "Active", icon: Truck },
    { label: "Avg. Delivery Time", value: "2.5", unit: "Days", icon: Clock },
    { label: "Total Shipments Processed", value: "15,678", icon: Package },
    { label: "Vehicle Capacity Utilization", value: "85%", icon: TrendingUp },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
              <Truck className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">OptiShip</span>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/dashboard" className="text-gray-600 hover:text-blue-500 transition-colors">Dashboard</Link>
            <Link href="/warehouse" className="text-gray-600 hover:text-blue-500 transition-colors">Warehouse</Link>
            <Link href="/routes" className="text-gray-600 hover:text-blue-500 transition-colors">Routes</Link>
            <Link href="/products" className="text-gray-600 hover:text-blue-500 transition-colors">Products</Link>
            <Link href="/analytics" className="text-gray-600 hover:text-blue-500 transition-colors">Analytics</Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center max-w-4xl mx-auto">
          <Badge className="mb-4 bg-blue-100 text-blue-700 hover:bg-blue-100">
            Smart Logistics Platform
          </Badge>
          
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Welcome to <span className="text-blue-500">OptiShip</span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Your Smart Logistics Companion
          </p>
          
          <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
            Seamlessly manage and optimize your entire delivery pipeline — from real-time warehouse 
            visualization to intelligent route planning — all in one intuitive dashboard.
          </p>

          {/* Feature List */}
          <div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto mb-12 text-left">
            {[
              { icon: Package, text: "Track warehouse capacity" },
              { icon: BarChart3, text: "Run smart delivery optimizations" },
              { icon: MapPin, text: "Visualize traffic-based routes" },
              { icon: TrendingUp, text: "Monitor logistics performance" },
              { icon: Truck, text: "Maximize fleet efficiency & reduce delays" },
            ].map((feature, index) => (
              <div key={index} className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <feature.icon className="w-4 h-4 text-blue-600" />
                </div>
                <span className="text-gray-700">{feature.text}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-16">
            <Button 
              asChild
              size="lg" 
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-full px-8 py-3 text-lg shadow-lg hover:shadow-xl transition-all"
            >
              <Link href="/dashboard">Start Optimizing</Link>
            </Button>
            <Button 
              asChild
              variant="outline" 
              size="lg"
              className="border-2 border-blue-500 text-blue-500 hover:bg-blue-50 rounded-full px-8 py-3 text-lg font-semibold transition-all"
            >
              <Link href="/dashboard">View Dashboard</Link>
            </Button>
          </div>

          <p className="text-gray-500 mb-8">
            Start optimizing today and streamline your operations like never before.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-4 pb-16">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Real-Time Logistics Overview</h2>
          <p className="text-gray-600">Monitor your operations at a glance</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow bg-white border-0 shadow-md">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <stat.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  {stat.status && (
                    <Badge className="bg-green-100 text-green-700 hover:bg-green-100">
                      {stat.status}
                    </Badge>
                  )}
                </div>
                
                <div className="space-y-1">
                  <div className="flex items-baseline space-x-1">
                    <span className="text-3xl font-bold text-gray-900">{stat.value}</span>
                    {stat.unit && (
                      <span className="text-sm text-gray-500">{stat.unit}</span>
                    )}
                  </div>
                  <p className="text-sm text-gray-600 font-medium">{stat.label}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-6 h-6 bg-blue-500 rounded flex items-center justify-center">
                <Truck className="w-4 h-4 text-white" />
              </div>
              <span className="font-semibold text-gray-900">OptiShip</span>
            </div>
            <p className="text-sm text-gray-500">
              © 2024 OptiShip. Optimizing logistics, one delivery at a time.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
