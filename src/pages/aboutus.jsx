import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import AOS from "aos";
import "aos/dist/aos.css";

import aboutushero from "../assets/aboutushero.mp4";
import special1 from "../assets/mission.jpg";
import special2 from "../assets/vision.jpg";
import awards from "../assets/awards.jpg";

const translations = {
  English: {
    about: "About Us",
    hero: "Building Dreams, Creating Homes, One Property at a Time",
    missionTitle: "Our Mission",
    missionDesc: "To guide every client through an exceptional real estate experience, combining market expertise, personalized service, and a passion for finding the perfect property match. We strive to create lasting relationships where families and individuals can achieve their property dreams with confidence and trust.",
    achievementsTitle: "Company Milestones",
    achievementsDesc: "Over the years, our journey has been marked by numerous awards and milestones that celebrate our commitment to excellence and innovation in the real estate industry.",
    achievementsList: [
      { year: "1990", desc: "Best New Real Estate Agency Award" },
      { year: "2005", desc: "Property Excellence Recognition" },
      { year: "2015", desc: "Community Choice Award" },
      { year: "2022", desc: "Innovation & Technology Honor" },
    ],
    visionTitle: "Our Vision",
    visionDesc: "To be the region's most trusted real estate agency, known for innovation, integrity, and a commitment to community. We envision a future where every property transaction is seamless and every client achieves their real estate goals with confidence.",
    corePrinciples: "Core Values",
    principle1: "Trust & Transparency",
    principle1Desc: "We maintain the highest standards of honesty and transparency in every transaction, ensuring our clients are fully informed throughout their real estate journey.",
    principle2: "Market Expertise",
    principle2Desc: "We are committed to deep market knowledge, from understanding local trends to providing accurate valuations and investment guidance.",
    principle3: "Client-Centric Service",
    principle3Desc: "We treat our clients, partners, and community with respect and dedication, fostering long-term relationships built on trust and exceptional service.",
    ctaTitle: "Ready to Find Your Perfect Property?",
    ctaDesc: "Experience premium real estate service, expert market guidance, and personalized property solutions. Schedule a consultation for tailored service or browse our extensive property listings. We're here to help you achieve your property goals every step of the way!",
    reserveBtn: "Start Now",
    orderBtn: "Browse Properties"
  },
  Arabic: {
    about: "من نحن",
    hero: "نبني الأحلام، ننشئ المنازل، عقارًا تلو الآخر",
    missionTitle: "مهمتنا",
    missionDesc: "توجيه كل عميل عبر تجربة عقارية استثنائية، تجمع بين خبرة السوق والخدمة الشخصية والشغف لإيجاد المطابقة العقارية المثالية. نسعى لبناء علاقات دائمة حيث يمكن للعائلات والأفراد تحقيق أحلامهم العقارية بثقة واطمئنان.",
    achievementsTitle: "معالم الشركة",
    achievementsDesc: "على مر السنين، تميزت رحلتنا بالعديد من الجوائز والإنجازات التي تحتفي بالتزامنا بالتميز والابتكار في صناعة العقارات.",
    achievementsList: [
      { year: "1990", desc: "جائزة أفضل وكالة عقارية جديدة" },
      { year: "2005", desc: "التميز في العقارات" },
      { year: "2015", desc: "جائزة اختيار المجتمع" },
      { year: "2022", desc: "شرف الابتكار والتكنولوجيا" },
    ],
    visionTitle: "رؤيتنا",
    visionDesc: "أن نكون الوكالة العقارية الأكثر ثقة في المنطقة، معروفين بالابتكار والنزاهة والالتزام بالمجتمع. نتصور مستقبلاً تكون فيه كل معاملة عقارية سلسة ويحقق كل عميل أهدافه العقارية بثقة.",
    corePrinciples: "القيم الأساسية",
    principle1: "الثقة والشفافية",
    principle1Desc: "نحافظ على أعلى معايير الصدق والشفافية في كل معاملة، لضمان إطلاع عملائنا الكامل طوال رحلتهم العقارية.",
    principle2: "خبرة السوق",
    principle2Desc: "نلتزم بالمعرفة العميقة للسوق، من فهم الاتجاهات المحلية إلى توفير تقييمات دقيقة وإرشاد استثماري.",
    principle3: "خدمة محورية العميل",
    principle3Desc: "نتعامل مع عملائنا وشركائنا ومجتمعنا بالاحترام والتفاني، ونبني علاقات طويلة الأمد قائمة على الثقة والخدمة الاستثنائية.",
    ctaTitle: "مستعد للعثور على عقارك المثالي؟",
    ctaDesc: "اختبر خدمة عقارية متميزة وإرشاد السوق المتخصص وحلول العقارات الشخصية. احجز استشارة للخدمة المخصصة أو تصفح قوائم العقارات الواسعة لدينا. نحن هنا لمساعدتك في تحقيق أهدافك العقارية—في كل خطوة!",
    reserveBtn: "احجز استشارة",
    orderBtn: "تصفح العقارات",
  },
  Hebrew: {
    about: "עלינו",
    hero: "בונים חלומות, יוצרים בתים, נכס אחר נכס",
    missionTitle: "המשימה שלנו",
    missionDesc: "להדריך כל לקוח דרך חוויית נדל\"ן יוצאת דופן, המשלבת מומחיות שוק, שירות אישי ותשוקה למציאת ההתאמה הנכסית המושלמת. אנו שואפים ליצור קשרים מתמשכים בהם משפחות ויחידים יכולים להשיג את חלומות הנכס שלהם בביטחון ובאמון.",
    achievementsTitle: "אבני דרך של החברה",
    achievementsDesc: "לאורך השנים, המסע שלנו התאפיין בפרסים רבים ואבני דרך החוגגים את המחויבות שלנו למצוינות וחדשנות בתעשיית הנדל\"ן.",
    achievementsList: [
      { year: "1990", desc: "פרס סוכנות הנדל\"ן החדשה הטובה ביותר" },
      { year: "2005", desc: "הוקרה למצוינות בנכסים" },
      { year: "2015", desc: "פרס בחירת הקהילה" },
      { year: "2022", desc: "אות חדשנות וטכנולוגיה" },
    ],
    visionTitle: "החזון שלנו",
    visionDesc: "להיות סוכנות הנדל\"ן הכי מהימנה באזור, ידועה בחדשנות, יושרה ומחויבות לקהילה. אנו רואים עתיד בו כל עסקת נכס חלקה וכל לקוח משיג את מטרות הנדל\"ן שלו בביטחון.",
    corePrinciples: "ערכי יסוד",
    principle1: "אמון ושקיפות",
    principle1Desc: "אנו שומרים על הסטנדרטים הגבוהים ביותר של יושרה ושקיפות בכל עסקה, ומבטיחים שהלקוחות שלנו מעודכנים במלואם לאורך המסע הנדל\"ני שלהם.",
    principle2: "מומחיות שוק",
    principle2Desc: "אנו מחויבים לידע עמוק בשוק, מהבנת מגמות מקומיות ועד מתן הערכות מדויקות והדרכה השקעתית.",
    principle3: "שירות ממוקד לקוח",
    principle3Desc: "אנו מתייחסים ללקוחות, לשותפים ולקהילה שלנו בכבוד ובמסירות, ומטפחים קשרים ארוכי טווח הבנויים על אמון ושירות יוצא דופן.",
    ctaTitle: "מוכן למצוא את הנכס המושלם שלך?",
    ctaDesc: "חווה שירות נדל\"ן מובחר, הדרכת שוק מקצועית ופתרונות נכסים אישיים. תזמן יעוץ לשירות מותאם אישית או עיין ברשימות הנכסים הנרחבות שלנו. אנחנו כאן כדי לעזור לך להשיג את מטרות הנכס שלך—בכל שלב!",
    reserveBtn: "תזמן יעוץ",
    orderBtn: "עיין בנכסים",
  },
};

