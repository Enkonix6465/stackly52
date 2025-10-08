import React, {       "Escape to tranquil mountain retreats and countryside havens where nature meets luxury. Experience peace and serenity away from city life.",
      "Perfect for weekend getaways, permanent residences, or investment properties. Enjoy pristine landscapes and fresh mountain air on your own schedule.",
      "With exclusive locations and premium amenities, you'll always find the perfect retreat to reconnect with nature."State } from "react";
import takeVideo from "../assets/take.mp4";
import take1 from "../assets/take1.jpg";
import take2 from "../assets/take2.avif";
import take3 from "../assets/take3.jpg";

import { FaShoppingBag, FaClock, FaMobileAlt, FaArrowLeft, FaArrowRight } from "react-icons/fa";


// Translation object for all text
const translations = {
  en: {
    heroTitle: "Mountain & Countryside Escapes",
    heroDesc: "Serene retreats, breathtaking nature — discover your perfect mountain getaway today.",
    aboutTitle: "Why Choose Our Mountain & Countryside Properties?",
    about: [
      "Enjoy your favorite meals without the wait. Simply place your order online, choose a pickup time, and we'll have it ready.",
      "Perfect for busy workdays, quick lunches, or a hassle-free dinner. Get high-quality food on your schedule.",
      "With real-time order updates, you’ll always know when your meal is ready to grab."
    ],
    pricingTitle: "Meal Plans",
    pricingDesc: "Pick the plan that fits your lifestyle and goals.",
    plans: [
      { name: "Starter Plan", price: "$59", period: "/week", features: ["5 chef-prepared meals", "Balanced nutrition", "Pickup or delivery"], highlighted: false },
      { name: "Standard Plan", price: "$99", period: "/week", features: ["10 chef-prepared meals", "Customizable menu", "Free delivery"], highlighted: true },
      { name: "Premium Plan", price: "$179", period: "/week", features: ["20 meals + snacks", "Dietitian-approved", "Priority delivery"], highlighted: false },
    ],
    testimonials: [
      { name: "Olivia Carter", role: "Foodie on the Go", text: "Ordering for pickup is super easy — my food is always ready when I arrive!" },
      { name: "James Allen", role: "Office Worker", text: "Lunch breaks are now stress-free. I just grab and go — no waiting in lines." },
      { name: "Sophia Evans", role: "Parent", text: "Takeaway meals save my evenings. Fresh, fast, and perfect for family dinners." },
      { name: "Ethan Lewis", role: "Student", text: "Affordable and quick! I can order between classes and pick it up on time." },
      { name: "Amelia Scott", role: "Regular Customer", text: "Reliable pickup service and delicious food every single time!" },
    ],
    testimonialsTitle: "What Customers Say",
    stepsTitle: "How It Works",
    stepsDesc: "Quick and convenient takeaway ordering in just three easy steps.",
    steps: [
      { title: "Order Online", description: "Browse  menu and Takeaway your order in seconds." },
      { title: "Choose Pickup Time", description: "Select a convenient time that works best for you." },
      { title: "Grab & Go", description: "Skip the wait — your food will be ready when you arrive." },
    ],
    ctaTitle: "Ready for Faster Meals?",
    ctaDesc: "Place your takeaway order now and pick it up when it’s perfect for you.",
    ctaBtn: "Order Takeaway",
  },
  ar: {
    heroTitle: "طلبات الاستلام والوجبات الجاهزة",
    heroDesc: "طعام طازج بلا انتظار — اطلب عبر الإنترنت واستلمه في الوقت المناسب.",
    aboutTitle: "لماذا تختار خدمة الاستلام لدينا؟",
    about: [
      "استمتع بوجباتك المفضلة دون انتظار. فقط اطلب عبر الإنترنت وحدد وقت الاستلام وسنجهزها لك.",
      "مثالي لأيام العمل المزدحمة أو الغداء السريع أو عشاء بلا عناء. طعام عالي الجودة في وقتك.",
      "مع تحديثات الطلب الفورية، ستعرف دائمًا متى تكون وجبتك جاهزة للاستلام."
    ],
    pricingTitle: "خطط الوجبات",
    pricingDesc: "اختر الخطة التي تناسب نمط حياتك وأهدافك.",
    plans: [
      { name: "خطة البداية", price: "$59", period: "/أسبوع", features: ["5 وجبات من إعداد الطهاة", "تغذية متوازنة", "استلام أو توصيل"], highlighted: false },
      { name: "الخطة القياسية", price: "$99", period: "/أسبوع", features: ["10 وجبات من إعداد الطهاة", "قائمة قابلة للتخصيص", "توصيل مجاني"], highlighted: true },
      { name: "الخطة المميزة", price: "$179", period: "/أسبوع", features: ["20 وجبة + وجبات خفيفة", "معتمدة من أخصائي تغذية", "توصيل أولوية"], highlighted: false },
    ],
    testimonials: [
      { name: "أوليفيا كارتر", role: "محبة للطعام أثناء التنقل", text: "الطلب للاستلام سهل للغاية — طعامي دائمًا جاهز عند وصولي!" },
      { name: "جيمس ألين", role: "موظف مكتب", text: "استراحات الغداء أصبحت بلا توتر. فقط أستلم وأذهب — لا انتظار في الطوابير." },
      { name: "صوفيا إيفانز", role: "أم", text: "وجبات الاستلام توفر أمسياتي. طازجة وسريعة ومثالية لعشاء العائلة." },
      { name: "إيثان لويس", role: "طالب", text: "سعر مناسب وسرعة! أستطيع الطلب بين المحاضرات واستلامه في الوقت المحدد." },
      { name: "أميليا سكوت", role: "عميلة دائمة", text: "خدمة استلام موثوقة وطعام لذيذ في كل مرة!" },
    ],
    testimonialsTitle: "ماذا يقول العملاء",
    stepsTitle: "كيف تعمل",
    stepsDesc: "اطلب وجبتك الجاهزة بسهولة في ثلاث خطوات فقط.",
    steps: [
      { title: "اطلب عبر الإنترنت", description: "تصفح القائمة واطلب وجبتك الجاهزة في ثوانٍ." },
      { title: "حدد وقت الاستلام", description: "اختر الوقت المناسب لك." },
      { title: "استلم وانطلق", description: "تجنب الانتظار — طعامك سيكون جاهزًا عند وصولك." },
    ],
    ctaTitle: "جاهز لوجبات أسرع؟",
    ctaDesc: "اطلب وجبتك الجاهزة الآن واستلمها في الوقت المثالي لك.",
    ctaBtn: "اطلب الآن",
  },
  he: {
    heroTitle: "איסוף וטייק אווי",
    heroDesc: "אוכל טרי בלי לחכות — הזמינו אונליין ואספו בדיוק בזמן.",
    aboutTitle: "למה לבחור בשירות האיסוף שלנו?",
    about: [
      "תיהנו מהמנות האהובות עליכם בלי להמתין. פשוט הזמינו אונליין, בחרו זמן איסוף ואנו נכין הכל.",
      "מושלם לימי עבודה עמוסים, ארוחות צהריים מהירות או ערב בלי טרחה. אוכל איכותי בזמנכם.",
      "עם עדכונים בזמן אמת, תמיד תדעו מתי המנה מוכנה לאיסוף."
    ],
    pricingTitle: "תוכניות ארוחות",
    pricingDesc: "בחרו את התוכנית שמתאימה לאורח החיים והמטרות שלכם.",
    plans: [
      { name: "תוכנית מתחילים", price: "$59", period: "/שבוע", features: ["5 ארוחות מוכנות על ידי שף", "תזונה מאוזנת", "איסוף או משלוח"], highlighted: false },
      { name: "תוכנית סטנדרטית", price: "$99", period: "/שבוע", features: ["10 ארוחות מוכנות על ידי שף", "תפריט מותאם אישית", "משלוח חינם"], highlighted: true },
      { name: "תוכנית פרימיום", price: "$179", period: "/שבוע", features: ["20 ארוחות + חטיפים", "מאושר על ידי דיאטנית", "משלוח בעדיפות"], highlighted: false },
    ],
    testimonials: [
      { name: "אוליביה קרטר", role: "חובבת אוכל בדרכים", text: "הזמנה לאיסוף קלה מאוד — האוכל שלי תמיד מוכן כשאני מגיעה!" },
      { name: "ג'יימס אלן", role: "עובד משרד", text: "הפסקות הצהריים עכשיו בלי לחץ. פשוט אוסף והולך — בלי תור." },
      { name: "סופיה אוונס", role: "הורה", text: "ארוחות איסוף מצילות לי את הערב. טרי, מהיר ומושלם לארוחת משפחה." },
      { name: "אית'ן לואיס", role: "סטודנט", text: "זול ומהיר! אני מזמין בין שיעורים ואוסף בזמן." },
      { name: "אמיליה סקוט", role: "לקוחה קבועה", text: "שירות איסוף אמין ואוכל טעים בכל פעם!" },
    ],
    testimonialsTitle: "מה הלקוחות אומרים",
    stepsTitle: "איך זה עובד",
    stepsDesc: "הזמנת טייק אווי קלה בשלושה שלבים פשוטים.",
    steps: [
      { title: "הזמינו אונליין", description: "עיינו בתפריט והזמינו טייק אווי בשניות." },
      { title: "בחרו זמן איסוף", description: "בחרו את הזמן שנוח לכם." },
      { title: "אספו וצאו לדרך", description: "בלי להמתין — האוכל שלכם יהיה מוכן כשאתם מגיעים." },
    ],
    ctaTitle: "מוכנים לארוחות מהירות יותר?",
    ctaDesc: "הזמינו עכשיו ואספו את המנה בזמן שנוח לכם.",
    ctaBtn: "הזמן טייק אווי",
  },
};

