import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
// Translation object for Real Estate Blog page
const translations = {
  en: {
    heroTitle: "Real Estate Insights & Market Updates",
    heroDesc: "Stay informed with the latest property market trends, investment opportunities, and expert insights in luxury real estate. Your guide to making smarter property decisions.",
    featured: "Featured Property Articles",
    categories: "Explore by Property Types",
    categoriesDesc1: "Our property insights are carefully categorized to help you find information that matches your investment goals—whether it's Luxury Penthouses, Mountain Retreats, Urban Residences, or Beachfront Properties.",
    categoriesDesc2: "Browse through our property categories and discover investment opportunities crafted for every lifestyle. Whether you're seeking a luxury urban home, a peaceful countryside escape, or a profitable rental property, our real estate expertise offers market analysis, investment guidance, and properties you'll love. Experience luxury, location, and lasting value—all in one place.",
    serviceComparison: "Property Services Comparison",
    myths: "Real Estate Myths & Facts",
    mythItems: [
      { myth: "You need perfect credit to buy a luxury property.", fact: "While good credit helps, there are various financing options and alternative lending solutions for qualified luxury buyers." },
      { myth: "Real estate prices always go up.", fact: "Property markets fluctuate based on economic factors, location, and market conditions. Professional analysis helps navigate these changes." },
      { myth: "You should always buy the most expensive house you can afford.", fact: "Smart buyers consider total cost of ownership, including maintenance, taxes, and market appreciation potential." },
      { myth: "Real estate investing is only for the wealthy.", fact: "There are various entry points into real estate investment, from REITs to partnerships and smaller properties." },
      { myth: "Location doesn't matter if the house is beautiful.", fact: "Location is the #1 factor in property value. Prime locations maintain and increase value over time." },
      { myth: "You don't need a real estate agent in the digital age.", fact: "Expert agents provide market knowledge, negotiation skills, and professional networks that save time and money." },
    ],
    tipsTitle: "Property Investment Tips",
  },
  ar: {
    heroTitle: "رؤى العقارات وتحديثات السوق",
    heroDesc: "ابقَ على اطلاع بأحدث اتجاهات سوق العقارات وفرص الاستثمار والرؤى المهنية في العقارات الفاخرة. دليلك لاتخاذ قرارات عقارية أذكى.",
    featured: "مقالات العقارات المميزة",
    categories: "استكشف حسب أنواع العقارات",
    categoriesDesc1: "تم تصنيف رؤانا العقارية بعناية لمساعدتك في العثور على المعلومات التي تناسب أهدافك الاستثمارية — سواء كانت شقق فاخرة أو منتجعات جبلية أو مساكن حضرية أو عقارات على الواجهة البحرية.",
    categoriesDesc2: "تصفح فئات عقاراتنا واكتشف الفرص الاستثمارية المصممة لكل نمط حياة. سواء كنت تبحث عن منزل حضري فاخر، أو ملاذ ريفي هادئ، أو عقار مربح للإيجار، تقدم خبرتنا العقارية تحليل السوق وإرشادات الاستثمار وعقارات ستحبها. اختبر الفخامة والموقع والقيمة الدائمة — كل ذلك في مكان واحد.",
    serviceComparison: "مقارنة خدمات العقارات",
    myths: "خرافات وحقائق العقارات",
    mythItems: [
      { myth: "تحتاج إلى ائتمان مثالي لشراء عقار فاخر.", fact: "بينما يساعد الائتمان الجيد، هناك خيارات تمويل متنوعة وحلول إقراض بديلة للمشترين الفاخرين المؤهلين." },
      { myth: "أسعار العقارات ترتفع دائمًا.", fact: "أسواق العقارات تتقلب بناءً على العوامل الاقتصادية والموقع وظروف السوق. التحليل المهني يساعد في التنقل خلال هذه التغييرات." },
      { myth: "يجب أن تشتري دائمًا أغلى منزل يمكنك تحمله.", fact: "المشترون الأذكياء يعتبرون التكلفة الإجمالية للملكية، بما في ذلك الصيانة والضرائب وإمكانية ارتفاع قيمة السوق." },
      { myth: "الاستثمار العقاري للأثرياء فقط.", fact: "هناك نقاط دخول متنوعة للاستثمار العقاري، من صناديق الاستثمار العقاري إلى الشراكات والعقارات الأصغر." },
      { myth: "الموقع لا يهم إذا كان المنزل جميلاً.", fact: "الموقع هو العامل الأول في قيمة العقار. المواقع المتميزة تحافظ على القيمة وتزيدها بمرور الوقت." },
      { myth: "لا تحتاج إلى وكيل عقاري في العصر الرقمي.", fact: "الوكلاء الخبراء يقدمون معرفة السوق ومهارات التفاوض والشبكات المهنية التي توفر الوقت والمال." },
    ],
    tipsTitle: "نصائح الاستثمار العقاري",
  },
  he: {
    heroTitle: "תובנות נדל\"ן ועדכוני שוק",
    heroDesc: "הישאר מעודכן עם המגמות האחרונות בשוק הנכסים, הזדמנויות השקעה ותובנות מומחים בנדל\"ן יוקרתי. המדריך שלך לקבלת החלטות נכסים חכמות יותר.",
    featured: "מאמרי נכסים נבחרים",
    categories: "חקור לפי סוגי נכסים",
    categoriesDesc1: "תובנות הנכסים שלנו מחולקות בקפידה כדי לעזור לך למצוא מידע שמתאים למטרות ההשקעה שלך — בין אם זה פנטהאוזים יוקרתיים, מפלטי הרים, בתים עירוניים או נכסים על חוף הים.",
    categoriesDesc2: "עיין בקטגוריות הנכסים שלנו וגלה הזדמנויות השקעה שמותאמות לכל אורח חיים. בין אם אתה מחפש בית עירוני יוקרתי, מפלט כפרי שליו או נכס רווחי להשכרה, המומחיות שלנו בנדל\"ן מציעה ניתוח שוק, הדרכת השקעות ונכסים שתאהב. תחווה יוקרה, מיקום וערך מתמשך — הכל במקום אחד.",
    serviceComparison: "השוואת שירותי נכסים",
    myths: "מיתוסים ועובדות בנדל\"ן",
    mythItems: [
      { myth: "אתה צריך אשראי מושלם לקנות נכס יוקרתי.", fact: "למרות שאשראי טוב עוזר, יש אפשרויות מימון שונות ופתרונות הלוואה חלופיים לקוני יוקרה מוכשרים." },
      { myth: "מחירי נדל\"ן תמיד עולים.", fact: "שווקי נכסים משתנים בהתאם לגורמים כלכליים, מיקום ותנאי שוק. ניתוח מקצועי עוזר לנווט בשינויים אלה." },
      { myth: "תמיד כדאי לקנות את הבית הכי יקר שאתה יכול להרשות לעצמך.", fact: "קונים חכמים שוקלים את העלות הכוללת של הבעלות, כולל תחזוקה, מיסים ופוטנציאל התעלות שוק." },
      { myth: "השקעות נדל\"ן מיועדות רק לעשירים.", fact: "יש נקודות כניסה שונות להשקעות נדל\"ן, מקרנות נאמנות נדל\"ן ועד שותפויות ונכסים קטנים יותר." },
      { myth: "מיקום לא חשוב אם הבית יפה.", fact: "מיקום הוא הגורם מספר 1 בערך הנכס. מיקומים מובחרים שומרים ומגדילים ערך לאורך זמן." },
      { myth: "אתה לא צריך מתווך נדל\"ן בעידן הדיגיטלי.", fact: "סוכנים מומחים מספקים ידע שוק, כישורי משא ומתן ורשתות מקצועיות שחוסכות זמן וכסף." },
    ],
    tipsTitle: "טיפים להשקעות נדל\"ן",
  },
};
import blogHero from "../assets/blog.mp4";
import { Brain, Code, BarChart3 } from "lucide-react";
import feature1 from "../assets/feature1.webp";
import feature2 from "../assets/feature2.jpg";
import feature3 from "../assets/feature3.png";
import { Link } from "react-router-dom";

