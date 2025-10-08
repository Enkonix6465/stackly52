import React, { useState, useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import takeVideo from "../assets/s6.mp4";
import take1 from "../assets/s6.jpg";
import take2 from "../assets/f4.jpg";
import take3 from "../assets/deals.png";

import { FaArrowLeft, FaArrowRight } from "react-icons/fa";


// Translation object for all text
const translations = {
  en: {
    heroTitle: "Mountain & Countryside Escapes",
    heroDesc: "Serene retreats, breathtaking nature — discover your perfect mountain getaway today.",
    aboutTitle: "Why Choose Our Mountain & Countryside Properties?",
    about: [
      "Escape to tranquil mountain retreats and countryside havens where nature meets luxury. Experience peace and serenity away from city life.",
      "Perfect for weekend getaways, permanent residences, or investment properties. Enjoy pristine landscapes and fresh mountain air on your own schedule.",
      "With exclusive locations and premium amenities, you'll always find the perfect retreat to reconnect with nature."
    ],
    pricingTitle: "Property Options",
    pricingDesc: "Choose the mountain retreat that fits your dreams and budget.",
    plans: [
      { name: "Mountain Cabin", price: "$450K", period: "", features: ["2-bed rustic cabin", "Fireplace & deck", "Hiking trail access"], highlighted: false },
      { name: "Alpine Lodge", price: "$750K", period: "", features: ["3-bed luxury lodge", "Mountain views", "Premium finishes"], highlighted: true },
      { name: "Estate Retreat", price: "$1.2M", period: "", features: ["5-bed estate home", "Private acreage", "Ultimate privacy"], highlighted: false },
    ],
    testimonials: [
      { name: "Olivia Carter", role: "Nature Lover", text: "Our mountain cabin exceeded expectations — peaceful mornings and stunning sunsets every day!" },
      { name: "James Allen", role: "City Escapist", text: "The perfect retreat from city stress. Fresh air, hiking trails, and complete tranquility." },
      { name: "Sophia Evans", role: "Family Vacationer", text: "Mountain escapes create lasting family memories. Nature, adventure, and luxury combined perfectly." },
      { name: "Ethan Lewis", role: "Weekend Warrior", text: "Affordable mountain getaway! Great investment and perfect weekend retreat from urban life." },
      { name: "Amelia Scott", role: "Property Owner", text: "Reliable mountain property management and breathtaking natural beauty every season!" },
    ],
    testimonialsTitle: "What Property Owners Say",
    amenitiesTitle: "Amenities & Benefits",
    amenitiesDesc: "Discover the exceptional amenities and benefits that make our properties perfect for modern family living.",
    amenities: [
      { title: "Smart Home Technology", description: "Integrated smart systems for lighting, security, and climate control throughout the home." },
      { title: "Premium Community Amenities", description: "Access to clubhouse, fitness center, swimming pool, and children's playground areas." },
      { title: "Prime Location Benefits", description: "Close proximity to top-rated schools, shopping centers, and major transportation hubs." },
      { title: "Energy Efficiency", description: "Eco-friendly features including solar panels, efficient appliances, and sustainable materials." },
    ],
    ctaTitle: "Ready for Mountain Living?",
    ctaDesc: "Secure your mountain retreat now and escape to nature when it's perfect for you.",
    ctaBtn: "View Properties",
  },
  ar: {
    heroTitle: "ملاذات الجبال والريف",
    heroDesc: "ملاذات هادئة وطبيعة خلابة — اكتشف ملاذك الجبلي المثالي اليوم.",
    aboutTitle: "لماذا تختار عقارات الجبال والريف لدينا؟",
    about: [
      "اهرب إلى ملاذات جبلية هادئة وواحات ريفية حيث تلتقي الطبيعة بالفخامة. استمتع بالسلام والهدوء بعيدًا عن حياة المدينة.",
      "مثالي للإجازات الأسبوعية أو الإقامة الدائمة أو العقارات الاستثمارية. استمتع بالمناظر الطبيعية البكر والهواء الجبلي النقي في وقتك.",
      "مع مواقع حصرية ووسائل راحة فاخرة، ستجد دائمًا الملاذ المثالي للتواصل مع الطبيعة."
    ],
    pricingTitle: "خيارات العقارات",
    pricingDesc: "اختر الملاذ الجبلي الذي يناسب أحلامك وميزانيتك.",
    plans: [
      { name: "كوخ جبلي", price: "450 ألف $", period: "", features: ["كوخ ريفي غرفتين", "مدفأة وشرفة", "الوصول لممرات المشي"], highlighted: false },
      { name: "نزل جبلي", price: "750 ألف $", period: "", features: ["نزل فاخر 3 غرف", "إطلالات جبلية", "تشطيبات فاخرة"], highlighted: true },
      { name: "ملكية ريفية", price: "1.2 مليون $", period: "", features: ["منزل 5 غرف", "أرض خاصة", "خصوصية مطلقة"], highlighted: false },
    ],
    testimonials: [
      { name: "أوليفيا كارتر", role: "محبة الطبيعة", text: "كوخنا الجبلي فاق التوقعات — صباحات هادئة وغروب شمس مذهل كل يوم!" },
      { name: "جيمس ألين", role: "هارب من المدينة", text: "الملاذ المثالي من ضغوط المدينة. هواء نقي وممرات مشي وهدوء تام." },
      { name: "صوفيا إيفانز", role: "مسافرة عائلية", text: "ملاذات الجبال تخلق ذكريات عائلية دائمة. طبيعة ومغامرة وفخامة مجتمعة بشكل مثالي." },
      { name: "إيثان لويس", role: "محارب نهاية الأسبوع", text: "ملاذ جبلي بأسعار معقولة! استثمار رائع وملاذ مثالي لنهايات الأسبوع من الحياة الحضرية." },
      { name: "أميليا سكوت", role: "مالكة عقار", text: "إدارة عقارات جبلية موثوقة وجمال طبيعي خلاب في كل فصل!" },
    ],
    testimonialsTitle: "ماذا يقول ملاك العقارات",
    amenitiesTitle: "المرافق والفوائد",
    amenitiesDesc: "اكتشف المرافق والفوائد الاستثنائية التي تجعل عقاراتنا مثالية للحياة العائلية العصرية.",
    amenities: [
      { title: "تقنية المنزل الذكي", description: "أنظمة ذكية متكاملة للإضاءة والأمان والتحكم بالمناخ في جميع أنحاء المنزل." },
      { title: "مرافق مجتمعية متميزة", description: "الوصول إلى النادي ومركز اللياقة وحمام السباحة ومناطق ألعاب الأطفال." },
      { title: "فوائد الموقع المتميز", description: "قرب من المدارس المصنفة عالياً ومراكز التسوق ومحاور النقل الرئيسية." },
      { title: "كفاءة الطاقة", description: "ميزات صديقة للبيئة تشمل الألواح الشمسية والأجهزة الفعالة والمواد المستدامة." },
    ],
    ctaTitle: "مستعد للحياة الجبلية؟",
    ctaDesc: "احجز ملاذك الجبلي الآن واهرب إلى الطبيعة عندما يكون مثاليًا لك.",
    ctaBtn: "اعرض العقارات",
  },
  he: {
    heroTitle: "מפלטי הרים וכפרים",
    heroDesc: "מפלטים שלווים, טבע עוצר נשימה — גלו את המפלט ההררי המושלם שלכם היום.",
    aboutTitle: "למה לבחור בנכסי ההרים והכפרים שלנו?",
    about: [
      "ברחו למפלטי הרים שלווים ומקלטי כפרים שבהם הטבע פוגש יוקרה. חוו שלווה ורגיעה הרחק מחיי העיר.",
      "מושלם לחופשות סוף שבוע, מגורים קבועים או נכסי השקעה. תיהנו מנופים בתוליים ואוויר הררי צח בזמנכם.",
      "עם מיקומים בלעדיים ושירותים מובחרים, תמיד תמצאו את המפלט המושלם להתחבר מחדש עם הטבע."
    ],
    pricingTitle: "אפשרויות נכסים",
    pricingDesc: "בחרו את המפלט ההררי שמתאים לחלומות ולתקציב שלכם.",
    plans: [
      { name: "בקתת הרים", price: "$450K", period: "", features: ["בקתה כפרית 2 חדרים", "אח ומרפסת", "גישה לשבילי הליכה"], highlighted: false },
      { name: "אכסנייה אלפינית", price: "$750K", period: "", features: ["אכסנייה יוקרתית 3 חדרים", "נוף הרים", "גימורים פרימיום"], highlighted: true },
      { name: "מפלט אחוזה", price: "$1.2M", period: "", features: ["בית אחוזה 5 חדרים", "שטח פרטי", "פרטיות מוחלטת"], highlighted: false },
    ],
    testimonials: [
      { name: "אוליביה קרטר", role: "חובבת טבע", text: "הבקתה ההררית שלנו עברה את הציפיות — בקרים שלווים ושקיעות מדהימות כל יום!" },
      { name: "ג'יימס אלן", role: "בורח מהעיר", text: "המפלט המושלם מלחצי העיר. אוויר צח, שבילי הליכה ושלווה מוחלטת." },
      { name: "סופיה אוונס", role: "נופשת משפחתית", text: "מפלטי הרים יוצרים זיכרונות משפחתיים לכל החיים. טבע, הרפתקה ויוקרה משולבים בצורה מושלמת." },
      { name: "אית'ן לואיס", role: "לוחם סופי שבוע", text: "מפלט הררי במחיר סביר! השקעה נהדרת ומפלט מושלם לסופי שבוע מהחיים העירוניים." },
      { name: "אמיליה סקוט", role: "בעלת נכסים", text: "ניהול נכסי הרים אמין ויופי טבעי עוצר נשימה בכל עונה!" },
    ],
    testimonialsTitle: "מה בעלי הנכסים אומרים",
    amenitiesTitle: "שירותים ויתרונות",
    amenitiesDesc: "גלו את השירותים והיתרונות יוצאי הדופן שהופכים את הנכסים שלנו למושלמים לחיי משפחה מודרניים.",
    amenities: [
      { title: "טכנולוגיית בית חכם", description: "מערכות חכמות משולבות לתאורה, ביטחון ובקרת אקלים בכל הבית." },
      { title: "שירותים קהילתיים מובחרים", description: "גישה למועדון, מרכז כושר, בריכת שחייה ואזורי משחק לילדים." },
      { title: "יתרונות מיקום מעולה", description: "קרבה לבתי ספר מובילים, מרכזי קניות וצמתי תחבורה מרכזיים." },
      { title: "יעילות אנרגטית", description: "תכונות ידידותיות לסביבה כולל פאנלים סולאריים, מכשירים יעילים וחומרים בני קיימא." },
    ],
    ctaTitle: "מוכנים לחיים הרריים?",
    ctaDesc: "הבטיחו את המפלט ההררי שלכם עכשיו וברחו אל הטבע כשזה מושלם עבורכם.",
    ctaBtn: "צפו בנכסים",
  },
};

const TakeawayPickupHero = () => {
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
  const sectionAltBg = theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-50 text-black';
  const cardBg = theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-gray-100 text-black';
  const pricingBg = theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-black';

  return (
    <div dir={dir} className={sectionBg}>
  {/* ...removed registration form overlay... */}
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
          src={takeVideo}
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
              src={take1}
              alt="Mountain retreat"
              className="w-full md:max-w-full md:h-[340px] max-w-md h-full object-cover rounded-2xl shadow-lg"
            />
          </div>
          <div 
            className="w-full md:w-1/2 flex flex-col items-start justify-center min-h-[340px] h-full md:pl-8 text-justify"
            data-aos="slide-left"
            data-aos-duration="1000"
          >
            <h2 
              className="text-4xl font-bold mb-6" 
              style={{
                color: 'rgba(72, 111, 136, 0.8)',
                ...(dir === 'rtl' ? {textAlign:'right'} : {})
              }}
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
            <section className={`py-20 px-6 ${pricingBg} text-center`} id="pricing">
        <h2 
          className="text-4xl font-bold mb-4" 
          style={{
            color: 'rgba(72, 111, 136, 0.8)',
            ...(dir === 'rtl' ? {textAlign:'right'} : {})
          }}
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
                ${plan.highlighted ? 'text-white scale-105' : (theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-800')}`}
              style={{
                ...(plan.highlighted ? {backgroundColor: 'rgba(72, 111, 136, 0.8)'} : {}),
                ...(dir === 'rtl' ? {textAlign:'right'} : {})
              }}
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
                    ? "bg-white hover:bg-gray-100" 
                    : "text-white hover:opacity-80"}`}
                style={plan.highlighted 
                  ? {color: 'rgba(72, 111, 136, 0.8)'} 
                  : {backgroundColor: 'rgba(72, 111, 136, 0.8)'}
                }
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
              <p className="text-sm" style={{color: 'rgba(72, 111, 136, 0.8)'}}>{testimonial.role}</p>
            </div>
            <div 
              className="flex justify-center md:justify-start gap-4 mt-6"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              <button
                onClick={prevTestimonial}
                className="p-3 rounded-full text-white hover:opacity-80 transition"
                style={{backgroundColor: 'rgba(72, 111, 136, 0.8)'}}
              >
                <FaArrowLeft />
              </button>
              <button
                onClick={nextTestimonial}
                className="p-3 rounded-full text-white hover:opacity-80 transition"
                style={{backgroundColor: 'rgba(72, 111, 136, 0.8)'}}
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
              src={take2}
              alt="Mountain property"
              className="rounded-2xl shadow-lg w-full max-w-md h-[350px] w-[500px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* Amenities & Benefits Section */}
  <section className={`py-20 px-6 ${pricingBg} text-center`}>
        <h2 
          className="text-4xl font-bold mb-4" 
          style={{
            color: 'rgba(72, 111, 136, 0.8)',
            ...(dir === 'rtl' ? {textAlign:'right'} : {})
          }}
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
              <h3 className="text-xl font-semibold mb-4" style={{color: 'rgba(72, 111, 136, 0.8)'}}>{amenity.title}</h3>
              <p className="text-sm text-center leading-relaxed">{amenity.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="relative py-24 px-6 md:px-20 text-white">
        <img
          src={take3}
          alt="Mountain escape"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        <div className="absolute inset-0 z-0" style={{backgroundColor: 'rgba(72, 111, 136, 0.8)'}}></div>

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
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
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

export default TakeawayPickupHero;