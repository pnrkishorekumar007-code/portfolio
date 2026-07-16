import { useRef, useState } from 'react'
import heroVideo from '../../assets/videos/watermark-removed-a012ae45-ce73-4dee-b6ce-ff1165b538ac_1_202607121251_gwr_video_mvp (1).mp4'
import Crosshair from '../ui/Crosshair'
import ReadoutBar from '../ui/ReadoutBar'

export default function Hero() {
  const videoRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(true)

  const toggleVideo = (e) => {
    e.stopPropagation()
    if (!videoRef.current) return

    if (videoRef.current.paused) {
      videoRef.current.play()
      setIsPlaying(true)
    } else {
      videoRef.current.pause()
      setIsPlaying(false)
    }
  }

  return (
    <section id="home" className="bp-panel relative w-full h-screen overflow-hidden bg-ink">
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="absolute top-0 left-0 w-full h-full object-cover z-0 opacity-70"
      >
        <source src={heroVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="bp-grid-dark absolute inset-0 z-10" aria-hidden="true" />

      <Crosshair position="tl" className="text-paper/50 hidden md:block" />
      <Crosshair position="tr" className="text-paper/50 hidden md:block" />

      <div className="absolute inset-0 z-20 px-6 md:px-12 max-w-7xl mx-auto flex flex-col pt-24 pb-10 md:pt-28 md:pb-14 w-full">
        <div className="flex-1" aria-hidden="true" />

        <div
          data-aos="fade-up"
          className="bp-readout inline-flex w-fit items-center gap-2 border border-paper/30 text-paper/70 text-[10px] uppercase px-3 py-1 mb-5"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-orange animate-pulse" />
          Panel 01 — Hero
        </div>

        <h1
          data-aos="fade-up"
          data-aos-delay="100"
          className="font-display text-white text-4xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.95] uppercase mb-5 max-w-4xl"
        >
          Hi, I&apos;m<br />
          Kishore<br />
          <span className="bg-orange text-ink px-2 inline-block">Kumar R.</span>
        </h1>

        <p
          data-aos="fade-up"
          data-aos-delay="200"
          className="text-paper/80 text-sm md:text-lg font-medium mb-6 max-w-md"
        >
          Full Stack Web Developer — HTML, CSS, JavaScript, Python &amp; Django.
        </p>

        <div
          data-aos="fade-up"
          data-aos-delay="300"
          className="flex flex-row flex-wrap items-center gap-4 w-full mb-8"
        >
          <a
            href="#services"
            className="px-6 py-3 text-xs md:text-sm bg-orange text-ink font-semibold uppercase tracking-wide hover:bg-white transition-all duration-300"
          >
            View My Work
          </a>

          <a
            href="#contact"
            className="px-6 py-3 text-xs md:text-sm border border-paper/40 text-paper font-semibold uppercase tracking-wide hover:border-paper hover:bg-paper/10 transition-all duration-300"
          >
            Contact Me
          </a>

          <button
            type="button"
            aria-label={isPlaying ? 'Pause reel' : 'Play reel'}
            className="flex items-center gap-2 cursor-pointer group bg-transparent border-0 p-0 ml-2"
            onClick={toggleVideo}
          >
            <div className="w-10 h-10 rounded-full border border-paper/40 bg-ink/40 backdrop-blur-md flex justify-center items-center group-hover:bg-orange group-hover:border-orange transition-all duration-500">
              {!isPlaying ? (
                <svg className="w-4 h-4 text-paper ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              ) : (
                <svg className="w-4 h-4 text-paper" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                </svg>
              )}
            </div>
            <span className="bp-readout text-paper/70 text-[10px] uppercase group-hover:text-paper transition-colors">
              {!isPlaying ? 'Play Reel' : 'Pause'}
            </span>
          </button>
        </div>

        <div
          data-aos="fade-up"
          data-aos-delay="400"
          className="border-t border-paper/15 pt-4"
        >
          <ReadoutBar
            className="text-paper"
            items={[
              { label: 'Role', value: 'Full-Stack Dev' },
              { label: 'Stack', value: 'React / Django' },
              { label: 'Status', value: 'Available' },
              { label: 'Based', value: 'Chennai, IN' },
            ]}
          />
        </div>
      </div>
    </section>
  )
}
