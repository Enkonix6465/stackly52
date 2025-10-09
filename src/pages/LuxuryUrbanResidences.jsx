import React, { useState, useEffect } from "react";
import cateringVideo from "../assets/s2.mp4";
import catering1 from "../assets/f3.jpg";
import catering2 from "../assets/s2.jpg";
import catering3 from "../assets/deals.png";
import AOS from "aos";
import "aos/dist/aos.css";

import { FaArrowLeft, FaArrowRight } from "react-icons/fa";


// Translation object for all text
const translations = {
  en: {
    heroTitle: "Luxury Urban Residences",
    heroDesc: "Experience sophisticated city living with premium amenities, breathtaking views, and unparalleled convenience — right in the heart of the urban landscape!",
    aboutTitle: "About Our Luxury Residences",
    about: [
      "We specialize in creating exceptional urban living experiences with luxury high-rise apartments, penthouses, and exclusive condominiums in prime city locations.",
      "From elegant studio apartments to expansive multi-bedroom penthouses, our properties are designed to match your lifestyle, preferences, and sophisticated taste.",
      "Using only premium materials, cutting-edge technology, and world-class amenities, we ensure that every residence offers unparalleled comfort and prestige.",
      "Our dedicated concierge team handles everything — property management, maintenance, exclusive services, and resident relations — so you can focus on enjoying urban luxury.",
      "Choose from our curated selection of luxury residences or work with our team to find a completely customized living solution designed exclusively for your needs."
    ],
    pricingTitle: "Residence Tiers",
    pricingDesc: "Whether you seek urban convenience or ultimate luxury, we have a residence tier to match your sophisticated lifestyle.",
    plans: [
      { name: "Urban Elite", price: "$899K", period: "starting", features: ["1-2 bedrooms", "City view apartments", "Premium building amenities"], highlighted: false },
      { name: "Metropolitan Luxury", price: "$1.5M", period: "starting", features: ["2-3 bedrooms", "Panoramic views", "Concierge & valet services"], highlighted: true },
      { name: "Penthouse Collection", price: "$3.2M", period: "starting", features: ["3+ bedrooms", "Private terraces", "Exclusive penthouse amenities & services"], highlighted: false },
    ],
    testimonials: [
      { name: "Jennifer Clark", role: "Investment Banker", text: "Living here is exceptional — stunning views, impeccable service, and unmatched luxury in the heart of the city!" },
      { name: "Robert King", role: "Tech Executive", text: "The penthouse exceeded all expectations. World-class amenities and professional concierge services." },
      { name: "Linda Perez", role: "Art Director", text: "The urban lifestyle here is perfect! Premium finishes, smart home technology, and incredible city access." },
      { name: "Chris Allen", role: "Real Estate Developer", text: "Outstanding property management and attention to detail. The building sets the standard for luxury urban living." },
      { name: "Sophia Brown", role: "Fashion Designer", text: "Elegant design, exceptional amenities, and a vibrant community — this is sophisticated city living at its finest!" },
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
    ctaTitle: "Ready to Experience Luxury?",
    ctaDesc: "Discover sophisticated urban living where every detail is designed for your comfort and prestige. Inquire about our luxury residences today!",
    ctaBtn: "Inquire Now",
  },
  ar: {
    heroTitle: "المساكن الحضرية الفاخرة",
    heroDesc: "اختبر الحياة الحضرية المتطورة مع وسائل الراحة المتميزة، الإطلالات الخلابة، والراحة المنقطعة النظير — في قلب المشهد الحضري!",
    aboutTitle: "عن مساكننا الفاخرة",
    about: [
      "نحن متخصصون في خلق تجارب طعام لا تُنسى لحفلات الزفاف، الفعاليات، الحفلات الخاصة، والاحتفالات من جميع الأحجام.",
      "من عشاء فاخر إلى بوفيهات متنوعة، يصمم طهاتنا قوائم تناسب ذوقك وموضوعك وميزانيتك.",
      "باستخدام مكونات طازجة وفاخرة فقط، نضمن أن كل طبق مليء بالنكهة ومقدم بشكل جميل.",
      "فريقنا المحترف يتولى كل شيء — من التخطيط للقائمة، التوصيل، التجهيز، والخدمة — حتى تركز على الاستمتاع بمناسبتك.",
      "اختر من باقات التموين المرنة أو اطلب قائمة مخصصة بالكامل لمناسبتك الخاصة."
    ],
    pricingTitle: "باقاتنا",
    pricingDesc: "سواء كانت مناسبة حميمة أو احتفالًا كبيرًا، لدينا باقة تناسب كل حدث.",
    plans: [
      { name: "حدث أساسي", price: "$199", period: "/فعالية", features: ["حتى 20 ضيفًا", "خيارات قائمة قياسية", "توصيل مجاني حتى 10 أميال"], highlighted: false },
      { name: "حدث مميز", price: "$499", period: "/فعالية", features: ["حتى 50 ضيفًا", "قائمة مخصصة", "مدير فعالية خاص"], highlighted: true },
      { name: "حدث كبير", price: "$999", period: "/فعالية", features: ["أكثر من 100 ضيف", "قائمة مخصصة بالكامل", "فريق طهاة وخدمة كاملة في الموقع"], highlighted: false },
    ],
    testimonials: [
      { name: "جينيفر كلارك", role: "منظمة فعاليات", text: "كان التموين رائعًا — كل طبق كان طازجًا وجميل التقديم وفي الوقت المحدد!" },
      { name: "روبرت كينج", role: "مدير شركة", text: "استعنّا بهم لمؤتمرنا السنوي. الخدمة كانت احترافية وسلسة." },
      { name: "ليندا بيريز", role: "عروس", text: "كان بوفيه الزفاف مثاليًا! الضيوف أحبوا كل شيء والفريق اهتم بكل التفاصيل." },
      { name: "كريس ألين", role: "مالك مطعم", text: "أداروا فعالية كبيرة دون أي مشاكل. خدمة يمكن الاعتماد عليها حقًا." },
      { name: "صوفيا براون", role: "مضيفة عيد ميلاد", text: "طعام لذيذ، فريق رائع، وتنظيم خالٍ من التوتر — أنصح بهم بشدة!" },
    ],
    testimonialsTitle: "ماذا يقول العملاء",
    amenitiesTitle: "المرافق والفوائد",
    amenitiesDesc: "اكتشف المرافق والفوائد الاستثنائية التي تجعل عقاراتنا مثالية للحياة العائلية العصرية.",
    amenities: [
      { title: "تقنية المنزل الذكي", description: "أنظمة ذكية متكاملة للإضاءة والأمان والتحكم بالمناخ في جميع أنحاء المنزل." },
      { title: "مرافق مجتمعية متميزة", description: "الوصول إلى النادي ومركز اللياقة وحمام السباحة ومناطق ألعاب الأطفال." },
      { title: "فوائد الموقع المتميز", description: "قرب من المدارس المصنفة عالياً ومراكز التسوق ومحاور النقل الرئيسية." },
      { title: "كفاءة الطاقة", description: "ميزات صديقة للبيئة تشمل الألواح الشمسية والأجهزة الفعالة والمواد المستدامة." },
    ],
    ctaTitle: "جاهز لحجز مناسبتك؟",
    ctaDesc: "دعنا نهتم بالطعام بينما تركز على خلق لحظات لا تُنسى. احجز خدمة التموين الآن!",
    ctaBtn: "احجز الآن",
  },
  he: {
    heroTitle: "דירות יוקרה עירוניות",
    heroDesc: "חוו חיים עירוניים מתוחכמים עם שירותים מעולים, נופים עוצרי נשימה ונוחות שאין שני לה — בלב הנוף העירוני!",
    aboutTitle: "על הדירות היוקרה שלנו",
    about: [
      "אנו מתמחים ביצירת חוויות קולינריות בלתי נשכחות לחתונות, אירועים עסקיים, מסיבות פרטיות וחגיגות בכל גודל.",
      "מארוחות ערב אלגנטיות ועד בופה עשיר, השפים שלנו בונים תפריטים מותאמים לטעם, לנושא ולתקציב שלכם.",
      "באמצעות מרכיבים טריים ואיכותיים בלבד, אנו מבטיחים שכל מנה תהיה עשירה בטעם ומוגשת בצורה מרהיבה.",
      "הצוות המקצועי שלנו דואג להכל — תכנון תפריט, משלוח, סידור ושירות — כדי שתוכלו ליהנות מהאירוע.",
      "בחרו מתוך חבילות קייטרינג גמישות או בקשו תפריט מותאם אישית לאירוע שלכם."
    ],
    pricingTitle: "החבילות שלנו",
    pricingDesc: "בין אם זו התכנסות אינטימית או חגיגה גדולה, יש לנו חבילה לכל אירוע.",
    plans: [
      { name: "אירוע בסיסי", price: "$199", period: "/אירוע", features: ["עד 20 אורחים", "אפשרויות תפריט סטנדרטיות", "משלוח חינם עד 10 מייל"], highlighted: false },
      { name: "אירוע פרימיום", price: "$499", period: "/אירוע", features: ["עד 50 אורחים", "תפריט מותאם אישית", "מנהל אירוע ייעודי"], highlighted: true },
      { name: "אירוע גדול", price: "$999", period: "/אירוע", features: ["100+ אורחים", "תפריט מותאם במלואו", "צוות שפים ושירות מלא במקום"], highlighted: false },
    ],
    testimonials: [
      { name: "ג'ניפר קלארק", role: "מתכננת אירועים", text: "הקייטרינג היה מושלם — כל מנה הייתה טרייה, יפהפיה ובזמן!" },
      { name: "רוברט קינג", role: "מנהל חברה", text: "הזמנו אותם לכנס השנתי שלנו. השירות היה מקצועי וזורם." },
      { name: "לינדה פרז", role: "כלה", text: "הבופה בחתונה היה מושלם! האורחים אהבו כל ביס והצוות דאג להכל." },
      { name: "כריס אלן", role: "בעל מסעדה", text: "הם ניהלו אירוע גדול בלי שום בעיה. שירות אמין באמת." },
      { name: "סופיה בראון", role: "מארחת יום הולדת", text: "אוכל טעים, צוות נהדר וארגון ללא דאגות — ממליצה בחום!" },
    ],
    testimonialsTitle: "מה הלקוחות אומרים",
    amenitiesTitle: "שירותים ויתרונות",
    amenitiesDesc: "גלו את השירותים והיתרונות יוצאי הדופן שהופכים את הנכסים שלנו למושלמים לחיי משפחה מודרניים.",
    amenities: [
      { title: "טכנולוגיית בית חכם", description: "מערכות חכמות משולבות לתאורה, ביטחון ובקרת אקלים בכל הבית." },
      { title: "שירותים קהילתיים מובחרים", description: "גישה למועדון, מרכז כושר, בריכת שחייה ואזורי משחק לילדים." },
      { title: "יתרונות מיקום מעולה", description: "קרבה לבתי ספר מובילים, מרכזי קניות וצמתי תחבורה מרכזיים." },
      { title: "יעילות אנרגטית", description: "תכונות ידידותיות לסביבה כולל פאנלים סולאריים, מכשירים יעילים וחומרים בני קיימא." },
    ],
    ctaTitle: "מוכנים להזמין לאירוע?",
    ctaDesc: "תנו לנו לדאוג לאוכל בזמן שאתם יוצרים רגעים בלתי נשכחים. הזמינו שירותי קייטרינג עוד היום!",
    ctaBtn: "הזמן עכשיו",
  },
};

const LuxuryUrbanResidences = () => {
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
          src={cateringVideo}
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
          {/* Left Image - balanced height */}
          <div 
            className="w-full md:w-1/2 flex justify-center items-center min-h-[340px] h-full"
            data-aos="slide-right"
            data-aos-duration="1000"
          >
            <img
              src={catering1}
              alt="Our Catering Service"
              className="w-full md:max-w-full md:h-[340px] max-w-md h-full object-cover rounded-2xl shadow-lg"
            />
          </div>

          {/* Right Content - balanced height */}
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
                data-aos-delay={`${400 + i * 200}`}
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
          {translations[language].plans.map((plan, index) => (
            <div
              key={index}
              className={`flex flex-col items-center rounded-2xl p-8 shadow-lg border 
                ${plan.highlighted ? 'text-white scale-105' : (theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-800')}`}
              style={{
                ...(plan.highlighted ? {backgroundColor: 'rgba(72, 111, 136, 0.8)'} : {}),
                ...(dir === 'rtl' ? {textAlign:'right'} : {})
              }}
              data-aos="fade-up"
              data-aos-delay={`${(index + 1) * 200}`}
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
                {language === 'ar' ? 'استفسر الآن' : language === 'he' ? 'בקש מידע' : 'Inquire Now'}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
  <section className={`py-10 px-4 ${sectionAltBg}`}>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          {/* Left Side - Text Card */}
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

            {/* Arrows */}
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

          {/* Right Side - Image */}
          <div 
            className="flex justify-center"
            data-aos="slide-right"
            data-aos-duration="1000"
          >
            <img
              src={catering2}
              alt="Catering dishes"
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
          src={catering3}
          alt="Catering service"
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

export default LuxuryUrbanResidences;
