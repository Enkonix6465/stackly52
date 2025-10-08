import React, { useState, useEffect } from "react";
import foodhero from "../assets/s1.mp4";
import serviceImg from "../assets/s1.jpg"; // Replace with your service image
import food from "../assets/f1.jpg"; // <-- Import your image
import food3 from "../assets/deals.png"; // Replace with your call to action image
import AOS from "aos";
import "aos/dist/aos.css";

import { FaUtensils, FaShoppingCart, FaTruck, FaSmile, FaArrowLeft, FaArrowRight } from "react-icons/fa";


const translations = {
  en: {
    heroTitle: "Modern Family Living Properties",
    heroDesc: "Discover exceptional family homes designed for contemporary living – spacious layouts, premium amenities, and prime locations perfect for your family's lifestyle!",
    aboutTitle: "About Our Properties",
    about: [
      "Our modern family living properties offer thoughtfully designed homes that cater to the evolving needs of today's families. Each property features contemporary architecture, open-concept layouts, and premium finishes.",
      "Whether it’s a quick lunch, a family dinner, or a special celebration, we guarantee quality, hygiene, and satisfaction with every order.",
      "We carefully select prime locations with access to top-rated schools, parks, shopping centers, and community amenities. Every home is built with energy-efficient materials and sustainable practices.",
      "Our streamlined home-buying process makes finding your dream home convenient and stress-free – browse available properties, schedule virtual or in-person tours, and work with our dedicated real estate professionals.",
      "We also offer flexible financing options, first-time buyer programs, and comprehensive home warranties, ensuring there's a perfect solution for every family's needs and budget."
    ],
    pricingTitle: "Property Packages",
    pricingDesc: "Choose a home package that fits your family's needs. Flexible financing options available!",
    plans: [
      {
        name: "Essential",
        price: "$299K",
        period: "starting",
        features: ["2-3 bedrooms", "Modern kitchen", "Basic warranties"],
        highlighted: false,
      },
      {
        name: "Premium",
        price: "$449K",
        period: "starting",
        features: ["3-4 bedrooms", "Smart home features", "Premium finishes"],
        highlighted: true,
      },
      {
        name: "Luxury",
        price: "$649K",
        period: "starting",
        features: ["4-5 bedrooms", "Custom features", "Concierge services"],
        highlighted: false,
      },
    ],
    testimonials: [
      { name: "Sarah Johnson", role: "Family of Four", text: "The home buying process was seamless and our new house is perfect for our growing family! Highly recommend their properties." },
      { name: "Michael Lee", role: "First-Time Buyer", text: "I was impressed by the quality of construction and attention to detail. The financing options made it affordable for us." },
      { name: "Emily Davis", role: "Young Professional", text: "Modern design and great location! I love the smart home features and energy efficiency." },
      { name: "David Wilson", role: "Real Estate Investor", text: "Best property investment I've made. Excellent build quality and strong market value retention." },
      { name: "Olivia Martinez", role: "Interior Designer", text: "The layouts are perfectly designed for modern living. Beautiful finishes and thoughtful space planning." },
    ],
    testimonialsTitle: "What Our Homeowners Say",
    howItWorksTitle: "Amenities & Benefits",
    howItWorksDesc: "Discover the exceptional amenities and benefits that make our properties perfect for modern family living.",
    steps: [
      { title: "Smart Home Technology", description: "Integrated smart systems for lighting, security, and climate control throughout the home." },
      { title: "Premium Community Amenities", description: "Access to clubhouse, fitness center, swimming pool, and children's playground areas." },
      { title: "Prime Location Benefits", description: "Close proximity to top-rated schools, shopping centers, and major transportation hubs." },
      { title: "Energy Efficiency", description: "Eco-friendly features including solar panels, efficient appliances, and sustainable materials." },
    ],
    ctaTitle: "Ready to Find Your Home?",
    ctaDesc: "Explore our modern family properties today and <br /> discover your perfect home with contemporary design and premium amenities!",
    ctaBtn: "Browse Properties",
  },
  ar: {
    heroTitle: "عقارات الحياة العائلية العصرية",
    heroDesc: "اكتشف منازل عائلية استثنائية مصممة للحياة المعاصرة – مساحات واسعة، وسائل راحة متميزة، ومواقع مثالية تناسب أسلوب حياة عائلتك!",
    aboutTitle: "عن عقاراتنا",
    about: [
      "خدمة توصيل الطعام لدينا تضمن حصولك على وجبات طازجة ولذيذة إلى باب منزلك في وقت قياسي. نتعاون مع أفضل المطاعم والطهاة لنقدم لك مجموعة واسعة من المطابخ.",
      "سواء كان غداء سريعًا، عشاء عائليًا، أو احتفالًا خاصًا، نضمن الجودة والنظافة والرضا مع كل طلب.",
      "نختار بعناية أفضل المكونات ونعد الوجبات بأقصى درجات العناية للحفاظ على الطزاجة والنكهة. كل طلب يُعالج بمعايير نظافة صارمة.",
      "منصتنا تجعل الطلب سهلاً ومريحًا – اختر أطباقك المفضلة، خصصها حسب رغبتك، وتابع التوصيل في الوقت الفعلي.",
      "نقدم أيضًا خطط اشتراك مرنة، وخدمات تموين للمناسبات، وخصومات خاصة للطلبات الكبيرة، لنضمن وجود ما يناسب الجميع."
    ],
    pricingTitle: "أسعارنا",
    pricingDesc: "اختر الخطة التي تناسب شهيتك. يمكنك الترقية في أي وقت – بدون رسوم خفية!",
    plans: [
      {
        name: "مبتدئ",
        price: "$9",
        period: "/شهر",
        features: ["وجبة واحدة يوميًا", "توصيل مجاني للطلبات فوق $20", "دعم أساسي"],
        highlighted: false,
      },
      {
        name: "عادي",
        price: "$19",
        period: "/شهر",
        features: ["وجبتان يوميًا", "توصيل أولوية", "قسائم خصم"],
        highlighted: true,
      },
      {
        name: "مميز",
        price: "$29",
        period: "/شهر",
        features: ["وجبات غير محدودة", "توصيل مجاني دائمًا", "دعم مميز"],
        highlighted: false,
      },
    ],
    testimonials: [
      { name: "سارة جونسون", role: "مدونة طعام", text: "كان التوصيل سريعًا جدًا والطعام لذيذ للغاية! أنصح بهذه الخدمة بشدة." },
      { name: "مايكل لي", role: "طاهٍ", text: "أعجبني مدى طزاجة كل شيء. بالتأكيد خياري الأول لرغبات منتصف الليل." },
      { name: "إميلي ديفيس", role: "طالبة", text: "سعر مناسب وطعم رائع! أحب أنني أستطيع تتبع طلبي في الوقت الفعلي." },
      { name: "ديفيد ويلسون", role: "محلل أعمال", text: "أفضل تجربة توصيل مطاعم حصلت عليها. دعم العملاء ممتاز أيضًا." },
      { name: "أوليفيا مارتينيز", role: "مصممة", text: "الوجبات تصل دائمًا ساخنة ومعبأة بعناية. مثالية لأيام العمل المزدحمة." },
    ],
    testimonialsTitle: "ماذا يقول عملاؤنا",
    howItWorksTitle: "المرافق والمميزات",
    howItWorksDesc: "اكتشف المرافق الاستثنائية والمميزات التي تجعل عقاراتنا مثالية للحياة العائلية العصرية.",
    steps: [
      { title: "تقنية المنزل الذكي", description: "أنظمة ذكية متكاملة للإضاءة والأمان وتحكم المناخ في جميع أنحاء المنزل." },
      { title: "مرافق المجتمع المميزة", description: "الوصول إلى النادي ومركز اللياقة البدنية وحمام السباحة ومناطق ملعب الأطفال." },
      { title: "مميزات الموقع المثالي", description: "القرب من المدارس المتميزة ومراكز التسوق ومحاور النقل الرئيسية." },
      { title: "كفاءة الطاقة", description: "ميزات صديقة للبيئة تشمل الألواح الشمسية والأجهزة الفعالة والمواد المستدامة." },
    ],
    ctaTitle: "جاهز للطلب؟",
    ctaDesc: "اطلب الآن واحصل على وجباتك المفضلة <br /> طازجة، ساخنة، وفي وقت قياسي. جرب الفرق اليوم!",
    ctaBtn: "اطلب الآن",
  },
  he: {
    heroTitle: "נכסים למחיה משפחתית מודרנית",
    heroDesc: "גלו בתים משפחתיים יוצאי דופן המיועדים לחיים עכשוויים – פריסות רחבות, שירותים מתקדמים ומיקומים מעולים המושלמים לאורח החיים של המשפחה שלכם!",
    aboutTitle: "על הנכסים שלנו",
    about: [
      "שירות המשלוחים שלנו מבטיח שתקבלו ארוחות טריות וטעימות עד הבית בזמן שיא. אנו משתפים פעולה עם מסעדות ושפים מובילים כדי להביא לכם מגוון רחב של מטבחים.",
      "בין אם זה ארוחת צהריים מהירה, ארוחת ערב משפחתית או חגיגה מיוחדת, אנו מבטיחים איכות, היגיינה ושביעות רצון בכל הזמנה.",
      "אנו בוחרים בקפידה את המרכיבים הטובים ביותר ומבשלים את המנות בדאגה מרבית לשמירה על טריות וטעם. כל הזמנה מטופלת בסטנדרטים מחמירים של ניקיון.",
      "הפלטפורמה שלנו הופכת את ההזמנה לפשוטה ונוחה – בחרו את המנות האהובות, התאימו אותן לטעמכם, ועקבו אחרי המשלוח בזמן אמת.",
      "אנו מציעים גם מסלולי מנוי גמישים, שירותי קייטרינג לאירועים, והנחות מיוחדות להזמנות גדולות – כך שיש משהו לכל אחד."
    ],
    pricingTitle: "המחירים שלנו",
    pricingDesc: "בחרו מסלול שמתאים לתיאבון שלכם. אפשר לשדרג בכל עת – ללא עמלות נסתרות!",
    plans: [
      {
        name: "מתחיל",
        price: "$9",
        period: "/חודש",
        features: ["ארוחה אחת ביום", "משלוח חינם מעל $20", "תמיכה בסיסית"],
        highlighted: false,
      },
      {
        name: "רגיל",
        price: "$19",
        period: "/חודש",
        features: ["2 ארוחות ביום", "משלוח בעדיפות", "קופוני הנחה"],
        highlighted: true,
      },
      {
        name: "פרימיום",
        price: "$29",
        period: "/חודש",
        features: ["ארוחות ללא הגבלה", "משלוח חינם תמיד", "תמיכה פרימיום"],
        highlighted: false,
      },
    ],
    testimonials: [
      { name: "שרה ג'ונסון", role: "בלוגרית אוכל", text: "המשלוח היה מהיר במיוחד והאוכל היה טעים מאוד! ממליצה בחום על השירות." },
      { name: "מייקל לי", role: "שף", text: "התרשמתי מהטריות של הכל. בהחלט הבחירה שלי ללילות רעב." },
      { name: "אמילי דיוויס", role: "סטודנטית", text: "מחיר משתלם וטעם נהדר! אוהבת שאפשר לעקוב אחרי ההזמנה בזמן אמת." },
      { name: "דוד וילסון", role: "אנליסט עסקי", text: "חווית משלוח המסעדות הכי טובה שהייתה לי. גם שירות הלקוחות מצוין." },
      { name: "אוליביה מרטינז", role: "מעצבת", text: "הארוחות תמיד מגיעות חמות וארוזות בקפידה. מושלם לימי עבודה עמוסים." },
    ],
    testimonialsTitle: "מה הלקוחות שלנו אומרים",
    howItWorksTitle: "שירותים ויתרונות",
    howItWorksDesc: "גלו את השירותים יוצאי הדופן והיתרונות שהופכים את הנכסים שלנו למושלמים לחיי משפחה מודרניים.",
    steps: [
      { title: "טכנולוגיית בית חכם", description: "מערכות חכמות משולבות לתאורה, אבטחה ובקרת אקלים בכל רחבי הבית." },
      { title: "שירותים קהילתיים מובחרים", description: "גישה לבית מועדון, מכון כושר, בריכת שחייה ואזורי משחק לילדים." },
      { title: "יתרונות מיקום מעולה", description: "קרבה לבתי ספר מובילים, מרכזי קניות וצמתי תחבורה ראשיים." },
      { title: "יעילות אנרגטית", description: "תכונות ידידותיות לסביבה כולל פאנלים סולאריים, מכשירים יעילים וחומרים ברי קיימא." },
    ],
    ctaTitle: "מוכנים להזמין?",
    ctaDesc: "הזמינו עכשיו וקבלו את המנות האהובות עליכם <br /> טריות, חמות ובזמן שיא. תטעמו את ההבדל כבר היום!",
    ctaBtn: "הזמינו עכשיו",
  },
};


