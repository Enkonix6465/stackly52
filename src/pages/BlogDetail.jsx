import React from "react";
import feature1 from "../assets/f1.jpg";
import feature2 from "../assets/f2.jpg";
import feature3 from "../assets/f3.jpg";
import { useParams, Link } from "react-router-dom";

// Translation object for Real Estate BlogDetail page
const translations = {
  en: [
    {
      title: "Market Analysis & Trends",
      intro:
        "Stay ahead with comprehensive market analysis, price trends, and investment forecasts. Our expert insights help you understand property values and market dynamics to make informed real estate decisions.",
      sections: [
        {
          heading: "Current Market Overview",
          content:
            "The luxury real estate market continues to show resilience with steady appreciation across prime locations. Metropolitan areas are experiencing increased demand for high-end properties, while suburban luxury markets are expanding due to lifestyle changes. Interest rates remain favorable for qualified buyers, creating opportunities for both investors and homeowners. Market inventory levels vary by location, with some areas experiencing limited supply driving competitive pricing. Understanding these dynamics is crucial for timing your real estate investments effectively."
        },
        {
          heading: "Price Trends & Forecasts",
          content:
            "Luxury property values have appreciated by 8-12% annually in prime markets over the past three years. Waterfront and mountain properties are seeing the highest growth rates due to increased demand for lifestyle properties. Urban penthouses remain strong performers with consistent rental yields of 4-6% annually. Economic indicators suggest continued growth potential, though at a more moderate pace of 5-8% annually moving forward. Regional variations exist, with some emerging markets showing higher growth potential than established luxury destinations."
        },
        {
          heading: "Investment Hotspots",
          content:
            "Emerging luxury markets in secondary cities are attracting savvy investors seeking higher yields and appreciation potential. Coastal regions continue to command premium prices with limited inventory driving values upward. Mountain resort communities are experiencing unprecedented demand as remote work enables lifestyle changes. Urban regeneration areas offer excellent value propositions for long-term investors. International markets are also showing renewed interest as travel restrictions ease and global investment flows resume."
        },
        {
          heading: "Market Indicators",
          content:
            "Days on market for luxury properties have decreased to 45-60 days in prime locations, indicating strong buyer demand. Cash transactions represent 40-60% of luxury sales, demonstrating the strength of high-net-worth buyer segments. Inventory levels remain 20-30% below historical averages in most luxury markets. New construction permits for high-end properties are increasing, but supply will take 18-24 months to impact market dynamics. These indicators suggest continued seller advantage in the near term."
        },
        {
          heading: "Seasonal Patterns",
          content:
            "Spring and fall remain peak seasons for luxury real estate transactions, with 60% of annual sales occurring during these periods. Winter markets often present opportunities for motivated buyers to negotiate favorable terms. Summer markets vary by location, with resort properties experiencing peak activity while urban markets may slow. Understanding seasonal patterns helps optimize timing for both buyers and sellers. Market cycles can be leveraged for strategic advantage with proper planning and expert guidance."
        },
        {
          heading: "Technology Impact",
          content:
            "Virtual tours and digital marketing have revolutionized luxury property showcasing, reaching global audiences instantly. Blockchain technology is beginning to impact high-value transactions through smart contracts and digital ownership records. AI-powered valuation tools provide more accurate pricing models, though expert human analysis remains essential for unique luxury properties. PropTech innovations are streamlining the buying and selling process, reducing transaction times and improving transparency for all parties involved."
        },
        {
          heading: "Future Outlook",
          content:
            "The luxury real estate market is positioned for continued growth driven by demographic shifts and wealth creation. Sustainability and smart home features are becoming essential rather than optional for luxury properties. International investment is expected to increase as global mobility returns to pre-pandemic levels. Interest rate changes will impact affordability, but luxury buyers typically have more financing flexibility. Long-term prospects remain positive for well-located, unique properties in established and emerging luxury markets."
        },
      ],
    },
    {
      title: "Investment Opportunities",
      intro:
        "Discover premium investment properties with strong ROI potential. From rental income to capital appreciation, find properties that align with your financial goals and investment strategy.",
      sections: [
        {
          heading: "High-Yield Rental Properties",
          content:
            "Luxury rental properties in prime urban locations generate consistent cash flows with yields ranging from 4-8% annually. Short-term luxury rentals in resort destinations can achieve even higher returns of 10-15% with proper management. Corporate housing and extended-stay luxury accommodations serve growing business travel markets. Multi-family luxury developments offer economies of scale and professional management opportunities. Location, property condition, and local rental regulations are key factors in maximizing rental returns and ensuring sustainable investment performance."
        },
        {
          heading: "Value-Add Opportunities",
          content:
            "Renovation and repositioning projects offer substantial returns for investors with construction expertise or reliable contractor networks. Historic properties eligible for tax credits provide unique investment advantages while preserving architectural heritage. Luxury conversions of commercial properties into residential use capitalize on urban living trends and zoning changes. Subdivision opportunities in large estate properties can multiply investment values in the right markets. These projects require careful due diligence but offer potential returns of 20-40% for successful execution."
        },
        {
          heading: "Emerging Markets",
          content:
            "Secondary cities are experiencing luxury market development as buyers seek value and lifestyle improvements outside major metropolitan areas. International markets offer currency diversification and potentially higher growth rates for US-based investors. Resort and vacation home markets are expanding beyond traditional destinations to previously overlooked regions with natural beauty and recreational amenities. Gentrifying neighborhoods present early-stage investment opportunities before full luxury market development occurs. These markets require local expertise but offer significant upside potential for patient investors."
        },
        {
          heading: "Commercial Real Estate",
          content:
            "Luxury commercial properties including high-end retail, office buildings, and hospitality assets provide portfolio diversification and institutional-quality investments. Mixed-use developments combining luxury residential with premium commercial space offer multiple revenue streams and development synergies. Medical and professional office buildings in affluent areas provide stable, long-term lease income with credit-worthy tenants. Luxury self-storage and specialized commercial properties serve high-net-worth clientele and command premium rents in the right locations."
        },
        {
          heading: "Real Estate Investment Trusts",
          content:
            "Luxury-focused REITs provide liquid exposure to high-end real estate markets without direct property ownership responsibilities. Publicly-traded REITs offer transparency, professional management, and dividend income from luxury property portfolios. Private REITs and real estate funds provide access to institutional-quality luxury properties with potentially higher returns. International REITs enable global luxury real estate exposure and currency diversification. These vehicles require less capital than direct ownership while providing professional management and diversification benefits."
        },
        {
          heading: "Land Banking",
          content:
            "Strategic land acquisition in the path of luxury development provides long-term appreciation potential with minimal ongoing expenses. Waterfront and view properties offer inherent scarcity value that tends to appreciate above general market rates. Agricultural land in luxury market proximity can benefit from development potential and current agricultural income. Mineral rights and natural resource properties provide additional income streams beyond land appreciation. These investments require patience and local market knowledge but offer substantial long-term wealth building potential."
        },
        {
          heading: "Portfolio Strategy",
          content:
            "Diversification across property types, locations, and investment strategies reduces risk while optimizing returns across market cycles. Geographic diversification protects against local market downturns while capturing growth in multiple regions. Mix of income-producing and appreciation-focused properties balances current cash flow with long-term wealth building. International diversification provides currency hedging and access to different economic cycles. Professional portfolio management and regular rebalancing ensure optimal performance and risk management over time."
        },
      ],
    },
    {
      title: "Luxury Property Showcase",
      intro:
        "Explore our curated collection of exceptional properties. From penthouse suites to beachfront estates, experience the finest in luxury real estate across diverse markets and architectural styles.",
      sections: [
        {
          heading: "Penthouse Collections",
          content:
            "Urban penthouses represent the pinnacle of city living with panoramic views, private terraces, and exclusive building amenities. These properties often feature floor-to-ceiling windows, high-end finishes, and smart home technology integration. Building amenities typically include concierge services, fitness centers, rooftop gardens, and private parking. Penthouse ownership provides prestige value and strong appreciation potential in prime urban markets. Many developments offer customization options and designer services to create truly unique living spaces that reflect individual tastes and preferences."
        },
        {
          heading: "Waterfront Estates",
          content:
            "Oceanfront and lakefront properties offer unparalleled natural beauty with direct water access and recreational opportunities. These estates feature private beaches, deep-water dockage, and panoramic water views from multiple living spaces. Architecture often emphasizes indoor-outdoor living with expansive terraces, infinity pools, and seamless transitions between interior and exterior spaces. Waterfront properties provide natural privacy and exclusivity while offering lifestyle amenities like boating, fishing, and water sports. Limited supply and high demand ensure these properties maintain their value and desirability over time."
        },
        {
          heading: "Mountain Retreats",
          content:
            "Luxury mountain properties combine natural beauty with sophisticated amenities in private, serene settings away from urban congestion. These homes often feature stone and timber construction that harmonizes with natural surroundings while providing modern comfort and convenience. Outdoor amenities include hiking trails, private ski access, and recreational facilities designed for mountain living. Four-season recreational opportunities make these properties ideal for year-round use or seasonal retreats. Mountain properties offer privacy, natural beauty, and recreational lifestyle opportunities increasingly valued by luxury buyers."
        },
        {
          heading: "Historic Mansions",
          content:
            "Restored historic mansions combine architectural heritage with modern luxury amenities, offering unique properties with irreplaceable character and craftsmanship. These properties often feature period details, formal gardens, and architectural elements not found in contemporary construction. Professional restoration preserves historical integrity while incorporating modern systems, technology, and comfort features. Many historic properties are eligible for tax incentives and preservation grants that support ongoing maintenance and improvements. These homes provide cultural significance and architectural uniqueness that appeals to discerning buyers seeking distinctive properties."
        },
        {
          heading: "Contemporary Masterpieces",
          content:
            "Architect-designed contemporary luxury homes showcase cutting-edge design, sustainable technology, and innovative use of materials and space. These properties often feature open floor plans, walls of glass, and seamless integration with landscape and views. Smart home technology, energy-efficient systems, and sustainable materials reflect contemporary values and lifestyle preferences. Many contemporary luxury homes are designed as art pieces that complement and showcase owners' collections and aesthetic preferences. These properties appeal to buyers seeking the latest in design innovation and environmental responsibility."
        },
        {
          heading: "Resort Communities",
          content:
            "Luxury resort communities provide comprehensive lifestyle amenities including golf courses, spas, dining, and recreational facilities within secure, maintained environments. These developments often feature multiple property types from condominiums to estate homes, allowing buyers to choose their preferred lifestyle and maintenance level. Professional management handles landscaping, security, and amenity operations while homeowners enjoy resort-style living without maintenance responsibilities. Many communities offer membership benefits including reciprocal privileges at sister properties worldwide. These properties combine luxury living with hassle-free ownership and comprehensive lifestyle amenities."
        },
        {
          heading: "Investment Potential",
          content:
            "Luxury properties in our showcase represent not only exceptional living opportunities but also strong investment potential with appreciation and income possibilities. Each property is evaluated for market position, uniqueness, and long-term value prospects to ensure both lifestyle and financial benefits. Professional property management services are available to maximize rental income potential while protecting property value and condition. Market analysis and investment guidance help owners make informed decisions about holding, improving, or repositioning their luxury properties. These showcase properties represent the best combination of luxury living and investment opportunity in their respective markets."
        },
      ],
    },
  ],
  ar: [
    {
      title: "تحليل السوق والاتجاهات",
      intro: "ابق في المقدمة مع تحليل شامل للسوق واتجاهات الأسعار وتوقعات الاستثمار. رؤانا الخبيرة تساعدك على فهم قيم العقارات وديناميكيات السوق لاتخاذ قرارات عقارية مدروسة.",
      sections: [
        { heading: "نظرة عامة على السوق الحالي", content: "يستمر سوق العقارات الفاخرة في إظهار المرونة مع الارتفاع المطرد في المواقع المتميزة. تشهد المناطق الحضرية طلباً متزايداً على العقارات الراقية، بينما تتوسع أسواق الضواحي الفاخرة بسبب التغييرات في نمط الحياة." },
        { heading: "اتجاهات الأسعار والتوقعات", content: "ارتفعت قيم العقارات الفاخرة بنسبة 8-12% سنوياً في الأسواق المتميزة خلال السنوات الثلاث الماضية. تشهد العقارات المطلة على الماء والجبال أعلى معدلات النمو." },
        { heading: "النقاط الاستثمارية الساخنة", content: "تجذب الأسواق الفاخرة الناشئة في المدن الثانوية المستثمرين الأذكياء الباحثين عن عائدات وإمكانات تقدير أعلى." },
        { heading: "مؤشرات السوق", content: "انخفضت الأيام في السوق للعقارات الفاخرة إلى 45-60 يوماً في المواقع المتميزة، مما يشير إلى طلب قوي من المشترين." },
        { heading: "الأنماط الموسمية", content: "يبقى الربيع والخريف موسمي الذروة لمعاملات العقارات الفاخرة، حيث تحدث 60% من المبيعات السنوية خلال هذه الفترات." },
        { heading: "تأثير التكنولوجيا", content: "غيرت الجولات الافتراضية والتسويق الرقمي عرض العقارات الفاخرة، للوصول إلى جماهير عالمية فوراً." },
        { heading: "النظرة المستقبلية", content: "سوق العقارات الفاخرة مهيأ للنمو المستمر مدفوعاً بالتحولات الديموغرافية وخلق الثروة." },
      ],
    },
    {
      title: "فرص الاستثمار",
      intro: "اكتشف عقارات الاستثمار المميزة مع إمكانات عائد قوية على الاستثمار. من دخل الإيجار إلى تقدير رأس المال، ابحث عن عقارات تتماشى مع أهدافك المالية واستراتيجية الاستثمار.",
      sections: [
        { heading: "عقارات الإيجار عالية العائد", content: "تولد عقارات الإيجار الفاخرة في المواقع الحضرية المتميزة تدفقات نقدية ثابتة بعائدات تتراوح من 4-8% سنوياً." },
        { heading: "فرص القيمة المضافة", content: "مشاريع التجديد وإعادة التموضع توفر عائدات كبيرة للمستثمرين ذوي الخبرة في الإنشاءات أو شبكات المقاولين الموثوقة." },
        { heading: "الأسواق الناشئة", content: "تشهد المدن الثانوية تطوير السوق الفاخرة حيث يسعى المشترون للقيمة وتحسينات نمط الحياة خارج المناطق الحضرية الكبرى." },
        { heading: "العقارات التجارية", content: "العقارات التجارية الفاخرة بما في ذلك التجزئة الراقية والمباني المكتبية وأصول الضيافة توفر تنويع المحفظة." },
        { heading: "صناديق الاستثمار العقاري", content: "توفر صناديق الاستثمار العقاري المركزة على الفخامة تعرضاً سائلاً لأسواق العقارات الراقية دون مسؤوليات الملكية المباشرة." },
        { heading: "تجميع الأراضي", content: "الاستحواذ الاستراتيجي على الأراضي في مسار التطوير الفاخر يوفر إمكانات تقدير طويلة الأمد مع نفقات جارية قليلة." },
        { heading: "استراتيجية المحفظة", content: "التنويع عبر أنواع العقارات والمواقع واستراتيجيات الاستثمار يقلل المخاطر بينما يحسن العائدات عبر دورات السوق." },
      ],
    },
    {
      title: "معرض العقارات الفاخرة",
      intro: "استكشف مجموعتنا المختارة من العقارات الاستثنائية. من أجنحة البنتهاوس إلى عقارات الواجهة البحرية، اختبر الأفضل في العقارات الفاخرة عبر أسواق وأساليب معمارية متنوعة.",
      sections: [
        { heading: "مجموعات البنتهاوس", content: "تمثل البنتهاوس الحضرية قمة المعيشة في المدينة مع إطلالات بانورامية وشرفات خاصة ومرافق حصرية في المبنى." },
        { heading: "عزب الواجهة المائية", content: "تقدم العقارات المطلة على المحيط والبحيرة جمالاً طبيعياً لا مثيل له مع الوصول المباشر للماء والفرص الترفيهية." },
        { heading: "ملاذات الجبال", content: "تجمع العقارات الجبلية الفاخرة بين الجمال الطبيعي والمرافق المتطورة في إعدادات خاصة وهادئة بعيداً عن الازدحام الحضري." },
        { heading: "القصور التاريخية", content: "تجمع القصور التاريخية المرممة بين التراث المعماري والمرافق الفاخرة الحديثة، مقدمة عقارات فريدة بطابع وحرفية لا يمكن استبدالهما." },
        { heading: "تحف معاصرة", content: "تعرض المنازل الفاخرة المعاصرة المصممة من قبل معماريين تصميماً متطوراً وتكنولوجيا مستدامة واستخداماً مبتكراً للمواد والمساحة." },
        { heading: "مجتمعات المنتجعات", content: "توفر مجتمعات المنتجعات الفاخرة مرافق شاملة لنمط الحياة بما في ذلك ملاعب الجولف والمنتجعات الصحية والمطاعم والمرافق الترفيهية." },
        { heading: "الإمكانات الاستثمارية", content: "تمثل العقارات الفاخرة في معرضنا ليس فقط فرص معيشة استثنائية ولكن أيضاً إمكانات استثمارية قوية مع إمكانيات التقدير والدخل." },
      ],
    },
  ],
  he: [
    {
      title: "ניתוח שוק ומגמות",
      intro: "הישאר בחזית עם ניתוח שוק מקיف, מגמות מחירים ותחזיות השקעה. התובנות המומחות שלנו עוזרות לך להבין ערכי נכסים ודינמיקת שוק כדי לקבל החלטות נדל\"ן מושכלות.",
      sections: [
        { heading: "סקירת שוק נוכחית", content: "שוק הנדל\"ן היוקרתי ממשיך להראות חוסן עם התעלות מחירים יציבה ברחבי מיקומים מובחרים. אזורים מטרופוליניים חווים ביקוש מוגבר לנכסים יוקרתיים." },
        { heading: "מגמות מחירים ותחזיות", content: "ערכי נכסי יוקרה עלו ב-8-12% שנתית בשווקים מובחרים במהלך שלוש השנים האחרונות. נכסים על קו המים והרים רואים את שיעורי הצמיחה הגבוהים ביותר." },
        { heading: "נקודות השקעה חמות", content: "שווקי יוקרה מתפתחים בערים משניות מושכים משקיעים חכמים המחפשים תשואות גבוהות יותר ופוטנציאל התעלות." },
        { heading: "מחווני שוק", content: "ימים בשוק לנכסי יוקרה ירדו ל-45-60 ימים במיקומים מובחרים, מה שמצביע על ביקוש חזק מקונים." },
        { heading: "דפוסים עונתיים", content: "אביב וסתיו נותרים עונות השיא לעסקאות נדל\"ן יוקרתי, כאשר 60% מהמכירות השנתיות מתרחשות במהלך תקופות אלה." },
        { heading: "השפעת טכנולוגיה", content: "סיורים וירטואליים ושיווק דיגיטלי חוללו מהפכה בהצגת נכסי יוקרה, והגיעו לקהלים גלובליים באופן מיידי." },
        { heading: "תחזית עתידית", content: "שוק הנדל\"ן היוקרתי ממוקם לצמיחה מתמשכת המונעת על ידי שינויים דמוגרפיים ויצירת עושר." },
      ],
    },
    {
      title: "הזדמנויות השקעה",
      intro: "גלה נכסי השקעה מובחרים עם פוטנציאל תשואה חזק. מהכנסה משכירות ועד התעלות הון, מצא נכסים המתאימים למטרות הכספיות ואסטרטגיית ההשקעה שלך.",
      sections: [
        { heading: "נכסי השכרה בתשואה גבוהה", content: "נכסי השכרה יוקרתיים במיקומים עירוניים מובחרים מייצרים תזרימי מזומנים עקביים עם תשואות של 4-8% שנתית." },
        { heading: "הזדמנויות ערך מוסף", content: "פרויקטי שיפוץ ומיקום מחדש מציעים תשואות משמעותיות למשקיעים עם מומחיות בנייה או רשתות קבלנים אמינות." },
        { heading: "שווקים מתפתחים", content: "ערים משניות חווים פיתוח שוק יוקרה כאשר קונים מחפשים ערך ושיפורי אורח חיים מחוץ לאזורים מטרופוליניים גדולים." },
        { heading: "נדל\"ן מסחרי", content: "נכסים מסחריים יוקרתיים כולל קמעונאות יוקרתית, בנייני משרדים ונכסי אירוח מספקים גיוון תיק והשקעות באיכות מוסדית." },
        { heading: "קרנות נאמנות נדל\"ן", content: "קרנות נאמנות נדל\"ן מוקדות יוקרה מספקות חשיפה נזילה לשווקי נדל\"ן יוקרתי ללא אחריות בעלות ישירה." },
        { heading: "אגירת קרקעות", content: "רכישת קרקע אסטרטגית בנתיב של פיתוח יוקרה מספקת פוטנציאל התעלות ארוך טווח עם הוצאות שוטפות מינימליות." },
        { heading: "אסטרטגיית תיק", content: "גיוון על פני סוגי נכסים, מיקומים ואסטרטגיות השקעה מפחית סיכון תוך אופטימיזציה של תשואות על פני מחזורי שוק." },
      ],
    },
    {
      title: "תצוגת נכסי יוקרה",
      intro: "חקור את האוסף המובחר שלנו של נכסים יוצאי דופן. מסוויטות פנטהאוז ועד אחוזות חוף, חווה את הטוב ביותר בנדל\"ן יוקרתי על פני שווקים וסגנונות אדריכליים מגוונים.",
      sections: [
        { heading: "אוספי פנטהאוז", content: "פנטהאוזים עירוניים מייצגים את פסגת החיים בעיר עם נוף פנורמי, מרפסות פרטיות ושירותי בניין בלעדיים." },
        { heading: "אחוזות חוף", content: "נכסים על קו האוקיינוס והאגם מציעים יופי טבעי ללא תחרות עם גישה ישירה למים והזדמנויות פנאי." },
        { heading: "מפלטי הרים", content: "נכסי הרים יוקרתיים משלבים יופי טבעי עם שירותים מתוחכמים במסגרות פרטיות ושלוות הרחק מהגודש העירוני." },
        { heading: "אחוזות היסטוריות", content: "אחוזות היסטוריות משוחזרות משלבות מורשת אדריכלית עם שירותי יוקרה מודרניים, מציעות נכסים ייחודיים עם אופי וביצוע בלתי ניתנים להחלפה." },
        { heading: "יצירות מופת עכשוויות", content: "בתי יוקרה עכשוויים מעוצבים על ידי אדריכלים מציגים עיצוב חדשני, טכנולוגיה בת קיימא ושימוש חדשני בחומרים ומרחב." },
        { heading: "קהילות נופש", content: "קהילות נופש יוקרתיות מספקות שירותי אורח חיים מקיפים כולל מגרשי גולף, ספא, מסעדות ומתקני פנאי בסביבות מאובטחות ומתוחזקות." },
        { heading: "פוטנציאל השקעה", content: "נכסי יוקרה בתצוגה שלנו מייצגים לא רק הזדמנויות מגורים יוצאי דופן אלא גם פוטנציאל השקעה חזק עם אפשרויות התעלות והכנסה." },
      ],
    },
  ],
};