// Property categories instead of food categories
const categories = [
  { key: 'penthouses' },
  { key: 'urban' },
  { key: 'beachfront' },
  { key: 'mountain' },
];

const categoryTranslations = {
  en: {
    penthouses: {
      name: "Luxury Penthouses",
      desc: "Premium high-rise living with stunning city views and exclusive amenities.",
    },
    urban: {
      name: "Urban Residences",
      desc: "Modern city homes perfectly positioned for contemporary lifestyle.",
    },
    beachfront: {
      name: "Beachfront Properties",
      desc: "Coastal retreats with direct beach access and ocean views.",
    },
    mountain: {
      name: "Mountain Escapes",
      desc: "Peaceful countryside properties surrounded by natural beauty.",
    },
  },
  ar: {
    penthouses: {
      name: "شقق فاخرة",
      desc: "معيشة راقية في أبراج عالية مع إطلالات مدينة مذهلة ووسائل راحة حصرية.",
    },
    urban: {
      name: "المساكن الحضرية",
      desc: "منازل حديثة في المدينة موضعة بشكل مثالي لنمط الحياة المعاصر.",
    },
    beachfront: {
      name: "عقارات على الواجهة البحرية",
      desc: "ملاذات ساحلية مع وصول مباشر للشاطئ وإطلالات محيطية.",
    },
    mountain: {
      name: "ملاذات جبلية",
      desc: "عقارات ريفية هادئة محاطة بالجمال الطبيعي.",
    },
  },
  he: {
    penthouses: {
      name: "פנטהאוזים יוקרתיים",
      desc: "מגורים יוקרתיים בבניינים גבוהים עם נוף עיר מדהים ושירותים בלעדיים.",
    },
    urban: {
      name: "בתים עירוניים",
      desc: "בתים מודרניים בעיר הממוקמים בצורה מושלמת לאורח חיים עכשווי.",
    },
    beachfront: {
      name: "נכסים על חוף הים",
      desc: "מפלטים חופיים עם גישה ישירה לחוף ונוף לים.",
    },
    mountain: {
      name: "מפלטי הרים",
      desc: "נכסים כפריים שלווים המוקפים ביופי טבעי.",
    },
  },
};

