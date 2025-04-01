
import { Link } from "react-router-dom";
import { Search, MapPin, Calendar, Plane, Train, Bus, Hotel, Image, TrendingUp, Wallet } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import ThreeScene from "@/components/ThreeScene";

const HomePage = () => {
  // Sample destinations data
  const trendingDestinations = [
    { id: 1, name: "Bali, Indonesia", image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80", season: "Summer" },
    { id: 2, name: "Santorini, Greece", image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=800&q=80", season: "Summer" },
    { id: 3, name: "Kyoto, Japan", image: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?auto=format&fit=crop&w=800&q=80", season: "Spring" },
    { id: 4, name: "Swiss Alps", image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=80", season: "Winter" }
  ];

  return (
    <>
      <div className="bg-image" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=2000&q=80')" }}></div>
      <div className="overlay"></div>
      <ThreeScene />
      
      <div className="min-h-screen pt-24 pb-12 flex flex-col">
        {/* Hero Section */}
        <section className="container py-20 flex flex-col items-center justify-center text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
            Discover Your Next Adventure
          </h1>
          <p className="text-xl text-white mb-12 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Let our AI plan your perfect trip based on your interests, budget, and travel style.
          </p>
          
          {/* Search Bar */}
          <div className="w-full max-w-4xl bg-glass rounded-lg p-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-grow relative">
                <MapPin className="absolute left-3 top-3 text-gray-400" size={18} />
                <Input
                  type="text"
                  placeholder="Where to?"
                  className="pl-10"
                />
              </div>
              <div className="flex-grow relative">
                <Calendar className="absolute left-3 top-3 text-gray-400" size={18} />
                <Input
                  type="text"
                  placeholder="When?"
                  className="pl-10"
                />
              </div>
              <Link to="/destinations">
                <Button size="lg" className="w-full md:w-auto">
                  <Search className="mr-2 h-4 w-4" /> Search
                </Button>
              </Link>
            </div>
          </div>
        </section>
        
        {/* Features Section */}
        <section className="container py-16">
          <h2 className="text-3xl font-bold text-center text-white mb-12">
            Everything you need in one place
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link to="/flights" className="block">
              <Card className="bg-glass h-full transition-transform hover:scale-105">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="bg-travel-teal/10 p-4 rounded-full mb-4">
                    <Plane className="h-8 w-8 text-travel-teal" />
                  </div>
                  <h3 className="font-bold text-xl mb-2">Transportation</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Find the best flights, trains, and buses for your journey.
                  </p>
                </CardContent>
              </Card>
            </Link>
            
            <Link to="/stays" className="block">
              <Card className="bg-glass h-full transition-transform hover:scale-105">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="bg-travel-teal/10 p-4 rounded-full mb-4">
                    <Hotel className="h-8 w-8 text-travel-teal" />
                  </div>
                  <h3 className="font-bold text-xl mb-2">Accommodations</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Book hotels, hostels, Airbnbs, and homestays worldwide.
                  </p>
                </CardContent>
              </Card>
            </Link>
            
            <Link to="/gallery" className="block">
              <Card className="bg-glass h-full transition-transform hover:scale-105">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="bg-travel-teal/10 p-4 rounded-full mb-4">
                    <Image className="h-8 w-8 text-travel-teal" />
                  </div>
                  <h3 className="font-bold text-xl mb-2">Group Gallery</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Share and collect memories with your travel companions.
                  </p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </section>
        
        {/* Trending Destinations */}
        <section className="container py-16">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-white">
              <TrendingUp className="inline mr-2 mb-1" /> Trending Destinations
            </h2>
            <Link to="/destinations">
              <Button variant="outline" className="bg-glass">
                View All
              </Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {trendingDestinations.map((destination) => (
              <Link key={destination.id} to={`/destinations/${destination.id}`} className="block">
                <div className="relative rounded-lg overflow-hidden group hover:shadow-lg transition-all h-64">
                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="w-full h-full object-cover transition-transform group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-4">
                    <span className="text-xs font-semibold bg-travel-sunset/90 text-white px-2 py-1 rounded-full mb-2 inline-block">
                      {destination.season}
                    </span>
                    <h3 className="text-xl font-bold text-white">{destination.name}</h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
        
        {/* AI Planning Feature */}
        <section className="container py-16">
          <div className="bg-glass rounded-lg p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center">
              <div className="flex-1 mb-8 md:mb-0 md:mr-8">
                <h2 className="text-3xl font-bold mb-4">Let AI Plan Your Perfect Trip</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Our AI travel assistant analyzes thousands of options to create a personalized itinerary based on your preferences, budget, and travel style.
                </p>
                <Link to="/planner">
                  <Button size="lg">
                    Start Planning
                  </Button>
                </Link>
              </div>
              <div className="flex-1">
                <img
                  src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=800&q=80"
                  alt="AI Travel Planning"
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Budget Features */}
        <section className="container py-16">
          <h2 className="text-3xl font-bold text-center text-white mb-12">
            <Wallet className="inline mr-2 mb-1" /> Manage Your Travel Budget
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Link to="/budget">
              <Card className="bg-glass h-full transition-transform hover:scale-105">
                <CardContent className="p-6">
                  <h3 className="font-bold text-xl mb-4">Trip Budget Planning</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                    Set budgets for accommodations, transport, food, and activities. Track your expenses as you travel.
                  </p>
                  <img
                    src="https://images.unsplash.com/photo-1434626881859-194d67b2b86f?auto=format&fit=crop&w=800&q=80"
                    alt="Budget Planning"
                    className="w-full h-40 object-cover rounded-md"
                  />
                </CardContent>
              </Card>
            </Link>
            
            <Link to="/expenses">
              <Card className="bg-glass h-full transition-transform hover:scale-105">
                <CardContent className="p-6">
                  <h3 className="font-bold text-xl mb-4">Group Expense Splitting</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                    Easily split costs with your travel companions. Keep track of who paid for what.
                  </p>
                  <img
                    src="https://images.unsplash.com/photo-1579621970588-a35d0e7ab9b6?auto=format&fit=crop&w=800&q=80"
                    alt="Expense Splitting"
                    className="w-full h-40 object-cover rounded-md"
                  />
                </CardContent>
              </Card>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default HomePage;
