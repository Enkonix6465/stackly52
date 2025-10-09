import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home1 from './pages/Home1';
import Home2Hero from './pages/Home2';
import AboutHero from './pages/aboutus';
import WelcomePage from './pages/welcome';
import ModernFamilyLiving from './pages/ModernFamilyLiving';
import MountainEscapes from './pages/MountainEscapes';  
import SkylinePenthouseCollection from './pages/SkylinePenthouseCollection';
import CoastalBeachfrontRetreats from './pages/CoastalBeachfrontRetreats';
import LuxuryUrbanResidences from './pages/LuxuryUrbanResidences';
import ExclusiveMansions from './pages/ExclusiveMansions';
import BlogHero from './pages/blog';
import BlogDetail from './pages/BlogDetail';
import ContactHero from './pages/contactus';
import UserDetailsSection from './pages/admindashboard'; //
import UserDashboard from './pages/userdashboard';
import ServicesHero from './pages/services';
import ScrollToTop from './pages/scroll-top';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="App">
        <Routes>
          {/* Redirect root to /welcome */}
          <Route path="/" element={<WelcomePage />} />
          <Route path="/welcome" element={<WelcomePage />} />
          
          {/* Admin Dashboard route without Header/Footer */}
          <Route path="/admindashboard" element={<UserDetailsSection />} />
          
          {/* Redirect old paths to new component names */}
          <Route path="/Food-delivery" element={<Navigate to="/ModernFamilyLiving" replace />} />
          <Route path="/Takeaway-Pickup" element={<Navigate to="/MountainEscapes" replace />} />
          <Route path="/Subscription-Meals" element={<Navigate to="/SkylinePenthouseCollection" replace />} />
          <Route path="/Catering-Services" element={<Navigate to="/LuxuryUrbanResidences" replace />} />
          <Route path="/PartyOrders-BulkMeals" element={<Navigate to="/CoastalBeachfrontRetreats" replace />} />
          <Route path="/Dine-In-Experience" element={<Navigate to="/ExclusiveMansions" replace />} />
          
          {/* Routes with Header/Footer */}
          <Route path="/home1" element={<><Header /><Home1 /><Footer /></>} />
          <Route path="/home2" element={<><Header /><Home2Hero /><Footer /></>} />
          <Route path="/aboutus" element={<><Header /><AboutHero /><Footer /></>} />
          <Route path="/services" element={<><Header /><ServicesHero /><Footer /></>} />
          <Route path="/blog" element={<><Header /><BlogHero /><Footer /></>} />
          <Route path="/blog/:id" element={<><Header /><BlogDetail /><Footer /></>} />
          <Route path="/contactus" element={<><Header /><ContactHero /><Footer /></>} />
          <Route path="/userdashboard" element={<><Header /><UserDashboard /><Footer /></>} />
          
          {/* Main service pages */}
          <Route path="/Food-Delivery" element={<><Header /><ModernFamilyLiving /><Footer /></>} />
          <Route path="/Takeaway-Pickup" element={<><Header /><MountainEscapes /><Footer /></>} />
          <Route path="/Subscription-Meals" element={<><Header /><SkylinePenthouseCollection /><Footer /></>} />
          <Route path="/Catering-Services" element={<><Header /><LuxuryUrbanResidences /><Footer /></>} />
          <Route path="/PartyOrders-BulkMeals" element={<><Header /><CoastalBeachfrontRetreats /><Footer /></>} />
          <Route path="/Dine-In-Experience" element={<><Header /><ExclusiveMansions /><Footer /></>} />
          
          {/* New component name routes */}
          <Route path="/ModernFamilyLiving" element={<><Header /><ModernFamilyLiving /><Footer /></>} />
          <Route path="/MountainEscapes" element={<><Header /><MountainEscapes /><Footer /></>} />
          <Route path="/SkylinePenthouseCollection" element={<><Header /><SkylinePenthouseCollection /><Footer /></>} />
          <Route path="/LuxuryUrbanResidences" element={<><Header /><LuxuryUrbanResidences /><Footer /></>} />
          <Route path="/CoastalBeachfrontRetreats" element={<><Header /><CoastalBeachfrontRetreats /><Footer /></>} />
          <Route path="/ExclusiveMansions" element={<><Header /><ExclusiveMansions /><Footer /></>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;