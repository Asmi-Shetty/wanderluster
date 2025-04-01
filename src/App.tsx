
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "@/components/layout/MainLayout";
import HomePage from "@/pages/HomePage";
import LoginPage from "@/pages/LoginPage";
import ProfilePage from "@/pages/ProfilePage";
import GalleryPage from "@/pages/GalleryPage";
import ExpensePage from "@/pages/ExpensePage";
import DestinationsPage from "@/pages/DestinationsPage";
import TransportationPage from "@/pages/TransportationPage";
import AccommodationPage from "@/pages/AccommodationPage";
import NotFound from "@/pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<HomePage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="profile" element={<ProfilePage />} />
            <Route path="gallery" element={<GalleryPage />} />
            <Route path="expenses" element={<ExpensePage />} />
            <Route path="destinations" element={<DestinationsPage />} />
            <Route path="flights" element={<TransportationPage />} />
            <Route path="stays" element={<AccommodationPage />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