const propertyTips = [
  { key: 0 }, { key: 1 }, { key: 2 }, { key: 3 }, { key: 4 }, { key: 5 }, { key: 6 }, { key: 7 }
];

const propertyTipsTranslations = {
  en: [
    "Research neighborhood trends and future development plans before making an offer – location appreciation matters more than current price.",
    "Get a professional property inspection even for new builds – hidden issues can be costly and time-consuming to fix later.",
    "Consider total cost of ownership including HOA fees, property taxes, and maintenance – not just the purchase price.",
    "Time your purchase strategically – off-season buying often provides better negotiation power and property selection.",
    "Understand market cycles and local inventory levels – buyer's vs seller's markets require different strategies.",
    "Don't fall in love with the first property you see – maintain objectivity and compare multiple options thoroughly.",
    "Factor in resale value and rental potential even if you plan to live there – properties are investments first.",
    "Work with experienced local agents who understand micro-market conditions – their expertise saves money and stress.",
  ],
  ar: [
    "ابحث في اتجاهات الحي وخطط التطوير المستقبلية قبل تقديم عرض – تقدير الموقع أهم من السعر الحالي.",
    "احصل على فحص عقاري مهني حتى للمباني الجديدة – المشاكل المخفية قد تكون مكلفة وتستغرق وقتًا لإصلاحها لاحقًا.",
    "اعتبر التكلفة الإجمالية للملكية بما في ذلك رسوم الجمعية والضرائب العقارية والصيانة – وليس فقط سعر الشراء.",
    "وقت شرائك بشكل استراتيجي – الشراء خارج الموسم غالبًا ما يوفر قوة تفاوض أفضل واختيار عقارات أكثر.",
    "افهم دورات السوق ومستويات المخزون المحلي – أسواق المشترين مقابل البائعين تتطلب استراتيجيات مختلفة.",
    "لا تقع في حب أول عقار تراه – حافظ على الموضوعية وقارن خيارات متعددة بدقة.",
    "احسب قيمة إعادة البيع وإمكانات الإيجار حتى لو كنت تخطط للعيش هناك – العقارات استثمارات أولاً.",
    "اعمل مع وكلاء محليين ذوي خبرة يفهمون ظروف الأسواق الدقيقة – خبرتهم توفر المال والضغط.",
  ],
  he: [
    "חקור מגמות שכונה ותוכניות פיתוח עתידיות לפני הגשת הצעה – העלאת ערך המיקום חשובה יותר מהמחיר הנוכחי.",
    "בצע בדיקה מקצועית של הנכס גם לבנייה חדשה – בעיות נסתרות עלולות להיות יקרות וגוזלות זמן לתיקון מאוחר יותר.",
    "שקול את העלות הכוללת של הבעלות כולל דמי ועד בית, ארנונה ותחזוקה – לא רק מחיר הרכישה.",
    "תזמן את הרכישה שלך אסטרטגית – קנייה מחוץ לעונה לעתים קרובות מספקת כוח מיקוח טוב יותר ובחירת נכסים רחבה יותר.",
    "הבן את מחזורי השוק ורמות המלאי המקומיות – שווקי קונים מול מוכרים דורשים אסטרטגיות שונות.",
    "אל תתאהב בנכס הראשון שאתה רואה – שמור על אובייקטיביות והשווה מספר אפשרויות ביסודיות.",
    "קח בחשבון ערך מכירה חוזרת ופוטנציאל השכרה גם אם אתה מתכנן לגור שם – נכסים הם השקעות קודם כל.",
    "עבוד עם סוכנים מקומיים מנוסים המבינים תנאי מיקרו-שוק – המומחיות שלהם חוסכת כסף ולחץ.",
  ],
};

