import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import contactVideo from "../assets/contact.mp4";
import contact1 from "../assets/contact1.jpg";
import contact2 from "../assets/contact2.jpg";
import contact3 from "../assets/contact3.webp";
import faqImage from "../assets/faq.jpg";

// Translation object for Real Estate Contact page
const translations = {
  en: {
    heroTitle: "Find Your Dream <span style='color: rgba(72, 111, 136, 0.8)'>Property</span> Today",
    heroDesc: "Building <span class='text-white font-semibold'>dreams</span>, creating <span class='text-white font-semibold'>homes</span> — your perfect property awaits.",
    supportHeading: "Meet Our Real Estate Team",
    cards: [
      { title: "Visit Our Office", text: "100 Real Estate Ave, Prime City" },
      { title: "Email Us", text: "stackly.com" },
      { title: "Sales Hotline", text: "(555) REALTY-1" },
    ],
    getInTouch: "Schedule Consultation",
    needHelp: "Looking for property? <span style='color: rgba(72, 111, 136, 0.8)'>Let's find your perfect home</span>",
    firstName: "First Name",
    lastName: "Last Name",
    email: "Email",
    phone: "Phone",
    message: "Tell us about your property needs",
    send: "Schedule Consultation",
    submitted: "Request Sent!",
    submitSuccess: "We'll contact you within 24 hours!",
    location: "Our Office Location",
    howToReach: "Visit Our Real Estate Office",
    faqSmall: "Property Questions & Answers",
    faqTitle: "Got <span style='color: rgba(72, 111, 136, 0.8)'>Property Questions?</span> We Have Expert Answers",
    stayUpdated: "Stay Updated on Market Trends",
    newsletterDesc: "Subscribe to receive the latest property listings, market insights, and exclusive investment opportunities.",
    subscribe: "Get Market Updates",
    subscribed: "Subscribed!",
    subscribeSuccess: "You'll receive market updates soon!",
    faqs: [
      { q: "How do I start looking for a property?", a: "Begin with a consultation where we discuss your needs, budget, and preferred locations. We'll then provide tailored property recommendations." },
      { q: "What areas do you service?", a: "We serve the entire metropolitan area including luxury urban districts, suburban communities, and waterfront properties." },
      { q: "Do you help with financing?", a: "Yes, we work with trusted mortgage partners and can connect you with financing options that fit your budget and investment goals." },
      { q: "How long does the buying process take?", a: "Typically 30-60 days from offer acceptance, depending on financing, inspections, and closing requirements. We guide you through every step." },
      { q: "Do you offer property management services?", a: "Yes, we provide comprehensive property management for rental properties, including tenant screening, maintenance, and financial reporting." },
    ],
  },
  ar: {
    heroTitle: "اعثر على <span style='color: rgba(72, 111, 136, 0.8)'>عقارك المثالي</span> اليوم",
    heroDesc: "نبني <span class='text-white font-semibold'>الأحلام</span>، وننشئ <span class='text-white font-semibold'>المنازل</span> — عقارك المثالي في انتظارك.",
    supportHeading: "فريق العقارات لدينا",
    cards: [
      { title: "زر مكتبنا", text: "100 شارع العقارات، المدينة الرئيسية" },
      { title: "راسلنا عبر البريد", text: "stackly.com" },
      { title: "خط المبيعات", text: "(555) عقارات-1" },
    ],
    getInTouch: "احجز استشارة",
    needHelp: "تبحث عن عقار؟ <span style='color: rgba(72, 111, 136, 0.8)'>دعنا نجد لك المنزل المثالي</span>",
    firstName: "الاسم الأول",
    lastName: "اسم العائلة",
    email: "البريد الإلكتروني",
    phone: "رقم الهاتف",
    message: "أخبرنا عن احتياجاتك العقارية",
    send: "احجز استشارة",
    submitted: "تم إرسال الطلب!",
    submitSuccess: "سنتواصل معك خلال 24 ساعة!",
    location: "موقع مكتبنا",
    howToReach: "زر مكتب العقارات لدينا",
    faqSmall: "أسئلة وأجوبة العقارات",
    faqTitle: "لديك <span style='color: rgba(72, 111, 136, 0.8)'>أسئلة عقارية؟</span> لدينا إجابات الخبراء",
    stayUpdated: "ابق مطلعاً على اتجاهات السوق",
    newsletterDesc: "اشترك لتلقي أحدث قوائم العقارات ورؤى السوق وفرص الاستثمار الحصرية.",
    subscribe: "احصل على تحديثات السوق",
    subscribed: "تم الاشتراك!",
    subscribeSuccess: "ستتلقى تحديثات السوق قريباً!",
    faqs: [
      { q: "كيف أبدأ في البحث عن عقار؟", a: "ابدأ بالاستشارة حيث نناقش احتياجاتك وميزانيتك والمواقع المفضلة. ثم نقدم توصيات عقارية مصممة خصيصاً." },
      { q: "ما هي المناطق التي تخدمونها؟", a: "نخدم منطقة العاصمة بالكامل بما في ذلك الأحياء الحضرية الفاخرة والمجتمعات الضاحية والعقارات المطلة على الماء." },
      { q: "هل تساعدون في التمويل؟", a: "نعم، نعمل مع شركاء الرهن العقاري الموثوقين ويمكننا ربطك بخيارات التمويل التي تناسب ميزانيتك وأهدافك الاستثمارية." },
      { q: "كم تستغرق عملية الشراء؟", a: "عادة 30-60 يوماً من قبول العرض، حسب التمويل والفحوصات ومتطلبات الإغلاق. نوجهك خلال كل خطوة." },
      { q: "هل تقدمون خدمات إدارة العقارات؟", a: "نعم، نقدم إدارة شاملة للعقارات المؤجرة، بما في ذلك فحص المستأجرين والصيانة والتقارير المالية." },
    ],
  },
  he: {
    heroTitle: "מצא את הנכס <span style='color: rgba(72, 111, 136, 0.8)'>החלומי</span> שלך היום",
    heroDesc: "בונים <span class='text-white font-semibold'>חלומות</span>, יוצרים <span class='text-white font-semibold'>בתים</span> — מומחי הנדל\"ן שלנו יעזרו לך להשיג הכל.",
    supportHeading: "מכתב הנדל\"ן שלנו",
    cards: [
      { title: "מכתב נדל\"ן", text: "100 שדרות הנדל\"ן, העיר הראשית" },
      { title: "מייל לנו", text: "stackly.com" },
      { title: "קו מכירות", text: "(555) נדלן-1" },
    ],
    getInTouch: "דבר עם יועץ נדל\"ן",
    needHelp: "מחפש נכס? <span style='color: rgba(72, 111, 136, 0.8)'>בוא נמצא אותו יחד</span>",
    firstName: "שם פרטי",
    lastName: "שם משפחה",
    email: "אימייל",
    phone: "טלפון",
    message: "ספר לנו על הצרכים הנדל\"ניים שלך",
    send: "קבע ייעוץ",
    submitted: "הבקשה נשלחה!",
    submitSuccess: "ניצור קשר תוך 24 שעות!",
    location: "מיקום המכתב שלנו",
    howToReach: "בקר במכתב הנדל\"ן שלנו",
    faqSmall: "שאלות ותשובות נדל\"ן",
    faqTitle: "יש <span style='color: rgba(72, 111, 136, 0.8)'>שאלות נדל\"ן?</span> יש לנו תשובות מומחים",
    stayUpdated: "הישאר מעודכן בטרנדים של השוק",
    newsletterDesc: "הירשם לקבלת רשימות הנכסים העדכניות, תובנות שוק והזדמנויות השקעה בלעדיות.",
    subscribe: "קבל עדכוני שוק",
    subscribed: "נרשמת!",
    subscribeSuccess: "תקבל עדכוני שוק בקרוב!",
    faqs: [
      { q: "איך להתחיל בחיפוש נכס?", a: "התחל עם ייעוץ שבו נדון בצרכים שלך, בתקציב ובמיקומים המועדפים. אז נספק המלצות נכסים מותאמות אישית." },
      { q: "איזה אזורים אתם מכסים?", a: "אנחנו משרתים את כל האזור המטרופוליטני כולל שכונות עירוניות יוקרתיות, קהילות פרבריות ונכסים על חוף הים." },
      { q: "האם אתם עוזרים במימון?", a: "כן, אנחנו עובדים עם שותפי משכנתא מהימנים ויכולים לחבר אותך לאפשרויות מימון שמתאימות לתקציב ולמטרות ההשקעה שלך." },
      { q: "כמה זמן לוקח תהליך הקנייה?", a: "בדרך כלל 30-60 יום מקבלת הצעה, תלוי במימון, בבדיקות ובדרישות הסגירה. אנחנו נדריך אותך בכל שלב." },
      { q: "האם אתם מציעים שירותי ניהול נכסים?", a: "כן, אנחנו מספקים ניהול מקיף עבור נכסי השכרה, כולל בדיקת שוכרים, תחזוקה ודיווח כספי." },
    ],
  },
};



