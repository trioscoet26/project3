
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Truck, Package, Upload, Plus, Edit, Trash2 } from "lucide-react";
import Link from "next/link";

const Products = () => {
  const products = [
    {
      id: "P001",
      name: "Electronics Bundle",
      weight: "2.5 kg",
      quantity: 45,
      priority: "High",
      destination: "New York",
      priorityColor: "red"
    },
    {
      id: "P002", 
      name: "Clothing Package",
      weight: "1.2 kg",
      quantity: 120,
      priority: "Medium",
      destination: "Los Angeles", 
      priorityColor: "yellow"
    },
    {
      id: "P003",
      name: "Book Collection",
      weight: "3.8 kg", 
      quantity: 78,
      priority: "Low",
      destination: "Chicago",
      priorityColor: "green"
    },
    {
      id: "P004",
      name: "Perishable Items",
      weight: "5.2 kg",
      quantity: 25,
      priority: "Urgent",
      destination: "Miami",
      priorityColor: "purple"
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
            <Link href="/routes" className="text-gray-600 hover:text-blue-500 transition-colors">Routes</Link>
            <Link href="/products" className="text-blue-500 font-medium">Products</Link>
          </nav>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Page Title */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">📦 Manage Your Products Seamlessly</h1>
          <p className="text-gray-600">Add, edit, or import product lists and monitor inventory status across locations.</p>
          <p className="text-blue-600 font-medium mt-2">Keep your supply chain stocked and synced.</p>
        </div>

        {/* Top Action Section */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <Card className="flex-1">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Upload className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Upload via CSV</h3>
                    <p className="text-sm text-gray-600">Import multiple products at once</p>
                  </div>
                </div>
                <Button variant="outline" className="border-blue-500 text-blue-500 hover:bg-blue-50">
                  Import CSV
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="flex-1">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                    <Plus className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Manual Entry</h3>
                    <p className="text-sm text-gray-600">Add products one by one</p>
                  </div>
                </div>
                <Button className="bg-blue-500 hover:bg-blue-600 text-white">
                  Add Product
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Products Table */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Package className="w-5 h-5 text-blue-600" />
              Product Inventory
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Product ID</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Weight</TableHead>
                  <TableHead>Quantity</TableHead>
                  <TableHead>Priority</TableHead>
                  <TableHead>Destination</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {products.map((product) => (
                  <TableRow key={product.id}>
                    <TableCell className="font-medium">{product.id}</TableCell>
                    <TableCell>{product.name}</TableCell>
                    <TableCell>{product.weight}</TableCell>
                    <TableCell>{product.quantity}</TableCell>
                    <TableCell>
                      <Badge 
                        className={`${
                          product.priorityColor === 'red' ? 'bg-red-100 text-red-700' :
                          product.priorityColor === 'yellow' ? 'bg-yellow-100 text-yellow-700' :
                          product.priorityColor === 'green' ? 'bg-green-100 text-green-700' :
                          'bg-purple-100 text-purple-700'
                        }`}
                      >
                        {product.priority}
                      </Badge>
                    </TableCell>
                    <TableCell>{product.destination}</TableCell>
                    <TableCell>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline" className="h-8 w-8 p-0">
                          <Edit className="w-3 h-3" />
                        </Button>
                        <Button size="sm" variant="outline" className="h-8 w-8 p-0 text-red-600 hover:text-red-700">
                          <Trash2 className="w-3 h-3" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Products;
