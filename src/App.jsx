import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import PythonTutorial from './pages/PythonTutorial'
import JavaScriptTutorial from './pages/JavaScriptTutorial'
import JavaTutorial from './pages/JavaTutorial'
import CppTutorial from './pages/CppTutorial'
import GoTutorial from './pages/GoTutorial'

function App() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/python" element={<PythonTutorial />} />
          <Route path="/javascript" element={<JavaScriptTutorial />} />
          <Route path="/java" element={<JavaTutorial />} />
          <Route path="/cpp" element={<CppTutorial />} />
          <Route path="/go" element={<GoTutorial />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
