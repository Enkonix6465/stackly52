import React, { useState, useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import mealVideo from "../assets/meal.mp4";
import meal1 from "../assets/meals1.webp";
import meal2 from "../assets/meal2.jpg";
import meal3 from "../assets/meal3.jpg";

import { FaArrowLeft, FaArrowRight } from "react-icons/fa";


// Translation object for all text
const translations = {
  en: {
    heroTitle: "Skyline Penthouse Collection",
    heroDesc: "Luxury penthouses with breathtaking city views — where elegance meets modern living.",
    aboutTitle: "Why Choose Our Penthouse Collection?",
    about: [
      "Experience unparalleled luxury in our exclusive penthouse collection featuring panoramic city views.",
      "Each penthouse is meticulously designed with premium finishes, state-of-the-art amenities, and spacious layouts.",
      "Whether you're seeking a primary residence, investment property, or luxury retreat, our penthouses offer the ultimate in sophisticated living.",
      "Flexible viewing schedules, customizable interior options, and dedicated concierge services."
    ],
    pricingTitle: "Penthouse Plans",
    pricingDesc: "Choose the penthouse that matches your luxury lifestyle.",
    plans: [
      { name: "Urban Vista", price: "$2.5M", period: "", features: ["2-bed penthouse", "Private terrace", "City skyline views"], highlighted: false },
      { name: "Metropolitan Heights", price: "$4.2M", period: "", features: ["3-bed penthouse", "Rooftop garden", "Premium finishes"], highlighted: true },
      { name: "Platinum Sky", price: "$6.8M", period: "", features: ["4-bed penthouse", "Private elevator", "360° panoramic views"], highlighted: false },
    ],
    testimonials: [
      { name: "Ava Mitchell", role: "Real Estate Investor", text: "The penthouse exceeded all expectations — stunning views and impeccable design make it a perfect investment." },
      { name: "Liam Walker", role: "Tech Executive", text: "Living in this penthouse is like being on top of the world — the perfect blend of luxury and convenience!" },
      { name: "Isabella Green", role: "Interior Designer", text: "The architectural details and premium finishes in this penthouse are absolutely breathtaking." },
      { name: "Noah Davis", role: "Investment Banker", text: "Prime location, exceptional quality, and incredible value — this penthouse is a rare find!" },
      { name: "Mia Johnson", role: "Luxury Property Owner", text: "I've owned multiple properties, but this penthouse collection stands in a class of its own!" },
    ],
    testimonialsTitle: "What Residents Say",
    amenitiesTitle: "Amenities & Benefits",
    amenitiesDesc: "Discover the exceptional amenities and benefits that make our properties perfect for modern family living.",
    amenities: [
      { title: "Smart Home Technology", description: "Integrated smart systems for lighting, security, and climate control throughout the home." },
      { title: "Premium Community Amenities", description: "Access to clubhouse, fitness center, swimming pool, and children's playground areas." },
      { title: "Prime Location Benefits", description: "Close proximity to top-rated schools, shopping centers, and major transportation hubs." },
      { title: "Energy Efficiency", description: "Eco-friendly features including solar panels, efficient appliances, and sustainable materials." },
    ],
    ctaTitle: "Ready to Live Above the City?",
    ctaDesc: "Secure your penthouse today and experience luxury living at its finest.",
    ctaBtn: "View Penthouses",
  },
  ar: {
    heroTitle: "مجموعة البنتهاوس سكاي لاين",
    heroDesc: "شقق فاخرة مع إطلالات خلابة على المدينة — حيث تلتقي الأناقة بالحياة العصرية.",
    aboutTitle: "لماذا تختار مجموعة البنتهاوس لدينا؟",
    about: [
      "استمتع برفاهية لا مثيل لها في مجموعة البنتهاوس الحصرية مع إطلالات بانورامية على المدينة.",
      "كل بنتهاوس مصمم بعناية فائقة مع تشطيبات فاخرة ووسائل راحة حديثة وتخطيط واسع.",
      "سواء كنت تبحث عن مسكن أساسي أو استثمار عقاري أو ملاذ فاخر، توفر شققنا أقصى درجات الحياة الراقية.",
      "جداول مشاهدة مرنة وخيارات تصميم داخلي قابلة للتخصيص وخدمات كونسيرج مخصصة."
    ],
    pricingTitle: "خطط البنتهاوس",
    pricingDesc: "اختر البنتهاوس الذي يناسب أسلوب حياتك الفاخر.",
    plans: [
      { name: "إطلالة حضرية", price: "2.5 مليون $", period: "", features: ["بنتهاوس غرفتين", "تراس خاص", "إطلالة على أفق المدينة"], highlighted: false },
      { name: "مرتفعات العاصمة", price: "4.2 مليون $", period: "", features: ["بنتهاوس 3 غرف", "حديقة على السطح", "تشطيبات فاخرة"], highlighted: true },
      { name: "بلاتينيوم سكاي", price: "6.8 مليون $", period: "", features: ["بنتهاوس 4 غرف", "مصعد خاص", "إطلالة بانورامية 360°"], highlighted: false },
    ],
    testimonials: [
      { name: "آفا ميتشل", role: "مستثمرة عقارية", text: "البنتهاوس فاق كل التوقعات — إطلالات مذهلة وتصميم لا تشوبه شائبة يجعله استثمارًا مثاليًا." },
      { name: "ليام ووكر", role: "مدير تنفيذي تقني", text: "العيش في هذا البنتهاوس كأنك في قمة العالم — مزيج مثالي من الفخامة والراحة!" },
      { name: "إيزابيلا جرين", role: "مصممة داخلية", text: "التفاصيل المعمارية والتشطيبات الفاخرة في هذا البنتهاوس مذهلة حقًا." },
      { name: "نواه ديفيس", role: "مصرفي استثماري", text: "موقع ممتاز وجودة استثنائية وقيمة لا تصدق — هذا البنتهاوس اكتشاف نادر!" },
      { name: "ميا جونسون", role: "مالكة عقارات فاخرة", text: "لقد امتلكت عدة عقارات، لكن مجموعة البنتهاوس هذه تقف في فئة خاصة بها!" },
    ],
    testimonialsTitle: "ماذا يقول السكان",
    amenitiesTitle: "المرافق والفوائد",
    amenitiesDesc: "اكتشف المرافق والفوائد الاستثنائية التي تجعل عقاراتنا مثالية للحياة العائلية العصرية.",
    amenities: [
      { title: "تقنية المنزل الذكي", description: "أنظمة ذكية متكاملة للإضاءة والأمان والتحكم بالمناخ في جميع أنحاء المنزل." },
      { title: "مرافق مجتمعية متميزة", description: "الوصول إلى النادي ومركز اللياقة وحمام السباحة ومناطق ألعاب الأطفال." },
      { title: "فوائد الموقع المتميز", description: "قرب من المدارس المصنفة عالياً ومراكز التسوق ومحاور النقل الرئيسية." },
      { title: "كفاءة الطاقة", description: "ميزات صديقة للبيئة تشمل الألواح الشمسية والأجهزة الفعالة والمواد المستدامة." },
    ],
    ctaTitle: "جاهز للعيش فوق المدينة؟",
    ctaDesc: "احجز البنتهاوس الخاص بك اليوم واستمتع بالحياة الفاخرة في أبهى صورها.",
    ctaBtn: "اعرض البنتهاوس",
  },
  he: {
    heroTitle: "קולקציית פנטהאוס סקיילין",
    heroDesc: "פנטהאוסים יוקרתיים עם נוף עוצר נשימה של העיר — שבו אלגנטיות פוגשת חיים מודרניים.",
    aboutTitle: "למה לבחור בקולקציית הפנטהאוס שלנו?",
    about: [
      "חוו יוקרה ללא תחרות בקולקציית הפנטהאוס הבלעדית שלנו עם נופים פנורמיים של העיר.",
      "כל פנטהאוס מעוצב בקפידה עם גימורים איכותיים, שירותים חדישים ופריסות מרווחות.",
      "בין אם אתם מחפשים מקום מגורים ראשי, נכס השקעה או מקום מפלט יוקרתי, הפנטהאוסים שלנו מציעים את המקסימום בחיים מתוחכמים.",
      "לוחות צפיה גמישים, אפשרויות עיצוב פנים מותאמות אישית ושירותי קונסיירז' מסורים."
    ],
    pricingTitle: "תוכניות פנטהאוס",
    pricingDesc: "בחרו את הפנטהאוס שמתאים לאורח החיים היוקרתי שלכם.",
    plans: [
      { name: "נוף עירוני", price: "$2.5M", period: "", features: ["פנטהאוס 2 חדרים", "מרפסת פרטית", "נוף קו הרקיע של העיר"], highlighted: false },
      { name: "גבהים מטרופוליטניים", price: "$4.2M", period: "", features: ["פנטהאוס 3 חדרים", "גן גג", "גימורים פרימיום"], highlighted: true },
      { name: "פלטינום סקיי", price: "$6.8M", period: "", features: ["פנטהאוס 4 חדרים", "מעלית פרטית", "נוף פנורמי 360°"], highlighted: false },
    ],
    testimonials: [
      { name: "אווה מיטשל", role: "משקיעת נדל\"ן", text: "הפנטהאוס עבר את כל הציפיות — נופים מדהימים ועיצוב ללא דופי הופכים אותו להשקעה מושלמת." },
      { name: "ליאם ווקר", role: "מנהל טכנולוגיה", text: "לחיות בפנטהאוס הזה זה כמו להיות בראש העולם — שילוב מושלם של יוקרה ונוחות!" },
      { name: "איזבלה גרין", role: "מעצבת פנים", text: "הפרטים האדריכליים והגימורים הפרימיום בפנטהאוס הזה פשוט עוצרי נשימה." },
      { name: "נואה דייוויס", role: "בנקאי השקעות", text: "מיקום מעולה, איכות יוצאת דופן וערך מדהים — הפנטהאוס הזה הוא ממצא נדיר!" },
      { name: "מיה ג'ונסון", role: "בעלת נכסי יוקרה", text: "הייתי בעלת נכסים מרובים, אבל קולקציית הפנטהאוס הזו עומדת בקטגוריה משלה!" },
    ],
    testimonialsTitle: "מה התושבים אומרים",
    amenitiesTitle: "שירותים ויתרונות",
    amenitiesDesc: "גלו את השירותים והיתרונות יוצאי הדופן שהופכים את הנכסים שלנו למושלמים לחיי משפחה מודרניים.",
    amenities: [
      { title: "טכנולוגיית בית חכם", description: "מערכות חכמות משולבות לתאורה, ביטחון ובקרת אקלים בכל הבית." },
      { title: "שירותים קהילתיים מובחרים", description: "גישה למועדון, מרכז כושר, בריכת שחייה ואזורי משחק לילדים." },
      { title: "יתרונות מיקום מעולה", description: "קרבה לבתי ספר מובילים, מרכזי קניות וצמתי תחבורה מרכזיים." },
      { title: "יעילות אנרגטית", description: "תכונות ידידותיות לסביבה כולל פאנלים סולאריים, מכשירים יעילים וחומרים בני קיימא." },
    ],
    ctaTitle: "מוכנים לחיות מעל העיר?",
    ctaDesc: "הבטיחו את הפנטהאוס שלכם היום וחוו חיים יוקרתיים בשיאם.",
    ctaBtn: "צפו בפנטהאוסים",
  },
};

const SubscriptionMealsHero = () => {
  // Language and theme state synced with Header
  const [language, setLanguage] = useState('en');
  const [theme, setTheme] = useState('light');
  // Map UI language names to codes
  const langMap = {
    English: 'en',
    Arabic: 'ar',
    Hebrew: 'he',
    en: 'en',
    ar: 'ar',
    he: 'he',
  };
  React.useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000,
      offset: 100,
      once: true,
      mirror: false,
    });

    if (typeof window !== 'undefined') {
      const storedTheme = localStorage.getItem('theme') || 'light';
      setTheme(storedTheme);
      const storedSelectedLang = localStorage.getItem('selectedLanguage') || 'English';
      setLanguage(langMap[storedSelectedLang] || 'en');
      const handleThemeChange = () => {
        const newTheme = localStorage.getItem('theme') || 'light';
        setTheme(newTheme);
      };
      const handleLangChange = () => {
        const newSelectedLang = localStorage.getItem('selectedLanguage') || 'English';
        setLanguage(langMap[newSelectedLang] || 'en');
      };
      window.addEventListener('theme-changed', handleThemeChange);
      window.addEventListener('storage', handleThemeChange);
      window.addEventListener('language-changed', handleLangChange);
      window.addEventListener('storage', handleLangChange);
      return () => {
        window.removeEventListener('theme-changed', handleThemeChange);
        window.removeEventListener('storage', handleThemeChange);
        window.removeEventListener('language-changed', handleLangChange);
        window.removeEventListener('storage', handleLangChange);
      };
    }
  }, []);

  // Theme toggle handler
  const handleToggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    if (typeof window !== 'undefined') {
      localStorage.setItem('theme', newTheme);
      window.dispatchEvent(new Event('theme-changed'));
    }
  };

  // Set RTL/LTR direction
  const dir = language === 'ar' || language === 'he' ? 'rtl' : 'ltr';

  // Testimonial carousel
  const [index, setIndex] = useState(0);
  const nextTestimonial = () => {
    setIndex((prev) => (prev + 1) % translations[language].testimonials.length);
  };
  const prevTestimonial = () => {
    setIndex((prev) => (prev - 1 + translations[language].testimonials.length) % translations[language].testimonials.length);
  };
  const testimonial = translations[language].testimonials[index];

  // Section background classes
  const sectionBg = theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black';
  const sectionAltBg = theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-red-50 text-black';
  const cardBg = theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-gray-100 text-black';
  const pricingBg = theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-black';

  return (
    <div dir={dir} className={sectionBg}>
      {/* Theme Toggle Button */}
      <div className="flex justify-end p-4">
        <button
          onClick={handleToggleTheme}
          className={`px-4 py-2 rounded-full font-semibold shadow transition duration-300 ${theme === 'dark' ? 'bg-white text-black hover:bg-gray-200' : 'bg-black text-white hover:bg-gray-800'}`}
        >
          {theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        </button>
      </div>
      {/* Hero Section */}
  <section className="relative w-full h-[85vh] overflow-hidden">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src={mealVideo}
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black/40"></div>
        <div className="relative z-10 flex flex-col items-center justify-center text-center h-full px-4">
          <h1 
            className="text-5xl md:text-7xl font-bold text-white drop-shadow-lg" 
            style={dir === 'rtl' ? {textAlign:'right'} : {}}
            data-aos="fade-up"
            data-aos-delay="200"
          >
            {translations[language].heroTitle}
          </h1>
          <p 
            className="mt-6 text-lg md:text-2xl text-gray-200 max-w-2xl" 
            style={dir === 'rtl' ? {textAlign:'right'} : {}}
            data-aos="fade-up"
            data-aos-delay="400"
          >
            {translations[language].heroDesc}
          </p>
        </div>
      </section>

  {/* About Section */}
  <section className={`py-20 px-6 md:px-20 ${sectionAltBg}`}> 
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div 
            className="w-full md:w-1/2 flex justify-center items-center min-h-[340px] h-full"
            data-aos="slide-right"
            data-aos-duration="1000"
          >
            <img
              src={meal1}
              alt="Subscription meal"
              className="w-full md:max-w-full md:h-[340px] max-w-md h-full object-cover rounded-2xl shadow-lg"
            />
          </div>
          <div 
            className="w-full md:w-1/2 flex flex-col items-start justify-center min-h-[340px] h-full md:pl-8 text-justify"
            data-aos="slide-left"
            data-aos-duration="1000"
          >
            <h2 
              className="text-4xl font-bold text-red-500 mb-6" 
              style={dir === 'rtl' ? {textAlign:'right'} : {}}
              data-aos="fade-up"
              data-aos-delay="200"
            >
              {translations[language].aboutTitle}
            </h2>
            {translations[language].about.map((p, i) => (
              <p 
                className="mb-4" 
                key={i} 
                style={dir === 'rtl' ? {textAlign:'right'} : {}}
                data-aos="fade-up"
                data-aos-delay={400 + i * 200}
              >
                {p}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
  <section className={`py-20 px-6 ${pricingBg} text-center`} id="pricing">
        <h2 
          className="text-4xl font-bold text-red-500 mb-4" 
          style={dir === 'rtl' ? {textAlign:'right'} : {}}
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          {translations[language].pricingTitle}
        </h2>
        <p 
          className="max-w-2xl mx-auto mb-12" 
          style={dir === 'rtl' ? {textAlign:'right'} : {}}
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {translations[language].pricingDesc}
        </p>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {translations[language].plans.map((plan, idx) => (
            <div
              key={idx}
              className={`flex flex-col items-center rounded-2xl p-8 shadow-lg border 
                ${plan.highlighted ? (theme === 'dark' ? 'bg-red-700 text-white scale-105' : 'bg-red-500 text-white scale-105') : (theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-800')}`}
              style={dir === 'rtl' ? {textAlign:'right'} : {}}
              data-aos="fade-up"
              data-aos-delay={400 + idx * 200}
            >
              <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
              <div className="text-4xl font-extrabold mb-2">
                {plan.price} <span className="text-lg font-medium">{plan.period}</span>
              </div>
              <ul className="mb-6 space-y-2">
                {plan.features.map((feature, i) => (
                  <li key={i} className="text-sm">{feature}</li>
                ))}
              </ul>
              <button
                className={`px-6 py-3 rounded-full font-semibold transition 
                  ${plan.highlighted 
                    ? "bg-white text-red-500 hover:bg-gray-100" 
                    : "bg-red-500 text-white hover:bg-red-600"}`}
              >
                {translations[language].ctaBtn}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
  <section className={`py-10 px-4 ${sectionAltBg}`}>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          <div 
            className="text-center md:text-left"
            data-aos="slide-right"
            data-aos-duration="1000"
          >
            <h2 
              className={`text-4xl font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-black'}`} 
              style={dir === 'rtl' ? {textAlign:'right'} : {}}
              data-aos="fade-up"
              data-aos-delay="200"
            >
              {translations[language].testimonialsTitle}
            </h2>
            <div 
              className={`rounded-2xl p-8 shadow-lg ${cardBg}`}
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <p className="text-lg italic mb-6" style={dir === 'rtl' ? {textAlign:'right'} : {}}>
                "{testimonial.text}"
              </p>
              <h3 className="text-xl font-semibold">{testimonial.name}</h3>
              <p className="text-red-500 text-sm">{testimonial.role}</p>
            </div>
            <div 
              className="flex justify-center md:justify-start gap-4 mt-6"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              <button
                onClick={prevTestimonial}
                className="p-3 rounded-full bg-red-500 text-white hover:bg-red-600 transition"
              >
                <FaArrowLeft />
              </button>
              <button
                onClick={nextTestimonial}
                className="p-3 rounded-full bg-red-500 text-white hover:bg-red-600 transition"
              >
                <FaArrowRight />
              </button>
            </div>
          </div>
          <div 
            className="flex justify-center"
            data-aos="slide-left"
            data-aos-duration="1000"
          >
            <img
              src={meal2}
              alt="Healthy meal plan"
              className="rounded-2xl shadow-lg w-full max-w-md h-[350px] w-[500px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* Amenities & Benefits Section */}
  <section className={`py-20 px-6 ${pricingBg} text-center`}>
        <h2 
          className="text-4xl font-bold text-red-500 mb-4" 
          style={dir === 'rtl' ? {textAlign:'right'} : {}}
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          {translations[language].amenitiesTitle}
        </h2>
        <p 
          className={`${theme === 'dark' ? 'text-white' : 'text-gray-600'} max-w-2xl mx-auto mb-12`} 
          style={dir === 'rtl' ? {textAlign:'right'} : {}}
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {translations[language].amenitiesDesc}
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {translations[language].amenities.map((amenity, index) => (
            <div 
              key={index} 
              className={`flex flex-col items-center p-6 rounded-2xl shadow-lg hover:scale-105 transition ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-gray-800 text-white'}`}
              data-aos="fade-up"
              data-aos-delay={400 + index * 200}
            >
              <h3 className="text-xl font-semibold mb-4 text-red-400">{amenity.title}</h3>
              <p className="text-sm text-center leading-relaxed">{amenity.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="relative py-24 px-6 md:px-20 text-white">
        <img
          src={meal3}
          alt="Meal delivery setup"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        <div className="absolute inset-0 bg-red-500/70 z-0"></div>

        <div className="relative z-10 flex flex-col items-center justify-center text-center max-w-3xl mx-auto">
          <h2 
            className="text-5xl font-extrabold mb-6" 
            style={dir === 'rtl' ? {textAlign:'right'} : {}}
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            {translations[language].ctaTitle}
          </h2>
          <p 
            className="text-lg md:text-xl mb-8 leading-relaxed" 
            style={dir === 'rtl' ? {textAlign:'right'} : {}}
            data-aos="fade-up"
            data-aos-delay="200"
          >
            {translations[language].ctaDesc}
          </p>
          <button
            onClick={() => {
              document.getElementById("pricing").scrollIntoView({ behavior: "smooth" });
            }}
            className="bg-white text-black py-4 px-10 text-lg font-semibold rounded-full shadow-lg hover:bg-gray-100 transition duration-300"
            data-aos="zoom-in"
            data-aos-delay="400"
          >
            {translations[language].ctaBtn}
          </button>
        </div>
      </section>
    </div>
  );
};

export default SubscriptionMealsHero;
