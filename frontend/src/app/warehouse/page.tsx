
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Truck, Package, ZoomIn, ZoomOut, RotateCw, BarChart3 } from "lucide-react";
import Link from "next/link";

const Warehouse = () => {
  const productDetails = {
    item: "Electronics Box #1247",
    shelf: "A-12-3",
    units: 45
  };

  const shelfMetrics = {
    shelf: "Shelf B",
    capacity: 200,
    filled: 150,
    percentage: 75
  };

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
            <Link href="/dashboard" className="text-gray-600 hover:text-blue-500 transition-colors">Dashboard</Link>
            <Link href="/warehouse" className="text-blue-500 font-medium">Warehouse</Link>
            <Link href="/routes" className="text-gray-600 hover:text-blue-500 transition-colors">Routes</Link>
            <Link href="/products" className="text-gray-600 hover:text-blue-500 transition-colors">Products</Link>
          </nav>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Page Title */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">🏗️ Visualize Your Warehouse in 3D</h1>
          <p className="text-gray-600">Navigate through aisles, monitor shelf utilization, and track product locations with an immersive warehouse view.</p>
          <p className="text-blue-600 font-medium mt-2">Enhance efficiency by seeing logistics in action.</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* 3D Warehouse View */}
          <div className="lg:col-span-2">
            <Card className="h-[600px] relative">
              <CardContent className="p-0 h-full">
                {/* 3D Placeholder - In a real app, this would be react-three-fiber */}
                <div className="w-full h-full bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg flex items-center justify-center relative">
                  <div className="text-center">
                    <Package className="w-20 h-20 text-blue-400 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-gray-700 mb-2">3D Warehouse View</h3>
                    <p className="text-gray-500">Interactive 3D visualization would be rendered here</p>
                    <p className="text-sm text-gray-400 mt-2">Using react-three-fiber for immersive experience</p>
                  </div>
                  
                  {/* Control Buttons - Top Right */}
                  <div className="absolute top-4 right-4 flex flex-col gap-2">
                    <Button size="sm" variant="outline" className="rounded-full w-10 h-10 p-0">
                      <ZoomIn className="w-4 h-4" />
                    </Button>
                    <Button size="sm" variant="outline" className="rounded-full w-10 h-10 p-0">
                      <ZoomOut className="w-4 h-4" />
                    </Button>
                    <Button size="sm" variant="outline" className="rounded-full w-10 h-10 p-0">
                      <RotateCw className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Side Cards */}
          <div className="lg:col-span-1 space-y-6">
            {/* Product Details */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Package className="w-5 h-5 text-blue-600" />
                  Product Details
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-sm text-gray-600">Item</p>
                  <p className="font-semibold text-gray-900">{productDetails.item}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Shelf</p>
                  <Badge variant="outline" className="mt-1">{productDetails.shelf}</Badge>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Units</p>
                  <p className="text-2xl font-bold text-blue-600">{productDetails.units}</p>
                </div>
              </CardContent>
            </Card>

            {/* Shelf Metrics */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="w-5 h-5 text-blue-600" />
                  Shelf Metrics
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Current Shelf</p>
                  <p className="font-semibold text-gray-900">{shelfMetrics.shelf}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-2">Capacity</p>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm text-gray-900">{shelfMetrics.filled}/{shelfMetrics.capacity}</span>
                    <span className="text-sm font-medium text-blue-600">{shelfMetrics.percentage}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-blue-500 h-2 rounded-full transition-all duration-300" 
                      style={{ width: `${shelfMetrics.percentage}%` }}
                    ></div>
                  </div>
                </div>
                <Badge className={`w-full justify-center ${shelfMetrics.percentage > 80 ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>
                  {shelfMetrics.percentage > 80 ? 'Near Capacity' : 'Good Capacity'}
                </Badge>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full" variant="outline">
                  Generate Layout Report
                </Button>
                <Button className="w-full" variant="outline">
                  Optimize Shelf Placement
                </Button>
                <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white">
                  Export 3D Model
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Warehouse;
