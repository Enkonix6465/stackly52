import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ImpactSection from "../components/ImpactSection";
import AOS from "aos";
import "aos/dist/aos.css";
import chef1 from "../assets/p3.jpg";
import chef2 from "../assets/p2.jpg";
import chef3 from "../assets/p1.jpg";
import home2hero from "../assets/home2hero.mp4";
import menu1 from "../assets/menu1.jpg";
import menu2 from "../assets/menu2.jpg";
import menu3 from "../assets/menu3.jpg";
import menu4 from "../assets/menu4.jpg";
import special1 from "../assets/f1.jpg";
import special2 from "../assets/f2.jpg";
import special3 from "../assets/f3.jpg";
import special4 from "../assets/f4.jpg";
import buffet1 from "../assets/buffet1.jpg";
import buffet2 from "../assets/buffet2.jpg";
import heritage from "../assets/heritage.jpg";

const translations = {
  English: {
    heroTitle: "Premium Real Estate Solutions",
    heroDesc: "Welcome to your premier real estate destination, where every property transaction is a success story! Experience expert guidance, personalized service, and comprehensive market solution.",
    readMore: "Read More",
    specialsTitle: "Featured Properties Gallery",
    specials: ["Luxury Villa", "Modern Penthouse", "Family Home", "Investment Property"],
    valuationTitle: "Check Your Property Value",
    valuationHeroTitle: "Find Out What Your Property is Worth",
    valuationSubtitle: "Get an instant, data-driven estimate of your home's current market value.",
    locationLabel: "Location",
    propertyTypeLabel: "Property Type",
    sizeLabel: "Size (sq. ft.)",
    bedroomsLabel: "Bedrooms",
    bathroomsLabel: "Bathrooms",
    ageLabel: "Age of Property (years)",
    amenitiesLabel: "Amenities",
    valuationBtn: "Get My Valuation",
    propertyTypes: ["Apartment", "Villa", "Land", "Townhouse", "Condo"],
    amenitiesList: ["Parking", "Swimming Pool", "Garden", "Gym", "Security", "Elevator"],
    resultTitle: "Estimated Property Value",
    priceRange: "Price Range",
    insight: "Similar properties in this area sold for a comparable range last month.",
    detailedReportBtn: "Contact Our Experts for a Detailed Report",
    professionalsTitle: "Meet Our Real Estate Professionals",
    chef1: "Sarah Johnson",
    chef2: "Michael Rodriguez", 
    chef3: "Amanda Chen",
    chefRole: "Real Estate Agent",
    insightsTitle: "Recent Market Insights",
    priceGrowth: "Price Growth",
    marketTrends: "Market Trends", 
    insightsCardTitle: "Market Analysis & Reports",
    insightsCardDesc: "Stay informed with our latest market analysis, price trends, and property insights. Our data-driven reports help you make informed real estate decisions with confidence.",
    insightsList: [
      "Monthly market reports",
      "Price trend analysis",
      "Investment opportunities",
      "Neighborhood insights",
    ],
    insightsBtn: "View Market Reports",
    ctaTitle: "Ready to Find Your Dream Property?",
    ctaDesc: "Experience premium real estate service, exclusive listings, and expert guidance. Book a consultation for personalized service or browse our extensive property portfolio. We're here to help you find your perfect property—every step of the way!",
    reserveBtn: "Get Started Today",
    orderBtn: "Explore Listings"
  },
  Arabic: {
    heroTitle: "حلول عقارية متميزة",
    heroDesc: "مرحبًا بك في وجهتك العقارية المتميزة، حيث كل معاملة عقارية هي قصة نجاح! اختبر الإرشاد المتخصص والخدمة الشخصية وحلول السوق الشاملة. اكتشف المنازل الفاخرة وفرص الاستثمار والخدمة الاستثنائية—مصممة خصيصًا لك.",
    readMore: "اقرأ المزيد",
    specialsTitle: "معرض العقارات المميزة",
    specials: ["فيلا فاخرة", "بنتهاوس حديث", "منزل عائلي", "عقار استثماري"],
    valuationTitle: "تحقق من قيمة عقارك",
    valuationHeroTitle: "اكتشف قيمة عقارك الحقيقية",
    valuationSubtitle: "احصل على تقدير فوري مدعوم بالبيانات لقيمة منزلك الحالية في السوق.",
    locationLabel: "الموقع",
    propertyTypeLabel: "نوع العقار",
    sizeLabel: "المساحة (قدم مربع)",
    bedroomsLabel: "غرف النوم",
    bathroomsLabel: "الحمامات",
    ageLabel: "عمر العقار (سنوات)",
    amenitiesLabel: "المرافق",
    valuationBtn: "احصل على التقييم",
    propertyTypes: ["شقة", "فيلا", "أرض", "منزل مدرجات", "شقة سكنية"],
    amenitiesList: ["موقف سيارات", "مسبح", "حديقة", "صالة رياضية", "أمن", "مصعد"],
    resultTitle: "القيمة التقديرية للعقار",
    priceRange: "نطاق السعر",
    insight: "بيعت عقارات مماثلة في هذه المنطقة بنطاق مماثل الشهر الماضي.",
    detailedReportBtn: "اتصل بخبرائنا للحصول على تقرير مفصل",
    professionalsTitle: "تعرف على محترفي العقارات لدينا",
    chef1: "سارة جونسون",
    chef2: "مايكل رودريغيز",
    chef3: "أماندا تشين",
    chefRole: "وكيل عقاري",
    insightsTitle: "رؤى السوق الأخيرة",
    priceGrowth: "نمو الأسعار",
    marketTrends: "اتجاهات السوق",
    insightsCardTitle: "تحليل السوق والتقارير", 
    insightsCardDesc: "ابق على اطلاع بأحدث تحليلات السوق واتجاهات الأسعار ورؤى العقارات. تساعدك تقاريرنا المدعومة بالبيانات على اتخاذ قرارات عقارية مدروسة بثقة.",
    insightsList: [
      "تقارير السوق الشهرية",
      "تحليل اتجاهات الأسعار",
      "فرص الاستثمار",
      "رؤى الأحياء",
    ],
    insightsBtn: "عرض تقارير السوق",
    ctaTitle: "مستعد للعثور على عقار أحلامك؟",
    ctaDesc: "اختبر خدمة عقارية متميزة وقوائم حصرية وإرشاد متخصص. احجز استشارة للخدمة الشخصية أو تصفح محفظة العقارات الواسعة لدينا. نحن هنا لمساعدتك في العثور على العقار المثالي—في كل خطوة!",
    reserveBtn: "ابدأ اليوم",
    orderBtn: "استكشف القوائم",
  },
  Hebrew: {
    heroTitle: "פתרונות נדל\"ן מובילים",
    heroDesc: "ברוכים הבאים ליעד הנדל\"ן המוביל שלכם, כאן כל עסקת נכס היא סיפור הצלחה! חוו הדרכה מקצועית, שירות אישי ופתרונות שוק מקיפים. גלו בתי יוקרה, הזדמנויות השקעה ושירות יוצא דופן—מותאם במיוחד עבורכם.",
    readMore: "קרא עוד",
    specialsTitle: "גלריית נכסים מובחרים",
    specials: ["וילה יוקרתית", "פנטהאוס מודרני", "בית משפחתי", "נכס השקעה"],
    valuationTitle: "בדוק את שווי הנכס שלך",
    valuationHeroTitle: "גלה כמה שווה הנכס שלך",
    valuationSubtitle: "קבל הערכה מיידית מבוססת נתונים של שווי השוק הנוכחי של הבית שלך.",
    locationLabel: "מיקום",
    propertyTypeLabel: "סוג נכס",
    sizeLabel: "גודל (רגל רבוע)",
    bedroomsLabel: "חדרי שינה",
    bathroomsLabel: "חדרי רחצה",
    ageLabel: "גיל הנכס (שנים)",
    amenitiesLabel: "שירותים",
    valuationBtn: "קבל את ההערכה שלי",
    propertyTypes: ["דירה", "וילה", "קרקע", "בית טורים", "דירת גן"],
    amenitiesList: ["חניה", "בריכת שחייה", "גינה", "חדר כושר", "אבטחה", "מעלית"],
    resultTitle: "שווי נכס משוער",
    priceRange: "טווח מחירים",
    insight: "נכסים דומים באזור זה נמכרו בטווח דומה בחודש שעבר.",
    detailedReportBtn: "צור קשר עם המומחים שלנו לדוח מפורט",
    professionalsTitle: "הכירו את אנשי הנדל\"ן המקצועיים שלנו",
    chef1: "שרה ג'ונסון",
    chef2: "מייקל רודריגז",
    chef3: "אמנדה צ'ן",
    chefRole: "סוכן נדל\"ן",
    insightsTitle: "תובנות שוק עדכניות",
    priceGrowth: "עליית מחירים",
    marketTrends: "מגמות שוק",
    insightsCardTitle: "ניתוח שוק ודוחות",
    insightsCardDesc: "הישארו מעודכנים עם הניתוחים העדכניים שלנו לשוק, מגמות המחירים ותובנות נכסים. הדוחות שלנו המבוססים על נתונים עוזרים לכם לקבל החלטות נדל\"ן מושכלות בביטחון.",
    insightsList: [
      "דוחות שוק חודשיים",
      "ניתוח מגמות מחירים",
      "הזדמנויות השקעה",
      "תובנות שכונות",
    ],
    insightsBtn: "צפה בדוחות שוק",
    ctaTitle: "מוכן למצוא את נכס החלומות שלך?",
    ctaDesc: "חווה שירות נדל\"ן מובחר, רשימות בלעדיות והדרכה מקצועית. הזמן יעוץ לשירות אישי או עיין בתיק הנכסים הנרחב שלנו. אנחנו כאן כדי לעזור לך למצוא את הנכס המושלם—בכל שלב!",
    reserveBtn: "התחל היום",
    orderBtn: "גלה נכסים",
  },
};