const features = [
  {
    key: 'market',
    image: feature1,
    link: "/blog/1",
  },
  {
    key: 'investment',
    image: feature2,
    link: "/blog/2",
  },
  {
    key: 'luxury',
    image: feature3,
    link: "/blog/3",
  },
];

const featureTranslations = {
  en: {
    market: {
      title: "Market Analysis & Trends",
      description: "Stay ahead with comprehensive market analysis, price trends, and investment forecasts. Our expert insights help you understand property values and market dynamics.",
    },
    investment: {
      title: "Investment Opportunities",
      description: "Discover premium investment properties with strong ROI potential. From rental income to capital appreciation, find properties that align with your financial goals.",
    },
    luxury: {
      title: "Luxury Property Showcase",
      description: "Explore our curated collection of exceptional properties. From penthouse suites to beachfront estates, experience the finest in luxury real estate.",
    },
    readMore: "Read More →",
  },
  ar: {
    market: {
      title: "تحليل السوق والاتجاهات",
      description: "ابق في المقدمة مع تحليل شامل للسوق واتجاهات الأسعار وتوقعات الاستثمار. رؤانا الخبيرة تساعدك على فهم قيم العقارات وديناميكيات السوق.",
    },
    investment: {
      title: "فرص الاستثمار",
      description: "اكتشف عقارات الاستثمار المميزة مع إمكانات عائد قوية على الاستثمار. من دخل الإيجار إلى زيادة رأس المال، ابحث عن عقارات تتماشى مع أهدافك المالية.",
    },
    luxury: {
      title: "معرض العقارات الفاخرة",
      description: "استكشف مجموعتنا المختارة من العقارات الاستثنائية. من أجنحة البنتهاوس إلى عقارات الواجهة البحرية، اختبر الأفضل في العقارات الفاخرة.",
    },
    readMore: "اقرأ المزيد ←",
  },
  he: {
    market: {
      title: "ניתוח שוק ומגמות",
      description: "הישאר בחזית עם ניתוח שוק מקיף, מגמות מחירים ותחזיות השקעה. התובנות המומחות שלנו עוזרות לך להבין ערכי נכסים ודינמיקת שוק.",
    },
    investment: {
      title: "הזדמנויות השקעה",
      description: "גלה נכסי השקעה מובחרים עם פוטנציאל תשואה חזק. מהכנסה משכירות ועד רווח הון, מצא נכסים המתאימים למטרות הכספיות שלך.",
    },
    luxury: {
      title: "תצוגת נכסי יוקרה",
      description: "חקור את האוסף המובחר שלנו של נכסים יוצאי דופן. מסוויטות פנטהאוז ועד אחוזות חוף, חווה את הטוב ביותר בנדל\"ן יוקרתי.",
    },
    readMore: "קרא עוד ←",
  },
};

// Property services instead of food services
const services = [
  { key: 'buying' },
  { key: 'selling' },
  { key: 'renting' },
  { key: 'investment' },
  { key: 'management' },
  { key: 'consultation' },
];

