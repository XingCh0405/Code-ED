import React from 'react';
import { Link } from 'react-router-dom';
import LessonCard from '../components/LessonCard';

const PythonTutorial = () => {
  const lessons = [
    {
      title: '1. Python 簡介與安裝',
      level: '基礎',
      description: '了解 Python 是什麼，為什麼選擇 Python，以及如何安裝 Python 開發環境。',
      code: `# 這是你的第一個 Python 程式
print("Hello, World!")
print("歡迎來到 Python 的世界！")`,
      explanation: (
        <div className="space-y-3">
          <p>Python 是一種高階程式語言，以其簡潔易讀的語法而聞名。它被廣泛應用於：</p>
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li>網頁開發</li>
            <li>數據科學與分析</li>
            <li>人工智慧與機器學習</li>
            <li>自動化腳本</li>
            <li>科學計算</li>
          </ul>
          <p><code>print()</code> 函數用於在螢幕上顯示文字。這是最基本也是最常用的函數之一。</p>
        </div>
      )
    },
    {
      title: '2. 變數與資料型別',
      level: '基礎',
      description: '學習如何宣告變數，以及 Python 中的基本資料型別。',
      code: `# 變數宣告
name = "小明"           # 字串 (string)
age = 25              # 整數 (integer)
height = 175.5        # 浮點數 (float)
is_student = True     # 布林值 (boolean)

# 顯示變數內容
print(f"姓名：{name}")
print(f"年齡：{age}")
print(f"身高：{height} 公分")
print(f"是學生：{is_student}")`,
      explanation: (
        <div className="space-y-3">
          <p>Python 中的基本資料型別包括：</p>
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li><strong>字串 (str)：</strong>用引號包圍的文字</li>
            <li><strong>整數 (int)：</strong>沒有小數點的數字</li>
            <li><strong>浮點數 (float)：</strong>有小數點的數字</li>
            <li><strong>布林值 (bool)：</strong>True 或 False</li>
          </ul>
          <p>f-string 是格式化字串的現代方法，使用 <code>f""</code> 並在大括號中放入變數。</p>
        </div>
      )
    },
    {
      title: '3. 基本運算',
      level: '基礎',
      description: '學習數學運算、字串操作和比較運算。',
      code: `# 數學運算
a = 10
b = 3

print(f"加法：{a} + {b} = {a + b}")
print(f"減法：{a} - {b} = {a - b}")
print(f"乘法：{a} * {b} = {a * b}")
print(f"除法：{a} / {b} = {a / b}")
print(f"整數除法：{a} // {b} = {a // b}")
print(f"餘數：{a} % {b} = {a % b}")
print(f"次方：{a} ** {b} = {a ** b}")

# 字串操作
first_name = "張"
last_name = "小明"
full_name = first_name + last_name
print(f"全名：{full_name}")

# 比較運算
print(f"{a} > {b} = {a > b}")
print(f"{a} == {b} = {a == b}")`,
      explanation: (
        <div className="space-y-3">
          <p>Python 支援各種運算操作：</p>
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li><strong>算術運算：</strong>+, -, *, /, //, %, **</li>
            <li><strong>字串連接：</strong>使用 + 號連接字串</li>
            <li><strong>比較運算：</strong>==, !=, >, <, >=, <=</li>
          </ul>
          <p>注意 <code>//</code> 是整數除法，會捨去小數部分。</p>
        </div>
      )
    },
    {
      title: '4. 條件判斷 (if-elif-else)',
      level: '基礎',
      description: '學習如何使用條件判斷來控制程式流程。',
      code: `# 條件判斷範例
score = 85

if score >= 90:
    grade = "A"
    print("優秀！")
elif score >= 80:
    grade = "B"
    print("良好！")
elif score >= 70:
    grade = "C"
    print("及格")
elif score >= 60:
    grade = "D"
    print("需要加油")
else:
    grade = "F"
    print("不及格")

print(f"分數：{score}，等級：{grade}")

# 多重條件
age = 20
has_license = True

if age >= 18 and has_license:
    print("可以開車")
elif age >= 18:
    print("年齡足夠，但需要駕照")
else:
    print("年齡不足")`,
      explanation: (
        <div className="space-y-3">
          <p>條件判斷的語法結構：</p>
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li><strong>if：</strong>第一個條件</li>
            <li><strong>elif：</strong>額外的條件（可以有多個）</li>
            <li><strong>else：</strong>所有條件都不符合時執行</li>
          </ul>
          <p>邏輯運算子：<code>and</code>（且）、<code>or</code>（或）、<code>not</code>（非）</p>
          <p>注意 Python 使用縮排來表示程式碼區塊，通常使用 4 個空格。</p>
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
            <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center text-white text-2xl font-bold mr-4">
              🐍
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Python 教學</h1>
              <p className="text-gray-600 dark:text-gray-300">最適合初學者的程式語言</p>
            </div>
          </div>
        </div>
        
        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
          <h2 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">學習目標</h2>
          <ul className="text-blue-800 dark:text-blue-200 text-sm space-y-1">
            <li>• 了解 Python 基本語法和概念</li>
            <li>• 掌握變數、資料型別和運算</li>
            <li>• 學會條件判斷和迴圈控制</li>
            <li>• 能夠編寫簡單的 Python 程式</li>
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
          恭喜您完成了 Python 基礎教學！接下來您可以：
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">深入學習</h3>
            <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
              <li>• 迴圈 (for, while)</li>
              <li>• 函數定義與使用</li>
              <li>• 串列與字典</li>
              <li>• 檔案處理</li>
            </ul>
          </div>
          <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">實作練習</h3>
            <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
              <li>• 計算機程式</li>
              <li>• 猜數字遊戲</li>
              <li>• 簡單的文字處理</li>
              <li>• 資料分析入門</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PythonTutorial;
