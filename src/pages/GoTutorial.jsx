import React from 'react';
import { Link } from 'react-router-dom';
import LessonCard from '../components/LessonCard';

const GoTutorial = () => {
  const lessons = [
    {
      title: '1. Go 語言簡介',
      level: '基礎',
      description: '了解 Go 語言的設計理念、特色和應用領域。',
      code: `package main

import "fmt"

func main() {
    fmt.Println("Hello, World!")
    fmt.Println("歡迎來到 Go 的世界！")
}`,
      explanation: (
        <div className="space-y-3">
          <p>Go 是由 Google 開發的現代程式語言，具有以下特色：</p>
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li>簡潔的語法設計</li>
            <li>優秀的並發處理</li>
            <li>快速的編譯速度</li>
            <li>內建垃圾回收</li>
            <li>雲端服務開發</li>
          </ul>
          <p>每個 Go 程式都需要 <code>package main</code> 和 <code>main</code> 函數。</p>
        </div>
      )
    },
    {
      title: '2. 變數與資料型別',
      level: '基礎',
      description: '學習 Go 中的變數宣告方式和基本資料型別。',
      code: `package main

import "fmt"

func main() {
    // 變數宣告的多種方式
    var name string = "小明"
    var age int = 25
    var height float64 = 175.5
    var isStudent bool = true
    
    // 簡短宣告
    city := "台北"
    score := 85.5
    
    // 多重宣告
    var (
        firstName = "張"
        lastName  = "小明"
    )
    
    // 常數
    const PI = 3.14159
    
    // 顯示變數內容
    fmt.Printf("姓名：%s\\n", name)
    fmt.Printf("年齡：%d\\n", age)
    fmt.Printf("身高：%.1f 公分\\n", height)
    fmt.Printf("是學生：%t\\n", isStudent)
    fmt.Printf("城市：%s\\n", city)
    fmt.Printf("分數：%.1f\\n", score)
    fmt.Printf("全名：%s%s\\n", firstName, lastName)
    fmt.Printf("圓周率：%.5f\\n", PI)
    
    // 型別推斷
    fmt.Printf("name 的型別：%T\\n", name)
    fmt.Printf("age 的型別：%T\\n", age)
    fmt.Printf("height 的型別：%T\\n", height)
}`,
      explanation: (
        <div className="space-y-3">
          <p>Go 的變數宣告特色：</p>
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li><strong>var：</strong>完整的變數宣告</li>
            <li><strong>:=：</strong>簡短宣告（型別推斷）</li>
            <li><strong>多重宣告：</strong>可以一次宣告多個變數</li>
            <li><strong>零值：</strong>未初始化的變數有預設值</li>
            <li><strong>型別推斷：</strong>編譯器自動判斷型別</li>
          </ul>
          <p><code>fmt.Printf</code> 用於格式化輸出，%T 可以顯示變數型別。</p>
        </div>
      )
    },
    {
      title: '3. 函數與多回傳值',
      level: '基礎',
      description: '學習 Go 中的函數定義和獨特的多回傳值特性。',
      code: `package main

import "fmt"

// 基本函數
func add(a, b int) int {
    return a + b
}

// 多回傳值
func divide(a, b float64) (float64, error) {
    if b == 0 {
        return 0, fmt.Errorf("除數不能為零")
    }
    return a / b, nil
}

// 命名回傳值
func calculate(a, b int) (sum, product int) {
    sum = a + b
    product = a * b
    return // 自動回傳 sum 和 product
}

// 可變參數
func sum(numbers ...int) int {
    total := 0
    for _, num := range numbers {
        total += num
    }
    return total
}

// 高階函數
func applyOperation(a, b int, op func(int, int) int) int {
    return op(a, b)
}

func main() {
    // 基本函數呼叫
    result := add(5, 3)
    fmt.Printf("5 + 3 = %d\\n", result)
    
    // 多回傳值
    quotient, err := divide(10, 3)
    if err != nil {
        fmt.Printf("錯誤：%v\\n", err)
    } else {
        fmt.Printf("10 / 3 = %.2f\\n", quotient)
    }
    
    // 命名回傳值
    s, p := calculate(4, 5)
    fmt.Printf("4 + 5 = %d, 4 * 5 = %d\\n", s, p)
    
    // 可變參數
    total := sum(1, 2, 3, 4, 5)
    fmt.Printf("1+2+3+4+5 = %d\\n", total)
    
    // 高階函數
    multiply := func(x, y int) int { return x * y }
    result2 := applyOperation(6, 7, multiply)
    fmt.Printf("6 * 7 = %d\\n", result2)
}`,
      explanation: (
        <div className="space-y-3">
          <p>Go 函數的特色：</p>
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li><strong>多回傳值：</strong>可以同時回傳多個值</li>
            <li><strong>錯誤處理：</strong>通常回傳 error 型別</li>
            <li><strong>命名回傳值：</strong>可以為回傳值命名</li>
            <li><strong>可變參數：</strong>使用 ... 接受不定數量參數</li>
            <li><strong>高階函數：</strong>函數可以作為參數</li>
          </ul>
          <p>Go 的錯誤處理採用明確的錯誤回傳，而非例外機制。</p>
        </div>
      )
    },
    {
      title: '4. 切片 (Slices) 與映射 (Maps)',
      level: '中級',
      description: '學習 Go 中重要的資料結構：切片和映射。',
      code: `package main

import "fmt"

func main() {
    // 切片 (Slices)
    // 宣告和初始化
    fruits := []string{"蘋果", "香蕉", "橘子"}
    numbers := make([]int, 3, 5) // 長度3，容量5
    
    fmt.Printf("水果：%v\\n", fruits)
    fmt.Printf("數字：%v，長度：%d，容量：%d\\n", numbers, len(numbers), cap(numbers))
    
    // 添加元素
    fruits = append(fruits, "葡萄", "芒果")
    fmt.Printf("添加後的水果：%v\\n", fruits)
    
    // 切片操作
    slice1 := fruits[1:3]  // 從索引1到2
    slice2 := fruits[:2]   // 從開始到索引1
    slice3 := fruits[2:]   // 從索引2到結尾
    
    fmt.Printf("fruits[1:3]：%v\\n", slice1)
    fmt.Printf("fruits[:2]：%v\\n", slice2)
    fmt.Printf("fruits[2:]：%v\\n", slice3)
    
    // 映射 (Maps)
    // 宣告和初始化
    ages := map[string]int{
        "小明": 25,
        "小華": 30,
        "小美": 28,
    }
    
    // 使用 make 建立映射
    scores := make(map[string]float64)
    scores["數學"] = 85.5
    scores["英文"] = 92.0
    scores["物理"] = 78.5
    
    fmt.Printf("年齡：%v\\n", ages)
    fmt.Printf("成績：%v\\n", scores)
    
    // 存取映射
    age, exists := ages["小明"]
    if exists {
        fmt.Printf("小明的年齡：%d\\n", age)
    }
    
    // 遍歷映射
    fmt.Println("所有成績：")
    for subject, score := range scores {
        fmt.Printf("%s：%.1f\\n", subject, score)
    }
    
    // 刪除元素
    delete(ages, "小華")
    fmt.Printf("刪除小華後：%v\\n", ages)
    
    // 遍歷切片
    fmt.Println("所有水果：")
    for i, fruit := range fruits {
        fmt.Printf("%d: %s\\n", i, fruit)
    }
}`,
      explanation: (
        <div className="space-y-3">
          <p>Go 的重要資料結構：</p>
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li><strong>切片：</strong>動態陣列，可以調整大小</li>
            <li><strong>append：</strong>添加元素到切片</li>
            <li><strong>切片操作：</strong>[start:end] 語法</li>
            <li><strong>映射：</strong>鍵值對的集合</li>
            <li><strong>range：</strong>遍歷切片或映射</li>
          </ul>
          <p>切片比陣列更靈活，映射類似其他語言的字典或哈希表。</p>
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
            <div className="w-12 h-12 bg-cyan-500 rounded-lg flex items-center justify-center text-white text-lg font-bold mr-4">
              Go
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Go 教學</h1>
              <p className="text-gray-600 dark:text-gray-300">現代化的雲端服務開發語言</p>
            </div>
          </div>
        </div>
        
        <div className="bg-cyan-50 dark:bg-cyan-900/20 border border-cyan-200 dark:border-cyan-800 rounded-lg p-4">
          <h2 className="font-semibold text-cyan-900 dark:text-cyan-100 mb-2">學習目標</h2>
          <ul className="text-cyan-800 dark:text-cyan-200 text-sm space-y-1">
            <li>• 掌握 Go 語言基本語法</li>
            <li>• 了解切片和映射的使用</li>
            <li>• 學會函數和錯誤處理</li>
            <li>• 建立現代後端開發基礎</li>
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
          恭喜您完成了 Go 基礎教學！接下來您可以：
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">並發程式設計</h3>
            <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
              <li>• Goroutines</li>
              <li>• Channels</li>
              <li>• Select 語句</li>
              <li>• 並發模式</li>
            </ul>
          </div>
          <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Web 開發</h3>
            <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
              <li>• HTTP 伺服器</li>
              <li>• RESTful API</li>
              <li>• 資料庫操作</li>
              <li>• 微服務架構</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoTutorial;
