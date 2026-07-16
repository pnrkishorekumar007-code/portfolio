import { useRef, useState, useEffect } from 'react'
import heroVideo from '../../assets/videos/watermark-removed-a012ae45-ce73-4dee-b6ce-ff1165b538ac_1_202607121251_gwr_video_mvp (1).mp4'
import Crosshair from '../ui/Crosshair'
import ReadoutBar from '../ui/ReadoutBar'

export default function Hero() {
  const videoRef = useRef(null)
  const sectionRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(true)
  const [isMuted, setIsMuted] = useState(true)

  useEffect(() => {
    const video = videoRef.current
    const section = sectionRef.current
    if (!video || !section) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {})
          setIsPlaying(true)
        } else {
          video.pause()
          setIsPlaying(false)
        }
      },
      { threshold: 0.1 }
    )

    observer.observe(section)
    return () => observer.disconnect()
  }, [])

  const toggleVideo = (e) => {
    e.stopPropagation()
    if (!videoRef.current) return

    if (videoRef.current.paused) {
      videoRef.current.muted = false
      setIsMuted(false)
      videoRef.current.play()
      setIsPlaying(true)
    } else {
      videoRef.current.pause()
      setIsPlaying(false)
    }
  }

  const toggleMute = (e) => {
    e.stopPropagation()
    if (!videoRef.current) return
    videoRef.current.muted = !videoRef.current.muted
    setIsMuted(videoRef.current.muted)
  }

  return (
    <section id="home" ref={sectionRef} className="bp-panel relative w-full h-screen overflow-hidden bg-ink">
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

          <button
            type="button"
            aria-label={isMuted ? 'Unmute video' : 'Mute video'}
            className="flex items-center gap-2 cursor-pointer group bg-transparent border-0 p-0 ml-2"
            onClick={toggleMute}
          >
            <div className="w-10 h-10 rounded-full border border-paper/40 bg-ink/40 backdrop-blur-md flex justify-center items-center group-hover:bg-orange group-hover:border-orange transition-all duration-500">
              {isMuted ? (
                <svg className="w-4 h-4 text-paper" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z" />
                </svg>
              ) : (
                <svg className="w-4 h-4 text-paper" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
                </svg>
              )}
            </div>
            <span className="bp-readout text-paper/70 text-[10px] uppercase group-hover:text-paper transition-colors">
              {isMuted ? 'Unmute' : 'Mute'}
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
