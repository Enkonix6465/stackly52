import React, { useEffect, useState } from "react";
import servicehero from "../assets/servicehero.mp4";
import { Link } from "react-router-dom";
import dealsImg from "../assets/deals.webp";
import ImpactSection from "../components/ImpactSection";

// Service images
import img1 from "../assets/1.jpg";
import img2 from "../assets/2.jpg";
import img3 from "../assets/3.avif";
import img4 from "../assets/4.jpg";
import img5 from "../assets/5.jpg";
import img6 from "../assets/6.jpg";

const translations = {
  English: {
    heroTitle: "Our Premium Property Services",
    heroDesc: "From luxury estates to modern family homes — we've got all your real estate needs covered with expert guidance and premium service.",
    readMore: "Learn More",
    ongoingDeals: "Special Property Offers",
    deals: [
      "Zero commission on first-time property purchases.",
      "Free property valuation and market analysis.",
      "Special financing assistance for qualified buyers.",
      "Exclusive access to pre-launch luxury developments.",
      "Complimentary legal document review services.",
      "Priority viewing for premium properties above $500K.",
      "Investment consultation: Extra 15% off management fees.",
    ],
    exploreCategories: "Explore Our Property Categories",
    exploreDesc1: "Our real estate portfolio is designed to serve every lifestyle and investment goal — from first-time homebuyers to luxury estate seekers. Each category has been carefully curated to match your preferences and budget requirements.",
    exploreDesc2: "Whether you're looking for a cozy family home, a prestigious city penthouse, a peaceful countryside retreat, or a profitable investment opportunity — we have it all. Our agents combine market expertise with personalized service to make every property transaction seamless and successful.",
    contactTitle: "Ready to Find Your Perfect Property",
    contactDesc: "Have questions about our real estate services, property listings, or current market offers? Our experienced team is here to assist you with property viewings, investment consultations, financing options, and any special property requirements. Reach out to us anytime — we'd love to help you find your dream property!",
    letsDive: "Get Started",
    categories: [
      { title: "Modern Family Living", desc: "Spacious homes designed for growing families with modern amenities and community features." },
      { title: "Luxury Urban Residences", desc: "Premium city properties offering sophisticated living in prime metropolitan locations." },
      { title: "Exclusive Estates & Mansions", desc: "Magnificent properties with extensive grounds, privacy, and unparalleled luxury features." },
      { title: "Coastal & Beachfront Retreats", desc: "Stunning waterfront properties offering serene ocean views and resort-style living." },
    ],
    services: [
      {
        title: "Modern Family Living",
        desc: "Discover spacious family homes designed with modern living in mind. These properties feature open-plan designs, multiple bedrooms, family-friendly neighborhoods with excellent schools, parks, and community facilities. Each home is carefully selected for its potential to grow with your family, offering safe environments, convenient locations, and strong resale values. From suburban townhouses to family estates, we specialize in finding properties that balance comfort, functionality, and long-term investment potential for growing families.",
      },
      {
        title: "Luxury Urban Residences",
        desc: "Experience sophisticated city living with our premium urban property collection. These residences offer cutting-edge architecture, high-end finishes, and prime locations in the heart of major metropolitan areas. Perfect for professionals and urban enthusiasts who value convenience, culture, and prestige. Each property features luxury amenities, concierge services, and proximity to business districts, fine dining, and entertainment venues. Invest in properties that define modern urban sophistication and offer exceptional lifestyle benefits.",
      },
      {
        title: "Exclusive Estates & Mansions",
        desc: "Enter the world of extraordinary luxury with our exclusive estate and mansion portfolio. These magnificent properties offer unparalleled privacy, extensive grounds, and architectural masterpieces that represent the pinnacle of luxury living. Each estate features custom designs, premium materials, state-of-the-art amenities, and often includes features like private pools, tennis courts, wine cellars, and guest houses. Perfect for discerning buyers who seek the ultimate in luxury, privacy, and prestige.",
      },
      {
        title: "Coastal & Beachfront Retreats",
        desc: "Escape to paradise with our stunning collection of coastal and beachfront properties. These retreats offer direct beach access, panoramic ocean views, and resort-style amenities that create the perfect sanctuary from city life. Whether you're seeking a vacation home, retirement paradise, or investment opportunity, our waterfront properties provide unmatched serenity and natural beauty. Each property is positioned to maximize ocean views and beach access while offering luxury amenities and strong rental potential.",
      },
      {
        title: "Skyline Penthouse Collection",
        desc: "Rise above the ordinary with our exclusive penthouse collection featuring breathtaking skyline views and ultra-luxury amenities. These premium properties occupy the highest floors of prestigious buildings, offering expansive living spaces, private terraces, and unobstructed city panoramas. Each penthouse features high-end finishes, smart home technology, and access to building amenities like rooftop pools, fitness centers, and concierge services. Perfect for executives and luxury buyers who demand the finest urban living experience.",
      },
      {
        title: "Mountain & Countryside Escapes",
        desc: "Find tranquility in our collection of mountain and countryside properties offering peaceful retreats from urban life. These properties feature expansive natural settings, mountain views, and rustic luxury that connects you with nature. From cozy cabins to sprawling ranch estates, each property offers privacy, scenic beauty, and opportunities for outdoor recreation. Ideal for weekend getaways, retirement homes, or investment properties in growing rural markets with strong vacation rental potential.",
      },
    ],
  },
  Arabic: {
    heroTitle: "خدماتنا العقارية المتميزة",
    heroDesc: "من العقارات الفاخرة إلى المنازل العصرية للعائلات — لدينا كل احتياجاتك العقارية بخبرة متخصصة وخدمة متميزة.",
    readMore: "اعرف المزيد",
    ongoingDeals: "عروض عقارية خاصة",
    deals: [
      "عمولة صفر على أول عملية شراء عقار.",
      "تقييم مجاني للعقار وتحليل السوق.",
      "مساعدة خاصة في التمويل للمشترين المؤهلين.",
      "وصول حصري للمشاريع الفاخرة قبل الإطلاق.",
      "خدمة مراجعة المستندات القانونية مجاناً.",
      "أولوية المشاهدة للعقارات المتميزة فوق 500 ألف دولار.",
      "استشارات استثمارية: خصم إضافي 15% على رسوم الإدارة.",
    ],
    exploreCategories: "استكشف فئات العقارات لدينا",
    exploreDesc1: "محفظتنا العقارية مصممة لخدمة كل نمط حياة وهدف استثماري — من المشترين الجدد إلى باحثي العقارات الفاخرة. تم اختيار كل فئة بعناية لتناسب تفضيلاتك ومتطلبات ميزانيتك.",
    exploreDesc2: "سواء كنت تبحث عن منزل عائلي مريح، أو بنتهاوس مرموق في المدينة، أو ملاذ ريفي هادئ، أو فرصة استثمارية مربحة — لدينا كل شيء. يجمع وكلاؤنا بين خبرة السوق والخدمة الشخصية لجعل كل معاملة عقارية سلسة وناجحة.",
    contactTitle: "مستعد للعثور على عقارك المثالي",
    contactDesc: "هل لديك أسئلة حول خدماتنا العقارية أو قوائم العقارات أو عروض السوق الحالية؟ فريقنا المتخصص هنا لمساعدتك في معاينة العقارات واستشارات الاستثمار وخيارات التمويل وأي متطلبات عقارية خاصة. تواصل معنا في أي وقت — يسعدنا مساعدتك في العثور على عقار أحلامك!",
    letsDive: "ابدأ الآن",
    categories: [
      { title: "المعيشة العائلية العصرية", desc: "منازل واسعة مصممة للعائلات المتنامية مع وسائل الراحة الحديثة ومرافق المجتمع." },
      { title: "المساكن الحضرية الفاخرة", desc: "عقارات مدينة متميزة تقدم معيشة راقية في مواقع حضرية رئيسية." },
      { title: "العقارات والقصور الحصرية", desc: "عقارات رائعة بمساحات واسعة وخصوصية وميزات فخامة لا مثيل لها." },
      { title: "ملاذات ساحلية وشاطئية", desc: "عقارات مذهلة على الواجهة البحرية تقدم إطلالات محيطية هادئة ومعيشة على طراز المنتجعات." },
    ],
    services: [
      {
        title: "المعيشة العائلية العصرية",
        desc: "اكتشف منازل عائلية واسعة مصممة مع مراعاة المعيشة العصرية. تتميز هذه العقارات بتصاميم مفتوحة وغرف نوم متعددة وأحياء صديقة للعائلة مع مدارس ممتازة وحدائق ومرافق مجتمعية. يتم اختيار كل منزل بعناية لإمكانياته في النمو مع عائلتك، مما يوفر بيئات آمنة ومواقع مريحة وقيم إعادة بيع قوية.",
      },
      {
        title: "المساكن الحضرية الفاخرة",
        desc: "اختبر المعيشة الحضرية الراقية مع مجموعة عقاراتنا الحضرية المتميزة. توفر هذه المساكن هندسة معمارية متطورة ولمسات نهائية عالية الجودة ومواقع رئيسية في قلب المناطق الحضرية الكبرى. مثالية للمهنيين وعشاق الحياة الحضرية الذين يقدرون الراحة والثقافة والمكانة.",
      },
      {
        title: "العقارات والقصور الحصرية",
        desc: "ادخل عالم الفخامة الاستثنائية مع محفظة العقارات والقصور الحصرية لدينا. توفر هذه العقارات الرائعة خصوصية لا مثيل لها ومساحات واسعة وتحف معمارية تمثل قمة المعيشة الفاخرة. تتميز كل عقارة بتصاميم مخصصة ومواد متميزة ووسائل راحة حديثة.",
      },
      {
        title: "الملاذات الساحلية والشاطئية",
        desc: "اهرب إلى الجنة مع مجموعتنا المذهلة من العقارات الساحلية والشاطئية. توفر هذه الملاذات وصولاً مباشراً إلى الشاطئ وإطلالات محيطية بانورامية ووسائل راحة على طراز المنتجعات تخلق الملاذ المثالي من حياة المدينة.",
      },
      {
        title: "مجموعة البنتهاوس المطلة على الأفق",
        desc: "ارتق فوق العادي مع مجموعتنا الحصرية من البنتهاوس التي تتميز بإطلالات خلابة على أفق المدينة ووسائل راحة فائقة الفخامة. تحتل هذه العقارات المتميزة أعلى طوابق المباني المرموقة، وتوفر مساحات معيشة واسعة وتراسات خاصة ومناظر بانورامية للمدينة دون عوائق.",
      },
      {
        title: "ملاذات الجبال والريف",
        desc: "اعثر على الهدوء في مجموعتنا من عقارات الجبال والريف التي توفر ملاذات هادئة من الحياة الحضرية. تتميز هذه العقارات بإعدادات طبيعية واسعة وإطلالات جبلية وفخامة ريفية تربطك بالطبيعة. من الأكواخ المريحة إلى عقارات المزارع الواسعة.",
      },
    ],
  },
  Hebrew: {
    heroTitle: "השירותים הנדל\"ניים המובחרים שלנו",
    heroDesc: "מאחוזות יוקרה ועד בתים משפחתיים מודרניים — יש לנו את כל הצרכים הנדל\"ניים שלכם עם הדרכה מקצועית ושירות מובחר.",
    readMore: "למידע נוסף",
    ongoingDeals: "הצעות נכסים מיוחדות",
    deals: [
      "עמלה אפס על רכישת נכס ראשונה.",
      "הערכת נכס והתנתוח שוק חינם.",
      "סיוע מיוחד במימון לקונים זכאים.",
      "גישה בלעדית לפרויקטי יוקרה לפני השקה.",
      "שירות סקירת מסמכים משפטיים חינם.",
      "עדיפות צפייה בנכסים מובחרים מעל 500 אלף דולר.",
      "ייעוץ השקעות: הנחה נוספת 15% על עמלות ניהול.",
    ],
    exploreCategories: "גלו את קטגוריות הנכסים שלנו",
    exploreDesc1: "תיק הנדל\"ן שלנו נועד לשרת כל אורח חיים ויעד השקעה — מקונים ראשונים ועד מחפשי אחוזות יוקרה. כל קטגוריה נבחרה בקפידה כדי להתאים להעדפות שלכם ולדרישות התקציב.",
    exploreDesc2: "בין אם אתם מחפשים בית משפחתי נעים, פנטהאוס יוקרתי בעיר, מפלט כפרי שקט, או הזדמנות השקעה רווחית — יש לנו הכל. הסוכנים שלנו משלבים מומחיות שוק עם שירות אישי כדי להפוך כל עסקת נכס לחלקה ומוצלחת.",
    contactTitle: "מוכנים למצוא את הנכס המושלם שלכם",
    contactDesc: "יש לכם שאלות על השירותים הנדל\"ניים שלנו, רשימות נכסים, או הצעות שוק נוכחיות? הצוות המנוסה שלנו כאן לעזור לכם עם צפיות בנכסים, ייעוץ השקעות, אפשרויות מימון וכל דרישות נכס מיוחדות. פנו אלינו בכל עת — נשמח לעזור לכם למצוא את נכס החלומות שלכם!",
    letsDive: "בואו נתחיל",
    categories: [
      { title: "מגורים משפחתיים מודרניים", desc: "בתים רחבים המתוכננים למשפחות גדלות עם אמצעי נוחות מודרניים ומתקני קהילה." },
      { title: "מגורי יוקרה עירוניים", desc: "נכסי עיר מובחרים המציעים חיים מתוחכמים במיקומים מטרופוליניים מובילים." },
      { title: "אחוזות ובתי אחוזה בלעדיים", desc: "נכסים מרהיבים עם שטחים נרחבים, פרטיות ותכונות יוקרה שאין כמותן." },
      { title: "מפלטי חוף וים", desc: "נכסים מהממים על קו המים המציעים נופי אוקיינוס שלווים וחיים בסגנון נופש." },
    ],
    services: [
      {
        title: "מגורים משפחתיים מודרניים",
        desc: "גלו בתים משפחתיים רחבים המתוכננים עם מחשבה על חיים מודרניים. נכסים אלו כוללים עיצובים פתוחים, חדרי שינה מרובים, שכונות ידידותיות למשפחה עם בתי ספר מצוינים, פארקים ומתקני קהילה. כל בית נבחר בקפידה לפוטנציאל הגדילה עם המשפחה שלכם.",
      },
      {
        title: "מגורי יוקרה עירוניים",
        desc: "חוו חיים עירוניים מתוחכמים עם אוסף הנכסים העירוניים המובחרים שלנו. מגורים אלו מציעים ארכיטקטורה חדישה, גימורים יוקרתיים ומיקומים מובילים בלב אזורים מטרופוליניים מרכזיים. מושלם לאנשי מקצוע וחובבי חיים עירוניים שמעריכים נוחות, תרבות ויוקרה.",
      },
      {
        title: "אחוזות ובתי אחוזה בלעדיים",
        desc: "היכנסו לעולם היוקרה יוצאת הדופן עם תיק האחוזות ובתי האחוזה הבלעדיים שלנו. נכסים מרהיבים אלו מציעים פרטיות שאין כמותה, שטחים נרחבים ויצירות מופת ארכיטקטוניות המייצגות את פסגת החיים היוקרתיים.",
      },
      {
        title: "מפלטי חוף וים",
        desc: "ברחו לגן עדן עם האוסף המהמם שלנו של נכסי חוף וים. מפלטים אלו מציעים גישה ישירה לחוף, נופי אוקיינוס פנורמיים ואמצעי נוחות בסגנון נופש היוצרים המקלט המושלם מחיי העיר.",
      },
      {
        title: "אוסף פנטהאוזים עם נוף אופק",
        desc: "עלו מעל הרגיל עם האוסף הבלעדי שלנו של פנטהאוזים הכוללים נופי אופק עוצרי נשימה ואמצעי נוחות יוקרתיים במיוחד. נכסים מובחרים אלו תופסים את הקומות הגבוהות ביותר של בניינים יוקרתיים.",
      },
      {
        title: "מפלטי הרים וכפר",
        desc: "מצאו שלווה באוסף שלנו של נכסי הרים וכפר המציעים מפלטים שקטים מהחיים העירוניים. נכסים אלו כוללים הגדרות טבעיות נרחבות, נופי הרים ויוקרה כפרית המחברת אתכם לטבע.",
      },
    ],
  },
};

