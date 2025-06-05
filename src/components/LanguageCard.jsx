import React from 'react';
import { Link } from 'react-router-dom';

const LanguageCard = ({ language, description, icon, color, path, difficulty, features }) => {
  return (
    <Link to={path} className="block group">
      <div className="card p-6 h-full hover:scale-105 transform transition-all duration-300">
        <div className="flex items-center mb-4">
          <div className={`w-12 h-12 rounded-lg ${color} flex items-center justify-center text-white text-2xl font-bold mr-4`}>
            {icon}
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
              {language}
            </h3>
            <span className={`inline-block px-2 py-1 text-xs font-medium rounded-full ${
              difficulty === '初學者' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' :
              difficulty === '中級' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200' :
              'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
            }`}>
              {difficulty}
            </span>
          </div>
        </div>
        
        <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
          {description}
        </p>
        
        <div className="space-y-2">
          <h4 className="font-semibold text-gray-900 dark:text-white text-sm">主要特色：</h4>
          <ul className="space-y-1">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                <svg className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                {feature}
              </li>
            ))}
          </ul>
        </div>
        
        <div className="mt-6 flex items-center text-primary-600 dark:text-primary-400 font-medium group-hover:text-primary-700 dark:group-hover:text-primary-300">
          開始學習
          <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </Link>
  );
};

export default LanguageCard;