export default function ContactHero() {
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [openIndex, setOpenIndex] = useState(null);

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 100,
      once: true,
      mirror: false,
    });
  }, []);

  // Language state synced with Header (live update)
  const [language, setLanguage] = React.useState('en');
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
      const storedSelectedLang = localStorage.getItem('selectedLanguage') || 'English';
      setLanguage(langMap[storedSelectedLang] || 'en');
      const handleLangChange = () => {
        const newSelectedLang = localStorage.getItem('selectedLanguage') || 'English';
        setLanguage(langMap[newSelectedLang] || 'en');
      };
      window.addEventListener('language-changed', handleLangChange);
      window.addEventListener('storage', handleLangChange);
      return () => {
        window.removeEventListener('language-changed', handleLangChange);
        window.removeEventListener('storage', handleLangChange);
      };
    }
  }, []);

  // Set RTL/LTR direction
  const dir = language === 'ar' || language === 'he' ? 'rtl' : 'ltr';

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Theme state synced with Header (live update)
  const [theme, setTheme] = React.useState('light');
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

  return (
    <div className={theme === 'dark' ? 'min-h-screen text-white' : 'min-h-screen  text-black'} dir={dir}>
      {/* Hero Section */}
  <section className={`relative h-[90vh] flex items-center justify-center ${theme === 'dark' ? '' : ''}`}> 
        {/* Background video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover -z-10"
        >
          <source src={contactVideo} type="video/mp4" />
          Your browser does not support HTML5 video.
        </video>

        {/* Optional dark overlay for readability */}
        <div className={theme === 'dark' ? 'absolute inset-0 bg-black/60 -z-10' : 'absolute inset-0 bg-black/40 -z-10'}></div>

        {/* Content */}
        <div className={`relative text-center px-4 max-w-2xl ${theme === 'dark' ? 'text-white' : 'text-white'}`}
          style={dir === 'rtl' ? { direction: 'rtl' } : {}}>
          <h1 
            className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight" 
            dangerouslySetInnerHTML={{ __html: translations[language].heroTitle }}
            data-aos="fade-up"
          />
          <p 
            className="text-lg md:text-2xl font-light mb-6" 
            dangerouslySetInnerHTML={{ __html: translations[language].heroDesc }}
            data-aos="fade-up"
            data-aos-delay="200"
          />
        </div>
      </section>

      {/* Contact Cards Section */}
      <section className={`py-16 ${theme === 'dark' ? 'bg-[#222]' : 'bg-gray-50'}`}> 
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Heading */}
  <h2 className={`text-4xl md:text-5xl font-extrabold text-center mb-12`}
          style={{
            color: 'rgba(72, 111, 136, 0.8)',
            ...(dir === 'rtl' ? { direction: 'rtl' } : {})
          }}
          data-aos="fade-up">
          {translations[language].supportHeading}
        </h2>
        {/* Cards Grid */}
        <div className="grid gap-10 md:grid-cols-3">
          {(() => {
            const cardImages = [contact1, contact2, contact3];
            return translations[language].cards.map((card, index) => (
              <div
                key={index}
                className={`${theme === 'dark' ? 'bg-[#181818] text-white' : 'bg-white text-black'} rounded-2xl shadow-md hover:shadow-xl transition text-center p-6`}
                style={dir === 'rtl' ? { direction: 'rtl' } : {}}
                data-aos="slide-up"
                data-aos-delay={200 + index * 200}
              >
                <img
                  src={cardImages[index]}
                  alt={card.title}
                  className="w-full h-56 object-cover rounded-xl mb-6"
                  data-aos="zoom-in"
                  data-aos-delay={400 + index * 200}
                />
                <h3 
                  className="text-xl font-bold mb-2" 
                  style={{ color: 'rgba(72, 111, 136, 0.8)' }}
                  data-aos="fade-up"
                  data-aos-delay={600 + index * 200}
                >
                  {card.title}
                </h3>
                <p 
                  className={theme === 'dark' ? 'text-gray-200' : 'text-gray-600'}
                  data-aos="fade-up"
                  data-aos-delay={800 + index * 200}
                >
                  {card.text}
                </p>
              </div>
            ));
          })()}
        </div>
      </div>
    </section>



      <section className={`py-20 ${theme === 'dark' ? 'bg-[#181818]' : 'bg-[#fff]'}`}>
      <div className="max-w-4xl mx-auto px-6">
         
        {/* Main Heading */}
  <h2 className={`text-4xl md:text-5xl font-extrabold mb-10`}
          style={{
            color: 'rgba(72, 111, 136, 0.8)',
            ...(dir === 'rtl' ? { direction: 'rtl' } : {})
          }}
          dangerouslySetInnerHTML={{ __html: translations[language].needHelp }}
          data-aos="fade-up" />

        {/* Contact Form */}
        <form
          className={`${theme === 'dark' ? 'bg-[#222] text-white' : 'bg-white text-black'} rounded-2xl shadow-lg p-8 space-y-6`}
          onSubmit={e => {
            e.preventDefault();
            setFormSubmitted(true);
          }}
          data-aos="slide-up"
          data-aos-delay="200"
        >
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block mb-2 font-medium" htmlFor="firstName">{translations[language].firstName}</label>
              <input
                id="firstName"
                type="text"
                placeholder={translations[language].firstName}
                className={`border rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 ${theme === 'dark' ? 'border-gray-700 bg-[#181818] text-white' : 'border-gray-200 bg-white text-black'}`}
                style={{
                  ...(dir === 'rtl' ? { direction: 'rtl' } : {}),
                  '--tw-ring-color': 'rgba(72, 111, 136, 0.8)'
                }}
              />
            </div>
            <div>
              <label className="block mb-2 font-medium" htmlFor="lastName">{translations[language].lastName}</label>
              <input
                id="lastName"
                type="text"
                placeholder={translations[language].lastName}
                className={`border rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 ${theme === 'dark' ? 'border-gray-700 bg-[#181818] text-white' : 'border-gray-200 bg-white text-black'}`}
                style={{
                  ...(dir === 'rtl' ? { direction: 'rtl' } : {}),
                  '--tw-ring-color': 'rgba(72, 111, 136, 0.8)'
                }}
              />
            </div>
          </div>
          <div>
            <label className="block mb-2 font-medium" htmlFor="email">{translations[language].email}</label>
            <input
              id="email"
              type="email"
              placeholder={translations[language].email}
              className={`border rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 ${theme === 'dark' ? 'border-gray-700 bg-[#181818] text-white' : 'border-gray-200 bg-white text-black'}`}
              style={{
                ...(dir === 'rtl' ? { direction: 'rtl' } : {}),
                '--tw-ring-color': 'rgba(72, 111, 136, 0.8)'
              }}
            />
          </div>
          <div>
            <label className="block mb-2 font-medium" htmlFor="phone">{translations[language].phone}</label>
            <input
              id="phone"
              type="tel"
              placeholder={translations[language].phone}
              className={`border rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 ${theme === 'dark' ? 'border-gray-700 bg-[#181818] text-white' : 'border-gray-200 bg-white text-black'}`}
              style={{
                ...(dir === 'rtl' ? { direction: 'rtl' } : {}),
                '--tw-ring-color': 'rgba(72, 111, 136, 0.8)'
              }}
            />
          </div>
          <div>
            <label className="block mb-2 font-medium" htmlFor="message">{translations[language].message}</label>
            <textarea
              id="message"
              rows="5"
              placeholder={translations[language].message}
              className={`border rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 ${theme === 'dark' ? 'border-gray-700 bg-[#181818] text-white' : 'border-gray-200 bg-white text-black'}`}
              style={{
                ...(dir === 'rtl' ? { direction: 'rtl' } : {}),
                '--tw-ring-color': 'rgba(72, 111, 136, 0.8)'
              }}
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full text-white font-semibold py-3 rounded-lg transition"
            style={{
              backgroundColor: 'rgba(72, 111, 136, 0.8)',
            }}
            onMouseEnter={(e) => e.target.style.backgroundColor = 'rgba(72, 111, 136, 1)'}
            onMouseLeave={(e) => e.target.style.backgroundColor = 'rgba(72, 111, 136, 0.8)'}
            disabled={formSubmitted}
          >
            {formSubmitted ? translations[language].submitted : translations[language].send}
          </button>
          {formSubmitted && (
            <div className="text-green-500 text-center font-semibold mt-4">{translations[language].submitSuccess}</div>
          )}
        </form>
      </div>
    </section>


      <section className={`py-20 ${theme === 'dark' ? 'bg-[#222]' : 'bg-gray-50'}`}>
      <div className="max-w-6xl mx-auto px-6">
         

        {/* Main heading */}
  <h2 className={`text-4xl md:text-5xl font-extrabold mb-10`}
          style={{
            color: 'rgba(72, 111, 136, 0.8)',
            ...(dir === 'rtl' ? { direction: 'rtl' } : {})
          }}
          data-aos="fade-up">
          {translations[language].howToReach}
        </h2>

        {/* Map embed */}
        <div 
          className="rounded-2xl overflow-hidden shadow-lg"
          data-aos="zoom-in"
          data-aos-delay="200"
        >
          <iframe
            title="Company Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019826876137!2d-122.40081358468178!3d37.79361197975621!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064ebcc65e9%3A0x34b3b70f6a64a96f!2s456%20Market%20St%2C%20San%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1692225939182!5m2!1sen!2sus"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>



      <section className={`py-20 ${theme === 'dark' ? 'bg-[#181818]' : 'bg-[#fff]'}`}>
      <div className="max-w-7xl mx-auto px-6 grid  md:grid-cols-2 gap-12 items-center">
        {/* Left: Image and Heading */}
        <div>
           
          <h2 className={`text-4xl md:text-5xl font-extrabold mb-8`}
            style={{
              color: 'rgba(72, 111, 136, 0.8)',
              ...(dir === 'rtl' ? { direction: 'rtl' } : {})
            }}
            dangerouslySetInnerHTML={{ __html: translations[language].faqTitle }}
            data-aos="slide-right" />
          <img 
            src={faqImage} 
            alt="FAQ illustration" 
            className="rounded-xl shadow-lg"
            data-aos="zoom-in"
            data-aos-delay="200"
          />
        </div>

        {/* Right: Accordion */}
        <div className="space-y-4">
          {translations[language].faqs.map((faq, index) => (
            <div
              key={index}
              className={`${theme === 'dark' ? 'bg-[#222] border-gray-700' : 'bg-gray-50 border-gray-100'} rounded-xl shadow-sm border`}
              style={dir === 'rtl' ? { direction: 'rtl' } : {}}
              data-aos="slide-right"
              data-aos-delay={200 + index * 100}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className={`w-full flex justify-between items-center p-6 text-left ${theme === 'dark' ? 'text-white' : ''}`}
              >
                <span className={`font-semibold text-lg ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  {faq.q}
                </span>
                <span className="text-2xl" style={{color: 'rgba(72, 111, 136, 0.8)'}}>
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>
              {openIndex === index && (
                <div className={`px-6 pb-6 ${theme === 'dark' ? 'text-gray-200' : 'text-gray-600'}`}>
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>


      <section className={`py-20 ${theme === 'dark' ? 'bg-[#222]' : 'bg-gray-50'}`}>
      <div className="max-w-4xl mx-auto text-center px-6">
        {/* Heading */}
  <h2 className={`text-4xl md:text-5xl font-extrabold mb-4`}
          style={{
            color: 'rgba(72, 111, 136, 0.8)',
            ...(dir === 'rtl' ? { direction: 'rtl' } : {})
          }}
          data-aos="fade-up">
          {translations[language].stayUpdated}
        </h2>
        <p className={`text-lg mb-8 ${theme === 'dark' ? 'text-gray-200' : 'text-black'}`}
          style={dir === 'rtl' ? { direction: 'rtl' } : {}}
          data-aos="fade-up"
          data-aos-delay="200">
          {translations[language].newsletterDesc}
        </p>

        {/* Form */}
        <form
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          onSubmit={e => {
            e.preventDefault();
            setNewsletterSubmitted(true);
          }}
          data-aos="slide-up"
          data-aos-delay="400"
        >
          <input
            type="email"
            placeholder={translations[language].email}
            className={`flex-1 px-6 py-4 rounded-xl border w-full sm:w-auto focus:outline-none ${theme === 'dark' ? 'border-gray-700 bg-[#181818] text-white' : 'border-gray-300 text-gray-800 bg-white'}`}
            disabled={newsletterSubmitted}
            style={{
              ...(dir === 'rtl' ? { direction: 'rtl' } : {}),
              '--tw-border-color': 'rgba(72, 111, 136, 0.8)'
            }}
            onFocus={(e) => e.target.style.borderColor = 'rgba(72, 111, 136, 0.8)'}
          />
          <button
            type="submit"
            className="text-white px-8 py-4 rounded-xl font-semibold transition duration-300 w-full sm:w-auto"
            style={{
              backgroundColor: 'rgba(72, 111, 136, 0.8)',
            }}
            onMouseEnter={(e) => e.target.style.backgroundColor = 'rgba(72, 111, 136, 1)'}
            onMouseLeave={(e) => e.target.style.backgroundColor = 'rgba(72, 111, 136, 0.8)'}
            disabled={newsletterSubmitted}
          >
            {newsletterSubmitted ? translations[language].subscribed : translations[language].subscribe}
          </button>
        </form>
        {newsletterSubmitted && (
          <div className="text-green-500 text-center font-semibold mt-4">{translations[language].subscribeSuccess}</div>
        )}
      </div>
    </section>
  
    </div>
  );
}
