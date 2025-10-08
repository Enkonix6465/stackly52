import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home1 from './pages/Home1';
import Home2Hero from './pages/Home2';
import AboutHero from './pages/aboutus';
import WelcomePage from './pages/welcome';
import AIHero from './pages/FoodDelivery';
import WebDevServicePage from './pages/TakeawayPickup';  
import DataSciencePage from './pages/SubscriptionMeals';
import CybersecurityPage from './pages/PartyOrders&BulkMeals';
import BlockchainPage from './pages/CateringServices';
import CloudComputingPage from './pages/DineInExperience';
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
          {/* All other routes with Header/Footer */}
          <Route
            path="/*"
            element={
              <>
                <Header />
                <Routes>
                  <Route path="home1" element={<Home1 />} />
                  <Route path="home2" element={<Home2Hero />} />
                  <Route path="aboutus" element={<AboutHero />} />
                  <Route path="Food-Delivery" element={<AIHero />} />
                  <Route path="services" element={<ServicesHero />} />
                  <Route path="Takeaway-Pickup" element={<WebDevServicePage />} />
                  <Route path="Subscription-Meals" element={<DataSciencePage />} />
                  <Route path="Catering-Services" element={<BlockchainPage />} />
                  <Route path="PartyOrders-BulkMeals" element={<CybersecurityPage />} />
                  <Route path="Dine-In-Experience" element={<CloudComputingPage />} />
                  <Route path="blog" element={<BlogHero />} />
                  <Route path="/blog/:id" element={<BlogDetail />} />
                  <Route path="contactus" element={<ContactHero />} />
                  <Route path="/userdashboard" element={<UserDashboard />} />
                  {/* Add more routes as needed */}
                </Routes>
                <Footer />
              </>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;