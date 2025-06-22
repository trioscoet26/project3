
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Truck, MapPin, Clock, Navigation } from "lucide-react";
import Link from "next/link";

const Routes = () => {
  const routeOptions = [
    {
      id: "A",
      name: "Route A",
      traffic: "Light",
      distance: "12.5 km",
      eta: "25 min",
      trafficColor: "green"
    },
    {
      id: "B", 
      name: "Route B",
      traffic: "Moderate",
      distance: "14.2 km", 
      eta: "32 min",
      trafficColor: "yellow"
    },
    {
      id: "C",
      name: "Route C", 
      traffic: "Heavy",
      distance: "10.8 km",
      eta: "45 min",
      trafficColor: "red"
    }
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
            <Link href="/dashboard" className="text-gray-600 hover:text-blue-500 transition-colors">Dashboard</Link>
            <Link href="/warehouse" className="text-gray-600 hover:text-blue-500 transition-colors">Warehouse</Link>
            <Link href="/routes" className="text-blue-500 font-medium">Routes</Link>
            <Link href="/products" className="text-gray-600 hover:text-blue-500 transition-colors">Products</Link>
          </nav>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Page Title */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">🗺️ Optimize Routes. Deliver Smarter.</h1>
          <p className="text-gray-600">Choose the best delivery path based on vehicle capacity, destination, and live traffic to reduce cost and ETA.</p>
          <p className="text-blue-600 font-medium mt-2">Let data guide your delivery routes.</p>
        </div>

        <div className="grid lg:grid-cols-4 gap-6">
          {/* Left Sidebar */}
          <div className="lg:col-span-1">
            <Card className="bg-blue-50 border-blue-200">
              <CardHeader>
                <CardTitle className="text-blue-800">Route Parameters</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <Label htmlFor="destination" className="flex items-center gap-2 text-blue-700">
                    <MapPin className="w-4 h-4" />
                    Destination
                  </Label>
                  <Input 
                    id="destination" 
                    placeholder="Enter destination address"
                    className="mt-2 bg-white"
                  />
                </div>

                <div>
                  <Label htmlFor="capacity" className="flex items-center gap-2 text-blue-700">
                    <Truck className="w-4 h-4" />
                    Vehicle Capacity
                  </Label>
                  <Select>
                    <SelectTrigger className="mt-2 bg-white">
                      <SelectValue placeholder="Select capacity" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="small">Small (500kg)</SelectItem>
                      <SelectItem value="medium">Medium (1000kg)</SelectItem>
                      <SelectItem value="large">Large (2000kg)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="timeWindow" className="flex items-center gap-2 text-blue-700">
                    <Clock className="w-4 h-4" />
                    Time Window
                  </Label>
                  <Input 
                    id="timeWindow" 
                    type="time"
                    className="mt-2 bg-white"
                  />
                </div>

                <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3">
                  Calculate Route
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-6">
            {/* Map Placeholder */}
            <Card className="h-[400px]">
              <CardContent className="p-0 h-full">
                <div className="w-full h-full bg-gradient-to-br from-green-50 to-blue-50 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <Navigation className="w-16 h-16 text-blue-400 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-gray-700 mb-2">Interactive Map</h3>
                    <p className="text-gray-500">Mapbox or Leaflet visualization would be rendered here</p>
                    <p className="text-sm text-gray-400 mt-2">Showing optimized routes with real-time traffic</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Route Options */}
            <div className="grid md:grid-cols-3 gap-4">
              {routeOptions.map((route) => (
                <Card key={route.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center justify-between">
                      {route.name}
                      <Badge 
                        className={`${
                          route.trafficColor === 'green' ? 'bg-green-100 text-green-700' :
                          route.trafficColor === 'yellow' ? 'bg-yellow-100 text-yellow-700' :
                          'bg-red-100 text-red-700'
                        }`}
                      >
                        {route.traffic}
                      </Badge>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Distance</span>
                      <span className="font-medium">{route.distance}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">ETA</span>
                      <span className="font-medium text-blue-600">{route.eta}</span>
                    </div>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="w-full mt-3"
                    >
                      Select Route
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Routes;