const serviceTranslations = {
  en: {
    buying: {
      name: "Property Buying",
      features: [
        "Market analysis & property search",
        "Negotiation & closing support",
        "Financing guidance & assistance",
        "Post-purchase property management",
      ],
    },
    selling: {
      name: "Property Selling",
      features: [
        "Professional property valuation",
        "Marketing & listing services",
        "Buyer screening & negotiation",
        "Transaction management",
      ],
    },
    renting: {
      name: "Rental Services",
      features: [
        "Tenant screening & placement",
        "Rent collection & management",
        "Property maintenance coordination",
        "Lease agreement preparation",
      ],
    },
    investment: {
      name: "Investment Advisory",
      features: [
        "ROI analysis & projections",
        "Portfolio diversification strategy",
        "Market timing recommendations",
        "Tax optimization guidance",
      ],
    },
    management: {
      name: "Property Management",
      features: [
        "24/7 maintenance coordination",
        "Financial reporting & analysis",
        "Tenant relations management",
        "Property value optimization",
      ],
    },
    consultation: {
      name: "Real Estate Consultation",
      features: [
        "Market insights & analysis",
        "Investment strategy planning",
        "Legal guidance & compliance",
        "Custom property solutions",
      ],
    },
    features: "Services",
  },
  ar: {
    buying: {
      name: "شراء العقارات",
      features: [
        "تحليل السوق والبحث عن العقارات",
        "دعم التفاوض والإغلاق",
        "إرشاد ومساعدة التمويل",
        "إدارة العقارات بعد الشراء",
      ],
    },
    selling: {
      name: "بيع العقارات",
      features: [
        "تقييم عقاري مهني",
        "خدمات التسويق والإدراج",
        "فحص المشترين والتفاوض",
        "إدارة المعاملات",
      ],
    },
    renting: {
      name: "خدمات الإيجار",
      features: [
        "فحص المستأجرين والتوظيف",
        "تحصيل الإيجار والإدارة",
        "تنسيق صيانة العقارات",
        "إعداد اتفاقية الإيجار",
      ],
    },
    investment: {
      name: "الاستشارة الاستثمارية",
      features: [
        "تحليل وتوقعات العائد على الاستثمار",
        "استراتيجية تنويع المحفظة",
        "توصيات توقيت السوق",
        "إرشادات تحسين الضرائب",
      ],
    },
    management: {
      name: "إدارة العقارات",
      features: [
        "تنسيق صيانة على مدار الساعة",
        "التقارير المالية والتحليل",
        "إدارة علاقات المستأجرين",
        "تحسين قيمة العقار",
      ],
    },
    consultation: {
      name: "استشارة عقارية",
      features: [
        "رؤى وتحليل السوق",
        "تخطيط استراتيجية الاستثمار",
        "الإرشاد القانوني والامتثال",
        "حلول عقارية مخصصة",
      ],
    },
    features: "الخدمات",
  },
  he: {
    buying: {
      name: "רכישת נכסים",
      features: [
        "ניתוח שוק וחיפוש נכסים",
        "תמיכה במשא ומתן וסגירה",
        "הדרכה וסיוע במימון",
        "ניהול נכסים לאחר רכישה",
      ],
    },
    selling: {
      name: "מכירת נכסים",
      features: [
        "הערכת נכס מקצועית",
        "שירותי שיווק ורישום",
        "סינון קונים ומשא ומתן",
        "ניהול עסקאות",
      ],
    },
    renting: {
      name: "שירותי השכרה",
      features: [
        "סינון ומיון שוכרים",
        "גבייה וניהול שכירות",
        "תיאום תחזוקת נכסים",
        "הכנת הסכם שכירות",
      ],
    },
    investment: {
      name: "ייעוץ השקעות",
      features: [
        "ניתוח ותחזיות תשואה",
        "אסטרטגיית גיוון תיק",
        "המלצות על עיתוי שוק",
        "הדרכת אופטימיזציה מס",
      ],
    },
    management: {
      name: "ניהול נכסים",
      features: [
        "תיאום תחזוקה 24/7",
        "דיווח כספי וניתוח",
        "ניהול יחסי שוכרים",
        "אופטימיזציה של ערך נכס",
      ],
    },
    consultation: {
      name: "ייעוץ נדל\"ן",
      features: [
        "תובנות וניתוח שוק",
        "תכנון אסטרטגיית השקעה",
        "הדרכה משפטית וציות",
        "פתרונות נכסים מותאמים",
      ],
    },
    features: "שירותים",
  },
};

