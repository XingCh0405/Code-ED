import React from 'react';
import { Link } from 'react-router-dom';
import LessonCard from '../components/LessonCard';

const CppTutorial = () => {
  const lessons = [
    {
      title: '1. C++ 簡介與基本結構',
      level: '基礎',
      description: '了解 C++ 的特色、應用領域，以及程式的基本結構。',
      code: `#include <iostream>
using namespace std;

int main() {
    cout << "Hello, World!" << endl;
    cout << "歡迎來到 C++ 的世界！" << endl;
    return 0;
}`,
      explanation: (
        <div className="space-y-3">
          <p>C++ 是一種高效能的程式語言，具有以下特色：</p>
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li>低階記憶體控制</li>
            <li>物件導向程式設計</li>
            <li>高執行效率</li>
            <li>系統程式設計</li>
            <li>遊戲開發</li>
          </ul>
          <p><code>#include</code> 用於引入標準函式庫，<code>cout</code> 用於輸出。</p>
        </div>
      )
    },
    {
      title: '2. 變數與資料型別',
      level: '基礎',
      description: '學習 C++ 中的基本資料型別和變數宣告。',
      code: `#include <iostream>
#include <string>
using namespace std;

int main() {
    // 基本資料型別
    int age = 25;              // 整數
    float height = 175.5f;     // 單精度浮點數
    double weight = 70.5;      // 雙精度浮點數
    char grade = 'A';          // 字元
    bool isStudent = true;     // 布林值
    string name = "小明";      // 字串
    
    // 顯示變數內容
    cout << "姓名：" << name << endl;
    cout << "年齡：" << age << endl;
    cout << "身高：" << height << " 公分" << endl;
    cout << "體重：" << weight << " 公斤" << endl;
    cout << "等級：" << grade << endl;
    cout << "是學生：" << (isStudent ? "是" : "否") << endl;
    
    // 常數宣告
    const double PI = 3.14159;
    cout << "圓周率：" << PI << endl;
    
    // 變數大小
    cout << "int 大小：" << sizeof(int) << " bytes" << endl;
    cout << "double 大小：" << sizeof(double) << " bytes" << endl;
    
    return 0;
}`,
      explanation: (
        <div className="space-y-3">
          <p>C++ 的基本資料型別：</p>
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li><strong>int：</strong>整數（通常 32 位元）</li>
            <li><strong>float：</strong>單精度浮點數</li>
            <li><strong>double：</strong>雙精度浮點數</li>
            <li><strong>char：</strong>字元（8 位元）</li>
            <li><strong>bool：</strong>布林值</li>
            <li><strong>string：</strong>字串類別</li>
          </ul>
          <p><code>sizeof</code> 運算子可以查看資料型別的記憶體大小。</p>
        </div>
      )
    },
    {
      title: '3. 指標與參考',
      level: '進階',
      description: '學習 C++ 中重要的指標和參考概念。',
      code: `#include <iostream>
using namespace std;

int main() {
    int number = 42;
    
    // 指標
    int* ptr = &number;        // ptr 指向 number 的位址
    cout << "number 的值：" << number << endl;
    cout << "number 的位址：" << &number << endl;
    cout << "ptr 的值（位址）：" << ptr << endl;
    cout << "ptr 指向的值：" << *ptr << endl;
    
    // 透過指標修改值
    *ptr = 100;
    cout << "修改後 number 的值：" << number << endl;
    
    // 參考
    int& ref = number;         // ref 是 number 的別名
    cout << "ref 的值：" << ref << endl;
    
    ref = 200;                 // 修改 ref 等於修改 number
    cout << "透過 ref 修改後 number 的值：" << number << endl;
    
    // 陣列與指標
    int arr[] = {1, 2, 3, 4, 5};
    int* arrPtr = arr;         // 陣列名稱就是指標
    
    cout << "陣列元素：";
    for (int i = 0; i < 5; i++) {
        cout << *(arrPtr + i) << " ";  // 指標算術
    }
    cout << endl;
    
    return 0;
}`,
      explanation: (
        <div className="space-y-3">
          <p>指標和參考是 C++ 的重要特色：</p>
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li><strong>指標：</strong>儲存記憶體位址的變數</li>
            <li><strong>& 運算子：</strong>取得變數位址</li>
            <li><strong>* 運算子：</strong>取得指標指向的值</li>
            <li><strong>參考：</strong>變數的別名</li>
            <li><strong>指標算術：</strong>可以進行位址運算</li>
          </ul>
          <p>指標提供了直接操作記憶體的能力，但需要小心使用。</p>
        </div>
      )
    },
    {
      title: '4. 函數與函數多載',
      level: '中級',
      description: '學習如何定義函數以及 C++ 特有的函數多載功能。',
      code: `#include <iostream>
using namespace std;

// 基本函數
int add(int a, int b) {
    return a + b;
}

// 函數多載 - 相同名稱，不同參數
double add(double a, double b) {
    return a + b;
}

int add(int a, int b, int c) {
    return a + b + c;
}

// 預設參數
void greet(string name, string greeting = "你好") {
    cout << greeting << "，" << name << "！" << endl;
}

// 傳值與傳參考
void swapByValue(int a, int b) {
    int temp = a;
    a = b;
    b = temp;
    cout << "函數內：a = " << a << ", b = " << b << endl;
}

void swapByReference(int& a, int& b) {
    int temp = a;
    a = b;
    b = temp;
    cout << "函數內：a = " << a << ", b = " << b << endl;
}

int main() {
    // 函數多載
    cout << "整數相加：" << add(5, 3) << endl;
    cout << "浮點數相加：" << add(5.5, 3.2) << endl;
    cout << "三個數相加：" << add(1, 2, 3) << endl;
    
    // 預設參數
    greet("小明");
    greet("小華", "早安");
    
    // 傳值 vs 傳參考
    int x = 10, y = 20;
    cout << "原始值：x = " << x << ", y = " << y << endl;
    
    swapByValue(x, y);
    cout << "傳值後：x = " << x << ", y = " << y << endl;
    
    swapByReference(x, y);
    cout << "傳參考後：x = " << x << ", y = " << y << endl;
    
    return 0;
}`,
      explanation: (
        <div className="space-y-3">
          <p>C++ 函數的特色：</p>
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li><strong>函數多載：</strong>相同名稱，不同參數</li>
            <li><strong>預設參數：</strong>可以設定預設值</li>
            <li><strong>傳值：</strong>複製參數值</li>
            <li><strong>傳參考：</strong>直接操作原始變數</li>
            <li><strong>傳指標：</strong>傳遞記憶體位址</li>
          </ul>
          <p>函數多載讓相同功能的函數可以處理不同型別的資料。</p>
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
            <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center text-white text-sm font-bold mr-4">
              C++
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white">C++ 教學</h1>
              <p className="text-gray-600 dark:text-gray-300">高效能系統程式設計語言</p>
            </div>
          </div>
        </div>
        
        <div className="bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg p-4">
          <h2 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">學習目標</h2>
          <ul className="text-purple-800 dark:text-purple-200 text-sm space-y-1">
            <li>• 掌握 C++ 基本語法和概念</li>
            <li>• 了解指標和記憶體管理</li>
            <li>• 學會函數定義和多載</li>
            <li>• 建立系統程式設計基礎</li>
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
          恭喜您完成了 C++ 基礎教學！接下來您可以：
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">物件導向程式設計</h3>
            <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
              <li>• 類別與物件</li>
              <li>• 建構子與解構子</li>
              <li>• 繼承與多型</li>
              <li>• 虛擬函數</li>
            </ul>
          </div>
          <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">進階主題</h3>
            <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
              <li>• STL 標準模板庫</li>
              <li>• 動態記憶體配置</li>
              <li>• 模板程式設計</li>
              <li>• 例外處理</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CppTutorial;
