
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-glass py-10 mt-16">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Wanderluster</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
              Discover the world with personalized travel experiences tailored to your interests and preferences.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-sm hover:text-travel-teal transition-colors">About Us</Link></li>
              <li><Link to="/careers" className="text-sm hover:text-travel-teal transition-colors">Careers</Link></li>
              <li><Link to="/contact" className="text-sm hover:text-travel-teal transition-colors">Contact</Link></li>
              <li><Link to="/press" className="text-sm hover:text-travel-teal transition-colors">Press</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Discover</h4>
            <ul className="space-y-2">
              <li><Link to="/destinations" className="text-sm hover:text-travel-teal transition-colors">Destinations</Link></li>
              <li><Link to="/flights" className="text-sm hover:text-travel-teal transition-colors">Flights</Link></li>
              <li><Link to="/stays" className="text-sm hover:text-travel-teal transition-colors">Accommodations</Link></li>
              <li><Link to="/experiences" className="text-sm hover:text-travel-teal transition-colors">Experiences</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Support</h4>
            <ul className="space-y-2">
              <li><Link to="/help" className="text-sm hover:text-travel-teal transition-colors">Help Center</Link></li>
              <li><Link to="/safety" className="text-sm hover:text-travel-teal transition-colors">Safety Resources</Link></li>
              <li><Link to="/terms" className="text-sm hover:text-travel-teal transition-colors">Terms of Service</Link></li>
              <li><Link to="/privacy" className="text-sm hover:text-travel-teal transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
          <p className="text-sm text-center text-gray-600 dark:text-gray-300">
            © {new Date().getFullYear()} Wanderluster. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