const serviceImgs = [img1, img2, img3, img4, img5, img6];
const servicePaths = [
  "/modern-family-living",
  "/luxury-urban-residences", 
  "/exclusive-estates-mansions",
  "/coastal-beachfront-retreats",
  "/skyline-penthouse-collection",
  "/mountain-countryside-escapes",
];

const ServicesPage = () => {
  const [language, setLanguage] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('selectedLanguage') || 'English';
    }
    return 'English';
  });
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') || 'light';
    }
    return 'light';
  });

  useEffect(() => {
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

  const t = translations[language] || translations.English;
  const isRTL = language === 'Arabic' || language === 'Hebrew';

  // Theme toggle handler
  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    if (typeof window !== 'undefined') {
      localStorage.setItem('theme', newTheme);
      window.dispatchEvent(new Event('theme-changed'));
    }
  };

  return (
    <div className={`w-full min-h-screen ${theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'}`} dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Theme Toggle Button */}
      <button
        onClick={toggleTheme}
        className="fixed top-6 right-6 z-30 bg-gray-200 dark:bg-gray-800 text-black dark:text-white px-4 py-2 rounded shadow hover:bg-gray-300 dark:hover:bg-gray-700 transition"
        aria-label="Toggle theme"
      >
        {theme === 'dark' ? '☀️ Light' : '🌙 Dark'}
      </button>

      {/* Hero Section */}
      <section className="relative w-full h-[90vh] overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src={servicehero} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className={`absolute inset-0 ${theme === 'dark' ? 'bg-black/70' : 'bg-black bg-opacity-50'}`}></div>
        <div className="relative z-10 flex flex-col justify-center items-center h-full text-center text-white px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">{t.heroTitle}</h1>
          <p className="text-lg md:text-xl max-w-2xl">{t.heroDesc}</p>
        </div>
      </section>

      {/* Services Section */}
      <section className={`max-w-6xl mx-auto py-16 px-4 space-y-16 ${theme === 'dark' ? 'bg-[#181818]' : ''}`}>
        {t.services.map((service, index) => (
          <div key={index} className="grid md:grid-cols-2 gap-10 items-center">
            {/* Image always left */}
            <div className="w-full md:w-1/2 flex justify-center items-center">
              <img
                src={serviceImgs[index]}
                alt={service.title}
                className="w-full md:max-w-full md:h-[350px] max-w-md h-full object-cover rounded-2xl shadow-lg"
              />
            </div>
            {/* Content always right */}
            <div className="w-full md:w-1/2 flex flex-col items-start justify-center md:pl-8">
              <h3 className="text-2xl font-bold mb-4" style={{color: 'rgb(72, 111, 136)'}}>
                {service.title}
              </h3>
              <p className={`text-lg leading-relaxed ${theme === 'dark' ? 'text-white' : 'text-gray-700'}`}>{service.desc}</p>
              <Link
                to={servicePaths[index]}
                className="inline-block mt-4 px-5 py-2 text-white font-semibold rounded-lg shadow-md transition"
                style={{backgroundColor: 'rgb(72, 111, 136)'}}
                onMouseEnter={(e) => e.target.style.backgroundColor = 'rgb(62, 101, 126)'}
                onMouseLeave={(e) => e.target.style.backgroundColor = 'rgb(72, 111, 136)'}
              >
                {t.readMore}
              </Link>
            </div>
          </div>
        ))}
      </section>

      <ImpactSection theme={theme} />

      {/* Special Property Offers Section */}
      <section className={`max-w-6xl mx-auto py-16 px-4 ${theme === 'dark' ? 'bg-black' : ''}`}>
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Left: Image */}
          <div>
            <img
              src={dealsImg}
              alt="Special Property Offers"
              className="w-full h-[400px] object-cover rounded-2xl shadow-lg"
            />
          </div>
          {/* Right: Content */}
          <div>
            <h2 className="text-3xl font-bold mb-4" style={{color: 'rgb(72, 111, 136)'}}>{t.ongoingDeals}</h2>
            <ul className={`list-disc list-inside text-lg space-y-3 ${theme === 'dark' ? 'text-white' : 'text-gray-700'}`}>
              {t.deals.map((deal, i) => <li key={i}>{deal}</li>)}
            </ul>
          </div>
        </div>
      </section>

      {/* Explore Categories Section */}
      <section className={`max-w-full mx-auto py-16 px-4 grid md:grid-cols-2 gap-12 items-center ${theme === 'dark' ? 'bg-[#181818]' : 'bg-gray-50'}`}>
        {/* Left Info */}
        <div>
          <h2 className="text-3xl font-bold mb-4" style={{color: 'rgb(72, 111, 136)'}}>{t.exploreCategories}</h2>
          <p className={`text-lg mb-4 leading-relaxed ${theme === 'dark' ? 'text-white' : 'text-gray-700'}`}>{t.exploreDesc1}</p>
          <p className={`text-lg mb-4 leading-relaxed ${theme === 'dark' ? 'text-white' : 'text-gray-700'}`}>{t.exploreDesc2}</p>
        </div>
        {/* Right Cards */}
        <div className="grid grid-cols-2 gap-6">
          {t.categories.map((cat, index) => (
            <div
              key={index}
              className={`border shadow-md rounded-xl p-6 text-center ${theme === 'dark' ? 'bg-black border-gray-700' : 'bg-white border-gray-200'}`}
            >
              <h3 className="text-lg font-semibold mb-2" style={{color: 'rgb(72, 111, 136)'}}>
                {cat.title}
              </h3>
              <p className={`text-sm ${theme === 'dark' ? 'text-white' : 'text-gray-600'}`}>{cat.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className={`py-16 px-4 ${theme === 'dark' ? 'bg-black' : 'bg-white'}`}>
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4" style={{color: 'rgb(72, 111, 136)'}}>{t.contactTitle}</h2>
          <p className={`text-lg mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-700'}`}>{t.contactDesc}</p>
          <Link
            to="/contactus"
            className="inline-block px-6 py-3 text-white font-semibold rounded-lg shadow-md transition"
            style={{backgroundColor: 'rgb(72, 111, 136)'}}
            onMouseEnter={(e) => e.target.style.backgroundColor = 'rgb(62, 101, 126)'}
            onMouseLeave={(e) => e.target.style.backgroundColor = 'rgb(72, 111, 136)'}
          >
            {t.letsDive}
          </Link>
        </div>
      </section>
    </div>
  );
}

export default ServicesPage;