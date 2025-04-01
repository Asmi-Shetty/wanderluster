import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, MapPin, Calendar, Heart, Filter, Sparkles } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Label } from "@/components/ui/label";

const DestinationsPage = () => {
  const { toast } = useToast();
  
  // Sample data for destinations
  const [destinations] = useState([
    { 
      id: 1, 
      name: "Bali, Indonesia", 
      description: "Tropical paradise with stunning beaches, vibrant culture, and lush rice terraces.", 
      image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80",
      rating: 4.8,
      priceLevel: "$$",
      tags: ["Beach", "Culture", "Nature"],
      season: "Year-round",
      weatherNow: "Sunny, 30°C"
    },
    { 
      id: 2, 
      name: "Kyoto, Japan", 
      description: "Ancient temples, traditional gardens, and geisha districts in Japan's cultural capital.", 
      image: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?auto=format&fit=crop&w=800&q=80",
      rating: 4.9,
      priceLevel: "$$$",
      tags: ["Culture", "History", "Food"],
      season: "Spring, Fall",
      weatherNow: "Partly cloudy, 22°C"
    },
    { 
      id: 3, 
      name: "Santorini, Greece", 
      description: "Iconic white buildings, stunning sunsets, and crystal clear waters on this volcanic island.", 
      image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=800&q=80",
      rating: 4.7,
      priceLevel: "$$$",
      tags: ["Beach", "Romantic", "Views"],
      season: "Summer",
      weatherNow: "Sunny, 28°C"
    },
    { 
      id: 4, 
      name: "Banff, Canada", 
      description: "Breathtaking mountain scenery, emerald lakes, and abundant wildlife in the Rockies.", 
      image: "https://images.unsplash.com/photo-1527179528411-4219e0714bcc?auto=format&fit=crop&w=800&q=80",
      rating: 4.9,
      priceLevel: "$$$",
      tags: ["Mountains", "Nature", "Adventure"],
      season: "Summer, Winter",
      weatherNow: "Cloudy, 15°C"
    },
    { 
      id: 5, 
      name: "Barcelona, Spain", 
      description: "Stunning architecture, vibrant culture, and delicious cuisine in this Mediterranean gem.", 
      image: "https://images.unsplash.com/photo-1583422409516-2895a77efded?auto=format&fit=crop&w=800&q=80",
      rating: 4.6,
      priceLevel: "$$",
      tags: ["City", "Culture", "Food"],
      season: "Spring, Fall",
      weatherNow: "Sunny, 25°C"
    },
    { 
      id: 6, 
      name: "Marrakech, Morocco", 
      description: "Ancient medinas, colorful markets, and rich traditions in this North African jewel.", 
      image: "https://images.unsplash.com/photo-1597212720402-329faaf654b2?auto=format&fit=crop&w=800&q=80",
      rating: 4.5,
      priceLevel: "$$",
      tags: ["Culture", "Shopping", "History"],
      season: "Spring, Fall",
      weatherNow: "Hot, 33°C"
    },
  ]);
  
  // AI suggested trips
  const aiSuggestedTrips = [
    {
      id: 1,
      title: "Pacific Northwest Adventure",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=80",
      description: "Explore the stunning coastlines, lush forests, and vibrant cities of the Pacific Northwest.",
      duration: "7 days",
      ideal: "Nature lovers, photography enthusiasts"
    },
    {
      id: 2,
      title: "Mediterranean Food Journey",
      image: "https://images.unsplash.com/photo-1560341178-c1c88e96d283?auto=format&fit=crop&w=800&q=80",
      description: "Experience the culinary wonders of Italy, Greece, and Spain on this mouth-watering adventure.",
      duration: "10 days",
      ideal: "Food enthusiasts, couples"
    },
    {
      id: 3,
      title: "Southeast Asia Explorer",
      image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=800&q=80",
      description: "Immerse yourself in the rich cultures and landscapes of Thailand, Vietnam, and Cambodia.",
      duration: "14 days",
      ideal: "Cultural explorers, budget travelers"
    }
  ];
  
  // Handle heart click
  const handleHeartClick = (destinationName: string) => {
    toast({
      title: "Added to favorites",
      description: `${destinationName} has been added to your favorites`
    });
  };
  
  // Handle AI suggestion
  const handleAiSuggestion = () => {
    toast({
      title: "Generating personalized suggestions",
      description: "Our AI is creating trip recommendations just for you"
    });
  };

  return (
    <>
      <div className="bg-image" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1488085061387-422e29b40080?auto=format&fit=crop&w=2000&q=80')" }}></div>
      <div className="overlay"></div>
      
      <div className="min-h-screen pt-24 pb-12">
        <div className="container">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold text-white">Discover Destinations</h1>
            <Button variant="outline" className="bg-glass" onClick={handleAiSuggestion}>
              <Sparkles className="mr-2 h-4 w-4" /> AI Recommendations
            </Button>
          </div>
          
          {/* Search and Filter */}
          <Card className="bg-glass mb-10">
            <CardContent className="pt-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
                  <Input placeholder="Search destinations" className="pl-9" />
                </div>
                <div className="relative">
                  <Calendar className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
                  <Input placeholder="When are you traveling?" className="pl-9" />
                </div>
                <div className="relative">
                  <Filter className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
                  <Select>
                    <SelectTrigger className="pl-9">
                      <SelectValue placeholder="Filter by" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="popular">Most Popular</SelectItem>
                      <SelectItem value="budget">Budget-friendly</SelectItem>
                      <SelectItem value="family">Family-friendly</SelectItem>
                      <SelectItem value="adventure">Adventure</SelectItem>
                      <SelectItem value="relaxation">Relaxation</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2">
                <Button variant="outline" size="sm" className="rounded-full">Beach</Button>
                <Button variant="outline" size="sm" className="rounded-full">Mountains</Button>
                <Button variant="outline" size="sm" className="rounded-full">City</Button>
                <Button variant="outline" size="sm" className="rounded-full">Nature</Button>
                <Button variant="outline" size="sm" className="rounded-full">Cultural</Button>
                <Button variant="outline" size="sm" className="rounded-full">Historic</Button>
                <Button variant="outline" size="sm" className="rounded-full">Food</Button>
                <Button variant="outline" size="sm" className="rounded-full">Adventure</Button>
              </div>
            </CardContent>
          </Card>
          
          <Tabs defaultValue="all">
            <TabsList className="bg-glass mb-6">
              <TabsTrigger value="all">All Destinations</TabsTrigger>
              <TabsTrigger value="trending">Trending</TabsTrigger>
              <TabsTrigger value="recommended">AI Recommended</TabsTrigger>
              <TabsTrigger value="saved">Saved</TabsTrigger>
            </TabsList>
            
            <TabsContent value="all">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {destinations.map((destination) => (
                  <Card key={destination.id} className="bg-glass overflow-hidden">
                    <div className="relative h-48">
                      <img
                        src={destination.image}
                        alt={destination.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-3 right-3">
                        <Button 
                          variant="ghost" 
                          size="icon" 
                          className="bg-white/30 hover:bg-white/50 h-8 w-8 rounded-full"
                          onClick={() => handleHeartClick(destination.name)}
                        >
                          <Heart className="h-4 w-4" />
                        </Button>
                      </div>
                      <div className="absolute bottom-3 left-3">
                        <span className="inline-flex items-center gap-1 text-white bg-black/50 px-2 py-1 rounded-full text-xs">
                          <MapPin className="h-3 w-3" /> {destination.weatherNow}
                        </span>
                      </div>
                    </div>
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <CardTitle>{destination.name}</CardTitle>
                        <div className="flex items-center">
                          <span className="text-yellow-500 mr-1">★</span>
                          <span className="text-sm">{destination.rating}</span>
                        </div>
                      </div>
                      <CardDescription className="line-clamp-2">{destination.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="pb-0">
                      <div className="flex flex-wrap gap-2 mb-3">
                        {destination.tags.map((tag, index) => (
                          <span key={index} className="text-xs bg-white/20 dark:bg-gray-800/20 px-2 py-1 rounded-full">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="flex justify-between text-sm text-gray-600 dark:text-gray-300">
                        <span>Price Level: {destination.priceLevel}</span>
                        <span>Best: {destination.season}</span>
                      </div>
                    </CardContent>
                    <CardFooter className="pt-4">
                      <Button className="w-full">Explore</Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="recommended">
              <div className="bg-glass rounded-lg p-6 mb-6">
                <div className="flex items-center mb-4">
                  <div className="mr-3 bg-travel-teal/10 p-2 rounded-full">
                    <Sparkles className="h-5 w-5 text-travel-teal" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">AI-Curated Trip Ideas</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Based on your preferences and search history
                    </p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {aiSuggestedTrips.map((trip) => (
                    <Card key={trip.id} className="bg-white/30 dark:bg-gray-800/30 overflow-hidden">
                      <div className="h-40 overflow-hidden">
                        <img
                          src={trip.image}
                          alt={trip.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <CardHeader>
                        <CardTitle className="text-lg">{trip.title}</CardTitle>
                        <CardDescription>{trip.description}</CardDescription>
                      </CardHeader>
                      <CardContent className="pb-0">
                        <div className="flex justify-between text-sm mb-3">
                          <span>Duration: {trip.duration}</span>
                        </div>
                        <div className="text-sm text-gray-600 dark:text-gray-300">
                          Ideal for: {trip.ideal}
                        </div>
                      </CardContent>
                      <CardFooter className="pt-4">
                        <Button className="w-full">View Itinerary</Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </div>
              
              <Card className="bg-glass">
                <CardHeader>
                  <CardTitle>Get Personalized Recommendations</CardTitle>
                  <CardDescription>
                    Tell us more about your travel preferences and our AI will create the perfect trip just for you
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <div>
                      <Label htmlFor="tripType">Trip Type</Label>
                      <Select>
                        <SelectTrigger id="tripType">
                          <SelectValue placeholder="Select type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="adventure">Adventure</SelectItem>
                          <SelectItem value="relaxation">Relaxation</SelectItem>
                          <SelectItem value="cultural">Cultural</SelectItem>
                          <SelectItem value="foodie">Foodie Tour</SelectItem>
                          <SelectItem value="luxury">Luxury</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="budget">Budget Range</Label>
                      <Select>
                        <SelectTrigger id="budget">
                          <SelectValue placeholder="Select budget" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="budget">Budget ($)</SelectItem>
                          <SelectItem value="moderate">Moderate ($$)</SelectItem>
                          <SelectItem value="premium">Premium ($$$)</SelectItem>
                          <SelectItem value="luxury">Luxury ($$$$)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="duration">Duration</Label>
                      <Select>
                        <SelectTrigger id="duration">
                          <SelectValue placeholder="Select duration" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="weekend">Weekend Getaway</SelectItem>
                          <SelectItem value="week">1 Week</SelectItem>
                          <SelectItem value="twoWeeks">2 Weeks</SelectItem>
                          <SelectItem value="month">1 Month+</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <Button onClick={handleAiSuggestion} className="w-full">
                    <Sparkles className="mr-2 h-4 w-4" /> Generate Recommendations
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="trending">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {destinations.slice(0, 3).map((destination) => (
                  <Card key={destination.id} className="bg-glass overflow-hidden">
                    <div className="relative h-48">
                      <img
                        src={destination.image}
                        alt={destination.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-3 right-3">
                        <Button 
                          variant="ghost" 
                          size="icon" 
                          className="bg-white/30 hover:bg-white/50 h-8 w-8 rounded-full"
                          onClick={() => handleHeartClick(destination.name)}
                        >
                          <Heart className="h-4 w-4" />
                        </Button>
                      </div>
                      <div className="absolute top-3 left-3">
                        <span className="inline-flex items-center bg-travel-sunset text-white px-2 py-1 rounded-full text-xs font-semibold">
                          Trending
                        </span>
                      </div>
                    </div>
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <CardTitle>{destination.name}</CardTitle>
                        <div className="flex items-center">
                          <span className="text-yellow-500 mr-1">★</span>
                          <span className="text-sm">{destination.rating}</span>
                        </div>
                      </div>
                      <CardDescription className="line-clamp-2">{destination.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="pb-0">
                      <div className="flex flex-wrap gap-2 mb-3">
                        {destination.tags.map((tag, index) => (
                          <span key={index} className="text-xs bg-white/20 dark:bg-gray-800/20 px-2 py-1 rounded-full">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="flex justify-between text-sm text-gray-600 dark:text-gray-300">
                        <span>Price Level: {destination.priceLevel}</span>
                        <span>Best: {destination.season}</span>
                      </div>
                    </CardContent>
                    <CardFooter className="pt-4">
                      <Button className="w-full">Explore</Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="saved">
              <div className="text-center py-16">
                <div className="bg-white/20 dark:bg-gray-800/20 p-10 rounded-lg inline-block mb-6">
                  <Heart className="h-16 w-16 mx-auto mb-4 text-travel-teal" />
                  <h3 className="text-xl font-semibold mb-2">No saved destinations yet</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-md mx-auto">
                    Click the heart icon on any destination to save it to your favorites.
                  </p>
                  <Button>Explore Destinations</Button>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </>
  );
};

export default DestinationsPage;
