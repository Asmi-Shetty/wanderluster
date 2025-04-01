
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Calendar, MapPin, Palmtree, Sparkles, Star, User } from "lucide-react";

const PlannerPage = () => {
  const { toast } = useToast();
  const [isGenerating, setIsGenerating] = useState(false);
  
  const handleGenerate = () => {
    setIsGenerating(true);
    
    // Simulate AI processing time
    setTimeout(() => {
      setIsGenerating(false);
      toast({
        title: "Trip plan generated!",
        description: "Your personalized trip plan is ready to view"
      });
    }, 2500);
  };

  return (
    <>
      <div className="bg-image" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=2000&q=80')" }}></div>
      <div className="overlay"></div>
      
      <div className="min-h-screen pt-24 pb-12">
        <div className="container">
          <div className="flex flex-col items-center mb-12 text-center">
            <h1 className="text-4xl font-bold text-white mb-4">AI Trip Planner</h1>
            <p className="text-xl text-white max-w-3xl">
              Tell us about your dream vacation and our AI will create a personalized itinerary for you.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-glass">
              <CardHeader>
                <CardTitle>Your Trip Preferences</CardTitle>
                <CardDescription>
                  Provide some details about your ideal trip and our AI will do the rest
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="destination">Destination</Label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-3 text-gray-400" size={18} />
                    <Input id="destination" placeholder="Where would you like to go?" className="pl-10" />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="dates">Travel Dates</Label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-3 text-gray-400" size={18} />
                      <Input id="dates" placeholder="When?" className="pl-10" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="travelers">Number of Travelers</Label>
                    <div className="relative">
                      <User className="absolute left-3 top-3 text-gray-400" size={18} />
                      <Input id="travelers" type="number" defaultValue={2} min={1} className="pl-10" />
                    </div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="tripType">Trip Type</Label>
                  <Select>
                    <SelectTrigger id="tripType">
                      <SelectValue placeholder="Select trip type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="beach">Beach Vacation</SelectItem>
                      <SelectItem value="adventure">Adventure</SelectItem>
                      <SelectItem value="culture">Cultural Experience</SelectItem>
                      <SelectItem value="nature">Nature & Wildlife</SelectItem>
                      <SelectItem value="urban">Urban Exploration</SelectItem>
                      <SelectItem value="relaxation">Relaxation</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="budget">Budget</Label>
                  <Select>
                    <SelectTrigger id="budget">
                      <SelectValue placeholder="Select budget range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="budget">Budget ($)</SelectItem>
                      <SelectItem value="moderate">Moderate ($$)</SelectItem>
                      <SelectItem value="luxury">Luxury ($$$)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="preferences">Additional Preferences</Label>
                  <Textarea 
                    id="preferences" 
                    placeholder="Tell us more about what you're looking for. Any specific activities, food preferences, accessibility requirements, etc."
                    className="min-h-[100px]"
                  />
                </div>
              </CardContent>
              <CardFooter>
                <Button 
                  className="w-full"
                  onClick={handleGenerate}
                  disabled={isGenerating}
                >
                  {isGenerating ? (
                    <>Generating your plan...</>
                  ) : (
                    <>
                      <Sparkles className="mr-2 h-4 w-4" /> Generate Trip Plan
                    </>
                  )}
                </Button>
              </CardFooter>
            </Card>
            
            <div className="space-y-6">
              <Card className="bg-glass">
                <CardHeader>
                  <CardTitle>Popular Destinations</CardTitle>
                  <CardDescription>
                    Currently trending locations among travelers
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="h-14 w-14 rounded-full overflow-hidden flex-shrink-0">
                      <img 
                        src="https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80"
                        alt="Bali"
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <div className="font-medium mb-1">Bali, Indonesia</div>
                      <div className="flex items-center text-yellow-500">
                        <Star className="h-3 w-3 fill-current" />
                        <Star className="h-3 w-3 fill-current" />
                        <Star className="h-3 w-3 fill-current" />
                        <Star className="h-3 w-3 fill-current" />
                        <Star className="h-3 w-3 fill-current" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="h-14 w-14 rounded-full overflow-hidden flex-shrink-0">
                      <img 
                        src="https://images.unsplash.com/photo-1557404838-1c2750676b23?auto=format&fit=crop&w=800&q=80"
                        alt="Santorini"
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <div className="font-medium mb-1">Santorini, Greece</div>
                      <div className="flex items-center text-yellow-500">
                        <Star className="h-3 w-3 fill-current" />
                        <Star className="h-3 w-3 fill-current" />
                        <Star className="h-3 w-3 fill-current" />
                        <Star className="h-3 w-3 fill-current" />
                        <Star className="h-3 w-3 fill-current" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="h-14 w-14 rounded-full overflow-hidden flex-shrink-0">
                      <img 
                        src="https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=800&q=80"
                        alt="Thailand"
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <div className="font-medium mb-1">Bangkok, Thailand</div>
                      <div className="flex items-center text-yellow-500">
                        <Star className="h-3 w-3 fill-current" />
                        <Star className="h-3 w-3 fill-current" />
                        <Star className="h-3 w-3 fill-current" />
                        <Star className="h-3 w-3 fill-current" />
                        <Star className="h-3 w-3" />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-glass">
                <CardHeader>
                  <CardTitle>Trip Ideas</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Palmtree className="h-5 w-5 text-travel-teal" />
                    <span>Beach getaway in the Maldives</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Palmtree className="h-5 w-5 text-travel-teal" />
                    <span>Food tour through Italy</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Palmtree className="h-5 w-5 text-travel-teal" />
                    <span>Safari adventure in Tanzania</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Palmtree className="h-5 w-5 text-travel-teal" />
                    <span>Cultural exploration in Japan</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Palmtree className="h-5 w-5 text-travel-teal" />
                    <span>Northern Lights in Iceland</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PlannerPage;
