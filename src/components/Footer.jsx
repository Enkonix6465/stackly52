
import logo from "../assets/logo.png";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// Translation object for all footer text
const translations = {
  en: {
    brand: 'Building Dreams, Creating Homes!',
    quickLinks: 'Quick Links',
    home: 'Home',
    about: 'About Us',
    blog: 'Blog',
    contact: 'Contact Us',
    services: 'Services',
    ourServices: 'Our Services',
    foodDelivery: 'Luxury Properties',
    catering: 'Investment Properties',
    dineIn: 'Commercial Real Estate',
    partyOrders: 'Property Management',
    subscription: 'Market Analysis',
    takeaway: 'Property Valuation',
    contactTitle: 'Contact Us',
  address: '100 Real Estate Ave, Prime City',
  phone: 'Phone: (555) REALTY-1',
  email: 'Email: info@stacklyrealty.com',
  hours: 'Hours: Mon–Sat, 9 AM – 7 PM',
    follow: 'Follow Us',
    orderNow: 'Get Started',
    orderDesc: 'Ready to find your dream property? Contact our expert agents today for personalized real estate solutions!',
    privacy: 'Privacy Policy',
    terms: 'Terms & Conditions',
    disclaimer: 'Disclaimer',
    copyright: 'All rights reserved.',
  },
  ar: {
    brand: 'نبني الأحلام، ننشئ البيوت!',
    quickLinks: 'روابط سريعة',
    home: 'الرئيسية',
    about: 'معلومات عنا',
    blog: 'المدونة',
    contact: 'اتصل بنا',
    services: 'الخدمات',
    ourServices: 'خدماتنا',
    foodDelivery: 'عقارات فاخرة',
    catering: 'عقارات استثمارية',
    dineIn: 'عقارات تجارية',
    partyOrders: 'إدارة العقارات',
    subscription: 'تحليل السوق',
    takeaway: 'تقييم العقارات',
    contactTitle: 'اتصل بنا',
  address: 'العنوان: 100 شارع العقارات، المدينة الرئيسية',
  phone: 'الهاتف: (555) عقارات-1',
  email: 'البريد الإلكتروني: info@stacklyrealty.com',
  hours: 'ساعات العمل: الاثنين–السبت، 9 صباحًا – 7 مساءً',
    follow: 'تابعنا',
    orderNow: 'ابدأ الآن',
    orderDesc: 'مستعد لإيجاد عقار أحلامك؟ اتصل بخبرائنا اليوم للحصول على حلول عقارية مخصصة!',
    privacy: 'سياسة الخصوصية',
    terms: 'الشروط والأحكام',
    disclaimer: 'إخلاء المسؤولية',
    copyright: 'جميع الحقوق محفوظة.',
  },
  he: {
    brand: 'בונים חלומות, יוצרים בתים!',
    quickLinks: 'קישורים מהירים',
    home: 'דף הבית',
    about: 'עלינו',
    blog: 'בלוג',
    contact: 'צור קשר',
    services: 'שירותים',
    ourServices: 'השירותים שלנו',
    foodDelivery: 'נכסי יוקרה',
    catering: 'נכסי השקעה',
    dineIn: 'נדל"ן מסחרי',
    partyOrders: 'ניהול נכסים',
    subscription: 'ניתוח שוק',
    takeaway: 'הערכת נכסים',
    contactTitle: 'צור קשר',
  address: 'כתובת: 100 שדרות הנדל"ן, העיר הראשית',
  phone: 'טלפון: (555) נדלן-1',
  email: 'אימייל: info@stacklyrealty.com',
  hours: 'שעות פעילות: ב׳–ש׳, 09:00–19:00',
    follow: 'עקבו אחרינו',
    orderNow: 'התחל עכשיו',
    orderDesc: 'מוכן למצוא את נכס החלומות שלך? צור קשר עם המומחים שלנו היום לפתרונות נדל"ן מותאמים אישית!',
    privacy: 'מדיניות פרטיות',
    terms: 'תנאים והגבלות',
    disclaimer: 'כתב ויתור',
    copyright: 'כל הזכויות שמורות.',
  },
};

const langMap = {
  English: 'en',
  Arabic: 'ar',
  Hebrew: 'he',
  en: 'en',
  ar: 'ar',
  he: 'he',
};


