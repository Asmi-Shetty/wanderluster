import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Plane, Train, Bus, Search, Calendar, ArrowRight, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const TransportationPage = () => {
  const { toast } = useToast();
  
  // Search form handling
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Searching for transportation",
      description: "We're finding the best options for your trip"
    });
  };
  
  // Sample flight data
  const flightResults = [
    { 
      id: 1, 
      airline: "SkyWings", 
      departure: "New York (JFK)", 
      arrival: "London (LHR)",
      departureTime: "09:45 AM",
      arrivalTime: "10:30 PM",
      duration: "7h 45m",
      stops: "Nonstop",
      price: 649
    },
    { 
      id: 2, 
      airline: "GlobalAir", 
      departure: "New York (JFK)", 
      arrival: "London (LHR)",
      departureTime: "02:15 PM",
      arrivalTime: "03:20 AM",
      duration: "8h 05m",
      stops: "Nonstop",
      price: 589
    },
    { 
      id: 3, 
      airline: "TransWorld", 
      departure: "New York (EWR)", 
      arrival: "London (LHR)",
      departureTime: "07:30 PM",
      arrivalTime: "08:45 AM",
      duration: "7h 15m",
      stops: "Nonstop",
      price: 712
    },
  ];
  
  // Sample train data
  const trainResults = [
    { 
      id: 1, 
      company: "EuroRail", 
      departure: "Paris (Gare du Nord)", 
      arrival: "London (St. Pancras)",
      departureTime: "10:15 AM",
      arrivalTime: "11:45 AM",
      duration: "2h 30m",
      class: "First Class",
      price: 189
    },
    { 
      id: 2, 
      company: "EuroRail", 
      departure: "Paris (Gare du Nord)", 
      arrival: "London (St. Pancras)",
      departureTime: "02:30 PM",
      arrivalTime: "04:00 PM",
      duration: "2h 30m",
      class: "Standard",
      price: 129
    },
    { 
      id: 3, 
      company: "EuroRail", 
      departure: "Paris (Gare du Nord)", 
      arrival: "London (St. Pancras)",
      departureTime: "06:45 PM",
      arrivalTime: "08:15 PM",
      duration: "2h 30m",
      class: "Standard",
      price: 109
    },
  ];
  
  // Sample bus data
  const busResults = [
    { 
      id: 1, 
      company: "EuroLines", 
      departure: "Amsterdam (Central)", 
      arrival: "Berlin (Central)",
      departureTime: "08:00 AM",
      arrivalTime: "04:30 PM",
      duration: "8h 30m",
      amenities: ["WiFi", "Power Outlets"],
      price: 49
    },
    { 
      id: 2, 
      company: "FlixBus", 
      departure: "Amsterdam (Central)", 
      arrival: "Berlin (Central)",
      departureTime: "10:15 AM",
      arrivalTime: "07:00 PM",
      duration: "8h 45m",
      amenities: ["WiFi", "Power Outlets", "Snacks"],
      price: 45
    },
    { 
      id: 3, 
      company: "EuroLines", 
      departure: "Amsterdam (Sloterdijk)", 
      arrival: "Berlin (Central)",
      departureTime: "11:30 PM",
      arrivalTime: "07:45 AM",
      duration: "8h 15m",
      amenities: ["WiFi", "Power Outlets", "Reclining Seats"],
      price: 39
    },
  ];

  return (
    <>
      <div className="bg-image" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1506012787146-f92b2d7d6d96?auto=format&fit=crop&w=2000&q=80')" }}></div>
      <div className="overlay"></div>
      
      <div className="min-h-screen pt-24 pb-12">
        <div className="container">
          <h1 className="text-3xl font-bold text-white mb-8">Transportation</h1>
          
          <Card className="bg-glass mb-10">
            <CardContent className="p-6">
              <Tabs defaultValue="flights">
                <TabsList className="mb-6 bg-white/20 dark:bg-gray-800/20">
                  <TabsTrigger value="flights">
                    <Plane className="h-4 w-4 mr-2" /> Flights
                  </TabsTrigger>
                  <TabsTrigger value="trains">
                    <Train className="h-4 w-4 mr-2" /> Trains
                  </TabsTrigger>
                  <TabsTrigger value="buses">
                    <Bus className="h-4 w-4 mr-2" /> Buses
                  </TabsTrigger>
                </TabsList>
                
                <TabsContent value="flights">
                  <form onSubmit={handleSearch}>
                    <div className="mb-4">
                      <RadioGroup defaultValue="roundtrip" className="flex space-x-4">
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="roundtrip" id="roundtrip" />
                          <Label htmlFor="roundtrip">Round Trip</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="oneway" id="oneway" />
                          <Label htmlFor="oneway">One Way</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="multicity" id="multicity" />
                          <Label htmlFor="multicity">Multi-City</Label>
                        </div>
                      </RadioGroup>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                      <div className="space-y-2">
                        <Label htmlFor="departure">From</Label>
                        <div className="relative">
                          <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
                          <Input id="departure" placeholder="Departure city" className="pl-9" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="arrival">To</Label>
                        <div className="relative">
                          <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
                          <Input id="arrival" placeholder="Arrival city" className="pl-9" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="depart-date">Depart</Label>
                        <div className="relative">
                          <Calendar className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
                          <Input id="depart-date" placeholder="Departure date" className="pl-9" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="return-date">Return</Label>
                        <div className="relative">
                          <Calendar className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
                          <Input id="return-date" placeholder="Return date" className="pl-9" />
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex justify-end">
                      <Button type="submit">
                        <Search className="mr-2 h-4 w-4" /> Search Flights
                      </Button>
                    </div>
                  </form>
                  
                  {/* Flight Results */}
                  <div className="mt-8">
                    <h3 className="text-lg font-semibold mb-4">Popular Flights</h3>
                    <div className="space-y-4">
                      {flightResults.map((flight) => (
                        <Card key={flight.id} className="bg-white/30 dark:bg-gray-800/30 hover:shadow-md transition-shadow">
                          <CardContent className="p-6">
                            <div className="flex flex-col md:flex-row md:items-center justify-between">
                              <div className="mb-4 md:mb-0">
                                <div className="font-semibold mb-1">{flight.airline}</div>
                                <div className="flex items-center gap-3">
                                  <div>
                                    <div className="font-medium text-lg">{flight.departureTime}</div>
                                    <div className="text-sm text-gray-600 dark:text-gray-300">{flight.departure}</div>
                                  </div>
                                  <ArrowRight className="h-4 w-4 text-gray-500" />
                                  <div>
                                    <div className="font-medium text-lg">{flight.arrivalTime}</div>
                                    <div className="text-sm text-gray-600 dark:text-gray-300">{flight.arrival}</div>
                                  </div>
                                </div>
                                <div className="text-sm mt-2">
                                  <span className="text-gray-600 dark:text-gray-300">{flight.duration} • {flight.stops}</span>
                                </div>
                              </div>
                              <div className="flex flex-col items-end">
                                <div className="text-xl font-bold mb-2">${flight.price}</div>
                                <Button size="sm">Select</Button>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="trains">
                  <form onSubmit={handleSearch}>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                      <div className="space-y-2">
                        <Label htmlFor="train-departure">From</Label>
                        <div className="relative">
                          <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
                          <Input id="train-departure" placeholder="Departure station" className="pl-9" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="train-arrival">To</Label>
                        <div className="relative">
                          <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
                          <Input id="train-arrival" placeholder="Arrival station" className="pl-9" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="train-date">Date</Label>
                        <div className="relative">
                          <Calendar className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
                          <Input id="train-date" placeholder="Travel date" className="pl-9" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="train-passengers">Passengers</Label>
                        <Input id="train-passengers" placeholder="1 Passenger" />
                      </div>
                    </div>
                    
                    <div className="flex justify-end">
                      <Button type="submit">
                        <Search className="mr-2 h-4 w-4" /> Search Trains
                      </Button>
                    </div>
                  </form>
                  
                  {/* Train Results */}
                  <div className="mt-8">
                    <h3 className="text-lg font-semibold mb-4">Popular Routes</h3>
                    <div className="space-y-4">
                      {trainResults.map((train) => (
                        <Card key={train.id} className="bg-white/30 dark:bg-gray-800/30 hover:shadow-md transition-shadow">
                          <CardContent className="p-6">
                            <div className="flex flex-col md:flex-row md:items-center justify-between">
                              <div className="mb-4 md:mb-0">
                                <div className="font-semibold mb-1">{train.company}</div>
                                <div className="flex items-center gap-3">
                                  <div>
                                    <div className="font-medium text-lg">{train.departureTime}</div>
                                    <div className="text-sm text-gray-600 dark:text-gray-300">{train.departure}</div>
                                  </div>
                                  <ArrowRight className="h-4 w-4 text-gray-500" />
                                  <div>
                                    <div className="font-medium text-lg">{train.arrivalTime}</div>
                                    <div className="text-sm text-gray-600 dark:text-gray-300">{train.arrival}</div>
                                  </div>
                                </div>
                                <div className="text-sm mt-2">
                                  <span className="text-gray-600 dark:text-gray-300">{train.duration} • {train.class}</span>
                                </div>
                              </div>
                              <div className="flex flex-col items-end">
                                <div className="text-xl font-bold mb-2">${train.price}</div>
                                <Button size="sm">Select</Button>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="buses">
                  <form onSubmit={handleSearch}>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                      <div className="space-y-2">
                        <Label htmlFor="bus-departure">From</Label>
                        <div className="relative">
                          <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
                          <Input id="bus-departure" placeholder="Departure city" className="pl-9" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="bus-arrival">To</Label>
                        <div className="relative">
                          <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
                          <Input id="bus-arrival" placeholder="Arrival city" className="pl-9" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="bus-date">Date</Label>
                        <div className="relative">
                          <Calendar className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
                          <Input id="bus-date" placeholder="Travel date" className="pl-9" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="bus-passengers">Passengers</Label>
                        <Input id="bus-passengers" placeholder="1 Passenger" />
                      </div>
                    </div>
                    
                    <div className="flex justify-end">
                      <Button type="submit">
                        <Search className="mr-2 h-4 w-4" /> Search Buses
                      </Button>
                    </div>
                  </form>
                  
                  {/* Bus Results */}
                  <div className="mt-8">
                    <h3 className="text-lg font-semibold mb-4">Popular Routes</h3>
                    <div className="space-y-4">
                      {busResults.map((bus) => (
                        <Card key={bus.id} className="bg-white/30 dark:bg-gray-800/30 hover:shadow-md transition-shadow">
                          <CardContent className="p-6">
                            <div className="flex flex-col md:flex-row md:items-center justify-between">
                              <div className="mb-4 md:mb-0">
                                <div className="font-semibold mb-1">{bus.company}</div>
                                <div className="flex items-center gap-3">
                                  <div>
                                    <div className="font-medium text-lg">{bus.departureTime}</div>
                                    <div className="text-sm text-gray-600 dark:text-gray-300">{bus.departure}</div>
                                  </div>
                                  <ArrowRight className="h-4 w-4 text-gray-500" />
                                  <div>
                                    <div className="font-medium text-lg">{bus.arrivalTime}</div>
                                    <div className="text-sm text-gray-600 dark:text-gray-300">{bus.arrival}</div>
                                  </div>
                                </div>
                                <div className="text-sm mt-2">
                                  <span className="text-gray-600 dark:text-gray-300">{bus.duration} • {bus.amenities.join(", ")}</span>
                                </div>
                              </div>
                              <div className="flex flex-col items-end">
                                <div className="text-xl font-bold mb-2">${bus.price}</div>
                                <Button size="sm">Select</Button>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
          
          {/* Additional Information */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-glass">
              <CardHeader>
                <CardTitle>
                  <Plane className="inline mr-2 mb-1" /> Flight Information
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="flex-shrink-0 h-5 w-5 bg-travel-teal/10 rounded-full flex items-center justify-center text-travel-teal">✓</span>
                    <span>Free cancellation on most flights up to 24 hours before departure</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="flex-shrink-0 h-5 w-5 bg-travel-teal/10 rounded-full flex items-center justify-center text-travel-teal">✓</span>
                    <span>Compare prices from over 500 airlines worldwide</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="flex-shrink-0 h-5 w-5 bg-travel-teal/10 rounded-full flex items-center justify-center text-travel-teal">✓</span>
                    <span>Price alert notifications for fare drops</span>
                  </li>
                </ul>
                <div className="mt-4">
                  <Link to="/flights">
                    <Button variant="outline" className="w-full">Learn More</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-glass">
              <CardHeader>
                <CardTitle>
                  <Train className="inline mr-2 mb-1" /> Train Information
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="flex-shrink-0 h-5 w-5 bg-travel-teal/10 rounded-full flex items-center justify-center text-travel-teal">✓</span>
                    <span>Eco-friendly travel option with beautiful scenic routes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="flex-shrink-0 h-5 w-5 bg-travel-teal/10 rounded-full flex items-center justify-center text-travel-teal">✓</span>
                    <span>Access to city centers without airport transfers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="flex-shrink-0 h-5 w-5 bg-travel-teal/10 rounded-full flex items-center justify-center text-travel-teal">✓</span>
                    <span>Rail passes available for multi-city European travel</span>
                  </li>
                </ul>
                <div className="mt-4">
                  <Link to="/trains">
                    <Button variant="outline" className="w-full">Learn More</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-glass">
              <CardHeader>
                <CardTitle>
                  <Bus className="inline mr-2 mb-1" /> Bus Information
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="flex-shrink-0 h-5 w-5 bg-travel-teal/10 rounded-full flex items-center justify-center text-travel-teal">✓</span>
                    <span>Budget-friendly option for shorter routes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="flex-shrink-0 h-5 w-5 bg-travel-teal/10 rounded-full flex items-center justify-center text-travel-teal">✓</span>
                    <span>Modern buses with WiFi, power outlets, and comfortable seating</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="flex-shrink-0 h-5 w-5 bg-travel-teal/10 rounded-full flex items-center justify-center text-travel-teal">✓</span>
                    <span>Extensive network covering smaller towns and rural areas</span>
                  </li>
                </ul>
                <div className="mt-4">
                  <Link to="/buses">
                    <Button variant="outline" className="w-full">Learn More</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default TransportationPage;
