import { useState, useEffect } from "react";
// Translation object for all admin dashboard text
const translations = {
  en: {
    userSignup: "User Signup Details",
    sno: "S.No",
    firstName: "First Name",
    lastName: "Last Name",
    email: "Email",
    signupTime: "Signup Time",
    signupDate: "Signup Date",
    noUsers: "No user signup details found.",
    revenue: "Property Sales Revenue (Weekly)",
    popularProperties: "Popular Property Types",
    propertyStatus: "Property Status Distribution",
    clientGrowth: "Client Growth (Monthly)",
    monthlyListings: "Monthly Property Listings",
  },
  ar: {
    userSignup: "تفاصيل تسجيل المستخدمين",
    sno: "م.ت",
    firstName: "الاسم الأول",
    lastName: "اسم العائلة",
    email: "البريد الإلكتروني",
    signupTime: "وقت التسجيل",
    signupDate: "تاريخ التسجيل",
    noUsers: "لا توجد تفاصيل تسجيل مستخدمين.",
    revenue: "إيرادات مبيعات العقارات (أسبوعي)",
    popularProperties: "أنواع العقارات الأكثر شعبية",
    propertyStatus: "توزيع حالة العقارات",
    clientGrowth: "نمو العملاء (شهري)",
    monthlyListings: "قوائم العقارات الشهرية",
  },
  he: {
    userSignup: "פרטי הרשמת משתמשים",
    sno: "מס' סידורי",
    firstName: "שם פרטי",
    lastName: "שם משפחה",
    email: "אימייל",
    signupTime: "שעת הרשמה",
    signupDate: "תאריך הרשמה",
    noUsers: "לא נמצאו פרטי הרשמת משתמשים.",
    revenue: "הכנסות מכירת נכסים (שבועי)",
    popularProperties: "סוגי נכסים פופולריים",
    propertyStatus: "התפלגות סטטוס נכסים",
    clientGrowth: "צמיחת לקוחות (חודשי)",
    monthlyListings: "רישומי נכסים חודשיים",
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
import clsx from "clsx";
import Header from "../components/Header";
import React from "react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
  AreaChart,
  Area,
} from "recharts";
const revenueData = [
    { day: "Mon", revenue: 150000 },
    { day: "Tue", revenue: 220000 },
    { day: "Wed", revenue: 180000 },
    { day: "Thu", revenue: 350000 },
    { day: "Fri", revenue: 420000 },
    { day: "Sat", revenue: 520000 },
    { day: "Sun", revenue: 280000 },
  ];

  const propertyTypesData = [
    { type: "Apartments", sales: 45 },
    { type: "Houses", sales: 32 },
    { type: "Condos", sales: 28 },
    { type: "Commercial", sales: 15 },
  ];

  const propertyStatusData = [
    { name: "Available", value: 45, color: "#22c55e" },
    { name: "Under Contract", value: 28, color: "#eab308" },
    { name: "Sold", value: 32, color: "rgba(72, 111, 136, 0.8)" },
    { name: "Pending", value: 15, color: "#3b82f6" },
  ];

  const clientsData = [
    { month: "Jan", clients: 120 },
    { month: "Feb", clients: 145 },
    { month: "Mar", clients: 180 },
    { month: "Apr", clients: 220 },
  ];

  const feedbackData = [
    { name: "Positive", value: 70 },
    { name: "Neutral", value: 20 },
    { name: "Negative", value: 10 },
  ];
  const COLORS = ["#22c55e", "#eab308", "rgba(72, 111, 136, 0.8)"];

  const monthlyListingsData = [
    { month: "Jan", listings: 25 },
    { month: "Feb", listings: 32 },
    { month: "Mar", listings: 28 },
    { month: "Apr", listings: 45 },
    { month: "May", listings: 38 },
    { month: "Jun", listings: 52 },
  ];

export default function UserDetailsSection() {
  // Language state synced with Header
  const [selectedLanguage, setSelectedLanguage] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('selectedLanguage') || 'English';
    }
    return 'English';
  });
  const [language, setLanguage] = useState(langMap[selectedLanguage] || 'en');
  useEffect(() => {
    const handleLangChange = () => {
      const newLang = localStorage.getItem('selectedLanguage') || 'English';
      setSelectedLanguage(newLang);
      setLanguage(langMap[newLang] || 'en');
    };
    window.addEventListener('language-changed', handleLangChange);
    window.addEventListener('storage', handleLangChange);
    return () => {
      window.removeEventListener('language-changed', handleLangChange);
      window.removeEventListener('storage', handleLangChange);
    };
  }, []);
  // Set RTL/LTR direction
  const dir = language === 'ar' || language === 'he' ? 'rtl' : 'ltr';
  // Theme state
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "light");
  useEffect(() => {
    const syncTheme = () => setTheme(localStorage.getItem("theme") || "light");
    window.addEventListener("storage", syncTheme);
    window.addEventListener("theme-changed", syncTheme);
    return () => {
      window.removeEventListener("storage", syncTheme);
      window.removeEventListener("theme-changed", syncTheme);
    };
  }, []);

  // NOTE: In your theme toggle logic (e.g., in Header), after updating localStorage, add:
  // window.dispatchEvent(new Event("themeChanged"));
  // Remove a blog (same logic as webinars)
  const handleRemoveBlog = (idx) => {
    const newBlogs = blogs.filter((_, i) => i !== idx);
    localStorage.setItem("blogs", JSON.stringify(newBlogs));
    setBlogs(newBlogs);
    setEditIdx(null);
  };

  // Start editing a blog (same logic as webinars)
  const handleEditBlog = (idx) => {
    setEditIdx(idx);
    const b = blogs[idx];
    setEditForm({
      title: b.title || '',
      image: b.image || '',
      author: b.author || '',
      description: b.description || ''
    });
  };

  // Save edited blog (same logic as webinars)
  const handleBlogEditSave = (idx) => {
    if (!editForm.title || !editForm.image || !editForm.author || !editForm.description) return;
    const newBlogs = blogs.map((b, i) => i === idx ? { ...editForm, createdAt: b.createdAt } : b);
    setBlogs(newBlogs);
    localStorage.setItem("blogs", JSON.stringify(newBlogs));
    setEditIdx(null);
  };
  const [editIdx, setEditIdx] = useState(null);
  const [editForm, setEditForm] = useState({ title: '', date: '', time: '', description: '' });
  const [webinarRegistrations, setWebinarRegistrations] = useState([]);
  const [webinars, setWebinars] = useState([]);
  const [webinarForm, setWebinarForm] = useState({ title: '', date: '', time: '', description: '' });

  const [signupDetails, setSignupDetails] = useState([]);
  const [instructorDetails, setInstructorDetails] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [blogForm, setBlogForm] = useState({ title: '', image: '', author: '', description: '' });

  // Prepare data for signup graph (signups per day)
  
  // Prepare data for instructor graph (instructors per expertise)
  

  useEffect(() => {
    // Fetch all admin data from localStorage
    const fetchDetails = () => {
      const storedUsers = localStorage.getItem("users");
      setSignupDetails(storedUsers ? JSON.parse(storedUsers) : []);
    
    };
    fetchDetails();
    window.addEventListener("storage", fetchDetails);
    return () => window.removeEventListener("storage", fetchDetails);
  }, []);

 


  return (
    <div dir={dir} className={clsx(
      "min-h-screen w-full",
      theme === "dark" ? "bg-[#10141c] text-white" : "bg-[#f6fafd] text-[#22223b]"
    )}>
      <Header />
      <div className="max-w-7xl mx-auto p-6 space-y-12">
        {/* User Signup Table Section */}
        <div className={clsx(
          "rounded-xl shadow p-6 mt-16 bg-white text-black border"
        )} style={{borderColor: 'rgba(72, 111, 136, 0.8)'}}>
          <h2 className="text-2xl font-bold mb-4" style={{color: 'rgba(72, 111, 136, 0.8)'}}>{translations[language].userSignup}</h2>
          {signupDetails.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="min-w-full border rounded-lg" style={{borderColor: 'rgba(72, 111, 136, 0.8)'}}>
                <thead className="text-white" style={{backgroundColor: 'rgba(72, 111, 136, 0.8)'}}>
                  <tr>
                    <th className="px-4 py-2 text-center">{translations[language].sno}</th>
                    <th className="px-4 py-2 text-center">{translations[language].firstName}</th>
                    <th className="px-4 py-2 text-center">{translations[language].lastName}</th>
                    <th className="px-4 py-2 text-center">{translations[language].email}</th>
                    <th className="px-4 py-2 text-center">{translations[language].signupTime}</th>
                    <th className="px-4 py-2 text-center">{translations[language].signupDate}</th>
                  </tr>
                </thead>
                <tbody>
                  {signupDetails.map((user, idx) => (
                    <tr key={user.email || idx} className="border-b" style={{borderColor: 'rgba(72, 111, 136, 0.4)'}}>
                      <td className="px-4 py-2 text-center">{idx + 1}</td>
                      <td className="px-4 py-2 text-center">{user.firstName}</td>
                      <td className="px-4 py-2 text-center">{user.lastName}</td>
                      <td className="px-4 py-2 text-center">{user.email}</td>
                      <td className="px-4 py-2 text-center">{user.signupTime}</td>
                      <td className="px-4 py-2 text-center">{user.signupDate}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <p className="text-gray-500">{translations[language].noUsers}</p>
          )}
        </div>

        {/* 1. Property Sales Revenue Overview */}
        <div className="p-6 rounded-2xl shadow bg-white text-black border" style={{borderColor: 'rgba(72, 111, 136, 0.8)'}}>
          <h2 className="text-xl font-semibold mb-4" style={{color: 'rgba(72, 111, 136, 0.8)'}}>{translations[language].revenue}</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={revenueData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" label={{ value: 'Day', position: 'insideBottom', offset: -5, fill: 'rgba(72, 111, 136, 0.8)', fontSize: 14 }} />
              <YAxis />
              <Tooltip />
              <Legend formatter={null} />
              <Line type="monotone" dataKey="revenue" stroke="rgba(72, 111, 136, 0.8)" strokeWidth={3} dot={{ r: 4 }} activeDot={{ r: 6 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* 3. Property Status Distribution & 4. Client Growth */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Property Status Distribution */}
          <div className="p-6 rounded-2xl shadow bg-white text-black border" style={{borderColor: 'rgba(72, 111, 136, 0.8)'}}>
            <h2 className="text-xl font-semibold mb-4" style={{color: 'rgba(72, 111, 136, 0.8)'}}>{translations[language].propertyStatus}</h2>
            <ResponsiveContainer width="100%" height={200}>
              <PieChart>
                <Pie
                  data={propertyStatusData}
                  cx="50%"
                  cy="50%"
                  outerRadius={60}
                  fill="#8884d8"
                  dataKey="value"
                  label={({name, percent}) => `${name} ${(percent * 100).toFixed(0)}%`}
                >
                  {propertyStatusData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip formatter={(value, name) => [value, name]} />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>

          <div className="p-6 rounded-2xl shadow bg-white text-black border" style={{borderColor: 'rgba(72, 111, 136, 0.8)'}}>
            <h2 className="text-xl font-semibold mb-4" style={{color: 'rgba(72, 111, 136, 0.8)'}}>{translations[language].clientGrowth}</h2>
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={clientsData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" label={{ value: 'Month', position: 'insideBottom', offset: -5, fill: 'rgba(72, 111, 136, 0.8)', fontSize: 14 }} />
                <YAxis />
                <Tooltip 
                  formatter={(value, name) => [value, translations[language].clientGrowth]}
                  labelFormatter={label => label}
                />
                <Legend formatter={() => <span style={{ color: 'rgba(72, 111, 136, 0.8)' }}>{translations[language].clientGrowth}</span>} />
                <Line type="monotone" dataKey="clients" stroke="rgba(72, 111, 136, 0.8)" strokeWidth={3} dot={{ r: 4 }} activeDot={{ r: 6 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* 5 & 6. Popular Property Types and Property Deals Performance side by side */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl shadow bg-white text-black border" style={{borderColor: 'rgba(72, 111, 136, 0.8)'}}>
            <h2 className="text-xl font-semibold mb-4" style={{color: 'rgba(72, 111, 136, 0.8)'}}>{translations[language].popularProperties}</h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={propertyTypesData} barSize={75}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="type" />
                <YAxis />
                <Tooltip 
                  formatter={(value, name) => [value, translations[language].popularProperties]}
                  labelFormatter={label => label}
                />
                <Legend formatter={() => <span style={{ color: 'rgba(72, 111, 136, 0.8)' }}>{translations[language].popularProperties}</span>} />
                <Bar dataKey="sales" fill="rgba(72, 111, 136, 0.8)" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="p-6 rounded-2xl shadow bg-white text-black border" style={{borderColor: 'rgba(72, 111, 136, 0.8)'}}>
            <h2 className="text-xl font-semibold mb-4" style={{color: 'rgba(72, 111, 136, 0.8)'}}>{translations[language].monthlyListings}</h2>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={monthlyListingsData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" label={{ value: 'Month', position: 'insideBottom', offset: -5, fill: 'rgba(72, 111, 136, 0.8)', fontSize: 14 }} />
                <YAxis />
                <Tooltip 
                  formatter={(value, name) => [value, translations[language].monthlyListings]}
                  labelFormatter={label => label}
                />
                <Legend formatter={() => <span style={{ color: 'rgba(72, 111, 136, 0.8)' }}>{translations[language].monthlyListings}</span>} />
                <Line type="monotone" dataKey="listings" stroke="rgba(72, 111, 136, 0.8)" strokeWidth={3} dot={{ r: 5, fill: 'rgba(72, 111, 136, 0.8)' }} activeDot={{ r: 7, fill: 'rgba(72, 111, 136, 1)' }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
  </div>
  </div>
);
}
