import React from 'react';
import LanguageCard from '../components/LanguageCard';

const Home = () => {
  const languages = [
    {
      language: 'Python',
      description: '最適合初學者的程式語言，語法簡潔易懂，廣泛應用於數據科學、人工智慧、網頁開發等領域。',
      icon: '🐍',
      color: 'bg-blue-500',
      path: '/python',
      difficulty: '初學者',
      features: ['語法簡潔易學', '豐富的函式庫', '數據科學首選', '跨平台支援']
    },
    {
      language: 'JavaScript',
      description: '網頁開發的核心語言，可以創建互動式網頁，也能用於後端開發和行動應用程式開發。',
      icon: 'JS',
      color: 'bg-yellow-500',
      path: '/javascript',
      difficulty: '初學者',
      features: ['前端開發必備', '即時互動效果', '全端開發可能', '龐大生態系統']
    },
    {
      language: 'Java',
      description: '企業級開發的首選語言，具有強大的跨平台能力，廣泛用於大型系統開發和Android應用。',
      icon: '☕',
      color: 'bg-red-500',
      path: '/java',
      difficulty: '中級',
      features: ['跨平台執行', '企業級應用', '強型別系統', '豐富框架支援']
    },
    {
      language: 'C++',
      description: '高效能程式語言，適合系統程式設計、遊戲開發和需要高效能運算的應用領域。',
      icon: 'C++',
      color: 'bg-purple-500',
      path: '/cpp',
      difficulty: '進階',
      features: ['高效能執行', '系統程式設計', '記憶體控制', '遊戲開發常用']
    },
    {
      language: 'Go',
      description: '現代化的程式語言，由Google開發，特別適合雲端服務和微服務架構的後端開發。',
      icon: 'Go',
      color: 'bg-cyan-500',
      path: '/go',
      difficulty: '中級',
      features: ['並發處理優秀', '編譯速度快', '雲端服務首選', '簡潔語法設計']
    }
  ];

  return (
    <div className="max-w-7xl mx-auto">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
          學習程式設計
          <span className="block text-primary-600 dark:text-primary-400">從這裡開始</span>
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
          選擇一門程式語言，開始您的程式設計之旅。我們提供從零基礎到進階的完整教學內容，
          讓您循序漸進地掌握程式設計技能。
        </p>
      </div>

      {/* Language Selection */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
          選擇您想學習的程式語言
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {languages.map((lang, index) => (
            <LanguageCard key={index} {...lang} />
          ))}
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-8">
          為什麼選擇我們的教學平台？
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">零基礎友善</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">從最基礎的概念開始，循序漸進學習</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">實作導向</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">豐富的程式範例和實作練習</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">現代化設計</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">美觀直覺的介面，支援深淺色主題</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">自主學習</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">按照自己的節奏學習，隨時隨地存取</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