export default function Home2() {
  // Theme toggle handler
  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    if (typeof window !== 'undefined') {
      localStorage.setItem('theme', newTheme);
    }
  };
  const chefRef = React.useRef(null);
  const navigate = useNavigate();
  // Determine RTL based on language
  const [language, setLanguage] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('selectedLanguage') || 'English';
    }
    return 'English';
  });
  const isRTL = language === 'Arabic';
  // Select translations for current language
  const t = translations[language] || translations['English'];

  // Scroll handler for Read More
  const handleReadMore = () => {
    if (chefRef.current) {
      chefRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  // ...existing code...
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') || 'light';
    }
    return 'light';
  });

  const [showValuationResult, setShowValuationResult] = useState(false);

  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000,
      offset: 100,
      once: false,
      mirror: false,
    });

    const handleLanguageChange = () => {
      setLanguage(localStorage.getItem('selectedLanguage') || 'English');
    };
    
    const handleThemeChange = () => {
      setTheme(localStorage.getItem('theme') || 'light');
    };
    
    window.addEventListener('language-changed', handleLanguageChange);
    window.addEventListener('storage', handleLanguageChange);
    window.addEventListener('theme-changed', handleThemeChange);
    window.addEventListener('storage', handleThemeChange);
    
    return () => {
      window.removeEventListener('language-changed', handleLanguageChange);
      window.removeEventListener('storage', handleLanguageChange);
      window.removeEventListener('theme-changed', handleThemeChange);
      window.removeEventListener('storage', handleThemeChange);
    };
  }, []);

  const handleValuationSubmit = (e) => {
    e.preventDefault();
    setShowValuationResult(true);
    // Scroll to result section
    setTimeout(() => {
      const resultElement = document.getElementById('valuationResult');
      if (resultElement) {
        resultElement.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <div
      className={`flex flex-col min-h-screen ${theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'}`}
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      {/* Theme Toggle Button */}
      <button
        onClick={toggleTheme}
        className="fixed top-6 right-6 z-30 bg-gray-200 dark:bg-gray-800 text-black dark:text-white px-4 py-2 rounded shadow hover:bg-gray-300 dark:hover:bg-gray-700 transition"
        aria-label="Toggle theme"
      >
        {theme === 'dark' ? '☀️ Light' : '🌙 Dark'}
      </button>

      {/* Hero Section */}
      <section className="relative w-full h-[90vh] flex items-center justify-center overflow-hidden">
        <video
          src={home2hero}
          autoPlay
          loop
          muted
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
        <div className="relative z-10 flex flex-col items-center justify-center text-center h-full px-4">
          <h1 
            className="text-5xl md:text-7xl font-bold text-white drop-shadow-lg mb-6"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            {t.heroTitle}
          </h1>
          <p 
            className="mt-6 text-lg md:text-2xl text-gray-200 max-w-2xl"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            {t.heroDesc}
          </p>
        </div>
        <div className="absolute top-0 left-0 w-full h-full bg-black/40"></div>
      </section>

      {/* Featured Properties Gallery Section */}
      <section className={`py-20 px-6 md:px-20 ${theme === 'dark' ? 'bg-[#222]' : 'bg-gray-50'} text-center`}>
        <h2 
          className="text-4xl font-bold mb-8" 
          style={{color: 'rgb(72, 111, 136)'}}
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          {t.specialsTitle}
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {[special1, special2, special3, special4].map((img, idx) => (
            <div 
              key={idx} 
              className="flex flex-col items-center"
              data-aos="fade-up"
              data-aos-delay={`${(idx + 1) * 100}`}
            >
              <img src={img} alt={t.specials[idx]} className="w-full h-48 object-cover rounded-2xl shadow-lg mb-4" />
              <span className="text-lg font-semibold">{t.specials[idx]}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Property Valuation Tool Section */}
      <section className={`py-20 px-6 md:px-20 ${theme === 'dark' ? 'bg-[#181818]' : 'bg-white'}`}>
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div 
            className="text-center mb-12"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <h2 
              className="text-4xl md:text-5xl font-bold mb-4" 
              style={{color: 'rgb(72, 111, 136)'}}
              data-aos="fade-up"
              data-aos-delay="200"
            >
              {t.valuationTitle}
            </h2>
            <h3 
              className="text-2xl md:text-3xl font-semibold mb-4" 
              style={{color: 'rgb(72, 111, 136)'}}
              data-aos="fade-up"
              data-aos-delay="400"
            >
              {t.valuationHeroTitle}
            </h3>
            <p 
              className={`text-lg ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}
              data-aos="fade-up"
              data-aos-delay="600"
            >
              {t.valuationSubtitle}
            </p>
          </div>

          {/* Valuation Form */}
          <div 
            className={`rounded-2xl shadow-lg p-8 ${theme === 'dark' ? 'bg-[#222]' : 'bg-gray-50'}`} 
            style={{border: '2px solid rgb(72, 111, 136)'}}
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <form className="grid md:grid-cols-2 gap-6" onSubmit={handleValuationSubmit}>
              {/* Location */}
              <div className="md:col-span-2">
                <label className={`block text-sm font-medium mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-700'}`}>
                  {t.locationLabel}
                </label>
                <input 
                  type="text" 
                  placeholder="Enter your location..."
                  className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-opacity-50 ${theme === 'dark' ? 'bg-[#181818] border-gray-600 text-white' : 'bg-white border-gray-300'}`}
                  style={{focusRingColor: 'rgb(72, 111, 136)'}}
                />
              </div>

              {/* Property Type */}
              <div>
                <label className={`block text-sm font-medium mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-700'}`}>
                  {t.propertyTypeLabel}
                </label>
                <select className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-opacity-50 ${theme === 'dark' ? 'bg-[#181818] border-gray-600 text-white' : 'bg-white border-gray-300'}`}>
                  <option value="">Select property type</option>
                  {t.propertyTypes.map((type, i) => (
                    <option key={i} value={type}>{type}</option>
                  ))}
                </select>
              </div>

              {/* Size */}
              <div>
                <label className={`block text-sm font-medium mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-700'}`}>
                  {t.sizeLabel}
                </label>
                <input 
                  type="number" 
                  placeholder="1000"
                  className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-opacity-50 ${theme === 'dark' ? 'bg-[#181818] border-gray-600 text-white' : 'bg-white border-gray-300'}`}
                />
              </div>

              {/* Bedrooms */}
              <div>
                <label className={`block text-sm font-medium mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-700'}`}>
                  {t.bedroomsLabel}
                </label>
                <select className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-opacity-50 ${theme === 'dark' ? 'bg-[#181818] border-gray-600 text-white' : 'bg-white border-gray-300'}`}>
                  <option value="">Select bedrooms</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5+">5+</option>
                </select>
              </div>

              {/* Bathrooms */}
              <div>
                <label className={`block text-sm font-medium mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-700'}`}>
                  {t.bathroomsLabel}
                </label>
                <select className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-opacity-50 ${theme === 'dark' ? 'bg-[#181818] border-gray-600 text-white' : 'bg-white border-gray-300'}`}>
                  <option value="">Select bathrooms</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5+">5+</option>
                </select>
              </div>

              {/* Age */}
              <div>
                <label className={`block text-sm font-medium mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-700'}`}>
                  {t.ageLabel}
                </label>
                <input 
                  type="number" 
                  placeholder="10"
                  className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-opacity-50 ${theme === 'dark' ? 'bg-[#181818] border-gray-600 text-white' : 'bg-white border-gray-300'}`}
                />
              </div>

              {/* Amenities */}
              <div className="md:col-span-2">
                <label className={`block text-sm font-medium mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-700'}`}>
                  {t.amenitiesLabel}
                </label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {t.amenitiesList.map((amenity, i) => (
                    <label key={i} className={`flex items-center space-x-2 ${theme === 'dark' ? 'text-white' : 'text-gray-700'}`}>
                      <input type="checkbox" className="rounded" style={{accentColor: 'rgb(72, 111, 136)'}} />
                      <span>{amenity}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Submit Button */}
              <div className="md:col-span-2 text-center">
                <button 
                  type="submit"
                  className="text-white font-semibold px-8 py-4 rounded-lg shadow-lg transition text-lg"
                  style={{backgroundColor: 'rgb(72, 111, 136)'}}
                  onMouseEnter={(e) => e.target.style.backgroundColor = 'rgb(62, 101, 126)'}
                  onMouseLeave={(e) => e.target.style.backgroundColor = 'rgb(72, 111, 136)'}
                >
                  {t.valuationBtn}
                </button>
              </div>
            </form>

            {/* Result Section (shown after form submission) */}
            {showValuationResult && (
            <div 
              className={`mt-12 p-6 rounded-lg ${theme === 'dark' ? 'bg-[#181818]' : 'bg-white'} shadow-lg`} 
              id="valuationResult"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <div className="text-center">
                <h3 
                  className="text-2xl font-bold mb-4" 
                  style={{color: 'rgb(72, 111, 136)'}}
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  {t.resultTitle}
                </h3>
                <div 
                  className="text-4xl font-bold mb-2" 
                  style={{color: 'rgb(72, 111, 136)'}}
                  data-aos="zoom-in"
                  data-aos-delay="400"
                >
                  ₹2,50,000
                </div>
                <p 
                  className={`text-lg mb-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}
                  data-aos="fade-up"
                  data-aos-delay="600"
                >
                  <span className="font-semibold">{t.priceRange}:</span> ₹2,20,000 - ₹2,80,000
                </p>
                <p 
                  className={`mb-6 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}
                  data-aos="fade-up"
                  data-aos-delay="800"
                >
                  {t.insight}
                </p>
                <button 
                  className="text-white font-semibold px-6 py-3 rounded-lg shadow transition"
                  style={{backgroundColor: 'rgb(72, 111, 136)'}}
                  onMouseEnter={(e) => e.target.style.backgroundColor = 'rgb(62, 101, 126)'}
                  onMouseLeave={(e) => e.target.style.backgroundColor = 'rgb(72, 111, 136)'}
                  data-aos="fade-up"
                  data-aos-delay="1000"
                >
                  {t.detailedReportBtn}
                </button>
              </div>
            </div>
            )}
          </div>
        </div>
      </section>

      {/* Meet Our Professionals Section */}
      <section className={`w-full py-12 px-4 md:px-0 flex flex-col items-center justify-center ${theme === 'dark' ? 'bg-[#222]' : 'bg-gray-50'}`} ref={chefRef}>
        <h2 
          className={`text-5xl md:text-6xl font-serif font-bold text-center mb-8 ${theme === 'dark' ? 'text-white' : 'text-black'}`}
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          {t.professionalsTitle}
        </h2>
        <div className="max-w-6xl w-full mx-auto grid md:grid-cols-3 gap-12">
          <div 
            className="flex flex-col items-center"
            data-aos="slide-right"
            data-aos-delay="200"
          >
            <img src={chef1} alt="Sarah Johnson" className="w-full h-96 object-cover rounded-lg shadow-lg mb-6" />
            <h3 className={`text-2xl font-serif font-semibold mb-1 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>{t.chef1}</h3>
            <span className={`text-lg font-serif mb-2 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>{t.chefRole}</span>
          </div>
          <div 
            className="flex flex-col items-center relative"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <img src={chef3} alt="Michael Rodriguez" className="w-full h-96 object-cover rounded-lg shadow-lg mb-6" />
            <div className="absolute left-4 top-10 flex flex-col gap-4 z-10">
              <a href="#" className="text-white hover:text-yellow-300 text-2xl"><i className="fab fa-twitter"></i></a>
              <a href="#" className="text-white hover:text-yellow-300 text-2xl"><i className="fab fa-facebook"></i></a>
              <a href="#" className="text-white hover:text-yellow-300 text-2xl"><i className="fab fa-instagram"></i></a>
              <a href="#" className="text-white hover:text-yellow-300 text-2xl"><i className="fab fa-whatsapp"></i></a>
            </div>
            <h3 className={`text-2xl font-serif font-semibold mb-1 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>{t.chef2}</h3>
            <span className={`text-lg font-serif mb-2 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>{t.chefRole}</span>
          </div>
          <div 
            className="flex flex-col items-center"
            data-aos="slide-up"
            data-aos-delay="400"
          >
            <img src={chef2} alt="Amanda Chen" className="w-full h-96 object-cover rounded-lg shadow-lg mb-6" />
            <h3 className={`text-2xl font-serif font-semibold mb-1 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>{t.chef3}</h3>
            <span className={`text-lg font-serif mb-2 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>{t.chefRole}</span>
          </div>
        </div>
      </section>

      {/* Recent Market Insights Section */}
  <section className={`w-full pt-8 pb-20 px-4 md:px-0 flex flex-col items-center justify-center ${theme === 'dark' ? 'bg-[#222]' : 'bg-gray-50'}`}>
        <div className="max-w-6xl w-full mx-auto">
          <h2 
            className={`text-3xl md:text-4xl font-bold mb-10 font-serif text-center ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            {t.insightsTitle}
          </h2>
          <div className="grid md:grid-cols-3 gap-8 items-stretch">
            <div 
              className={`grid gap-4 rounded-lg shadow-lg p-6 text-center ${theme === 'dark' ? 'bg-[#181818]' : 'bg-white'}`}
              data-aos="slide-right"
              data-aos-delay="200"
            >
              <div className="text-3xl font-bold mb-2" style={{color: 'rgb(72, 111, 136)'}}>+8.5%</div>
              <span className={`text-lg font-serif font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>{t.priceGrowth}</span>
              <p className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>Avg. annual growth</p>
            </div>
            <div 
              className={`grid gap-4 rounded-lg shadow-lg p-8 text-center ${theme === 'dark' ? 'bg-[#222]' : 'bg-gray-50'}`} 
              style={{border: '2px solid rgb(72, 111, 136)'}}
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <h3 className="text-2xl font-serif font-bold" style={{color: 'rgb(72, 111, 136)'}}>{t.insightsCardTitle}</h3>
              <p className={` ${theme === 'dark' ? 'text-gray-200' : 'text-gray-700'}`}>{t.insightsCardDesc}</p>
              <ul className={`space-y-2 ${theme === 'dark' ? 'text-gray-200' : 'text-gray-700'}`}>{t.insightsList.map((item, i) => <li key={i}>{item}</li>)}</ul>
              <button 
                className="text-white font-semibold px-6 py-2 rounded-lg shadow transition" 
                style={{backgroundColor: 'rgb(72, 111, 136)'}}
                onMouseEnter={(e) => e.target.style.backgroundColor = 'rgb(62, 101, 126)'}
                onMouseLeave={(e) => e.target.style.backgroundColor = 'rgb(72, 111, 136)'}
              >
                {t.insightsBtn}
              </button>
            </div>
            <div 
              className={`grid gap-4 rounded-lg shadow-lg p-6 text-center ${theme === 'dark' ? 'bg-[#181818]' : 'bg-white'}`}
              data-aos="slide-up"
              data-aos-delay="400"
            >
              <div className="text-3xl font-bold mb-2" style={{color: 'rgb(72, 111, 136)'}}>Market</div>
              <span className={`text-lg font-serif font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>{t.marketTrends}</span>
              <p className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>Real-time data</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`w-full py-16 px-4 md:px-0 flex flex-col items-center justify-center ${theme === 'dark' ? 'bg-[#181818]' : 'bg-white'}`}>
        <div className="max-w-3xl w-full mx-auto flex flex-col items-center justify-center">
          <h2 
            className="text-4xl md:text-5xl font-extrabold text-center mb-4" 
            style={{color: 'rgb(72, 111, 136)'}}
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            {t.ctaTitle}
          </h2>
          <p 
            className={`text-lg text-center mb-8 ${theme === 'dark' ? 'text-gray-200' : 'text-gray-700'}`}
            data-aos="fade-up"
            data-aos-delay="200"
          >
            {t.ctaDesc}
          </p>
          <div 
            className="flex justify-center"
            data-aos="zoom-in"
            data-aos-delay="400"
            data-aos-duration="800"
          >
            <button 
              onClick={() => navigate('/contactus')} 
              className="px-10 py-4 rounded-full text-white font-semibold text-lg shadow-lg transition" 
              style={{backgroundColor: 'rgb(72, 111, 136)'}}
              onMouseEnter={(e) => e.target.style.backgroundColor = 'rgb(62, 101, 126)'}
              onMouseLeave={(e) => e.target.style.backgroundColor = 'rgb(72, 111, 136)'}
            >
              {t.reserveBtn}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}