// ...plans now in translations


const FoodDeliveryHero = () => {
  // Sync language with global selection in Header
  const [language, setLanguage] = useState(() => {
    if (typeof window !== 'undefined') {
      const selected = localStorage.getItem('selectedLanguage') || 'English';
      const langMap = { English: 'en', Arabic: 'ar', Hebrew: 'he', en: 'en', ar: 'ar', he: 'he' };
      return langMap[selected] || 'en';
    }
    return 'en';
  });
  // Listen for language changes from Header
  React.useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000,
      offset: 100,
      once: true,
      mirror: false,
    });

    if (typeof window !== 'undefined') {
      const handleLanguageChangeEvent = () => {
        const selected = localStorage.getItem('selectedLanguage') || 'English';
        const langMap = { English: 'en', Arabic: 'ar', Hebrew: 'he', en: 'en', ar: 'ar', he: 'he' };
        setLanguage(langMap[selected] || 'en');
      };
      window.addEventListener('language-changed', handleLanguageChangeEvent);
      window.addEventListener('storage', handleLanguageChangeEvent);
      return () => {
        window.removeEventListener('language-changed', handleLanguageChangeEvent);
        window.removeEventListener('storage', handleLanguageChangeEvent);
      };
    }
  }, []);
  const [theme, setTheme] = useState('light');
  // State for current testimonial index
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  // Handlers for testimonial navigation
  const testimonials = translations[language].testimonials;
  const testimonial = testimonials[testimonialIndex];
  const prevTestimonial = () => {
    setTestimonialIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };
  const nextTestimonial = () => {
    setTestimonialIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };
  // Set text direction based on language
  const dir = (language === 'ar' || language === 'he') ? 'rtl' : 'ltr';

  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedTheme = localStorage.getItem('theme') || 'light';
      setTheme(storedTheme);

      const handleThemeChange = () => {
        const newTheme = localStorage.getItem('theme') || 'light';
        setTheme(newTheme);
      };

      window.addEventListener('theme-changed', handleThemeChange);
      window.addEventListener('storage', handleThemeChange);

      return () => {
        window.removeEventListener('theme-changed', handleThemeChange);
        window.removeEventListener('storage', handleThemeChange);

      };
    }
  }, []);

  // Default background for main section
  const sectionBg = theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50';

  // Default background for alternate sections
  const sectionAltBg = theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white';

  // Background for pricing section
  const pricingBg = theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-50';

  // Default background for testimonial cards
  const cardBg = theme === 'dark' ? 'bg-gray-900' : 'bg-gray-100';

  return (
  <div dir={dir} className={sectionBg}>
       
      {/* Hero Section */}
  <section className="relative w-full h-[90vh] overflow-hidden">
        <video
          className="absolute top-0 left-0 object-cover w-full h-full"
          src={foodhero}
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black/40"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center">
          <h1 
            className="text-5xl font-bold text-white md:text-7xl drop-shadow-lg" 
            style={dir === 'rtl' ? { textAlign: 'right' } : {}}
            data-aos="fade-up"
            data-aos-delay="200"
          >
            {translations[language].heroTitle}
          </h1>
          <p 
            className="max-w-2xl mt-6 text-lg text-gray-200 md:text-2xl" 
            style={dir === 'rtl' ? { textAlign: 'right' } : {}}
            data-aos="fade-up"
            data-aos-delay="400"
          >
            {translations[language].heroDesc}
          </p>
        </div>
      </section>

      {/* About Our Service Section */}
  <section className={`py-20 px-6 md:px-20 ${sectionAltBg}`}> 
        <div className="grid items-center gap-12 md:grid-cols-2">
          {/* Left Image - balanced height */}
          <div 
            className="w-full md:w-1/2 flex justify-center items-center min-h-[340px] h-full"
            data-aos="slide-right"
            data-aos-duration="1000"
          >
            <img
              src={serviceImg}
              alt="Our Service"
              className="w-full md:max-w-full md:h-[340px] max-w-md h-full object-cover shadow-lg rounded-2xl"
            />
          </div>

          {/* Right Content - balanced height */}
          <div 
            className="w-full md:w-1/2 flex flex-col items-start justify-center min-h-[340px] h-full md:pl-8 text-justify"
            data-aos="slide-left"
            data-aos-duration="1000"
          >
            <h2 
              className="mb-6 text-4xl font-bold" 
              style={{
                color: 'rgba(72, 111, 136, 0.8)',
                ...(dir === 'rtl' ? { textAlign: 'right' } : {})
              }}
              data-aos="fade-up"
              data-aos-delay="200"
            >
              {translations[language].aboutTitle}
            </h2>
            {translations[language].about.map((p, i) => (
              <p 
                className="mb-4 " 
                key={i} 
                style={dir === 'rtl' ? { textAlign: 'right' } : {}}
                data-aos="fade-up"
                data-aos-delay={`${400 + i * 200}`}
              >
                {p}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
  <section className={`py-20 px-6 ${pricingBg} text-center`} id="how-it-works">
        <h2 
          className="mb-4 text-4xl font-bold" 
          style={{
            color: 'rgba(72, 111, 136, 0.8)',
            ...(dir === 'rtl' ? { textAlign: 'right' } : {})
          }}
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          {translations[language].howItWorksTitle}
        </h2>
  <p 
          className="max-w-2xl mx-auto mb-12 text-black" 
          style={dir === 'rtl' ? { textAlign: 'right' } : {}}
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {translations[language].howItWorksDesc}
        </p>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
          {translations[language].steps.map((step, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 dark:border-gray-700"
              data-aos="fade-up"
              data-aos-delay={`${(index + 1) * 200}`}
            >
              <div className="text-center">
                <h3 className="mb-4 text-xl font-bold" style={{color: 'rgba(72, 111, 136, 0.8)'}}>{step.title}</h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* Testimonials Section */}
  <section className={`py-10 px-4 ${sectionAltBg}`}> 
        <div className="grid items-center max-w-6xl gap-8 mx-auto md:grid-cols-2">
          <div 
            className="text-center md:text-left"
            data-aos="slide-right"
            data-aos-duration="1000"
          >
            <h2 
              className="text-4xl font-bold mb-6 text-black dark:text-white" 
              style={dir === 'rtl' ? { textAlign: 'right' } : {}}
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
              <p className="mb-6 text-lg italic" style={dir === 'rtl' ? { textAlign: 'right' } : {}}>
                "{testimonial.text}"
              </p>
              <h3 className="text-xl font-semibold">{testimonial.name}</h3>
              <p className="text-sm" style={{color: 'rgba(72, 111, 136, 0.8)'}}>{testimonial.role}</p>
            </div>
            <div 
              className="flex justify-center gap-4 mt-6 md:justify-start"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              <button 
                onClick={prevTestimonial} 
                className="p-3 text-white transition rounded-full hover:opacity-80"
                style={{backgroundColor: 'rgba(72, 111, 136, 0.8)'}}
              >
                <FaArrowLeft />
              </button>
              <button 
                onClick={nextTestimonial} 
                className="p-3 text-white transition rounded-full hover:opacity-80"
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
            <img src={food} alt="Delicious food" className="rounded-2xl shadow-lg w-full max-w-md h-[350px] w-[500px] object-cover" />
          </div>
        </div>
      </section>

      {/* Pricing Section */}
  <section className={`py-20 px-6 ${pricingBg} text-center`} id="pricing">
        <h2 
          className="mb-4 text-4xl font-bold" 
          style={{
            color: 'rgba(72, 111, 136, 0.8)',
            ...(dir === 'rtl' ? { textAlign: 'right' } : {})
          }}
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          {translations[language].pricingTitle}
        </h2>
        <p 
          className="max-w-2xl mx-auto mb-12" 
          style={dir === 'rtl' ? { textAlign: 'right' } : {}}
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {translations[language].pricingDesc}
        </p>
        <div className="grid max-w-6xl gap-8 mx-auto md:grid-cols-3">
          {translations[language].plans.map((plan, index) => (
            <div
              key={index}
              className={
                `flex flex-col items-center rounded-2xl p-8 shadow-lg border ` +
                (plan.highlighted
                  ? 'text-white scale-105'
                  : 'bg-white dark:bg-gray-800 text-gray-800 dark:text-white')
              }
              style={{
                ...(plan.highlighted ? {backgroundColor: 'rgba(72, 111, 136, 0.8)'} : {}),
                ...(dir === 'rtl' ? { textAlign: 'right' } : {})
              }}
              data-aos="fade-up"
              data-aos-delay={`${(index + 1) * 200}`}
            >
              <h3 className="mb-4 text-2xl font-bold">{plan.name}</h3>
              <div className="mb-2 text-4xl font-extrabold">
                {plan.price} <span className="text-lg font-medium">{plan.period}</span>
              </div>
              <ul className="mb-6 space-y-2">
                {plan.features.map((feature, i) => (
                  <li key={i} className="text-sm">{feature}</li>
                ))}
              </ul>
              <button
                className={
                  plan.highlighted
                    ? "px-6 py-3 rounded-full font-semibold transition bg-white hover:bg-gray-100 dark:hover:bg-gray-200"
                    : "px-6 py-3 rounded-full font-semibold transition text-white hover:opacity-80"
                }
                style={plan.highlighted 
                  ? {color: 'rgba(72, 111, 136, 0.8)'} 
                  : {backgroundColor: 'rgba(72, 111, 136, 0.8)'}
                }
              >
                {language === 'ar' ? 'ابدأ الآن' : language === 'he' ? 'התחל עכשיו' : 'Get Started'}
              </button>
            </div>
          ))}
        </div>
      </section>
 

      {/* Call to Action Section */}
      <section className="relative px-6 py-24 text-white md:px-20">
        <img src={food3} alt="Delicious food" className="absolute inset-0 z-0 object-cover w-full h-full" />
        <div className="absolute inset-0 z-0" style={{backgroundColor: 'rgba(72, 111, 136, 0.8)'}}></div>
        <div className="relative z-10 flex flex-col items-center justify-center max-w-3xl mx-auto text-center">
          <h2 
            className="mb-6 text-5xl font-extrabold" 
            style={dir === 'rtl' ? { textAlign: 'right' } : {}}
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            {translations[language].ctaTitle}
          </h2>
          <p 
            className="mb-8 text-lg leading-relaxed md:text-xl" 
            style={dir === 'rtl' ? { textAlign: 'right' } : {}} 
            dangerouslySetInnerHTML={{ __html: translations[language].ctaDesc }}
            data-aos="fade-up"
            data-aos-delay="200"
          />
          <button
            onClick={() => {
              document.getElementById("pricing").scrollIntoView({ behavior: "smooth" });
            }}
            className="px-10 py-4 text-lg font-semibold text-black transition duration-300 bg-white rounded-full shadow-lg hover:bg-gray-100"
            data-aos="zoom-in"
            data-aos-delay="400"
            data-aos-duration="800"
          >
            {translations[language].ctaBtn}
          </button>
        </div>
      </section>
    </div>
  );
};

export default FoodDeliveryHero;