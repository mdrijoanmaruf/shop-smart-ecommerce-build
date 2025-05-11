
import { Navigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LogOut, User, ShoppingBag, Heart } from "lucide-react";

// Dashboard sections
const PersonalInfo = () => {
  const { user } = useAuth();
  
  return (
    <Card>
      <CardHeader>
        <CardTitle>Personal Information</CardTitle>
        <CardDescription>Your account details</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h3 className="text-sm font-medium text-gray-500">Full Name</h3>
            <p>{user?.name}</p>
          </div>
          <div>
            <h3 className="text-sm font-medium text-gray-500">Email</h3>
            <p>{user?.email}</p>
          </div>
        </div>
        <div>
          <Button variant="outline">Edit Profile</Button>
        </div>
      </CardContent>
    </Card>
  );
};

const OrderHistory = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Order History</CardTitle>
        <CardDescription>View your past orders</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="text-center py-8">
          <ShoppingBag className="mx-auto h-12 w-12 text-gray-400" />
          <h3 className="mt-2 text-sm font-medium text-gray-900">No orders yet</h3>
          <p className="mt-1 text-sm text-gray-500">Your order history will appear here</p>
        </div>
      </CardContent>
    </Card>
  );
};

const SavedItems = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Saved Items</CardTitle>
        <CardDescription>Items you've added to your wishlist</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="text-center py-8">
          <Heart className="mx-auto h-12 w-12 text-gray-400" />
          <h3 className="mt-2 text-sm font-medium text-gray-900">No saved items</h3>
          <p className="mt-1 text-sm text-gray-500">Items you save will appear here</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default function Dashboard() {
  const { user, logout } = useAuth();
  
  // Redirect if not logged in
  if (!user) {
    return <Navigate to="/login" />;
  }
  
  return (
    <div className="container mx-auto py-8 px-4">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold">My Account</h1>
          <p className="text-gray-500">Welcome, {user.name}</p>
        </div>
        
        <Button variant="outline" onClick={logout} className="mt-4 md:mt-0">
          <LogOut className="mr-2 h-4 w-4" />
          Logout
        </Button>
      </div>
      
      <Tabs defaultValue="personal" className="space-y-4">
        <TabsList>
          <TabsTrigger value="personal">
            <User className="mr-2 h-4 w-4" />
            Personal Info
          </TabsTrigger>
          <TabsTrigger value="orders">
            <ShoppingBag className="mr-2 h-4 w-4" />
            Orders
          </TabsTrigger>
          <TabsTrigger value="wishlist">
            <Heart className="mr-2 h-4 w-4" />
            Wishlist
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="personal" className="space-y-4">
          <PersonalInfo />
        </TabsContent>
        
        <TabsContent value="orders" className="space-y-4">
          <OrderHistory />
        </TabsContent>
        
        <TabsContent value="wishlist" className="space-y-4">
          <SavedItems />
        </TabsContent>
      </Tabs>
    </div>
  );
}
