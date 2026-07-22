import profileImage from '../../assets/images/about-illustration.png'
import Crosshair from '../ui/Crosshair'
import ReadoutBar from '../ui/ReadoutBar'
import PanelTag from '../ui/PanelTag'

export default function About() {
  return (
    <section
      id="about"
      className="bp-panel bp-grid bg-paper pt-28 pb-28 px-6 md:px-12 w-full relative font-sans border-t border-b border-ink/10"
    >
      <Crosshair position="tl" className="text-ink/30" />
      <Crosshair position="tr" className="text-ink/30" />

      <div className="max-w-6xl mx-auto">
        <PanelTag index="02" label="About" className="mb-10" />

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-16 items-center">
          {/* Left: Profile Image */}
          <div data-aos="fade-right" data-aos-duration="800" className="w-full">
            <div className="relative w-full max-w-[320px] mx-auto aspect-[3/4] bg-ink border border-ink shadow-[0_20px_40px_rgba(23,20,13,0.2)] overflow-hidden">
              <img
                src={profileImage}
                alt="Kishorekumar R - Full Stack Developer"
                className="w-full h-full object-cover grayscale-[15%] hover:grayscale-0 transition-all duration-700"
                loading="lazy"
              />
            </div>
          </div>

          {/* Right: Bio Text */}
          <div data-aos="fade-left" data-aos-duration="800" data-aos-delay="100" className="flex flex-col">
            <h2 className="font-display text-4xl md:text-6xl uppercase text-ink mb-2 leading-none">
              About <span className="bg-orange text-paper px-2">Me</span>
            </h2>

            <p className="text-ink-soft text-base md:text-lg leading-relaxed max-w-2xl mt-8 mb-6">
              I&apos;m <span className="font-semibold text-ink">Kishorekumar R</span>, a BCA student at
              SRMIST Ramapuram based in Tiruvallur, Tamil Nadu. Full-stack developer with hands-on internship
              experience at Inspire Softech Solutions, where I built end-to-end web applications. Passionate about
              creating clean, functional, and scalable web experiences.
            </p>

            <p className="text-ink-soft text-sm md:text-base leading-relaxed max-w-2xl mb-8">
              I specialize in building modern web applications using HTML, CSS, Bootstrap, JavaScript, Python, and Django.
              My focus is on creating intuitive user interfaces backed by robust, scalable backend architectures.
            </p>

            <ReadoutBar
              className="text-ink"
              items={[
                { label: 'Location', value: 'Tiruvallur, TN' },
                { label: 'Education', value: 'BCA @ SRMIST' },
                { label: 'Status', value: 'Open to Work' },
              ]}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