export default function AboutUs() {
  const navigate = useNavigate();
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
    <div className={`flex flex-col min-h-screen ${theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'}`} dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Theme Toggle Button */}
      <button
        onClick={toggleTheme}
        className="fixed top-6 right-6 z-30 bg-gray-200 dark:bg-gray-800 text-black dark:text-white px-4 py-2 rounded shadow hover:bg-gray-300 dark:hover:bg-gray-700 transition"
        aria-label="Toggle theme"
      >
        {theme === 'dark' ? '☀️ Light' : '🌙 Dark'}
      </button>

      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center h-[90vh] w-full overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover z-0 brightness-110"
          src={aboutushero}
          autoPlay
          loop
          muted
          playsInline
        />
        <div className={`absolute inset-0 z-10 ${theme === 'dark' ? 'bg-black/70' : 'bg-black/60'}`} />
          <div className="relative z-20 flex flex-col items-center justify-center h-full w-full px-4 text-center">
            <h1 
              className="text-4xl md:text-6xl font-serif font-bold text-white text-center mb-4 drop-shadow-lg"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              {t.about}
            </h1>
            <span 
              className="text-lg md:text-2xl text-white/90 text-center mb-8 max-w-2xl drop-shadow"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              {t.hero}
            </span>
          </div>
      </section>

      {/* Our Mission Section */}
      <section className={`w-full py-20 px-4 md:px-0 flex flex-col items-center justify-center ${theme === 'dark' ? 'bg-[#181818]' : 'bg-gray-50'}`}>
        <div className="max-w-6xl w-full mx-auto flex flex-col md:flex-row gap-10 items-end">
          {/* Left: Image */}
          <div 
            className="w-full h-full flex items-end"
            data-aos="slide-right"
            data-aos-duration="1000"
          >
            <div className="w-full aspect-[16/10]">
              <img
                src={special1}
                alt="Our Mission"
                className="rounded-2xl shadow-lg w-full h-full object-cover"
              />
            </div>
          </div>
          {/* Right: Content */}
          <div 
            className="grid gap-4 content-end"
            data-aos="slide-right"
            data-aos-duration="1000"
          >
            <h2 
              className={`text-3xl md:text-4xl font-bold font-serif`} 
              style={{color: 'rgb(72, 111, 136)'}}
              data-aos="fade-up"
              data-aos-delay="200"
            >
              {t.missionTitle}
            </h2>
            <p 
              className={`text-lg max-w-lg ${theme === 'dark' ? 'text-white' : 'text-gray-700'}`}
              data-aos="fade-up"
              data-aos-delay="400"
            >
              {t.missionDesc}
            </p>
          </div>
        </div>
      </section>

      {/* Company Milestones Section */}
      <section className={`w-full py-20 px-4 md:px-0 flex flex-col items-center justify-center ${theme === 'dark' ? 'bg-black' : 'bg-white'}`}>
        <div className="max-w-6xl w-full mx-auto grid md:grid-cols-2 gap-10 items-center">
          {/* Left: Image */}
          <div 
            className="w-full h-full order-1 md:order-2"
            data-aos="slide-right"
            data-aos-duration="1000"
          >
            <div className="w-full aspect-[16/10]">
              <img
                src={awards}
                alt="Company Milestones"
                className="rounded-2xl shadow-lg w-full h-full object-cover"
              />
            </div>
          </div>
          {/* Right: Content */}
          <div 
            className="grid gap-4 content-center"
            data-aos="slide-right"
            data-aos-duration="1000"
          >
            <h2 
              className={`text-3xl md:text-4xl font-bold font-serif`} 
              style={{color: 'rgb(72, 111, 136)'}}
              data-aos="fade-up"
              data-aos-delay="200"
            >
              {t.achievementsTitle}
            </h2>
            <p 
              className={`text-lg max-w-lg ${theme === 'dark' ? 'text-white' : 'text-gray-700'}`}
              data-aos="fade-up"
              data-aos-delay="400"
            >
              {t.achievementsDesc}
            </p>
            <ul 
              className={`space-y-2 list-disc pl-5 ${theme === 'dark' ? 'text-white' : 'text-gray-700'}`}
              data-aos="fade-up"
              data-aos-delay="600"
            >
              {t.achievementsList.map((item, i) => (
                <li key={i}><span className="font-semibold">{item.year}:</span> {item.desc}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Our Vision Section */}
      <section className={`w-full py-20 px-4 md:px-0 flex flex-col items-center justify-center ${theme === 'dark' ? 'bg-[#181818]' : 'bg-gray-50'}`}>
        <div className="max-w-6xl w-full mx-auto grid md:grid-cols-2 gap-10 items-center">
          {/* Left: Content */}
          <div 
            className="grid gap-4 content-center order-2 md:order-1"
            data-aos="slide-right"
            data-aos-duration="1000"
          >
            <h2 
              className={`text-3xl md:text-4xl font-bold font-serif`} 
              style={{color: 'rgb(72, 111, 136)'}}
              data-aos="fade-up"
              data-aos-delay="200"
            >
              {t.visionTitle}
            </h2>
            <p 
              className={`text-lg max-w-lg ${theme === 'dark' ? 'text-white' : 'text-black'}`}
              data-aos="fade-up"
              data-aos-delay="400"
            >
              {t.visionDesc}
            </p>
          </div>
          {/* Right: Image */}
          <div 
            className="w-full h-full order-1 md:order-2"
            data-aos="slide-right"
            data-aos-duration="1000"
          >
            <div className="w-full aspect-[16/10]">
              <img
                src={special2}
                alt="Our Vision"
                className="rounded-2xl shadow-lg w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className={`w-full py-20 px-4 md:px-0 flex flex-col items-center justify-center ${theme === 'dark' ? 'bg-black' : 'bg-white'}`}>
        <div className="max-w-6xl w-full mx-auto flex flex-col items-center">
          <h2 
            className={`text-3xl md:text-4xl font-bold mb-8 font-serif text-center`} 
            style={{color: 'rgb(72, 111, 136)'}}
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            {t.corePrinciples}
          </h2>
          <div className="grid  md:grid-cols-3 gap-10 w-full">
            {/* Principle 1 */}
            <div 
              className={`flex flex-col items-center rounded-2xl shadow-lg p-8 ${theme === 'dark' ? 'bg-[#181818]' : 'bg-gray-50'}`}
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <h3 className="text-xl font-semibold mb-2" style={{color: 'rgb(72, 111, 136)'}}>{t.principle1}</h3>
              <p className={`text-center ${theme === 'dark' ? 'text-white' : 'text-gray-700'}`}>{t.principle1Desc}</p>
            </div>
            {/* Principle 2 */}
            <div 
              className={`flex flex-col items-center rounded-2xl shadow-lg p-8 ${theme === 'dark' ? 'bg-[#181818]' : 'bg-gray-50'}`}
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <h3 className="text-xl font-semibold mb-2" style={{color: 'rgb(72, 111, 136)'}}>{t.principle2}</h3>
              <p className={`text-center ${theme === 'dark' ? 'text-white' : 'text-gray-700'}`}>{t.principle2Desc}</p>
            </div>
            {/* Principle 3 */}
            <div 
              className={`flex flex-col items-center rounded-2xl shadow-lg p-8 ${theme === 'dark' ? 'bg-[#181818]' : 'bg-gray-50'}`}
              data-aos="fade-up"
              data-aos-delay="600"
            >
              <h3 className="text-xl font-semibold mb-2" style={{color: 'rgb(72, 111, 136)'}}>{t.principle3}</h3>
              <p className={`text-center ${theme === 'dark' ? 'text-white' : 'text-gray-700'}`}>{t.principle3Desc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`w-full py-16 px-4 md:px-0 flex flex-col items-center justify-center ${theme === 'dark' ? 'bg-[#181818]' : 'bg-gray-50'}`}>
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
            className={`text-lg text-center mb-8 ${theme === 'dark' ? 'text-white' : 'text-gray-700'}`}
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