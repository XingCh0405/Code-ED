import React from 'react';
import { Link } from 'react-router-dom';
import LessonCard from '../components/LessonCard';

const JavaTutorial = () => {
  const lessons = [
    {
      title: '1. Java 簡介與環境設置',
      level: '基礎',
      description: '了解 Java 的特色、應用領域，以及如何設置開發環境。',
      code: `// 你的第一個 Java 程式
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
        System.out.println("歡迎來到 Java 的世界！");
    }
}`,
      explanation: (
        <div className="space-y-3">
          <p>Java 是一種物件導向的程式語言，具有以下特色：</p>
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li>跨平台執行（Write Once, Run Anywhere）</li>
            <li>強型別系統</li>
            <li>自動記憶體管理</li>
            <li>豐富的標準函式庫</li>
            <li>企業級應用開發</li>
          </ul>
          <p>每個 Java 程式都需要一個 main 方法作為程式的入口點。</p>
        </div>
      )
    },
    {
      title: '2. 變數與資料型別',
      level: '基礎',
      description: '學習 Java 中的基本資料型別和變數宣告。',
      code: `public class DataTypes {
    public static void main(String[] args) {
        // 基本資料型別
        int age = 25;              // 整數
        double height = 175.5;     // 浮點數
        char grade = 'A';          // 字元
        boolean isStudent = true;  // 布林值
        
        // 字串（參考型別）
        String name = "小明";
        
        // 顯示變數內容
        System.out.println("姓名：" + name);
        System.out.println("年齡：" + age);
        System.out.println("身高：" + height + " 公分");
        System.out.println("等級：" + grade);
        System.out.println("是學生：" + isStudent);
        
        // 常數宣告
        final double PI = 3.14159;
        System.out.println("圓周率：" + PI);
    }
}`,
      explanation: (
        <div className="space-y-3">
          <p>Java 的基本資料型別：</p>
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li><strong>int：</strong>32位元整數</li>
            <li><strong>double：</strong>64位元浮點數</li>
            <li><strong>char：</strong>16位元字元</li>
            <li><strong>boolean：</strong>true 或 false</li>
            <li><strong>String：</strong>字串（參考型別）</li>
          </ul>
          <p>使用 <code>final</code> 關鍵字宣告常數，慣例上常數名稱使用大寫。</p>
        </div>
      )
    },
    {
      title: '3. 條件判斷與迴圈',
      level: '基礎',
      description: '學習控制程式流程的條件判斷和迴圈結構。',
      code: `public class ControlFlow {
    public static void main(String[] args) {
        // 條件判斷
        int score = 85;
        
        if (score >= 90) {
            System.out.println("優秀！");
        } else if (score >= 80) {
            System.out.println("良好！");
        } else if (score >= 60) {
            System.out.println("及格");
        } else {
            System.out.println("不及格");
        }
        
        // switch 語句
        char grade = 'B';
        switch (grade) {
            case 'A':
                System.out.println("優秀");
                break;
            case 'B':
                System.out.println("良好");
                break;
            case 'C':
                System.out.println("普通");
                break;
            default:
                System.out.println("需要努力");
        }
        
        // for 迴圈
        System.out.println("數字 1 到 5：");
        for (int i = 1; i <= 5; i++) {
            System.out.print(i + " ");
        }
        System.out.println();
        
        // while 迴圈
        int count = 1;
        System.out.println("倒數：");
        while (count <= 3) {
            System.out.println(count);
            count++;
        }
    }
}`,
      explanation: (
        <div className="space-y-3">
          <p>Java 的控制結構：</p>
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li><strong>if-else：</strong>條件判斷</li>
            <li><strong>switch：</strong>多重選擇</li>
            <li><strong>for：</strong>計數迴圈</li>
            <li><strong>while：</strong>條件迴圈</li>
          </ul>
          <p>注意 switch 語句中的 break 關鍵字，避免 fall-through。</p>
        </div>
      )
    },
    {
      title: '4. 陣列',
      level: '基礎',
      description: '學習如何在 Java 中使用陣列來儲存多個資料。',
      code: `public class Arrays {
    public static void main(String[] args) {
        // 宣告和初始化陣列
        int[] numbers = {1, 2, 3, 4, 5};
        String[] fruits = new String[3];
        fruits[0] = "蘋果";
        fruits[1] = "香蕉";
        fruits[2] = "橘子";
        
        // 存取陣列元素
        System.out.println("第一個數字：" + numbers[0]);
        System.out.println("陣列長度：" + numbers.length);
        
        // 使用 for 迴圈遍歷陣列
        System.out.println("所有數字：");
        for (int i = 0; i < numbers.length; i++) {
            System.out.print(numbers[i] + " ");
        }
        System.out.println();
        
        // 使用增強型 for 迴圈
        System.out.println("所有水果：");
        for (String fruit : fruits) {
            System.out.println(fruit);
        }
        
        // 二維陣列
        int[][] matrix = {
            {1, 2, 3},
            {4, 5, 6},
            {7, 8, 9}
        };
        
        System.out.println("矩陣：");
        for (int i = 0; i < matrix.length; i++) {
            for (int j = 0; j < matrix[i].length; j++) {
                System.out.print(matrix[i][j] + " ");
            }
            System.out.println();
        }
    }
}`,
      explanation: (
        <div className="space-y-3">
          <p>Java 陣列的特點：</p>
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li><strong>固定大小：</strong>宣告後大小不可改變</li>
            <li><strong>同型別：</strong>只能儲存相同型別的資料</li>
            <li><strong>索引：</strong>從 0 開始</li>
            <li><strong>length：</strong>陣列長度屬性</li>
            <li><strong>增強型 for：</strong>簡化遍歷語法</li>
          </ul>
          <p>二維陣列可以想像成表格或矩陣結構。</p>
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
            <div className="w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center text-white text-2xl font-bold mr-4">
              ☕
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Java 教學</h1>
              <p className="text-gray-600 dark:text-gray-300">企業級開發的首選語言</p>
            </div>
          </div>
        </div>
        
        <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
          <h2 className="font-semibold text-red-900 dark:text-red-100 mb-2">學習目標</h2>
          <ul className="text-red-800 dark:text-red-200 text-sm space-y-1">
            <li>• 了解 Java 物件導向概念</li>
            <li>• 掌握基本語法和資料結構</li>
            <li>• 學會使用陣列和控制結構</li>
            <li>• 建立 Java 程式設計基礎</li>
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
          恭喜您完成了 Java 基礎教學！接下來您可以：
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">物件導向程式設計</h3>
            <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
              <li>• 類別與物件</li>
              <li>• 繼承與多型</li>
              <li>• 封裝與抽象</li>
              <li>• 介面與抽象類別</li>
            </ul>
          </div>
          <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">進階主題</h3>
            <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
              <li>• 例外處理</li>
              <li>• 集合框架</li>
              <li>• 檔案 I/O</li>
              <li>• 多執行緒程式設計</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JavaTutorial;
