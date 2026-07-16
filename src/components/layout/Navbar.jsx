import { useState, useEffect } from 'react'
import { NAV_LINKS } from '../../constants/navigation'

const RESUME_PATH = '/resume/Kishorekumar-R-Resume.pdf'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const closeMenu = () => setIsOpen(false)

  // Navbar sits over the dark Hero video until scrolled, so text needs to be
  // light (paper) while transparent/open, and dark (ink) once the bg turns paper.
  const isLight = isOpen || !isScrolled

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b ${
        isOpen
          ? 'bg-ink border-ink py-4'
          : isScrolled
          ? 'bg-paper/95 backdrop-blur-md border-ink/15 py-3 shadow-[0_1px_0_rgba(23,20,13,0.08)]'
          : 'bg-transparent border-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <span className="bp-readout text-[10px] text-orange">[01]</span>
          <a
            href="#home"
            className={`font-display text-xl md:text-2xl tracking-tight uppercase ${
              isLight ? 'text-paper' : 'text-ink'
            }`}
          >
            Kishore Kumar<span className="text-orange">.</span>
          </a>
        </div>

        <div className="hidden md:flex space-x-8 bp-readout text-xs uppercase">
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className={`relative group transition-colors duration-300 ${
                isLight ? 'text-paper/80 hover:text-paper' : 'text-ink/70 hover:text-ink'
              }`}
            >
              {label}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-orange transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <a
            href={RESUME_PATH}
            download="Kishorekumar-R-Resume.pdf"
            className={`px-5 py-2 border text-xs uppercase font-body font-semibold tracking-wide transition-all duration-300 flex items-center gap-2 ${
              isLight
                ? 'border-paper/40 text-paper/80 hover:border-paper hover:text-paper'
                : 'border-ink/30 text-ink/70 hover:border-ink hover:text-ink'
            }`}
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v12m0 0l-4-4m4 4l4-4M4 17v2a2 2 0 002 2h12a2 2 0 002-2v-2" />
            </svg>
            Résumé
          </a>
          <a
            href="#contact"
            className={`bp-readout px-5 py-2 border text-xs uppercase tracking-[0.15em] transition-all duration-300 ${
              isLight
                ? 'border-paper text-paper hover:bg-paper hover:text-ink'
                : 'border-ink text-ink hover:bg-ink hover:text-paper'
            }`}
          >
            [ Hire_Me ]
          </a>
        </div>

        <div className="md:hidden flex items-center">
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
            className={`focus:outline-none p-2 ${isLight ? 'text-paper' : 'text-ink'}`}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      <div
        className={`md:hidden absolute top-full left-0 w-full transition-all duration-300 overflow-y-auto ${
          isOpen ? 'max-h-[calc(100vh-4rem)] py-4 opacity-100 bg-ink shadow-2xl' : 'max-h-0 opacity-0 bg-transparent'
        }`}
      >
        <div className="flex flex-col px-6 space-y-4 bp-readout uppercase">
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              onClick={closeMenu}
              className="text-paper hover:text-orange text-lg border-b border-paper/15 pb-2 transition-colors"
            >
              {label}
            </a>
          ))}
          <div className="pt-4 pb-2 flex flex-col gap-3">
            <a
              href={RESUME_PATH}
              download="Kishorekumar-R-Resume.pdf"
              onClick={closeMenu}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-paper/40 text-paper font-body font-semibold hover:border-paper transition-colors w-full text-center uppercase tracking-wide"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v12m0 0l-4-4m4 4l4-4M4 17v2a2 2 0 002 2h12a2 2 0 002-2v-2" />
              </svg>
              Download Résumé
            </a>
            <a
              href="#contact"
              onClick={closeMenu}
              className="inline-block px-6 py-3 border border-orange text-orange font-semibold hover:bg-orange hover:text-ink transition-colors w-full text-center"
            >
              [ Hire_Me ]
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}
