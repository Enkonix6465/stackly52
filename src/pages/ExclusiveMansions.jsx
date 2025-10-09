import React, { useState, useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import dineVideo from "../assets/s3.mp4";
import dine1 from "../assets/h4.jpg";
import dine2 from "../assets/s3.jpg";
import dine3 from "../assets/deals.png";

import { FaArrowLeft, FaArrowRight } from "react-icons/fa";


// Translation object for all text
const translations = {
  en: {
    heroTitle: "Exclusive Estates & Mansions",
    heroDesc: "Experience unparalleled luxury in prestigious estates and grand mansions with world-class amenities designed for distinguished living.",
    aboutTitle: "About Our Exclusive Estates",
    about: [
      "Experience an immersive luxury living environment where every detail is designed to impress — from architectural grandeur and landscaping to exceptional craftsmanship.",
      "Our estates feature meticulously curated designs that highlight premium materials, custom finishes, and cutting-edge technology crafted with sophistication and precision.",
      "Whether it's an intimate family retreat, grand entertaining space, or private business sanctuary, our properties ensure an atmosphere of elegance and prestige.",
      "Choose from secluded private estates, expansive mansion compounds, or exclusive gated communities with world-class amenities.",
      "We provide personalized concierge services, property management, and lifestyle customization to make every aspect of estate living extraordinary."
    ],
    pricingTitle: "Estate Collections",
    pricingDesc: "Select the perfect luxury estate tailored to your distinguished lifestyle.",
    plans: [
      { name: "Premium Estates", price: "$2.5M", period: "starting", features: ["5-7 bedrooms", "Gated community", "Premium landscaping"], highlighted: false },
      { name: "Grand Mansions", price: "$5.8M", period: "starting", features: ["8-12 bedrooms", "Private grounds", "Luxury amenities & staff quarters"], highlighted: true },
      { name: "Exclusive Compounds", price: "$15M", period: "starting", features: ["Multiple buildings", "Private estate grounds", "Full concierge & estate management"], highlighted: false },
    ],
    testimonials: [
      { name: "Alexander Sterling", role: "Real Estate Investor", text: "Exceptional properties with unmatched luxury! The attention to detail and service is world-class." },
      { name: "Victoria Hamilton", role: "Estate Owner", text: "Living in our estate feels like a dream — the privacy and amenities are absolutely incredible." },
      { name: "Marcus Blackwell", role: "Business Executive", text: "Perfect for entertaining clients. The grand spaces and exquisite finishes never fail to impress." },
      { name: "Eleanor Whitman", role: "Family Resident", text: "Our family compound is our sanctuary — elegant, spacious, and perfectly maintained." },
      { name: "Theodore Ashford", role: "Property Collector", text: "Each estate in my portfolio reflects true luxury. The investment value continues to appreciate beautifully." },
    ],
    testimonialsTitle: "Property Owner Reviews",
    amenitiesTitle: "Amenities & Benefits",
    amenitiesDesc: "Discover the exceptional amenities and benefits that make our properties perfect for modern family living.",
    amenities: [
      { title: "Smart Home Technology", description: "Integrated smart systems for lighting, security, and climate control throughout the home." },
      { title: "Premium Community Amenities", description: "Access to clubhouse, fitness center, swimming pool, and children's playground areas." },
      { title: "Prime Location Benefits", description: "Close proximity to top-rated schools, shopping centers, and major transportation hubs." },
      { title: "Energy Efficiency", description: "Eco-friendly features including solar panels, efficient appliances, and sustainable materials." },
    ],
    ctaTitle: "Ready for Luxury Living?",
    ctaDesc: "Schedule your private estate viewing now and experience the epitome of elegant living in prestigious properties.",
    ctaBtn: "View Estates",
  },
  ar: {
    heroTitle: "العقارات والقصور الحصرية",
    heroDesc: "استمتع برفاهية لا مثيل لها في عقارات مرموقة وقصور فخمة مع مرافق عالمية المستوى مصممة للمعيشة المميزة.",
    aboutTitle: "عن عقاراتنا الحصرية",
    about: [
      "استمتع ببيئة معيشة فاخرة غامرة حيث تم تصميم كل التفاصيل لإبهارك — من العمارة الفخمة والمناظر الطبيعية إلى الحرفية الاستثنائية.",
      "تتميز عقاراتنا بتصاميم منسقة بعناية تبرز المواد الممتازة واللمسات المخصصة والتكنولوجيا المتطورة المصنوعة بأناقة ودقة.",
      "سواء كان ملاذًا عائليًا حميمًا أو مساحة ترفيه كبيرة أو ملاذًا خاصًا للأعمال، تضمن عقاراتنا أجواء من الأناقة والهيبة.",
      "اختر من بين العقارات الخاصة المنعزلة أو مجمعات القصور الواسعة أو المجتمعات المسورة الحصرية مع المرافق عالمية المستوى.",
      "نقدم خدمات الكونسيرج الشخصية وإدارة الممتلكات وتخصيص نمط الحياة لجعل كل جانب من جوانب المعيشة في العقار استثنائيًا."
    ],
    pricingTitle: "مجموعات العقارات",
    pricingDesc: "اختر العقار الفاخر المثالي المناسب لأسلوب حياتك المتميز.",
    plans: [
      { name: "العقارات الممتازة", price: "$2.5M", period: "ابتداءً من", features: ["5-7 غرف نوم", "مجتمع مسور", "تنسيق حدائق ممتاز"], highlighted: false },
      { name: "القصور الكبرى", price: "$5.8M", period: "ابتداءً من", features: ["8-12 غرفة نوم", "أراضي خاصة", "مرافق فاخرة وأرباع الموظفين"], highlighted: true },
      { name: "المجمعات الحصرية", price: "$15M", period: "ابتداءً من", features: ["مباني متعددة", "أراضي عقارية خاصة", "إدارة عقارية وكونسيرج كاملة"], highlighted: false },
    ],
    testimonials: [
      { name: "ألكسندر ستيرلنغ", role: "مستثمر عقاري", text: "عقارات استثنائية برفاهية لا تضاهى! الاهتمام بالتفاصيل والخدمة على مستوى عالمي." },
      { name: "فيكتوريا هاميلتون", role: "مالكة عقار", text: "العيش في عقارنا يبدو وكأنه حلم — الخصوصية والمرافق مذهلة تمامًا." },
      { name: "ماركوس بلاكويل", role: "تنفيذي أعمال", text: "مثالي لاستضافة العملاء. المساحات الكبيرة واللمسات الرائعة لا تفشل أبدًا في الإعجاب." },
      { name: "إليانور ويتمان", role: "ساكنة عائلية", text: "مجمع عائلتنا هو ملاذنا — أنيق وواسع ومُحافظ عليه بشكل مثالي." },
      { name: "ثيودور أشفورد", role: "جامع عقارات", text: "كل عقار في محفظتي يعكس الرفاهية الحقيقية. القيمة الاستثمارية تستمر في الارتفاع بشكل جميل." },
    ],
    testimonialsTitle: "آراء مالكي العقارات",
    amenitiesTitle: "المرافق والفوائد",
    amenitiesDesc: "اكتشف المرافق والفوائد الاستثنائية التي تجعل عقاراتنا مثالية للحياة العائلية العصرية.",
    amenities: [
      { title: "تقنية المنزل الذكي", description: "أنظمة ذكية متكاملة للإضاءة والأمان والتحكم بالمناخ في جميع أنحاء المنزل." },
      { title: "مرافق مجتمعية متميزة", description: "الوصول إلى النادي ومركز اللياقة وحمام السباحة ومناطق ألعاب الأطفال." },
      { title: "فوائد الموقع المتميز", description: "قرب من المدارس المصنفة عالياً ومراكز التسوق ومحاور النقل الرئيسية." },
      { title: "كفاءة الطاقة", description: "ميزات صديقة للبيئة تشمل الألواح الشمسية والأجهزة الفعالة والمواد المستدامة." },
    ],
    ctaTitle: "جاهز للمعيشة الفاخرة؟",
    ctaDesc: "جدول مشاهدة عقارك الخاص الآن واستمتع بقمة المعيشة الأنيقة في العقارات المرموقة.",
    ctaBtn: "عرض العقارات",
  },
  he: {
    heroTitle: "נכסים ואחוזות יוקרתיות",
    heroDesc: "חוו יוקרה ללא תחרות באחוזות יוקרתיות ובאחוזות מפוארות עם שירותים ברמה עולמית המיועדים למגורים מכובדים.",
    aboutTitle: "על הנכסים הבלעדיים שלנו",
    about: [
      "חוו סביבת מגורים יוקרתית סוחפת שבה כל פרט נועד להרשים — מפאר אדריכלי ונוף ועד לאומנות יוצאת דופן.",
      "הנכסים שלנו כוללים עיצובים מאוצרים בקפידה המדגישים חומרים משובחים, גימורים מותאמים אישית וטכנולוגיה מתקדמת הנוצרת בתחכום ודיוק.",
      "בין אם זה מקלט משפחתי אינטימי, מרחב בידור גדול או מקדש עסקי פרטי, הנכסים שלנו מבטיחים אווירה של אלגנטיות ויוקרה.",
      "בחרו מבין נכסים פרטיים מבודדים, מתחמי אחוזות נרחבים או קהילות סגורות בלעדיות עם שירותים ברמה עולמית.",
      "אנו מספקים שירותי קונסיירז' מותאמים אישית, ניהול נכסים והתאמת אורח חיים כדי להפוך כל היבט של חיי האחוזה ליוצאי דופן."
    ],
    pricingTitle: "אוספי נכסים",
    pricingDesc: "בחרו את האחוזה היוקרתית המושלמת המותאמת לאורח החיים המכובד שלכם.",
    plans: [
      { name: "נכסים מובחרים", price: "$2.5M", period: "החל מ", features: ["5-7 חדרי שינה", "קהילה סגורה", "גינון מובחר"], highlighted: false },
      { name: "אחוזות מפוארות", price: "$5.8M", period: "החל מ", features: ["8-12 חדרי שינה", "שטחים פרטיים", "שירותים יוקרתיים ומגורי צוות"], highlighted: true },
      { name: "מתחמים בלעדיים", price: "$15M", period: "החל מ", features: ["מספר בניינים", "שטחי אחוזה פרטיים", "קונסיירז' מלא וניהול אחוזה"], highlighted: false },
    ],
    testimonials: [
      { name: "אלכסנדר סטרלינג", role: "משקיע נדל\"ן", text: "נכסים יוצאי דופן ביוקרה ללא תחרות! תשומת הלב לפרטים והשירות ברמה עולמית." },
      { name: "ויקטוריה המילטון", role: "בעלת נכס", text: "לגור באחוזה שלנו מרגיש כמו חלום — הפרטיות והשירותים מדהימים לחלוטין." },
      { name: "מרקוס בלקוול", role: "מנהל עסקי", text: "מושלם לאירוח לקוחות. החללים הגדולים והגימורים המעולים אף פעם לא נכשלים להרשים." },
      { name: "אלינור ויטמן", role: "דיירת משפחתית", text: "המתחם המשפחתי שלנו הוא המקלט שלנו — אלגנטי, מרווח ומתוחזק בצורה מושלמת." },
      { name: "תיאודור אשפורד", role: "אספן נכסים", text: "כל נכס בתיק שלי משקף יוקרה אמיתית. הערך ההשקעתי ממשיך לעלות בצורה יפה." },
    ],
    testimonialsTitle: "ביקורות בעלי נכסים",
    amenitiesTitle: "שירותים ויתרונות",
    amenitiesDesc: "גלו את השירותים והיתרונות יוצאי הדופן שהופכים את הנכסים שלנו למושלמים לחיי משפחה מודרניים.",
    amenities: [
      { title: "טכנולוגיית בית חכם", description: "מערכות חכמות משולבות לתאורה, ביטחון ובקרת אקלים בכל הבית." },
      { title: "שירותים קהילתיים מובחרים", description: "גישה למועדון, מרכז כושר, בריכת שחייה ואזורי משחק לילדים." },
      { title: "יתרונות מיקום מעולה", description: "קרבה לבתי ספר מובילים, מרכזי קניות וצמתי תחבורה מרכזיים." },
      { title: "יעילות אנרגטית", description: "תכונות ידידותיות לסביבה כולל פאנלים סולאריים, מכשירים יעילים וחומרים בני קיימא." },
    ],
    ctaTitle: "מוכנים לחיים יוקרתיים?",
    ctaDesc: "תזמנו את צפיית האחוזה הפרטית שלכם עכשיו וחוו את שיא החיים האלגנטיים בנכסים יוקרתיים.",
    ctaBtn: "צפו באחוזות",
  },
};

const ExclusiveMansions = () => {
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
          src={dineVideo}
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
              src={dine1}
              alt="Our Exclusive Estates"
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
              data-aos-delay={400 + index * 200}
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
                {language === 'ar' ? 'عرض العقارات' : language === 'he' ? 'צפו באחוזות' : 'View Estates'}
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
              src={dine2}
              alt="Estate interior"
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
          src={dine3}
          alt="Luxury estate exterior"
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

export default ExclusiveMansions;