export default function RestaurantFooter() {
  // Theme and language state logic
  const [theme, setTheme] = useState('light');
  const [selectedLanguage, setSelectedLanguage] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('selectedLanguage') || 'English';
    }
    return 'English';
  });
  const [language, setLanguage] = useState(langMap[selectedLanguage] || 'en');
  useEffect(() => {
    const storedTheme = localStorage.getItem('theme') || 'light';
    setTheme(storedTheme);
    const storedLang = localStorage.getItem('selectedLanguage') || 'English';
    setSelectedLanguage(storedLang);
    setLanguage(langMap[storedLang] || 'en');
  }, []);
  useEffect(() => {
    const handleThemeChange = () => {
      const newTheme = localStorage.getItem('theme') || 'light';
      setTheme(newTheme);
    };
    const handleLangChange = () => {
      const newLang = localStorage.getItem('selectedLanguage') || 'English';
      setSelectedLanguage(newLang);
      setLanguage(langMap[newLang] || 'en');
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
  }, []);
  // Set RTL/LTR direction
  const dir = language === 'ar' || language === 'he' ? 'rtl' : 'ltr';
  return (
    <footer dir={dir} className={theme === 'dark' ? 'bg-[#18181b] border-t mt-0 text-white' : 'bg-white border-t mt-0 text-black'}>
      <div className="max-w-7xl mx-auto px-6 py-10 grid  md:grid-cols-5 gap-8">
        {/* Logo & Brand */}
        <div className="col-span-1 flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <img src={logo} alt="Stackly Logo" className="h-24 w-24 object-contain" />
          </div>
          <span className="font-semibold mt-2" style={{color: 'rgb(72, 111, 136)'}}>{translations[language].brand}</span>
        </div>
        {/* Quick Links */}
        <div>
          <h3 className="font-semibold mb-2" style={{color: 'rgb(72, 111, 136)'}}>{translations[language].quickLinks}</h3>
          <ul className={theme === 'dark' ? 'space-y-1 text-gray-300' : 'space-y-1 text-gray-700'}>
            <li>
              <Link to="/home1" className="transition-colors" style={{'--hover-color': 'rgb(72, 111, 136)'}} onMouseEnter={(e) => e.target.style.color = 'rgb(72, 111, 136)'} onMouseLeave={(e) => e.target.style.color = ''}>{translations[language].home}</Link>
            </li>
            <li>
              <Link to="/aboutus" className="transition-colors" style={{'--hover-color': 'rgb(72, 111, 136)'}} onMouseEnter={(e) => e.target.style.color = 'rgb(72, 111, 136)'} onMouseLeave={(e) => e.target.style.color = ''}>{translations[language].about}</Link>
            </li>
            <li>
              <Link to="/blog" className="transition-colors" style={{'--hover-color': 'rgb(72, 111, 136)'}} onMouseEnter={(e) => e.target.style.color = 'rgb(72, 111, 136)'} onMouseLeave={(e) => e.target.style.color = ''}>{translations[language].blog}</Link>
            </li>
            <li>
              <Link to="/contactus" className="transition-colors" style={{'--hover-color': 'rgb(72, 111, 136)'}} onMouseEnter={(e) => e.target.style.color = 'rgb(72, 111, 136)'} onMouseLeave={(e) => e.target.style.color = ''}>{translations[language].contact}</Link>
            </li>
            <li>
              <Link to="/services" className="transition-colors" style={{'--hover-color': 'rgb(72, 111, 136)'}} onMouseEnter={(e) => e.target.style.color = 'rgb(72, 111, 136)'} onMouseLeave={(e) => e.target.style.color = ''}>{translations[language].services}</Link>
            </li>
          </ul>
        </div>
        {/* Explore Services */}
        <div>
          <h3 className="font-semibold mb-2" style={{color: 'rgb(72, 111, 136)'}}>{translations[language].ourServices}</h3>
          <ul className={theme === 'dark' ? 'space-y-1 text-gray-300' : 'space-y-1 text-gray-700'}>
            <li>
              <Link to="/Food-Delivery" className="transition-colors" onMouseEnter={(e) => e.target.style.color = 'rgb(72, 111, 136)'} onMouseLeave={(e) => e.target.style.color = ''}>{translations[language].foodDelivery}</Link>
            </li>
            <li>
              <Link to="/Catering-Services" className="transition-colors" onMouseEnter={(e) => e.target.style.color = 'rgb(72, 111, 136)'} onMouseLeave={(e) => e.target.style.color = ''}>{translations[language].catering}</Link>
            </li>
            <li>
              <Link to="/Dine-In-Experience" className="transition-colors" onMouseEnter={(e) => e.target.style.color = 'rgb(72, 111, 136)'} onMouseLeave={(e) => e.target.style.color = ''}>{translations[language].dineIn}</Link>
            </li>
            <li>
              <Link to="/PartyOrders-BulkMeals" className="transition-colors" onMouseEnter={(e) => e.target.style.color = 'rgb(72, 111, 136)'} onMouseLeave={(e) => e.target.style.color = ''}>{translations[language].partyOrders}</Link>
            </li>
            <li>
              <Link to="/Subscription-Meals" className="transition-colors" onMouseEnter={(e) => e.target.style.color = 'rgb(72, 111, 136)'} onMouseLeave={(e) => e.target.style.color = ''}>{translations[language].subscription}</Link>
            </li>
            <li>
              <Link to="/Takeaway-Pickup" className="transition-colors" onMouseEnter={(e) => e.target.style.color = 'rgb(72, 111, 136)'} onMouseLeave={(e) => e.target.style.color = ''}>{translations[language].takeaway}</Link>
            </li>
          </ul>
        </div>
        {/* Contact Info */}
        <div>
          <h3 className="font-semibold mb-2" style={{color: 'rgb(72, 111, 136)'}}>{translations[language].contactTitle}</h3>
          <div className={theme === 'dark' ? 'text-gray-300 text-sm' : 'text-gray-700 text-sm'}>
            <div>{translations[language].address}</div>
            <div>{translations[language].phone}</div>
            <div>
              {(() => {
                // Split label and email for all languages
                const emailStr = translations[language].email;
                const match = emailStr.match(/^(.*?)([\w.-]+@[\w.-]+\.[A-Za-z]{2,})$/);
                if (match) {
                  return <span>{match[1]}<a href={`mailto:${match[2]}`} style={{direction: 'ltr', unicodeBidi: 'bidi-override'}}>{match[2]}</a></span>;
                }
                return emailStr;
              })()}
            </div>
            <div>{translations[language].hours}</div>
          </div>
          <div className="mt-3">
            <span className={theme === 'dark' ? 'font-semibold text-gray-300' : 'font-semibold text-gray-700'}>{translations[language].follow}</span>
            <div className={theme === 'dark' ? 'flex gap-3 mt-1 text-xl text-gray-300' : 'flex gap-3 mt-1 text-xl text-gray-600'}>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="transition-colors" onMouseEnter={(e) => e.target.style.color = 'rgb(72, 111, 136)'} onMouseLeave={(e) => e.target.style.color = ''}><i className="fab fa-instagram"></i></a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="transition-colors" onMouseEnter={(e) => e.target.style.color = 'rgb(72, 111, 136)'} onMouseLeave={(e) => e.target.style.color = ''}><i className="fab fa-facebook"></i></a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="transition-colors" onMouseEnter={(e) => e.target.style.color = 'rgb(72, 111, 136)'} onMouseLeave={(e) => e.target.style.color = ''}><i className="fab fa-linkedin"></i></a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="transition-colors" onMouseEnter={(e) => e.target.style.color = 'rgb(72, 111, 136)'} onMouseLeave={(e) => e.target.style.color = ''}><i className="fab fa-youtube"></i></a>
            </div>
          </div>
        </div>
        {/* Order Now */}
        <div className="flex flex-col items-center md:items-start md:justify-center w-full">
          <h3 className="font-semibold mb-2 md:text-2xl text-lg text-center md:text-left" style={{color: 'rgb(72, 111, 136)'}}>{translations[language].orderNow}</h3>
          <p className={theme === 'dark' ? 'text-gray-300 text-sm mb-4 md:text-base' : 'text-gray-700 text-sm mb-4 md:text-base'}>{translations[language].orderDesc}</p>
          <a href="/contactus" className="text-white px-8 md:px-14 py-2 md:py-3 rounded-lg font-semibold shadow transition w-auto text-center md:text-lg whitespace-nowrap" style={{backgroundColor: 'rgb(72, 111, 136)'}} onMouseEnter={(e) => e.target.style.backgroundColor = 'rgb(62, 101, 126)'} onMouseLeave={(e) => e.target.style.backgroundColor = 'rgb(72, 111, 136)'}>{translations[language].orderNow}</a>
        </div>
      </div>
      <div className={theme === 'dark' ? 'border-t text-center text-gray-400 text-xs py-4' : 'border-t text-center text-gray-500 text-xs py-4'}>
        <div className="flex flex-row md:flex-row justify-center gap-4 mb-2">
          <a href="#" className="transition-colors" onMouseEnter={(e) => e.target.style.color = 'rgb(72, 111, 136)'} onMouseLeave={(e) => e.target.style.color = ''}>{translations[language].privacy}</a>
          <a href="#" className="transition-colors" onMouseEnter={(e) => e.target.style.color = 'rgb(72, 111, 136)'} onMouseLeave={(e) => e.target.style.color = ''}>{translations[language].terms}</a>
          <a href="#" className="transition-colors" onMouseEnter={(e) => e.target.style.color = 'rgb(72, 111, 136)'} onMouseLeave={(e) => e.target.style.color = ''}>{translations[language].disclaimer}</a>
        </div>
        ©️ 2025 Stackly Realty. {translations[language].copyright}
      </div>
    </footer>
  );
}