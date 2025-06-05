import React, { useState } from 'react';

const LessonCard = ({ title, description, code, explanation, level }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const getLevelColor = (level) => {
    switch (level) {
      case '基礎':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case '中級':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
      case '進階':
        return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    }
  };

  return (
    <div className="card p-6 mb-6">
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <div className="flex items-center mb-2">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mr-3">
              {title}
            </h3>
            <span className={`px-2 py-1 text-xs font-medium rounded-full ${getLevelColor(level)}`}>
              {level}
            </span>
          </div>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            {description}
          </p>
        </div>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="ml-4 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
          aria-label={isExpanded ? '收起' : '展開'}
        >
          <svg 
            className={`w-5 h-5 text-gray-500 dark:text-gray-400 transform transition-transform ${
              isExpanded ? 'rotate-180' : ''
            }`} 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>

      {isExpanded && (
        <div className="space-y-4 border-t border-gray-200 dark:border-gray-700 pt-4">
          {code && (
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">程式碼範例：</h4>
              <pre className="code-block">
                <code>{code}</code>
              </pre>
            </div>
          )}
          
          {explanation && (
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">詳細說明：</h4>
              <div className="prose dark:prose-invert max-w-none">
                {typeof explanation === 'string' ? (
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {explanation}
                  </p>
                ) : (
                  explanation
                )}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default LessonCard;
