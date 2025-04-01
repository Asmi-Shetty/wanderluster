
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Menu, X, User, Search, LogIn } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-glass">
      <div className="container py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-travel-teal text-2xl font-bold">Wanderluster</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/destinations" className="font-medium hover:text-travel-teal transition-colors">
            Destinations
          </Link>
          <Link to="/flights" className="font-medium hover:text-travel-teal transition-colors">
            Flights
          </Link>
          <Link to="/stays" className="font-medium hover:text-travel-teal transition-colors">
            Stays
          </Link>
          <Link to="/trips" className="font-medium hover:text-travel-teal transition-colors">
            Trips
          </Link>
          <Link to="/gallery" className="font-medium hover:text-travel-teal transition-colors">
            Gallery
          </Link>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Button variant="ghost" size="icon">
            <Search className="h-5 w-5" />
          </Button>
          
          {isLoggedIn ? (
            <Link to="/profile">
              <Button variant="ghost" size="icon" className="rounded-full">
                <User className="h-5 w-5" />
              </Button>
            </Link>
          ) : (
            <Link to="/login">
              <Button>
                <LogIn className="mr-2 h-4 w-4" /> Sign In
              </Button>
            </Link>
          )}
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center">
          <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-glass py-4 animate-fade-in">
          <div className="container flex flex-col gap-4">
            <Link to="/destinations" className="px-4 py-2 font-medium hover:text-travel-teal transition-colors">
              Destinations
            </Link>
            <Link to="/flights" className="px-4 py-2 font-medium hover:text-travel-teal transition-colors">
              Flights
            </Link>
            <Link to="/stays" className="px-4 py-2 font-medium hover:text-travel-teal transition-colors">
              Stays
            </Link>
            <Link to="/trips" className="px-4 py-2 font-medium hover:text-travel-teal transition-colors">
              Trips
            </Link>
            <Link to="/gallery" className="px-4 py-2 font-medium hover:text-travel-teal transition-colors">
              Gallery
            </Link>
            
            {isLoggedIn ? (
              <Link to="/profile" className="px-4 py-2 font-medium hover:text-travel-teal transition-colors">
                Profile
              </Link>
            ) : (
              <Link to="/login" className="px-4 py-2 font-medium hover:text-travel-teal transition-colors">
                Sign In
              </Link>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
