import React, { useState, useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import partyVideo from "../assets/s4.mp4";
import party1 from "../assets/s4.jpg";
import party2 from "../assets/coast.jpg";
import party3 from "../assets/deals.png";

import { FaArrowLeft, FaArrowRight } from "react-icons/fa";


// Translation object for all text
const translations = {
  en: {
    heroTitle: "Coastal & Beachfront Retreats",
    heroDesc: "Escape to pristine coastal havens — stunning oceanfront properties with panoramic views, private beaches, and world-class amenities.",
    aboutTitle: "Why Choose Our Coastal Properties?",
    about: [
      "Experience the tranquility of oceanfront living where every sunrise and sunset creates unforgettable memories from your private retreat.",
      "Our beachfront properties feature direct beach access, panoramic ocean views, and luxury amenities designed for the ultimate coastal lifestyle.",
      "From intimate beach cottages to grand oceanfront estates, each property offers unique charm with modern comforts and breathtaking natural beauty.",
      "Whether seeking a peaceful getaway, investment opportunity, or permanent residence, our coastal properties provide an unparalleled seaside living experience."
    ],
    pricingTitle: "Coastal Collections",
    pricingDesc: "Exclusive beachfront properties to suit every coastal living dream.",
    plans: [
      { name: "Beach Cottages", price: "$850K", period: "starting", features: ["Direct beach access", "Ocean view deck", "Private parking"], highlighted: false },
      { name: "Oceanfront Villas", price: "$2.2M", period: "starting", features: ["Panoramic ocean views", "Private beach area", "Luxury amenities"], highlighted: true },
      { name: "Seaside Estates", price: "$4.8M", period: "starting", features: ["Expansive beachfront", "Multiple ocean-facing suites", "Private dock & concierge"], highlighted: false },
    ],
    testimonials: [
      { name: "Charlotte Morrison", role: "Beach House Owner", text: "Waking up to ocean views every morning is pure magic — our coastal retreat is everything we dreamed of!" },
      { name: "Benjamin Wells", role: "Vacation Home Investor", text: "The beachfront location and luxury amenities make this property a perfect investment and personal escape." },
      { name: "Isabella Chen", role: "Coastal Resident", text: "Living steps from the beach with panoramic ocean views has transformed our lifestyle completely." },
      { name: "Harrison Blake", role: "Resort Developer", text: "The quality and location of these coastal properties are exceptional — perfect for luxury hospitality ventures." },
      { name: "Savannah Rivers", role: "Retreat Owner", text: "Our seaside estate has become the perfect sanctuary for family gatherings and peaceful getaways." },
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
    ctaTitle: "Ready for Coastal Living?",
    ctaDesc: "Discover your perfect beachfront retreat now and embrace the serenity of oceanfront living with luxury amenities.",
    ctaBtn: "View Properties",
  },
  ar: {
    heroTitle: "ملاذات ساحلية وشاطئية",
    heroDesc: "اهرب إلى ملاذات ساحلية بكر — عقارات مذهلة على الواجهة البحرية مع إطلالات بانورامية وشواطئ خاصة ومرافق عالمية المستوى.",
    aboutTitle: "لماذا تختار عقاراتنا الساحلية؟",
    about: [
      "استمتع بهدوء المعيشة على الواجهة البحرية حيث كل شروق وغروب شمس يخلق ذكريات لا تُنسى من ملاذك الخاص.",
      "تتميز عقاراتنا على الشاطئ بوصول مباشر للشاطئ وإطلالات بانورامية على المحيط ووسائل راحة فاخرة مصممة لأسلوب الحياة الساحلية المثالي.",
      "من أكواخ الشاطئ الحميمة إلى العقارات الكبيرة على الواجهة البحرية، يوفر كل عقار سحراً فريداً مع وسائل الراحة الحديثة والجمال الطبيعي الخلاب.",
      "سواء كنت تبحث عن هروب هادئ أو فرصة استثمارية أو إقامة دائمة، توفر عقاراتنا الساحلية تجربة معيشة بحرية لا مثيل لها."
    ],
    pricingTitle: "المجموعات الساحلية",
    pricingDesc: "عقارات حصرية على الشاطئ لتناسب كل حلم معيشة ساحلية.",
    plans: [
      { name: "أكواخ الشاطئ", price: "$850K", period: "ابتداءً من", features: ["وصول مباشر للشاطئ", "سطح بإطلالة على المحيط", "موقف خاص"], highlighted: false },
      { name: "فيلات على الواجهة البحرية", price: "$2.2M", period: "ابتداءً من", features: ["إطلالات بانورامية على المحيط", "منطقة شاطئ خاصة", "مرافق فاخرة"], highlighted: true },
      { name: "عقارات ساحلية", price: "$4.8M", period: "ابتداءً من", features: ["واجهة بحرية واسعة", "أجنحة متعددة مطلة على المحيط", "رصيف خاص وخدمة كونسيرج"], highlighted: false },
    ],
    testimonials: [
      { name: "شارلوت موريسون", role: "مالكة منزل شاطئي", text: "الاستيقاظ على إطلالات المحيط كل صباح هو سحر خالص — ملاذنا الساحلي هو كل ما حلمنا به!" },
      { name: "بنجامين ويلز", role: "مستثمر منزل إجازات", text: "الموقع على الشاطئ والمرافق الفاخرة تجعل من هذا العقار استثماراً مثالياً وهروباً شخصياً." },
      { name: "إيزابيلا تشين", role: "ساكنة ساحلية", text: "العيش على بُعد خطوات من الشاطئ مع إطلالات بانورامية على المحيط غيّر أسلوب حياتنا تماماً." },
      { name: "هاريسون بليك", role: "مطور منتجعات", text: "جودة وموقع هذه العقارات الساحلية استثنائية — مثالية لمشاريع الضيافة الفاخرة." },
      { name: "سافانا ريفرز", role: "مالكة ملاذ", text: "عقارنا الساحلي أصبح الملاذ المثالي للتجمعات العائلية والهروب الهادئ." },
    ],
    testimonialsTitle: "ماذا يقول مالكو العقارات",
    amenitiesTitle: "المرافق والفوائد",
    amenitiesDesc: "اكتشف المرافق والفوائد الاستثنائية التي تجعل عقاراتنا مثالية للحياة العائلية العصرية.",
    amenities: [
      { title: "تقنية المنزل الذكي", description: "أنظمة ذكية متكاملة للإضاءة والأمان والتحكم بالمناخ في جميع أنحاء المنزل." },
      { title: "مرافق مجتمعية متميزة", description: "الوصول إلى النادي ومركز اللياقة وحمام السباحة ومناطق ألعاب الأطفال." },
      { title: "فوائد الموقع المتميز", description: "قرب من المدارس المصنفة عالياً ومراكز التسوق ومحاور النقل الرئيسية." },
      { title: "كفاءة الطاقة", description: "ميزات صديقة للبيئة تشمل الألواح الشمسية والأجهزة الفعالة والمواد المستدامة." },
    ],
    ctaTitle: "جاهز للمعيشة الساحلية؟",
    ctaDesc: "اكتشف ملاذك المثالي على الشاطئ الآن واحتضن هدوء المعيشة على الواجهة البحرية مع المرافق الفاخرة.",
    ctaBtn: "عرض العقارات",
  },
  he: {
    heroTitle: "נופש חופי ואתרי נופש על חוף הים",
    heroDesc: "ברחו למקלטים חופיים בתוליים — נכסים מדהימים על קו החוף עם נוף פנורמי, חופים פרטיים ושירותים ברמה עולמית.",
    aboutTitle: "למה לבחור בנכסים החופיים שלנו?",
    about: [
      "חוו את השלווה של חיים על קו החוף שבהם כל זריחה ושקיעה יוצרות זיכרונות בלתי נשכחים מהמקלט הפרטי שלכם.",
      "הנכסים שלנו על חוף הים כוללים גישה ישירה לחוף, נוף פנורמי של האוקיינוס ושירותי יוקרה המיועדים לאורח החיים החופי האולטימטיבי.",
      "מבקתות חוף אינטימיות ועד אחוזות גדולות על קו החוף, כל נכס מציע קסם ייחודי עם נוחות מודרנית ויופי טבעי עוצר נשימה.",
      "בין אם אתם מחפשים מקום מנוחה שקט, הזדמנות השקעה או מקום מגורים קבוע, הנכסים החופיים שלנו מספקים חוויית חיים חופית ללא תחרות."
    ],
    pricingTitle: "אוספים חופיים",
    pricingDesc: "נכסים בלעדיים על חוף הים שמתאימים לכל חלום חיים חופיים.",
    plans: [
      { name: "בקתות חוף", price: "$850K", period: "החל מ", features: ["גישה ישירה לחוף", "מרפסת עם נוף אוקיינוס", "חניה פרטית"], highlighted: false },
      { name: "וילות על קו החוף", price: "$2.2M", period: "החל מ", features: ["נוף פנורמי של האוקיינוס", "אזור חוף פרטי", "שירותי יוקרה"], highlighted: true },
      { name: "אחוזות חופיות", price: "$4.8M", period: "החל מ", features: ["קו חוף נרחב", "מספר חדרים מול האוקיינוס", "רציף פרטי וקונסיירז'"], highlighted: false },
    ],
    testimonials: [
      { name: "שרלוט מוריסון", role: "בעלת בית חוף", text: "להתעורר לנוף של האוקיינוס כל בוקר זה קסם טהור — המקלט החופי שלנו הוא כל מה שחלמנו עליו!" },
      { name: "בנג'מין ולס", role: "משקיע בית נופש", text: "המיקום על חוף הים והשירותים היוקרתיים הופכים את הנכס הזה להשקעה מושלמת ומקום מפלט אישי." },
      { name: "איזבלה צ'ן", role: "תושבת חופית", text: "לחיות במרחק צעדים מהחוף עם נוף פנורמי של האוקיינוס שינה לחלוטין את אורח החיים שלנו." },
      { name: "האריסון בלייק", role: "מפתח אתרי נופש", text: "האיכות והמיקום של הנכסים החופיים האלה יוצאי דופן — מושלמים למיזמי אירוח יוקרתיים." },
      { name: "סוואנה ריברס", role: "בעלת מקלט", text: "האחוזה החופית שלנו הפכה למקלט המושלם למפגשים משפחתיים ולמקומות מנוחה שקטים." },
    ],
    testimonialsTitle: "מה אומרים בעלי הנכסים",
    amenitiesTitle: "שירותים ויתרונות",
    amenitiesDesc: "גלו את השירותים והיתרונות יוצאי הדופן שהופכים את הנכסים שלנו למושלמים לחיי משפחה מודרניים.",
    amenities: [
      { title: "טכנולוגיית בית חכם", description: "מערכות חכמות משולבות לתאורה, ביטחון ובקרת אקלים בכל הבית." },
      { title: "שירותים קהילתיים מובחרים", description: "גישה למועדון, מרכז כושר, בריכת שחייה ואזורי משחק לילדים." },
      { title: "יתרונות מיקום מעולה", description: "קרבה לבתי ספר מובילים, מרכזי קניות וצמתי תחבורה מרכזיים." },
      { title: "יעילות אנרגטית", description: "תכונות ידידותיות לסביבה כולל פאנלים סולאריים, מכשירים יעילים וחומרים בני קיימא." },
    ],
    ctaTitle: "מוכנים לחיים חופיים?",
    ctaDesc: "גלו את המקלט המושלם שלכם על חוף הים עכשיו וחבקו את השלווה של חיים על קו החוף עם שירותי יוקרה.",
    ctaBtn: "צפו בנכסים",
  },
};

const CoastalBeachfrontRetreats = () => {
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
          src={partyVideo}
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
              src={party1}
              alt="Coastal property"
              className="w-full md:max-w-full md:h-[340px] max-w-md h-full object-cover rounded-2xl shadow-lg"
            />
          </div>
          <div 
            className="w-full md:w-1/2 flex flex-col items-start justify-center min-h-[340px] h-full md:pl-8 text-justify"
            data-aos="slide-right"
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

      {/* Pricing Section */}
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
                {language === 'ar' ? 'عرض العقارات' : language === 'he' ? 'צפו בנכסים' : 'View Properties'}
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
            data-aos="slide-right"
            data-aos-duration="1000"
          >
            <img
              src={party2}
              alt="Beachfront property"
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
          src={party3}
          alt="Coastal retreat view"
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

export default CoastalBeachfrontRetreats;