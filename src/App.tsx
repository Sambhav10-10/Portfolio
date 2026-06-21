import { useRef, useState, useEffect } from 'react'
import { X, Moon, Sun } from 'lucide-react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Services from './components/Services'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import NavbarFooter from './components/NavbarFooter'
import heroImg from './assets/hero2.webp'
import avatarImg from './assets/avatar.jpg'
import { SpeedInsights } from '@vercel/speed-insights/react'
import { Analytics } from '@vercel/analytics/react'

function App() {
  const [currentTab, setCurrentTab] = useState('home')
  const [showAvatarModal, setShowAvatarModal] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const saved = localStorage.getItem('theme-mode')
    return saved ? saved === 'light' : true // Default to dark mode
  })
  const mainRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const root = document.documentElement
    if (isDarkMode) {
      root.setAttribute('data-theme', 'dark')
      localStorage.setItem('theme-mode', 'dark')
    } else {
      root.setAttribute('data-theme', 'light')
      localStorage.setItem('theme-mode', 'light')
    }
  }, [isDarkMode])

  const handleTabChange = (tab: string) => {
    setCurrentTab(tab)
    // reset scroll when switching tabs
    if (mainRef.current) mainRef.current.scrollTop = 0
  }

  const renderContent = () => {
    switch (currentTab) {
      case 'home':
        return (
          <Home
            onViewProjects={() => setCurrentTab('projects')}
            onGetInTouch={() => setCurrentTab('contact')}
          />
        )
      case 'services':
        return <Services />
      case 'about':
        return <About />
      case 'projects':
        return <Projects />
      case 'contact':
        return <Contact />
      default:
        return null
    }
  }

  return (
    <div className="flex flex-col md:flex-row w-full h-screen h-dvh relative bg-primary-bg transition-colors duration-300">
      <SpeedInsights />
      <Analytics />

      {/* Theme Toggle Button - Top Right */}
      <button
        onClick={() => setIsDarkMode(!isDarkMode)}
        className="fixed top-6 right-6 z-[100] p-3 rounded-full bg-card-bg hover:bg-card-bg/80 transition-all duration-200 shadow-lg"
        aria-label="Toggle dark mode"
      >
        {isDarkMode ? (
          <Sun size={20} className="text-yellow-400" />
        ) : (
          <Moon size={20} className="text-slate-700" />
        )}
      </button>
      {/* Viewport-wide Hero Background (only on Home tab) */}
      {currentTab === 'home' && (
        <div className="absolute inset-0 w-full h-full pointer-events-none select-none overflow-hidden z-0">
          <img
            src={heroImg}
            className="absolute -right-[5%] -bottom-[40%] -rotate-9 w-[140%] max-w-[700px] sm:max-w-[900px] md:w-[100%] md:max-w-[1200px] lg:w-[90%] lg:max-w-[1400px] xl:max-w-[1544px] h-auto max-w-none opacity-[0.4] md:opacity-[0.71] object-contain"
            alt=""
            loading="lazy"
          />
        </div>
      )}

      <Navbar currentTab={currentTab} setCurrentTab={handleTabChange} scrollRef={mainRef} onAvatarClick={() => setShowAvatarModal(true)} />

      {/* Main content */}
      <main
        ref={mainRef}
        className={`flex-1 min-h-0 px-6 box-border relative z-10 mobile-content-pad
          ${currentTab === 'home'
            ? 'overflow-hidden md:py-0 md:px-16 pt-[72px] md:pt-8'
            : 'overflow-y-auto pt-[96px] md:pt-8 md:pb-16 md:px-16 md:py-10'}`}
      >
        {renderContent()}

        {currentTab !== 'home' && (
          <div className="md:hidden mt-3 pb-8 border-t border-[#e5e4e7]/40 pt-8 w-full flex justify-center">
            <NavbarFooter />
          </div>
        )}

      </main>

      {/* Avatar Modal */}
      {showAvatarModal && (
        <div
          className="fixed inset-0 z-[9999] bg-black/50 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setShowAvatarModal(false)}
        >
          <div
            className="bg-primary-bg rounded-3xl p-8 md:p-12 max-w-md w-full animate-fade-in flex flex-col items-center shadow-2xl border border-card-bg transition-colors duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowAvatarModal(false)}
              className="absolute top-4 right-4 p-2 hover:bg-card-bg rounded-full transition-all"
              aria-label="Close modal"
            >
              <X size={24} className="text-element-black" />
            </button>

            <img
              src={avatarImg}
              alt="Sambhav Koshta"
              className="w-40 h-40 rounded-2xl object-cover mb-6 shadow-lg"
            />

            <h2 className="font-heading font-bold text-3xl md:text-4xl text-element-black text-center mb-2">
              Sambhav Koshta
            </h2>

            <p className="font-sans text-lg text-text-subheading text-center">
              Full Stack Developer & ML Enthusiast
            </p>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
