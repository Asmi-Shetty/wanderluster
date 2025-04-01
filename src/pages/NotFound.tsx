
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <>
      <div className="bg-image" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1582794543139-8ac9cb0f7b11?auto=format&fit=crop&w=2000&q=80')" }}></div>
      <div className="overlay"></div>
      
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center max-w-md px-4">
          <h1 className="text-8xl font-bold text-white mb-6">404</h1>
          <p className="text-2xl text-white mb-8">Looks like you've taken a wrong turn on your journey</p>
          <p className="text-lg text-white/80 mb-10">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Link to="/">
            <Button size="lg">Return to Homepage</Button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default NotFound;
