
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Upload, Plus, Users, Image as ImageIcon } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const GalleryPage = () => {
  const { toast } = useToast();
  
  // Sample data for galleries
  const [galleries] = useState([
    {
      id: 1,
      title: "Europe Summer Trip 2023",
      tripDate: "June 2023",
      members: 4,
      coverImage: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=80",
      photos: [
        { id: 1, src: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=800&q=80", location: "Paris, France" },
        { id: 2, src: "https://images.unsplash.com/photo-1520175480921-4edfa2983e0f?auto=format&fit=crop&w=800&q=80", location: "Barcelona, Spain" },
        { id: 3, src: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=800&q=80", location: "Rome, Italy" },
        { id: 4, src: "https://images.unsplash.com/photo-1519677100203-a0e668c92439?auto=format&fit=crop&w=800&q=80", location: "Amsterdam, Netherlands" },
        { id: 5, src: "https://images.unsplash.com/photo-1486299267070-83823f5448dd?auto=format&fit=crop&w=800&q=80", location: "London, England" },
      ]
    },
    {
      id: 2,
      title: "Bali Adventure",
      tripDate: "November 2023",
      members: 2,
      coverImage: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80",
      photos: [
        { id: 1, src: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=800&q=80", location: "Ubud" },
        { id: 2, src: "https://images.unsplash.com/photo-1554481923-a6918bd997bc?auto=format&fit=crop&w=800&q=80", location: "Uluwatu" },
        { id: 3, src: "https://images.unsplash.com/photo-1558005530-a7958896ec60?auto=format&fit=crop&w=800&q=80", location: "Canggu" },
      ]
    },
  ]);
  
  const [selectedGallery, setSelectedGallery] = useState(galleries[0]);
  
  // Handle file upload simulation
  const handleUpload = () => {
    toast({
      title: "Upload started",
      description: "Your photos are being uploaded to the gallery"
    });
  };
  
  // Handle create gallery simulation
  const handleCreateGallery = () => {
    toast({
      title: "New gallery created",
      description: "You can now start adding photos to your new gallery"
    });
  };

  return (
    <>
      <div className="bg-image" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1581450840325-acc7129e4171?auto=format&fit=crop&w=2000&q=80')" }}></div>
      <div className="overlay"></div>
      
      <div className="min-h-screen pt-24 pb-12">
        <div className="container">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold text-white">Trip Galleries</h1>
            <div className="flex gap-3">
              <Button variant="outline" onClick={handleCreateGallery}>
                <Plus className="mr-2 h-4 w-4" /> Create Gallery
              </Button>
              <Button onClick={handleUpload}>
                <Upload className="mr-2 h-4 w-4" /> Upload Photos
              </Button>
            </div>
          </div>
          
          {/* Gallery List */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {galleries.map((gallery) => (
              <Card key={gallery.id} className="bg-glass overflow-hidden cursor-pointer hover:shadow-lg transition-all" onClick={() => setSelectedGallery(gallery)}>
                <div className="h-48 relative">
                  <img 
                    src={gallery.coverImage} 
                    alt={gallery.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="font-bold text-lg">{gallery.title}</h3>
                    <div className="flex items-center text-sm mt-1">
                      <span className="flex items-center mr-3">
                        <ImageIcon className="h-3 w-3 mr-1" /> {gallery.photos.length} photos
                      </span>
                      <span className="flex items-center">
                        <Users className="h-3 w-3 mr-1" /> {gallery.members} members
                      </span>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
            
            {/* Create New Gallery Card */}
            <Card className="bg-glass h-48 flex items-center justify-center cursor-pointer hover:bg-white/30 dark:hover:bg-gray-800/30 transition-all" onClick={handleCreateGallery}>
              <CardContent className="flex flex-col items-center justify-center h-full">
                <div className="bg-travel-teal/10 p-4 rounded-full mb-3">
                  <Plus className="h-6 w-6 text-travel-teal" />
                </div>
                <p className="font-medium">Create New Gallery</p>
              </CardContent>
            </Card>
          </div>
          
          {/* Selected Gallery Details */}
          {selectedGallery && (
            <div className="bg-glass rounded-lg p-6">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h2 className="text-2xl font-bold">{selectedGallery.title}</h2>
                  <p className="text-gray-600 dark:text-gray-300 mt-1">{selectedGallery.tripDate} • {selectedGallery.members} members</p>
                </div>
                <div className="flex gap-3">
                  <Button variant="outline" size="sm">
                    <Users className="mr-2 h-4 w-4" /> Manage Members
                  </Button>
                  <Button size="sm" onClick={handleUpload}>
                    <Upload className="mr-2 h-4 w-4" /> Add Photos
                  </Button>
                </div>
              </div>
              
              <Tabs defaultValue="grid">
                <div className="flex justify-between items-center mb-6">
                  <TabsList className="bg-white/30 dark:bg-gray-800/30">
                    <TabsTrigger value="grid">Grid</TabsTrigger>
                    <TabsTrigger value="masonry">Masonry</TabsTrigger>
                  </TabsList>
                  <span className="text-sm text-gray-600 dark:text-gray-300">
                    {selectedGallery.photos.length} photos
                  </span>
                </div>
                
                <TabsContent value="grid">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {selectedGallery.photos.map((photo) => (
                      <div key={photo.id} className="group relative overflow-hidden rounded-lg aspect-square">
                        <img 
                          src={photo.src} 
                          alt={photo.location}
                          className="w-full h-full object-cover transition-transform group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        <div className="absolute bottom-0 left-0 p-3 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                          <p className="text-sm font-medium">{photo.location}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </TabsContent>
                
                <TabsContent value="masonry">
                  <div className="columns-2 md:columns-3 gap-4 space-y-4">
                    {selectedGallery.photos.map((photo) => (
                      <div key={photo.id} className="group relative overflow-hidden rounded-lg break-inside-avoid">
                        <img 
                          src={photo.src} 
                          alt={photo.location}
                          className="w-full h-auto"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        <div className="absolute bottom-0 left-0 p-3 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                          <p className="text-sm font-medium">{photo.location}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default GalleryPage;
