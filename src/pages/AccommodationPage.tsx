
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, MapPin, Calendar, Filter, Heart, User, Star, Bed, Home, Building, Castle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const AccommodationPage = () => {
  const { toast } = useToast();
  
  // Sample data for accommodations
  const [accommodations] = useState([
    { 
      id: 1, 
      name: "Grand Ocean Resort", 
      type: "Hotel",
      location: "Bali, Indonesia",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
      rating: 4.8,
      price: 150,
      amenities: ["Pool", "Spa", "Restaurant", "WiFi"],
      description: "Luxurious beachfront resort with stunning ocean views and world-class amenities."
    },
    { 
      id: 2, 
      name: "Modern Downtown Apartment", 
      type: "Apartment",
      location: "Barcelona, Spain",
      image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80",
      rating: 4.6,
      price: 120,
      amenities: ["Kitchen", "Washer", "WiFi", "AC"],
      description: "Stylish apartment in the heart of Barcelona, walking distance to major attractions."
    },
    { 
      id: 3, 
      name: "Nomad's Hostel", 
      type: "Hostel",
      location: "Bangkok, Thailand",
      image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=800&q=80",
      rating: 4.5,
      price: 25,
      amenities: ["Free Breakfast", "Lockers", "WiFi", "Common Area"],
      description: "Social hostel with clean dorms and private rooms, perfect for backpackers."
    },
    { 
      id: 4, 
      name: "Alpine Chalet", 
      type: "Homestay",
      location: "Swiss Alps",
      image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=80",
      rating: 4.9,
      price: 220,
      amenities: ["Fireplace", "Mountain View", "Kitchen", "Heating"],
      description: "Cozy chalet with breathtaking mountain views, ideal for a peaceful getaway."
    },
    { 
      id: 5, 
      name: "Kyoto Traditional House", 
      type: "Homestay",
      location: "Kyoto, Japan",
      image: "https://images.unsplash.com/photo-1578469645142-81aad498a942?auto=format&fit=crop&w=800&q=80",
      rating: 4.7,
      price: 170,
      amenities: ["Garden", "Traditional Bath", "Tatami Rooms", "Tea Ceremony"],
      description: "Experience authentic Japanese living in this traditional house with a peaceful garden."
    },
    { 
      id: 6, 
      name: "City Lights Hotel", 
      type: "Hotel",
      location: "New York, USA",
      image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=800&q=80",
      rating: 4.5,
      price: 280,
      amenities: ["Gym", "Restaurant", "Business Center", "WiFi"],
      description: "Modern hotel in the heart of Manhattan with stunning city views."
    },
  ]);
  
  // Handle search
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Searching accommodations",
      description: "Finding the perfect place for your stay"
    });
  };
  
  // Handle save
  const handleSave = (name: string) => {
    toast({
      title: "Saved to favorites",
      description: `${name} has been added to your saved accommodations`
    });
  };

  return (
    <>
      <div className="bg-image" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=2000&q=80')" }}></div>
      <div className="overlay"></div>
      
      <div className="min-h-screen pt-24 pb-12">
        <div className="container">
          <h1 className="text-3xl font-bold text-white mb-8">Find Your Stay</h1>
          
          {/* Search Form */}
          <Card className="bg-glass mb-10">
            <CardContent className="p-6">
              <form onSubmit={handleSearch}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-6">
                  <div className="space-y-2 lg:col-span-2">
                    <Label htmlFor="location">Where</Label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
                      <Input id="location" placeholder="Destination, city, or property" className="pl-9" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="check-in">Check-in</Label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
                      <Input id="check-in" placeholder="Add date" className="pl-9" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="check-out">Check-out</Label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
                      <Input id="check-out" placeholder="Add date" className="pl-9" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="guests">Guests</Label>
                    <div className="relative">
                      <User className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
                      <Input id="guests" placeholder="Add guests" className="pl-9" />
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div className="flex flex-wrap gap-2">
                    <Button variant="outline" size="sm" className="flex items-center gap-1">
                      <Bed className="h-3 w-3" /> Hotels
                    </Button>
                    <Button variant="outline" size="sm" className="flex items-center gap-1">
                      <Home className="h-3 w-3" /> Homestays
                    </Button>
                    <Button variant="outline" size="sm" className="flex items-center gap-1">
                      <Building className="h-3 w-3" /> Apartments
                    </Button>
                    <Button variant="outline" size="sm" className="flex items-center gap-1">
                      <Castle className="h-3 w-3" /> Resorts
                    </Button>
                  </div>
                  
                  <Button type="submit">
                    <Search className="mr-2 h-4 w-4" /> Search
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
          
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold text-white">Popular Accommodations</h2>
            <Select defaultValue="recommended">
              <SelectTrigger className="w-[180px] bg-glass">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="recommended">Recommended</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="rating">Highest Rated</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <Tabs defaultValue="all">
            <TabsList className="bg-glass mb-6">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="hotels">Hotels</TabsTrigger>
              <TabsTrigger value="apartments">Apartments</TabsTrigger>
              <TabsTrigger value="hostels">Hostels</TabsTrigger>
              <TabsTrigger value="homestays">Homestays</TabsTrigger>
            </TabsList>
            
            <TabsContent value="all">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {accommodations.map((accommodation) => (
                  <Card key={accommodation.id} className="bg-glass overflow-hidden">
                    <div className="relative h-48">
                      <img
                        src={accommodation.image}
                        alt={accommodation.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-3 right-3">
                        <Button 
                          variant="ghost" 
                          size="icon" 
                          className="bg-white/30 hover:bg-white/50 h-8 w-8 rounded-full"
                          onClick={() => handleSave(accommodation.name)}
                        >
                          <Heart className="h-4 w-4" />
                        </Button>
                      </div>
                      <div className="absolute top-3 left-3">
                        <span className="bg-black/50 text-white px-2 py-1 rounded-full text-xs">
                          {accommodation.type}
                        </span>
                      </div>
                    </div>
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <CardTitle className="text-lg">{accommodation.name}</CardTitle>
                        <div className="flex items-center">
                          <Star className="h-4 w-4 text-yellow-500 fill-yellow-500 mr-1" />
                          <span className="text-sm">{accommodation.rating}</span>
                        </div>
                      </div>
                      <CardDescription>
                        <MapPin className="inline h-3 w-3 mr-1" /> {accommodation.location}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="pb-0">
                      <p className="text-sm mb-3 line-clamp-2">{accommodation.description}</p>
                      <div className="flex flex-wrap gap-2 mb-3">
                        {accommodation.amenities.map((amenity, index) => (
                          <span key={index} className="text-xs bg-white/20 dark:bg-gray-800/20 px-2 py-1 rounded-full">
                            {amenity}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between items-center pt-4">
                      <div className="text-lg font-bold">
                        ${accommodation.price} <span className="text-sm font-normal">/ night</span>
                      </div>
                      <Button size="sm">View Details</Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="hotels">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {accommodations
                  .filter(acc => acc.type === 'Hotel')
                  .map((accommodation) => (
                    <Card key={accommodation.id} className="bg-glass overflow-hidden">
                      <div className="relative h-48">
                        <img
                          src={accommodation.image}
                          alt={accommodation.name}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute top-3 right-3">
                          <Button 
                            variant="ghost" 
                            size="icon" 
                            className="bg-white/30 hover:bg-white/50 h-8 w-8 rounded-full"
                            onClick={() => handleSave(accommodation.name)}
                          >
                            <Heart className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                      <CardHeader>
                        <div className="flex justify-between items-start">
                          <CardTitle className="text-lg">{accommodation.name}</CardTitle>
                          <div className="flex items-center">
                            <Star className="h-4 w-4 text-yellow-500 fill-yellow-500 mr-1" />
                            <span className="text-sm">{accommodation.rating}</span>
                          </div>
                        </div>
                        <CardDescription>
                          <MapPin className="inline h-3 w-3 mr-1" /> {accommodation.location}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="pb-0">
                        <p className="text-sm mb-3 line-clamp-2">{accommodation.description}</p>
                        <div className="flex flex-wrap gap-2 mb-3">
                          {accommodation.amenities.map((amenity, index) => (
                            <span key={index} className="text-xs bg-white/20 dark:bg-gray-800/20 px-2 py-1 rounded-full">
                              {amenity}
                            </span>
                          ))}
                        </div>
                      </CardContent>
                      <CardFooter className="flex justify-between items-center pt-4">
                        <div className="text-lg font-bold">
                          ${accommodation.price} <span className="text-sm font-normal">/ night</span>
                        </div>
                        <Button size="sm">View Details</Button>
                      </CardFooter>
                    </Card>
                  ))}
              </div>
            </TabsContent>
            
            {/* Additional tabs follow the same pattern */}
            <TabsContent value="apartments">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {accommodations
                  .filter(acc => acc.type === 'Apartment')
                  .map((accommodation) => (
                    <Card key={accommodation.id} className="bg-glass overflow-hidden">
                      {/* Same card structure as above */}
                      <div className="relative h-48">
                        <img
                          src={accommodation.image}
                          alt={accommodation.name}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute top-3 right-3">
                          <Button 
                            variant="ghost" 
                            size="icon" 
                            className="bg-white/30 hover:bg-white/50 h-8 w-8 rounded-full"
                            onClick={() => handleSave(accommodation.name)}
                          >
                            <Heart className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                      <CardHeader>
                        <div className="flex justify-between items-start">
                          <CardTitle className="text-lg">{accommodation.name}</CardTitle>
                          <div className="flex items-center">
                            <Star className="h-4 w-4 text-yellow-500 fill-yellow-500 mr-1" />
                            <span className="text-sm">{accommodation.rating}</span>
                          </div>
                        </div>
                        <CardDescription>
                          <MapPin className="inline h-3 w-3 mr-1" /> {accommodation.location}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="pb-0">
                        <p className="text-sm mb-3 line-clamp-2">{accommodation.description}</p>
                        <div className="flex flex-wrap gap-2 mb-3">
                          {accommodation.amenities.map((amenity, index) => (
                            <span key={index} className="text-xs bg-white/20 dark:bg-gray-800/20 px-2 py-1 rounded-full">
                              {amenity}
                            </span>
                          ))}
                        </div>
                      </CardContent>
                      <CardFooter className="flex justify-between items-center pt-4">
                        <div className="text-lg font-bold">
                          ${accommodation.price} <span className="text-sm font-normal">/ night</span>
                        </div>
                        <Button size="sm">View Details</Button>
                      </CardFooter>
                    </Card>
                  ))}
              </div>
            </TabsContent>
            
            <TabsContent value="hostels">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {accommodations
                  .filter(acc => acc.type === 'Hostel')
                  .map((accommodation) => (
                    <Card key={accommodation.id} className="bg-glass overflow-hidden">
                      {/* Same card structure as above */}
                      <div className="relative h-48">
                        <img
                          src={accommodation.image}
                          alt={accommodation.name}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute top-3 right-3">
                          <Button 
                            variant="ghost" 
                            size="icon" 
                            className="bg-white/30 hover:bg-white/50 h-8 w-8 rounded-full"
                            onClick={() => handleSave(accommodation.name)}
                          >
                            <Heart className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                      <CardHeader>
                        <div className="flex justify-between items-start">
                          <CardTitle className="text-lg">{accommodation.name}</CardTitle>
                          <div className="flex items-center">
                            <Star className="h-4 w-4 text-yellow-500 fill-yellow-500 mr-1" />
                            <span className="text-sm">{accommodation.rating}</span>
                          </div>
                        </div>
                        <CardDescription>
                          <MapPin className="inline h-3 w-3 mr-1" /> {accommodation.location}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="pb-0">
                        <p className="text-sm mb-3 line-clamp-2">{accommodation.description}</p>
                        <div className="flex flex-wrap gap-2 mb-3">
                          {accommodation.amenities.map((amenity, index) => (
                            <span key={index} className="text-xs bg-white/20 dark:bg-gray-800/20 px-2 py-1 rounded-full">
                              {amenity}
                            </span>
                          ))}
                        </div>
                      </CardContent>
                      <CardFooter className="flex justify-between items-center pt-4">
                        <div className="text-lg font-bold">
                          ${accommodation.price} <span className="text-sm font-normal">/ night</span>
                        </div>
                        <Button size="sm">View Details</Button>
                      </CardFooter>
                    </Card>
                  ))}
              </div>
            </TabsContent>
            
            <TabsContent value="homestays">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {accommodations
                  .filter(acc => acc.type === 'Homestay')
                  .map((accommodation) => (
                    <Card key={accommodation.id} className="bg-glass overflow-hidden">
                      {/* Same card structure as above */}
                      <div className="relative h-48">
                        <img
                          src={accommodation.image}
                          alt={accommodation.name}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute top-3 right-3">
                          <Button 
                            variant="ghost" 
                            size="icon" 
                            className="bg-white/30 hover:bg-white/50 h-8 w-8 rounded-full"
                            onClick={() => handleSave(accommodation.name)}
                          >
                            <Heart className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                      <CardHeader>
                        <div className="flex justify-between items-start">
                          <CardTitle className="text-lg">{accommodation.name}</CardTitle>
                          <div className="flex items-center">
                            <Star className="h-4 w-4 text-yellow-500 fill-yellow-500 mr-1" />
                            <span className="text-sm">{accommodation.rating}</span>
                          </div>
                        </div>
                        <CardDescription>
                          <MapPin className="inline h-3 w-3 mr-1" /> {accommodation.location}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="pb-0">
                        <p className="text-sm mb-3 line-clamp-2">{accommodation.description}</p>
                        <div className="flex flex-wrap gap-2 mb-3">
                          {accommodation.amenities.map((amenity, index) => (
                            <span key={index} className="text-xs bg-white/20 dark:bg-gray-800/20 px-2 py-1 rounded-full">
                              {amenity}
                            </span>
                          ))}
                        </div>
                      </CardContent>
                      <CardFooter className="flex justify-between items-center pt-4">
                        <div className="text-lg font-bold">
                          ${accommodation.price} <span className="text-sm font-normal">/ night</span>
                        </div>
                        <Button size="sm">View Details</Button>
                      </CardFooter>
                    </Card>
                  ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </>
  );
};

export default AccommodationPage;
