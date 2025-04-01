
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MapPin, Calendar, Star, Settings, User, Wallet, Bookmark, Plane } from "lucide-react";

const ProfilePage = () => {
  const [user] = useState({
    name: "Alex Johnson",
    email: "alex@example.com",
    avatar: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=200&q=80",
    location: "New York, USA",
    bio: "Adventure enthusiast and food lover. Always planning my next trip!",
    joinDate: "January 2023",
    tripCount: 12,
    reviewCount: 28,
  });

  // Sample data for trips
  const upcomingTrips = [
    { id: 1, destination: "Tokyo, Japan", date: "June 15 - June 25, 2024", image: "https://images.unsplash.com/photo-1532236204992-f5e85c024202?auto=format&fit=crop&w=800&q=80" },
    { id: 2, destination: "Barcelona, Spain", date: "August 3 - August 10, 2024", image: "https://images.unsplash.com/photo-1583422409516-2895a77efded?auto=format&fit=crop&w=800&q=80" },
  ];

  const pastTrips = [
    { id: 3, destination: "Paris, France", date: "March 5 - March 12, 2024", image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=80" },
    { id: 4, destination: "Bali, Indonesia", date: "November 10 - November 22, 2023", image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80" },
    { id: 5, destination: "Rome, Italy", date: "July 8 - July 16, 2023", image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=800&q=80" },
  ];

  // Sample saved destinations
  const savedDestinations = [
    { id: 1, name: "Santorini, Greece", image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=800&q=80" },
    { id: 2, name: "Machu Picchu, Peru", image: "https://images.unsplash.com/photo-1587595431973-160d0d94add1?auto=format&fit=crop&w=800&q=80" },
    { id: 3, name: "Swiss Alps", image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=80" },
    { id: 4, name: "New Zealand", image: "https://images.unsplash.com/photo-1506741485568-47c278a17f40?auto=format&fit=crop&w=800&q=80" },
  ];

  // Sample expenses
  const expenses = [
    { id: 1, trip: "Tokyo Trip", amount: "$2,450", date: "June 2024", status: "Upcoming" },
    { id: 2, trip: "Barcelona Trip", amount: "$1,850", date: "August 2024", status: "Upcoming" },
    { id: 3, trip: "Paris Trip", amount: "$2,100", date: "March 2024", status: "Completed" },
    { id: 4, trip: "Bali Trip", amount: "$3,200", date: "November 2023", status: "Completed" },
  ];

  return (
    <>
      <div className="bg-image" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1488085061387-422e29b40080?auto=format&fit=crop&w=2000&q=80')" }}></div>
      <div className="overlay"></div>
      
      <div className="min-h-screen pt-24 pb-12">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Profile Sidebar */}
            <div className="lg:col-span-1">
              <Card className="bg-glass">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center justify-center mb-6">
                    <Avatar className="h-24 w-24 mb-4">
                      <AvatarImage src={user.avatar} alt={user.name} />
                      <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <h2 className="text-xl font-bold">{user.name}</h2>
                    <p className="text-sm text-gray-500 flex items-center mt-1">
                      <MapPin className="h-3 w-3 mr-1" /> {user.location}
                    </p>
                  </div>
                  
                  <div className="space-y-4">
                    <p className="text-sm">{user.bio}</p>
                    
                    <div className="text-sm text-gray-500">
                      <div className="flex items-center mb-2">
                        <Calendar className="h-4 w-4 mr-2" />
                        Joined {user.joinDate}
                      </div>
                      <div className="flex items-center mb-2">
                        <Plane className="h-4 w-4 mr-2" />
                        {user.tripCount} trips completed
                      </div>
                      <div className="flex items-center">
                        <Star className="h-4 w-4 mr-2" />
                        {user.reviewCount} reviews written
                      </div>
                    </div>
                    
                    <Button variant="outline" className="w-full" size="sm">
                      <Settings className="h-4 w-4 mr-2" /> Edit Profile
                    </Button>
                  </div>
                </CardContent>
              </Card>
              
              <div className="mt-6 space-y-2">
                <Button variant="ghost" className="w-full justify-start" size="sm">
                  <User className="h-4 w-4 mr-2" /> Profile
                </Button>
                <Button variant="ghost" className="w-full justify-start" size="sm">
                  <Plane className="h-4 w-4 mr-2" /> My Trips
                </Button>
                <Button variant="ghost" className="w-full justify-start" size="sm">
                  <Bookmark className="h-4 w-4 mr-2" /> Saved
                </Button>
                <Button variant="ghost" className="w-full justify-start" size="sm">
                  <Wallet className="h-4 w-4 mr-2" /> Expenses
                </Button>
                <Button variant="ghost" className="w-full justify-start" size="sm">
                  <Settings className="h-4 w-4 mr-2" /> Settings
                </Button>
              </div>
            </div>
            
            {/* Main Content */}
            <div className="lg:col-span-3">
              <Tabs defaultValue="trips">
                <TabsList className="bg-glass mb-6">
                  <TabsTrigger value="trips">My Trips</TabsTrigger>
                  <TabsTrigger value="saved">Saved</TabsTrigger>
                  <TabsTrigger value="expenses">Expenses</TabsTrigger>
                </TabsList>
                
                {/* Trips Tab */}
                <TabsContent value="trips">
                  <Card className="bg-glass">
                    <CardHeader>
                      <CardTitle>Upcoming Trips</CardTitle>
                      <CardDescription>Your planned adventures</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {upcomingTrips.map((trip) => (
                          <div key={trip.id} className="bg-white/30 dark:bg-gray-800/30 rounded-lg overflow-hidden">
                            <div className="h-40 overflow-hidden">
                              <img
                                src={trip.image}
                                alt={trip.destination}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div className="p-4">
                              <h3 className="font-semibold">{trip.destination}</h3>
                              <p className="text-sm text-gray-500">{trip.date}</p>
                              <div className="mt-3 flex gap-2">
                                <Button variant="outline" size="sm" className="flex-1">Details</Button>
                                <Button variant="outline" size="sm" className="flex-1">Edit</Button>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                      
                      {upcomingTrips.length === 0 && (
                        <div className="text-center py-8">
                          <p className="text-gray-500">No upcoming trips planned.</p>
                          <Button className="mt-4">Plan a Trip</Button>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                  
                  <Card className="bg-glass mt-6">
                    <CardHeader>
                      <CardTitle>Past Trips</CardTitle>
                      <CardDescription>Your travel memories</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {pastTrips.map((trip) => (
                          <div key={trip.id} className="bg-white/30 dark:bg-gray-800/30 rounded-lg overflow-hidden">
                            <div className="h-36 overflow-hidden">
                              <img
                                src={trip.image}
                                alt={trip.destination}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div className="p-4">
                              <h3 className="font-semibold">{trip.destination}</h3>
                              <p className="text-sm text-gray-500">{trip.date}</p>
                              <Button variant="outline" size="sm" className="mt-3 w-full">View Trip</Button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                {/* Saved Tab */}
                <TabsContent value="saved">
                  <Card className="bg-glass">
                    <CardHeader>
                      <CardTitle>Saved Destinations</CardTitle>
                      <CardDescription>Places you want to visit</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                        {savedDestinations.map((destination) => (
                          <div key={destination.id} className="bg-white/30 dark:bg-gray-800/30 rounded-lg overflow-hidden">
                            <div className="h-40 overflow-hidden">
                              <img
                                src={destination.image}
                                alt={destination.name}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div className="p-4">
                              <h3 className="font-semibold">{destination.name}</h3>
                              <Button variant="outline" size="sm" className="mt-3 w-full">Explore</Button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                {/* Expenses Tab */}
                <TabsContent value="expenses">
                  <Card className="bg-glass">
                    <CardHeader>
                      <CardTitle>Trip Expenses</CardTitle>
                      <CardDescription>Your travel budget and expenses</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="rounded-md border">
                        <div className="bg-white/30 dark:bg-gray-800/30 p-4 grid grid-cols-4 font-medium">
                          <div>Trip</div>
                          <div>Amount</div>
                          <div>Date</div>
                          <div>Status</div>
                        </div>
                        <div className="divide-y">
                          {expenses.map((expense) => (
                            <div key={expense.id} className="grid grid-cols-4 p-4 bg-white/10 dark:bg-gray-800/10">
                              <div>{expense.trip}</div>
                              <div>{expense.amount}</div>
                              <div>{expense.date}</div>
                              <div>
                                <span className={`px-2 py-1 rounded-full text-xs ${
                                  expense.status === "Upcoming" 
                                    ? "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300" 
                                    : "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300"
                                }`}>
                                  {expense.status}
                                </span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div className="mt-6 flex justify-end">
                        <Button>Manage All Expenses</Button>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