export default function BlogDetail() {
  // Theme and language state synced with Header
  const [theme, setTheme] = React.useState("light");
  const [language, setLanguage] = React.useState("en");
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
    if (typeof window !== "undefined") {
      const storedTheme = localStorage.getItem("theme") || "light";
      setTheme(storedTheme);
      const storedSelectedLang = localStorage.getItem("selectedLanguage") || 'English';
      setLanguage(langMap[storedSelectedLang] || 'en');
      const handleThemeChange = () => {
        const newTheme = localStorage.getItem("theme") || "light";
        setTheme(newTheme);
      };
      const handleLangChange = () => {
        const newSelectedLang = localStorage.getItem("selectedLanguage") || 'English';
        setLanguage(langMap[newSelectedLang] || 'en');
      };
      window.addEventListener("theme-changed", handleThemeChange);
      window.addEventListener("storage", handleThemeChange);
      window.addEventListener("language-changed", handleLangChange);
      window.addEventListener("storage", handleLangChange);
      return () => {
        window.removeEventListener("theme-changed", handleThemeChange);
        window.removeEventListener("storage", handleThemeChange);
        window.removeEventListener("language-changed", handleLangChange);
        window.removeEventListener("storage", handleLangChange);
      };
    }
  }, []);
  const { id } = useParams();

  // Blog images (order must match translations array)
  const blogImages = [feature1, feature2, feature3];

  // Find blog by id and language
  const blogIndex = parseInt(id, 10) - 1;
  const blog = translations[language] && translations[language][blogIndex];

  // Set RTL/LTR direction
  const dir = language === "ar" || language === "he" ? "rtl" : "ltr";

  if (!blog) {
    return (
      <div className={`text-center py-20 ${theme === "dark" ? "bg-black text-white" : "bg-white text-black"}`}
        dir={dir}
      >
  <h2 className="text-2xl font-bold text-red-500">
    {language === "ar" ? "المقال غير موجود" : language === "he" ? "המאמר לא נמצא" : "Blog Not Found"}
  </h2>
        <Link to="/blog" className="text-red-500 underline mt-4 block">
          {language === "ar" ? "العودة للمدونة" : language === "he" ? "חזרה לבלוגים" : "Back to Blogs"}
        </Link>
      </div>
    );
  }

  return (
    <div className={theme === "dark" ? "pt-20 min-h-screen bg-black text-white" : "pt-20 min-h-screen bg-white text-black"} dir={dir}>
      {/* Back Link */}
      <div className="max-w-5xl mx-auto px-6 pt-6">
        <Link to="/blog" className="text-red-500 underline hover:text-red-600 transition-colors">
          {language === "ar" ? "← العودة للمدونة" : language === "he" ? "← חזרה לבלוגים" : "← Back to Blogs"}
        </Link>
      </div>

      {/* Blog Hero */}
      <section className="relative w-full h-[80vh] flex items-center justify-center">
        <img src={blogImages[blogIndex]} alt={blog.title} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/50"></div>
        
        {/* Hero Content */}
        <div className="relative text-center px-6 text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            {blog.title}
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto"
            style={dir === "rtl" ? { textAlign: "right" } : {}}>
            {blog.intro}
          </p>
        </div>
      </section>

      {/* Blog Content */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        {blog.sections.map((sec, index) => {
          // Generate slug id from heading
          const sectionId = sec.heading.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");

          return (
            <div key={index} id={sectionId} className="mb-12 scroll-mt-20">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-red-500" 
                style={{ textAlign: dir === "rtl" ? "right" : "left" }}>
                {sec.heading}
              </h2>
              <p className={`text-lg leading-relaxed ${theme === "dark" ? "text-gray-200" : "text-gray-700"}`}
                style={dir === "rtl" ? { textAlign: "right" } : {}}>
                {sec.content}
              </p>
            </div>
          );
        })}

        {/* Call to Action */}
        <div className={`mt-16 p-8 rounded-2xl text-center ${theme === "dark" ? "bg-gray-800" : "bg-gray-50"}`}>
          <h3 className="text-2xl font-bold mb-4 text-red-500">
            {language === "ar" ? "مهتم في معرفة المزيد؟" : 
             language === "he" ? "מעוניין לדעת עוד?" : 
             "Interested in Learning More?"}
          </h3>
          <p className={`mb-6 ${theme === "dark" ? "text-gray-200" : "text-gray-600"}`}>
            {language === "ar" ? "اتصل بخبرائنا للحصول على رؤى شخصية واستراتيجيات استثمارية مخصصة." : 
             language === "he" ? "צור קשר עם המומחים שלנו לקבלת תובנות אישיות ואסטרטגיות השקעה מותאמות." : 
             "Contact our experts for personalized insights and tailored investment strategies."}
          </p>
          <Link to="/contactus" 
            className="inline-block bg-red-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-600 transition-colors">
            {language === "ar" ? "تواصل معنا" : 
             language === "he" ? "צור קשר" : 
             "Contact Us"}
          </Link>
        </div>
      </section>
    </div>
  );
}