
import React, { useEffect, useLayoutEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const UserDashboard = () => {
  const [userInfo, setUserInfo] = useState({ firstname: '', lastname: '', email: '' });
  const [quizAnswers, setQuizAnswers] = useState([]);
  const [theme, setTheme] = useState('light');
  const [streak, setStreak] = useState(0);
  const [quizMeta, setQuizMeta] = useState({});

  // Helper to fetch all dashboard data from localStorage
  const fetchDashboardData = () => {
    const firstname = localStorage.getItem('firstname') || '';
    const lastname = localStorage.getItem('lastname') || '';
    const email = localStorage.getItem('email') || '';
    setUserInfo({ firstname, lastname, email });

    const answers = localStorage.getItem('quizAnswers');
    if (answers) {
      try {
        setQuizAnswers(JSON.parse(answers));
      } catch {
        setQuizAnswers([]);
      }
    } else {
      setQuizAnswers([]);
    }

    // Try both 'streak' and 'dailyStreak' for compatibility
    const streakVal = localStorage.getItem('streak') || localStorage.getItem('dailyStreak');
    setStreak(streakVal ? Number(streakVal) : 0);

    const meta = localStorage.getItem('quizMeta');
    if (meta) {
      try {
        setQuizMeta(JSON.parse(meta));
      } catch {
        setQuizMeta({});
      }
    } else {
      setQuizMeta({});
    }
    // Do NOT set theme here to avoid flicker
  };

  useLayoutEffect(() => {
    // Set theme synchronously before first paint to avoid flicker
    setTheme(localStorage.getItem('theme') || 'light');
  }, []);

  useEffect(() => {
    fetchDashboardData();
    // Listen for theme and storage changes
    const handleThemeChange = () => {
      setTheme(localStorage.getItem('theme') || 'light');
    };
    const handleStorage = () => {
      fetchDashboardData();
    };
    window.addEventListener('theme-changed', handleThemeChange);
    window.addEventListener('storage', handleStorage);
    return () => {
      window.removeEventListener('theme-changed', handleThemeChange);
      window.removeEventListener('storage', handleStorage);
    };
  }, []);

  // Always apply the theme to the document root when theme changes
  useEffect(() => {
    if (typeof window !== 'undefined') {
      document.documentElement.setAttribute('data-theme', theme);
    }
  }, [theme]);

  // Render quiz answers as detailed history if possible
  const isQuizHistory = Array.isArray(quizAnswers) && quizAnswers.length > 0 && typeof quizAnswers[0] === 'object' && quizAnswers[0] !== null && ('date' in quizAnswers[0] && 'question' in quizAnswers[0] && 'selectedAnswer' in quizAnswers[0] && 'correctAnswer' in quizAnswers[0]);

  return (
    <div className={`max-w-full mx-auto  mt-20 p-6 min-h-screen ${theme === 'dark' ? 'bg-[#1E2A38] text-white' : 'bg-white text-black'}`}>
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold">User Dashboard</h1>
        <Link to="/home1" className={`text-sm underline ${theme === 'dark' ? 'text-blue-300' : 'text-blue-700'}`}>Back to Home</Link>
      </div>
      <div className={`mb-6 p-4 rounded ${theme === 'dark' ? 'bg-[#22304a]' : 'bg-gray-100'}`}> 
        <h2 className="font-semibold mb-2">User Info</h2>
        <div><strong>First Name:</strong> {userInfo.firstname}</div>
        <div><strong>Last Name:</strong> {userInfo.lastname}</div>
        <div><strong>Email:</strong> {userInfo.email}</div>
      </div>
      <div className={`p-4 rounded ${theme === 'dark' ? 'bg-[#19212c]' : 'bg-gray-50'}`}> 
        <h2 className="font-semibold mb-2">Quiz Details</h2>
        <div className="mb-2"><strong>Current Streak:</strong> {streak}</div>
        {quizMeta && Object.keys(quizMeta).length > 0 && (
          <div className="mb-2">
            <strong>Quiz Meta:</strong>
            <ul className="list-disc pl-5">
              {Object.entries(quizMeta).map(([key, value]) => (
                <li key={key}><strong>{key}:</strong> {String(value)}</li>
              ))}
            </ul>
          </div>
        )}
        <h3 className="font-semibold mb-1 mt-2">Quiz History</h3>
        {quizAnswers.length > 0 ? (
          isQuizHistory ? (
            <ul className="space-y-4">
              {quizAnswers.map((qa, idx) => (
                <li key={idx} className={`p-3 rounded border ${theme === 'dark' ? 'bg-[#28344a] border-[#22304a]' : 'bg-gray-200 border-gray-300'}`}>
                  <div className="mb-1 text-sm text-gray-400">{qa.date}</div>
                  <div className="font-semibold mb-1">Q{idx + 1}: {qa.question}</div>
                  <div className="mb-1">
                    <span className="font-semibold">Options:</span>
                    <ul className="list-disc pl-5">
                      {Array.isArray(qa.options)
                        ? qa.options.map((opt, i) => (
                            <li key={i} className={
                              opt === qa.selectedAnswer
                                ? (opt === qa.correctAnswer ? 'text-green-500 font-bold' : 'text-red-500 font-bold')
                                : (opt === qa.correctAnswer ? 'text-green-500' : '')
                            }>
                              {opt}
                              {opt === qa.selectedAnswer && ' (Your Attempt)'}
                              {opt === qa.correctAnswer && ' (Correct)'}
                            </li>
                          ))
                        : <li>{qa.options}</li>}
                    </ul>
                  </div>
                  <div className="mb-1">
                    <span className="font-semibold">Your Attempt:</span> <span className={qa.selectedAnswer === qa.correctAnswer ? 'text-green-500' : 'text-red-500'}>{qa.selectedAnswer}</span>
                  </div>
                  <div className="mb-1">
                    <span className="font-semibold">Correct Answer:</span> <span className="text-green-500">{qa.correctAnswer}</span>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <ul className="list-disc pl-5">
              {quizAnswers.map((ans, idx) => (
                <li key={idx} className="mb-1">{ans}</li>
              ))}
            </ul>
          )
        ) : (
          <div>No quiz answers found.</div>
        )}
      </div>
    </div>
  );
};

export default UserDashboard;