export default function BlogHero() {
  // Theme state synced with Header
  const [theme, setTheme] = React.useState('light');
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

  // Set RTL/LTR direction
  const dir = language === 'ar' || language === 'he' ? 'rtl' : 'ltr';

  return (
    <div className={theme === 'dark' ? 'min-h-screen bg-black text-white' : 'min-h-screen bg-white text-black'} dir={dir}>
      {/* Hero Section */}
  <section className="relative w-full h-[90vh] flex items-center justify-center" style={{ color: theme === 'dark' ? '#fff' : '#222' }}>
        {/* Background Video */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src={blogHero}
          autoPlay
          muted
          loop
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content */}
        <div className="relative text-center px-6" style={{ color: theme === 'dark' ? '#fff' : '#fff' }}>
          <h1 
            className="text-4xl md:text-6xl font-bold mb-4"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            {translations[language].heroTitle}
          </h1>
          <p 
            className={`text-lg md:text-xl max-w-2xl mx-auto ${theme === 'dark' ? 'text-white' : 'text-white'}`}
            style={dir === 'rtl' ? { textAlign: 'right' } : {}}
            data-aos="fade-up"
            data-aos-delay="400"
          >
            {translations[language].heroDesc}
          </p>
        </div>
      </section>

      {/* Featured Articles Section */}
      <section className={`py-16 ${theme === 'dark' ? 'bg-[#222]' : 'bg-red-50'}`}>
        <div className="max-w-7xl mx-auto px-6">
          {/* Heading */}
          <h2 
            className="text-4xl md:text-5xl font-bold text-center mb-12 text-red-500"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            {translations[language].featured}
          </h2>

          {/* Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const t = featureTranslations[language][feature.key];
              return (
                <article
                  key={index}
                  className={`rounded-2xl shadow hover:shadow-lg transition duration-300 overflow-hidden ${theme === 'dark' ? 'bg-[#222] text-white' : 'bg-gray-50 text-black'}`}
                  data-aos="fade-up"
                  data-aos-delay={200 + index * 200}
                >
                  {/* Image */}
                  <img
                    src={feature.image}
                    alt={t.title}
                    className="w-full h-48 object-cover"
                  />

                  {/* Content */}
                  <div className="p-6">
                    <h3 className={`text-xl font-semibold mb-3 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}
                      style={dir === 'rtl' ? { textAlign: 'right' } : {}}>
                      {t.title}
                    </h3>
                    <p className={`text-sm leading-relaxed mb-4 ${theme === 'dark' ? 'text-gray-200' : 'text-gray-600'}`}
                      style={dir === 'rtl' ? { textAlign: 'right' } : {}}>
                      {t.description}
                    </p>
                    <Link
                      to={feature.link}
                      className="text-red-500 font-semibold hover:underline"
                      style={dir === 'rtl' ? { direction: 'rtl', textAlign: 'right', display: 'block' } : {}}
                    >
                      {featureTranslations[language].readMore}
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Property Categories Section */}
      <section className={`py-16 ${theme === 'dark' ? 'bg-[#181818]' : 'bg-[#fff]'}`}>
        <div className="max-w-7xl mx-auto px-6 grid  md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div 
            data-aos="slide-right"
            data-aos-duration="1000"
          >
            <h2 
              className="text-4xl md:text-5xl font-bold mb-6 text-red-500"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              {translations[language].categories}
            </h2>
            <p 
              className={`text-lg mb-6 ${theme === 'dark' ? 'text-gray-200' : 'text-gray-700'}`}
              style={dir === 'rtl' ? { textAlign: 'right' } : {}}
              data-aos="fade-up"
              data-aos-delay="400"
            >
              {translations[language].categoriesDesc1}
            </p>
            <p 
              className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}
              style={dir === 'rtl' ? { textAlign: 'right' } : {}}
              data-aos="fade-up"
              data-aos-delay="600"
            >
              {translations[language].categoriesDesc2}
            </p>
          </div>

          {/* Right Cards Grid */}
          <div 
            className="grid  sm:grid-cols-2 gap-6"
            data-aos="slide-left"
            data-aos-duration="1000"
          >
            {categories.map((cat, index) => {
              const t = categoryTranslations[language][cat.key];
              return (
                <div
                  key={index}
                  className={`p-6 rounded-2xl shadow-md hover:shadow-lg transition ${theme === 'dark' ? 'bg-[#222] text-white' : 'bg-white text-black'}`}
                  style={dir === 'rtl' ? { textAlign: 'right' } : {}}
                  data-aos="fade-up"
                  data-aos-delay={200 + index * 200}
                >
                  <h3 className="text-xl font-semibold mb-2" style={{ color: '#ef4444' }}>{t.name}</h3>
                  <p className={theme === 'dark' ? 'text-gray-200' : 'text-gray-600'}>{t.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Property Services Comparison Section */}
      <section className={`py-16 ${theme === 'dark' ? 'bg-[#222]' : 'bg-red-50'}`}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <h2 
          className="text-4xl md:text-5xl font-bold text-center mb-12 text-red-500"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          {translations[language].serviceComparison}
        </h2>

        {/* Responsive Table */}
        <div 
          className="overflow-x-auto"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <table className={`w-full border rounded-lg shadow-md text-left ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'}`}>
            <thead className={theme === 'dark' ? 'bg-[#111] text-white' : 'bg-[#000] text-white'}>
              <tr>
                <th className="px-6 py-3">{serviceTranslations[language].features}</th>
                {services.map((service, idx) => (
                  <th key={idx} className="px-6 py-3 text-center">
                    {serviceTranslations[language][service.key].name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className={theme === 'dark' ? 'bg-[#222] divide-y divide-gray-700' : 'bg-white divide-y divide-gray-200'}>
              {serviceTranslations[language][services[0].key].features.map((_, i) => (
                <tr key={i}>
                  {/* Feature Name */}
                  <td className={`px-6 py-4 font-semibold ${theme === 'dark' ? 'text-gray-200' : 'text-gray-700'}`}>
                    {serviceTranslations[language][services[0].key].features[i]}
                  </td>
                  {/* Features across services */}
                  {services.map((service, j) => (
                    <td
                      key={j}
                      className={`px-6 py-4 text-center ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}
                    >
                      {serviceTranslations[language][service.key].features[i] || "—"}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>

  {/* Real Estate Myths & Facts Section */}
  <section className={`py-16 ${theme === 'dark' ? 'bg-[#181818]' : 'bg-[#fff]'}`}>
    <div className="max-w-6xl mx-auto px-6">
      {/* Heading */}
      <h2 
        className="text-4xl md:text-5xl font-bold text-center mb-12 text-red-500"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        {translations[language].myths}
      </h2>

      {/* Grid */}
      <div className="grid md:grid-cols-2 gap-10">
        {translations[language].mythItems.map((item, idx) => (
          <div 
            className="space-y-4" 
            key={idx}
            data-aos="fade-up"
            data-aos-delay={200 + idx * 200}
          >
            <div className="flex gap-2">
              <h3 className="text-red-600 font-bold">{language === 'ar' ? 'خرافة:' : language === 'he' ? 'מיתוס:' : 'Myth:'}</h3>
              <p className={theme === 'dark' ? 'text-white' : 'text-black'}>{item.myth}</p>
            </div>
            <div className="flex gap-2">
              <h3 className="text-green-600 font-bold">{language === 'ar' ? 'حقيقة:' : language === 'he' ? 'עובדה:' : 'Fact:'}</h3>
              <p className={theme === 'dark' ? 'text-white' : 'text-black'}>{item.fact}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>

    {/* Property Investment Tips Section */}
    <div className={`py-10 ${theme === 'dark' ? 'bg-[#000]' : 'bg-red-50'}`}>
      <h2 
        className={`text-4xl md:text-5xl font-bold text-center mb-8 text-red-500`} 
        style={{ ...(dir === 'rtl' ? { direction: 'rtl' } : {}) }}
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        {translations[language].tipsTitle}
      </h2>
      <div className="grid  md:grid-cols-2 gap-6 max-w-4xl mx-auto ">
        {propertyTips.map((item, index) => (
          <div
            key={index}
            className="p-4 border border-gray-200 bg-white rounded-xl shadow-sm hover:shadow-md transition"
            style={dir === 'rtl' ? { textAlign: 'right' } : {}}
            data-aos="fade-up"
            data-aos-delay={200 + index * 100}
          >
            <p className={theme === 'dark' ? 'text-black' : 'text-black'}>
              {propertyTipsTranslations[language][item.key]}
            </p>
          </div>
        ))}
      </div>
    </div>
    {/* Close top-level wrapper */}
  </div>
  );
}