import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import RestaurantFooter from "../components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import home1hero from "../assets/homehero.mp4";
import home1about from "../assets/home1about.mp4";
import menu1 from "../assets/h1.jpg";
import menu2 from "../assets/h2.jpg";
import menu3 from "../assets/h3.jpg";
import menu4 from "../assets/h4.jpg";


const translations = {
  English: {
    heroTitle: "Find Your Dream\nHome Today",
    heroDesc: "Discover luxury properties, modern apartments, and family homes in prime locations. Your perfect property awaits with our expert real estate services.",
    readMore: "Learn More",
    findMenu: "View Properties",
    aboutTitle: "Discover Prime Real Estate",
    aboutDesc: "At our real estate agency, we combine market expertise with personalized service and comprehensive property solutions. Whether you're buying, selling, or renting, our agents work with dedication to find your perfect property match. Explore our extensive listings, enjoy exclusive market insights, and make every property decision with confidence!",
    aboutList: [
      "Expert market analysis & insights",
      "Fast & reliable property services",
      "Award-winning real estate team",
      "Investment & commercial properties",
    ],
    aboutBtn: "Learn More",
    menuTitle: "EXPLORE PROPERTIES",
    menu1: "Luxury Homes",
    menu2: "Modern Apartments",
    menu3: "Commercial Properties", 
    menu4: "Investment Properties",
    whyChooseUs: "Why Choose Us",
    why1: "Market Expertise",
    why1desc: "We provide comprehensive market analysis and insights to help you make informed property decisions.",
    why2: "Expert Agents",
    why2desc: "Our licensed real estate professionals are dedicated to delivering exceptional service and results every time.",
    why3: "Full Service",
    why3desc: "We offer complete real estate solutions from buying and selling to property management and investments.",
    clientsSay: "What Our Clients Say",
    client1: "Found my dream home in just 2 weeks! The team's market knowledge and dedication made all the difference.",
    client2: "Professional service from start to finish. They helped us sell our property above asking price!",
    client3: "Excellent investment guidance. Their market insights helped us make profitable property decisions!",
    readyGrow: "Ready to Find Your Perfect Property?",
    readyDesc: "Let our real estate experts help you discover the ideal home, investment, or commercial property. Contact us today for a free market consultation!",
    getStarted: "Get Started",
  },
  Arabic: {
    heroTitle: "اعثر على منزل أحلامك اليوم",
    heroDesc: "اكتشف العقارات الفاخرة والشقق الحديثة والمنازل العائلية في أفضل المواقع. عقارك المثالي ينتظرك مع خدماتنا العقارية المتخصصة.",
    readMore: "اعرف المزيد", 
    findMenu: "شاهد العقارات",
    aboutTitle: "اكتشف العقارات المميزة",
    aboutDesc: "في وكالتنا العقارية، نجمع بين خبرة السوق والخدمة الشخصية وحلول العقارات الشاملة. سواء كنت تشتري أو تبيع أو تؤجر، يعمل وكلاؤنا بتفان لإيجاد العقار المثالي لك. استكشف قوائمنا الواسعة، واستمتع برؤى السوق الحصرية، واتخذ كل قرار عقاري بثقة!",
    aboutList: [
      "تحليل السوق والرؤى المتخصصة",
      "خدمات عقارية سريعة وموثوقة",
      "فريق عقاري حائز على جوائز",
      "عقارات استثمارية وتجارية",
    ],
    aboutBtn: "اعرف المزيد",
    menuTitle: "استكشف العقارات",
    menu1: "المنازل الفاخرة",
    menu2: "الشقق الحديثة",
    menu3: "العقارات التجارية",
    menu4: "عقارات الاستثمار",
    whyChooseUs: "لماذا تختارنا؟",
    why1: "خبرة السوق",
    why1desc: "نوفر تحليل السوق الشامل والرؤى لمساعدتك في اتخاذ قرارات عقارية مدروسة.",
    why2: "وكلاء خبراء",
    why2desc: "مهنيو العقارات المرخصون لدينا مكرسون لتقديم خدمة استثنائية ونتائج في كل مرة.",
    why3: "خدمة شاملة",
    why3desc: "نقدم حلول عقارية كاملة من الشراء والبيع إلى إدارة العقارات والاستثمارات.",
    clientsSay: "ماذا يقول عملاؤنا",
    client1: "وجدت منزل أحلامي في أسبوعين فقط! معرفة الفريق بالسوق وتفانيهم صنع كل الفرق.",
    client2: "خدمة مهنية من البداية إلى النهاية. ساعدونا في بيع عقارنا بسعر أعلى من المطلوب!",
    client3: "إرشاد استثماري ممتاز. رؤاهم للسوق ساعدتنا في اتخاذ قرارات عقارية مربحة!",
    readyGrow: "مستعد للعثور على عقارك المثالي؟",
    readyDesc: "دع خبراء العقارات لدينا يساعدونك في اكتشاف المنزل أو الاستثمار أو العقار التجاري المثالي. اتصل بنا اليوم للحصول على استشارة سوق مجانية!",
    getStarted: "ابدأ الآن",
  },
  Hebrew: {
    heroTitle: "מצא את בית החלומות שלך היום",
    heroDesc: "גלה נכסי יוקרה, דירות מודרניות ובתים משפחתיים במיקומים מובילים. הנכס המושלם שלך מחכה עם השירותים הנדל\"ניים המקצועיים שלנו.",
    readMore: "למידע נוסף",
    findMenu: "צפה בנכסים",
    aboutTitle: "גלה נדל\"ן מובחר",
    aboutDesc: "בסוכנות הנדל\"ן שלנו, אנו משלבים מומחיות שוק עם שירות אישי ופתרונות נכסים מקיפים. בין אם אתם קונים, מוכרים או שוכרים, הסוכנים שלנו עובדים במסירות כדי למצוא את הנכס המושלם עבורכם. גלו את הרשימות הנרחבות שלנו, נהנו מתובנות שוק בלעדיות, וקבלו כל החלטת נכס בביטחון!",
    aboutList: [
      "ניתוח שוק ותובנות מקצועיות",
      "שירותי נדל\"ן מהירים ואמינים",
      "צוות נדל\"ן זוכה פרסים",
      "נכסי השקעה ומסחריים",
    ],
    aboutBtn: "למידע נוסף",
    menuTitle: "גלה נכסים",
    menu1: "בתים יוקרתיים",
    menu2: "דירות מודרניות",
    menu3: "נכסים מסחריים",
    menu4: "נכסי השקעה",
    whyChooseUs: "למה לבחור בנו?",
    why1: "מומחיות שוק",
    why1desc: "אנו מספקים ניתוח שוק מקיף ותובנות שיעזרו לכם לקבל החלטות נכסים מושכלות.",
    why2: "סוכנים מומחים",
    why2desc: "אנשי הנדל\"ן המורשים שלנו מתמידים בלספק שירות יוצא דופן ותוצאות בכל פעם.",
    why3: "שירות מלא",
    why3desc: "אנו מציעים פתרונות נדל\"ן מלאים מקנייה ומכירה ועד ניהול נכסים והשקעות.",
    clientsSay: "מה הלקוחות שלנו אומרים",
    client1: "מצאתי את בית החלומות שלי תוך שבועיים בלבד! הידע השוקי של הצוות והמסירות שלהם עשו את כל ההבדל.",
    client2: "שירות מקצועי מההתחלה עד הסוף. הם עזרו לנו למכור את הנכס שלנו במחיר גבוה מהמבוקש!",
    client3: "הדרכת השקעות מעולה. התובנות השוקיות שלהם עזרו לנו לקבל החלטות נכסים רווחיות!",
    readyGrow: "מוכן למצוא את הנכס המושלם שלך?",
    readyDesc: "תנו למומחי הנדל\"ן שלנו לעזור לכם לגלות את הבית, ההשקעה או הנכס המסחרי האידיאלי. צרו קשר היום לייעוץ שוק חינם!",
    getStarted: "התחילו עכשיו",
  },
};