const stepIcons = [
  <FaMobileAlt size={28} className="text-white" />,
  <FaClock size={28} className="text-white" />,
  <FaShoppingBag size={28} className="text-white" />,
];

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
          <h1 className="text-5xl md:text-7xl font-bold text-white drop-shadow-lg" style={dir === 'rtl' ? {textAlign:'right'} : {}}>
            {translations[language].heroTitle}
          </h1>
          <p className="mt-6 text-lg md:text-2xl text-gray-200 max-w-2xl" style={dir === 'rtl' ? {textAlign:'right'} : {}}>
            {translations[language].heroDesc}
          </p>
        </div>
      </section>

  {/* About Section */}
  <section className={`py-20 px-6 md:px-20 ${sectionAltBg}`}> 
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="w-full md:w-1/2 flex justify-center items-center min-h-[340px] h-full">
            <img
              src={take1}
              alt="Takeaway meals"
              className="w-full md:max-w-full md:h-[340px] max-w-md h-full object-cover rounded-2xl shadow-lg"
            />
          </div>
          <div className="w-full md:w-1/2 flex flex-col items-start justify-center min-h-[340px] h-full md:pl-8 text-justify">
            <h2 className="text-4xl font-bold mb-6" style={dir === 'rtl' ? {textAlign:'right'} : {}}>
              {translations[language].aboutTitle}
            </h2>
            {translations[language].about.map((p, i) => (
              <p className="mb-4" key={i} style={dir === 'rtl' ? {textAlign:'right'} : {}}>{p}</p>
            ))}
          </div>
        </div>
      </section>
            <section className={`py-20 px-6 ${pricingBg} text-center`} id="pricing">
  <h2 className="text-4xl font-bold text-red-500 mb-4" style={dir === 'rtl' ? {textAlign:'right'} : {}}>{translations[language].pricingTitle}</h2>
  <p className="max-w-2xl mx-auto mb-12" style={dir === 'rtl' ? {textAlign:'right'} : {}}>
          {translations[language].pricingDesc}
        </p>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {translations[language].plans.map((plan, idx) => (
            <div
              key={idx}
              className={`flex flex-col items-center rounded-2xl p-8 shadow-lg border 
                ${plan.highlighted ? (theme === 'dark' ? 'bg-red-700 text-white scale-105' : 'bg-red-500 text-white scale-105') : (theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-800')}`}
              style={dir === 'rtl' ? {textAlign:'right'} : {}}
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
            <div className="text-center md:text-left">
              <h2 className={`text-4xl font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-black'}`} style={dir === 'rtl' ? {textAlign:'right'} : {}}>{translations[language].testimonialsTitle}</h2>
            <div className={`rounded-2xl p-8 shadow-lg ${cardBg}`}>
              <p className="text-lg italic mb-6" style={dir === 'rtl' ? {textAlign:'right'} : {}}>
                "{testimonial.text}"
              </p>
              <h3 className="text-xl font-semibold">{testimonial.name}</h3>
              <p className="text-red-500 text-sm">{testimonial.role}</p>
            </div>
            <div className="flex justify-center md:justify-start gap-4 mt-6">
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
          <div className="flex justify-center">
            <img
              src={take2}
              alt="Takeaway ready"
              className="rounded-2xl shadow-lg w-full max-w-md h-[350px] w-[500px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* Steps Section */}
  <section className={`py-20 px-6 ${pricingBg} text-center`}>
  <h2 className="text-4xl font-bold text-red-500 mb-4" style={dir === 'rtl' ? {textAlign:'right'} : {}}>{translations[language].stepsTitle}</h2>
        <p className={`${theme === 'dark' ? 'text-white' : 'text-gray-600'} max-w-2xl mx-auto mb-12`} style={dir === 'rtl' ? {textAlign:'right'} : {}}>
          {translations[language].stepsDesc}
        </p>

        <div className="flex flex-wrap justify-center items-center gap-6">
          {translations[language].steps.map((step, idx) => (
            <div key={idx} className="flex items-center">
              <div className="flex flex-col hover:scale-105 transition items-center max-w-[200px]">
                <div className={`rounded-full w-16 h-16 flex items-center justify-center mb-4 shadow-md ${theme === 'dark' ? 'bg-red-700' : 'bg-red-500'}`}> 
                  {stepIcons[idx]}
                </div>
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className={`${theme === 'dark' ? 'text-white' : 'text-gray-600'} text-sm`}>{step.description}</p>
              </div>
              {idx < translations[language].steps.length - 1 && (
                <FaArrowRight size={30} className={`${theme === 'dark' ? 'text-white' : 'text-gray-400'} mx-6 hidden md:block`} />
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="relative py-24 px-6 md:px-20 text-white">
        <img
          src={take3}
          alt="Pickup service"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        <div className="absolute inset-0 bg-red-500/70 z-0"></div>

        <div className="relative z-10 flex flex-col items-center justify-center text-center max-w-3xl mx-auto">
          <h2 className="text-5xl font-extrabold mb-6" style={dir === 'rtl' ? {textAlign:'right'} : {}}>{translations[language].ctaTitle}</h2>
          <p className="text-lg md:text-xl mb-8 leading-relaxed" style={dir === 'rtl' ? {textAlign:'right'} : {}}>{translations[language].ctaDesc}</p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="bg-white text-black py-4 px-10 text-lg font-semibold rounded-full shadow-lg hover:bg-gray-100 transition duration-300"
          >
            {translations[language].ctaBtn}
          </button>
        </div>
      </section>
    </div>
  );
};

export default TakeawayPickupHero;
