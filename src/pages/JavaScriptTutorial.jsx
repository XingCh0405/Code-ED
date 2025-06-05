import React from 'react';
import { Link } from 'react-router-dom';
import LessonCard from '../components/LessonCard';

const JavaScriptTutorial = () => {
  const lessons = [
    {
      title: '1. JavaScript 簡介',
      level: '基礎',
      description: '了解 JavaScript 的用途、特色，以及如何在網頁中使用。',
      code: `// 這是你的第一個 JavaScript 程式
console.log("Hello, World!");
console.log("歡迎來到 JavaScript 的世界！");

// 在網頁中顯示訊息
alert("歡迎學習 JavaScript！");

// 修改網頁內容
document.getElementById("demo").innerHTML = "Hello JavaScript!";`,
      explanation: (
        <div className="space-y-3">
          <p>JavaScript 是網頁開發的核心語言，主要用於：</p>
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li>網頁互動效果</li>
            <li>動態內容更新</li>
            <li>表單驗證</li>
            <li>後端開發 (Node.js)</li>
            <li>行動應用開發</li>
          </ul>
          <p><code>console.log()</code> 用於在開發者工具中顯示訊息，<code>alert()</code> 會彈出對話框。</p>
        </div>
      )
    },
    {
      title: '2. 變數與資料型別',
      level: '基礎',
      description: '學習 JavaScript 中的變數宣告方式和基本資料型別。',
      code: `// 變數宣告的三種方式
let name = "小明";        // 可重新賦值的變數
const age = 25;          // 常數，不可重新賦值
var city = "台北";       // 舊式宣告方式

// 基本資料型別
let message = "Hello";   // 字串 (string)
let count = 42;          // 數字 (number)
let isActive = true;     // 布林值 (boolean)
let data = null;         // 空值 (null)
let value;               // 未定義 (undefined)

// 顯示變數內容
console.log(\`姓名：\${name}\`);
console.log(\`年齡：\${age}\`);
console.log(\`城市：\${city}\`);

// 檢查資料型別
console.log(typeof name);    // "string"
console.log(typeof age);     // "number"
console.log(typeof isActive); // "boolean"`,
      explanation: (
        <div className="space-y-3">
          <p>JavaScript 變數宣告的差異：</p>
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li><strong>let：</strong>區塊作用域，可重新賦值</li>
            <li><strong>const：</strong>區塊作用域，不可重新賦值</li>
            <li><strong>var：</strong>函數作用域，建議避免使用</li>
          </ul>
          <p>模板字串使用反引號 ` 和 ${} 來嵌入變數，比字串連接更方便。</p>
        </div>
      )
    },
    {
      title: '3. 函數 (Functions)',
      level: '基礎',
      description: '學習如何定義和使用函數，讓程式碼更有組織性。',
      code: `// 函數宣告
function greet(name) {
    return \`你好，\${name}！\`;
}

// 函數表達式
const add = function(a, b) {
    return a + b;
};

// 箭頭函數 (ES6)
const multiply = (a, b) => a * b;

// 使用函數
console.log(greet("小明"));
console.log(add(5, 3));
console.log(multiply(4, 6));

// 有預設參數的函數
function introduce(name, age = 18) {
    return \`我是 \${name}，今年 \${age} 歲\`;
}

console.log(introduce("小華"));
console.log(introduce("小美", 25));

// 立即執行函數
(function() {
    console.log("這個函數會立即執行！");
})();`,
      explanation: (
        <div className="space-y-3">
          <p>JavaScript 中定義函數的方式：</p>
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li><strong>函數宣告：</strong>使用 function 關鍵字</li>
            <li><strong>函數表達式：</strong>將函數賦值給變數</li>
            <li><strong>箭頭函數：</strong>ES6 新語法，更簡潔</li>
          </ul>
          <p>函數可以有預設參數，當呼叫時沒有提供該參數時會使用預設值。</p>
        </div>
      )
    },
    {
      title: '4. 陣列 (Arrays)',
      level: '基礎',
      description: '學習如何使用陣列來儲存和操作多個資料。',
      code: `// 建立陣列
let fruits = ["蘋果", "香蕉", "橘子"];
let numbers = [1, 2, 3, 4, 5];
let mixed = ["文字", 42, true, null];

// 存取陣列元素
console.log(fruits[0]);        // "蘋果"
console.log(fruits.length);    // 3

// 修改陣列元素
fruits[1] = "芒果";
console.log(fruits);           // ["蘋果", "芒果", "橘子"]

// 陣列方法
fruits.push("葡萄");           // 在末尾添加
console.log(fruits);           // ["蘋果", "芒果", "橘子", "葡萄"]

let lastFruit = fruits.pop();  // 移除並返回最後一個元素
console.log(lastFruit);        // "葡萄"

// 迴圈遍歷陣列
for (let i = 0; i < fruits.length; i++) {
    console.log(\`第 \${i + 1} 個水果：\${fruits[i]}\`);
}

// 使用 forEach 方法
fruits.forEach((fruit, index) => {
    console.log(\`\${index}: \${fruit}\`);
});`,
      explanation: (
        <div className="space-y-3">
          <p>陣列是用來儲存多個值的資料結構：</p>
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li><strong>索引：</strong>從 0 開始計算</li>
            <li><strong>length：</strong>陣列長度屬性</li>
            <li><strong>push()：</strong>在末尾添加元素</li>
            <li><strong>pop()：</strong>移除最後一個元素</li>
            <li><strong>forEach()：</strong>遍歷每個元素</li>
          </ul>
          <p>JavaScript 陣列可以儲存不同型別的資料。</p>
        </div>
      )
    },
    {
      title: '5. 物件 (Objects)',
      level: '中級',
      description: '學習如何使用物件來組織相關的資料和功能。',
      code: `// 建立物件
let person = {
    name: "小明",
    age: 25,
    city: "台北",
    hobbies: ["閱讀", "游泳", "程式設計"]
};

// 存取物件屬性
console.log(person.name);        // "小明"
console.log(person["age"]);      // 25

// 修改屬性
person.age = 26;
person.job = "工程師";           // 新增屬性

// 物件方法
let calculator = {
    add: function(a, b) {
        return a + b;
    },
    subtract: (a, b) => a - b,    // 箭頭函數
    multiply(a, b) {              // 簡化語法
        return a * b;
    }
};

console.log(calculator.add(5, 3));      // 8
console.log(calculator.multiply(4, 6)); // 24

// 遍歷物件屬性
for (let key in person) {
    console.log(\`\${key}: \${person[key]}\`);
}

// 物件解構
let {name, age} = person;
console.log(\`\${name} 今年 \${age} 歲\`);`,
      explanation: (
        <div className="space-y-3">
          <p>物件是鍵值對的集合，用於組織相關資料：</p>
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li><strong>屬性：</strong>物件的資料</li>
            <li><strong>方法：</strong>物件的函數</li>
            <li><strong>點記法：</strong>object.property</li>
            <li><strong>括號記法：</strong>object["property"]</li>
            <li><strong>解構：</strong>快速提取物件屬性</li>
          </ul>
          <p>物件是 JavaScript 中最重要的資料結構之一。</p>
        </div>
      )
    }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center mb-4">
          <Link 
            to="/" 
            className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 mr-4"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
          </Link>
          <div className="flex items-center">
            <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center text-white text-lg font-bold mr-4">
              JS
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white">JavaScript 教學</h1>
              <p className="text-gray-600 dark:text-gray-300">網頁開發的核心語言</p>
            </div>
          </div>
        </div>
        
        <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4">
          <h2 className="font-semibold text-yellow-900 dark:text-yellow-100 mb-2">學習目標</h2>
          <ul className="text-yellow-800 dark:text-yellow-200 text-sm space-y-1">
            <li>• 掌握 JavaScript 基本語法</li>
            <li>• 了解變數、函數和資料結構</li>
            <li>• 學會操作陣列和物件</li>
            <li>• 能夠編寫互動式網頁功能</li>
          </ul>
        </div>
      </div>

      {/* Lessons */}
      <div className="space-y-6">
        {lessons.map((lesson, index) => (
          <LessonCard key={index} {...lesson} />
        ))}
      </div>

      {/* Next Steps */}
      <div className="mt-12 card p-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">下一步學習</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          恭喜您完成了 JavaScript 基礎教學！接下來您可以：
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">進階主題</h3>
            <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
              <li>• DOM 操作</li>
              <li>• 事件處理</li>
              <li>• 非同步程式設計</li>
              <li>• ES6+ 新特性</li>
            </ul>
          </div>
          <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">實作專案</h3>
            <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
              <li>• 互動式計算機</li>
              <li>• 待辦事項清單</li>
              <li>• 簡單遊戲</li>
              <li>• 動態網頁效果</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JavaScriptTutorial;