export default function Home1() {
  const navigate = useNavigate();
  // Ref for Discover section
  const discoverRef = React.useRef(null);
  // Ref for Explore Menu section
  const menuRef = React.useRef(null);

  // Scroll handler for Read More
  const handleReadMore = () => {
    if (discoverRef.current) {
      discoverRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  // Scroll handler for Find Menu
  const handleFindMenu = () => {
    if (menuRef.current) {
      menuRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
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
  <section className={`relative flex flex-col items-center justify-center h-[93vh] w-full overflow-hidden ${theme === 'dark' ? 'bg-black' : ''}`}>
        {/* Background Video for Hero Only */}
        <video
          className="absolute inset-0 w-full h-full object-cover z-0 brightness-110"
          src={home1hero}
          autoPlay
          loop
          muted
          playsInline
        />
        {/* Overlay with less opacity for more brightness */}
  <div className={`absolute inset-0 z-10 ${theme === 'dark' ? 'bg-black/70' : 'bg-black/40'}`} />
  <div className="relative z-20 flex flex-col items-center justify-center h-full w-full">
          <h1 
            className={`text-5xl md:text-6xl font-serif font-bold text-center mb-4 drop-shadow-lg ${theme === 'dark' ? 'text-white' : 'text-white'}`}
            data-aos="fade-up"
            data-aos-delay="200"
          >
            {t.heroTitle.split('\n').map((line, i) => (
              <React.Fragment key={i}>
                {line}
                <br />
              </React.Fragment>
            ))}
          </h1>
          <p 
            className={`text-lg md:text-xl text-center mb-8 max-w-xl drop-shadow ${theme === 'dark' ? 'text-white/90' : 'text-white/90'}`}
            data-aos="fade-up"
            data-aos-delay="400"
          > 
            {t.heroDesc}
          </p>
          <div 
            className="flex gap-6"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <button 
              onClick={handleReadMore} 
              className={`relative border border-white text-white px-8 py-3 rounded-lg text-lg font-serif flex items-center group bg-transparent hover:bg-white/10 transition ${theme === 'dark' ? '' : ''}`}
              onMouseEnter={(e) => {
                const span = e.target.querySelector('span');
                if (span) span.style.backgroundColor = 'rgb(72, 111, 136)';
              }}
              onMouseLeave={(e) => {
                const span = e.target.querySelector('span');
                if (span) span.style.backgroundColor = 'white';
              }}
            >
              {t.readMore}
              <span className="ml-3 w-8 h-0.5 bg-white block transition-all"></span>
            </button>
            <button onClick={handleFindMenu} className={`font-semibold px-8 py-3 rounded-lg text-lg shadow transition ${theme === 'dark' ? 'bg-white/90 hover:bg-white' : 'bg-white/90 hover:bg-white'}`} style={{color: 'rgb(72, 111, 136)'}}> 
              {t.findMenu}
            </button>
          </div>
        </div>
      </section>
      {/* About/Feature Section */}
  <section ref={discoverRef} className={`relative w-full py-16 px-4 md:px-0 flex flex-col items-center justify-center z-10 ${theme === 'dark' ? 'bg-[#181818]' : 'bg-white/90'}`}>
        <div className="max-w-6xl w-full mx-auto grid  md:grid-cols-2 gap-10 items-stretch">
          {/* Left: Video/Image - larger on tablet */}
          <div 
            className="w-full md:w-1/2 flex justify-center items-center min-h-[340px] h-full"
            data-aos="slide-right"
            data-aos-duration="1000"
          >
            <video
              src={home1about}
              className="rounded-2xl shadow-lg w-full md:max-w-full md:h-[340px] max-w-md h-full min-h-[260px] object-cover"
              autoPlay
              loop
              muted
              playsInline
            />
          </div>
          {/* Right: Content - balanced width */}
          <div 
            className="w-full md:w-1/2 flex flex-col items-start justify-center min-h-[340px] h-full md:pl-8"
            data-aos="slide-up"
            data-aos-duration="1000"
          >
            <h2 
              className="text-3xl md:text-4xl font-bold mb-4 font-serif" 
              style={{color: 'rgb(72, 111, 136)'}}
              data-aos="fade-up"
              data-aos-delay="200"
            >{t.aboutTitle}</h2>
            <p 
              className="text-base mb-6 max-w-lg text-justify" 
              style={{color: theme === 'dark' ? '#e5e7eb' : '#374151'}}
              data-aos="fade-up"
              data-aos-delay="400"
            >{t.aboutDesc}</p>
            <ul 
              className="mb-6 space-y-2 text-base" 
              style={{color: theme === 'dark' ? '#e5e7eb' : '#374151'}}
              data-aos="fade-up"
              data-aos-delay="600"
            >
              {t.aboutList.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
            <button 
              className="text-white font-semibold px-6 py-2 rounded-lg shadow transition" 
              style={{backgroundColor: 'rgb(72, 111, 136)'}} 
              onMouseEnter={(e) => e.target.style.backgroundColor = 'rgb(62, 101, 126)'} 
              onMouseLeave={(e) => e.target.style.backgroundColor = 'rgb(72, 111, 136)'}
              data-aos="fade-up"
              data-aos-delay="800"
            >{t.aboutBtn}</button>
          </div>
        </div>
      </section>

      {/* Explore Menu Section */}
  <section ref={menuRef} className={`w-full py-16 px-4 md:px-0 flex flex-col items-center justify-center ${theme === 'dark' ? 'bg-[#222]' : 'bg-gray-50'}`}> 
        <div className="max-w-6xl w-full mx-auto">
          <h2 
            className={`text-3xl md:text-4xl font-bold mb-10 font-serif text-center`} 
            style={{color: 'rgb(72, 111, 136)'}}
            data-aos="fade-up"
            data-aos-duration="1000"
          >{t.menuTitle}</h2>
          <div className="grid  sm:grid-cols-2 md:grid-cols-4 gap-8">
            {/* Menu Card 1 */}
            <div 
              className="flex flex-col items-center"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <img src={menu1} alt={t.menu1} className="w-full h-80 object-cover rounded-lg shadow-lg" />
              <span className={`mt-4 text-lg font-serif ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>{t.menu1}</span>
            </div>
            {/* Menu Card 2 */}
            <div 
              className="flex flex-col items-center"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <img src={menu2} alt={t.menu2} className="w-full h-80 object-cover rounded-lg shadow-lg" />
              <span className={`mt-4 text-lg font-serif ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>{t.menu2}</span>
            </div>
            {/* Menu Card 3 */}
            <div 
              className="flex flex-col items-center"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <img src={menu3} alt={t.menu3} className="w-full h-80 object-cover rounded-lg shadow-lg" />
              <span className={`mt-4 text-lg font-serif ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>{t.menu3}</span>
            </div>
            {/* Menu Card 4 */}
            <div 
              className="flex flex-col items-center"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <img src={menu4} alt={t.menu4} className="w-full h-80 object-cover rounded-lg shadow-lg" />
              <span className={`mt-4 text-lg font-serif ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>{t.menu4}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section (White theme, red border, black text) */}
  <section className={`w-full py-20 px-4 md:px-0 flex flex-col items-center justify-center ${theme === 'dark' ? 'bg-[#181818]' : 'bg-white'}`}>
        <div className="max-w-6xl w-full mx-auto">
          <h2 
            className={`text-5xl md:text-6xl font-serif font-bold text-center mb-12`} 
            style={{color: 'rgb(72, 111, 136)'}}
            data-aos="fade-up"
            data-aos-delay="200"
          >{t.whyChooseUs}</h2>
          <div className="grid  md:grid-cols-3 gap-10">
            {/* Card 1 */}
            <div 
              className={`bg-transparent p-10 flex flex-col items-center text-center transition-all ${theme === 'dark' ? 'text-white' : 'text-black'}`} 
              style={{border: '1px solid rgb(72, 111, 136)', borderRadius: '0 20px 0 20px'}}
              data-aos="slide-right"
              data-aos-delay="300"
            > 
              {/* Market Icon SVG */}
              <svg width="64" height="64" fill="none" stroke="rgb(72, 111, 136)" strokeWidth="2" viewBox="0 0 64 64" className="mb-6"><rect x="18" y="28" width="28" height="24" rx="4"/><path d="M22 28V18M32 28V12M42 28V20"/></svg>
              <h3 className={`text-2xl font-serif font-semibold mb-2 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>{t.why1}</h3>
              <p className={`text-base ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>{t.why1desc}</p>
            </div>
            {/* Card 2 (Highlighted) */}
            <div 
              className={`bg-transparent p-10 flex flex-col items-center text-center transition-all relative ${theme === 'dark' ? 'text-white' : 'text-black'}`} 
              style={{border: '2px solid rgb(72, 111, 136)', boxShadow:'0 0 0 4px #fff, 0 0 0 8px rgb(72, 111, 136)', borderRadius: '20px 0 20px 0'}}
              data-aos="fade-up"
              data-aos-delay="400"
            >
              {/* Agent Icon SVG */}
              <svg width="64" height="64" fill="none" stroke="rgb(72, 111, 136)" strokeWidth="2" viewBox="0 0 64 64" className="mb-6"><rect x="22" y="16" width="20" height="32" rx="6"/><path d="M32 48v6"/><circle cx="32" cy="24" r="2"/></svg>
              <h3 className={`text-2xl font-serif font-semibold mb-2 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>{t.why2}</h3>
              <p className={`text-base ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>{t.why2desc}</p>
            </div>
            {/* Card 3 */}
            <div 
              className={`bg-transparent p-10 flex flex-col items-center text-center transition-all ${theme === 'dark' ? 'text-white' : 'text-black'}`} 
              style={{border: '1px solid rgb(72, 111, 136)', borderRadius: '0 20px 0 20px'}}
              data-aos="slide-right"
              data-aos-delay="500"
            > 
              {/* Service Icon SVG */}
              <svg width="64" height="64" fill="none" stroke="rgb(72, 111, 136)" strokeWidth="2" viewBox="0 0 64 64" className="mb-6"><ellipse cx="32" cy="28" rx="18" ry="8"/><rect x="14" y="28" width="36" height="10" rx="5"/><rect x="18" y="38" width="28" height="8" rx="4"/></svg>
              <h3 className={`text-2xl font-serif font-semibold mb-2 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>{t.why3}</h3>
              <p className={`text-base ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>{t.why3desc}</p>
            </div>
          </div>
        </div>
      </section>
      {/* What Our Clients Say Section (Two cards left, image right) */}
  <section className={`w-full py-20 px-4 md:px-0 flex flex-col items-center justify-center ${theme === 'dark' ? 'bg-[#222]' : 'bg-gray-50'}`}>
        <div className="max-w-6xl w-full mx-auto">
          <h2 
            className="text-4xl md:text-5xl font-serif font-bold mb-12 text-center" 
            style={{color: 'rgb(72, 111, 136)'}}
            data-aos="fade-up"
            data-aos-duration="1000"
          >{t.clientsSay}</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Side - Two Cards */}
            <div 
              className="flex flex-col gap-8"
              data-aos="slide-right"
              data-aos-duration="1000"
            >
              {/* Card 1 */}
              <div 
                className={`p-8 rounded-2xl shadow-lg ${theme === 'dark' ? 'bg-[#181818]' : 'bg-white'}`}
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="flex items-center mb-4">
                  <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Adolfo Roman" className="w-12 h-12 rounded-full mr-4 border-2 border-yellow-400" />
                  <div>
                    <span className={`font-semibold text-lg ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>Adolfo Roman</span>
                    <div className="flex items-center mt-1">
                      {[...Array(5)].map((_,i) => (
                        <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.38-2.455a1 1 0 00-1.175 0l-3.38 2.455c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z"/></svg>
                      ))}
                    </div>
                  </div>
                </div>
                <p className={`text-base ${theme === 'dark' ? 'text-gray-200' : 'text-gray-700'}`}>{t.client1}</p>
              </div>
              
              {/* Card 2 */}
              <div 
                className={`p-8 rounded-2xl shadow-lg ${theme === 'dark' ? 'bg-[#181818]' : 'bg-white'}`}
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <div className="flex items-center mb-4">
                  <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Maria Lopez" className="w-12 h-12 rounded-full mr-4 border-2 border-yellow-400" />
                  <div>
                    <span className={`font-semibold text-lg ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>Maria Lopez</span>
                    <div className="flex items-center mt-1">
                      {[...Array(5)].map((_,i) => (
                        <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.38-2.455a1 1 0 00-1.175 0l-3.38 2.455c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z"/></svg>
                      ))}
                    </div>
                  </div>
                </div>
                <p className={`text-base ${theme === 'dark' ? 'text-gray-200' : 'text-gray-700'}`}>{t.client2}</p>
              </div>
            </div>
            
            {/* Right Side - Image */}
            <div 
              className="flex justify-center items-center"
              data-aos="slide-up"
              data-aos-duration="1000"
            >
              <img 
                src={menu1} 
                alt="Happy customers testimonial" 
                className="w-full max-w-lg h-96 object-cover rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
      {/* CTAs Section (Styled like attachment) */}
  <section className={`w-full py-16 px-4 md:px-0 flex flex-col items-center justify-center ${theme === 'dark' ? 'bg-[#181818]' : 'bg-white'}`}>
        <div className="max-w-3xl w-full mx-auto flex flex-col items-center justify-center">
          <h2 
            className="text-4xl md:text-5xl font-extrabold text-center mb-4" 
            style={{color: 'rgb(72, 111, 136)'}}
            data-aos="fade-up"
            data-aos-duration="1000"
          >{t.readyGrow}</h2>
          <p 
            className={`text-lg text-center mb-8 ${theme === 'dark' ? 'text-gray-200' : 'text-gray-700'}`}
            data-aos="fade-up"
            data-aos-delay="200"
          >{t.readyDesc}</p>
          <button
            onClick={() => navigate('/contactus')}
            className="mt-2 px-10 py-4 rounded-full text-white font-semibold text-lg shadow-lg transition"
            style={{backgroundColor: 'rgb(72, 111, 136)', boxShadow:'0 4px 24px 0 rgba(72, 111, 136, 0.25)'}}
            onMouseEnter={(e) => e.target.style.backgroundColor = 'rgb(62, 101, 126)'}
            onMouseLeave={(e) => e.target.style.backgroundColor = 'rgb(72, 111, 136)'}
            data-aos="zoom-in"
            data-aos-delay="400"
            data-aos-duration="800"
          >
            {t.getStarted}
          </button>
        </div>
      </section>
      
    </div>
  );
}