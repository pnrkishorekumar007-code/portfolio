import profileImage from '../../assets/images/about-illustration.jpg'
import reactImage from '../../assets/images/react.png'
import nodeImage from '../../assets/images/node.png'
import mongoImage from '../../assets/images/mongodb.png'
import Crosshair from '../ui/Crosshair'
import ReadoutBar from '../ui/ReadoutBar'
import PanelTag from '../ui/PanelTag'

const SKILLS = [
  { id: '01', name: 'HTML5', detail: '90% Proficiency', delay: 300 },
  { id: '02', name: 'CSS3', detail: '90% Proficiency', delay: 350 },
  { id: '03', name: 'JavaScript', detail: '80% Proficiency', delay: 400 },
  { id: '04', name: 'Python', detail: 'Full Stack', delay: 450 },
  { id: '05', name: 'Django', detail: 'Backend Dev', delay: 500 },
  { id: '06', name: 'Bootstrap', detail: 'Responsive UI', delay: 550 },
]

const TECH_STACK = [
  { src: reactImage, alt: 'React', delay: 300 },
  { src: nodeImage, alt: 'Node.js', delay: 450 },
  { src: mongoImage, alt: 'MongoDB', delay: 600 },
]

export default function About() {
  return (
    <section
      id="about"
      className="bp-panel bp-grid bg-paper pt-28 pb-28 px-6 md:px-12 w-full relative overflow-hidden font-sans border-t border-b border-ink/10"
    >
      <Crosshair position="tl" className="text-ink/30" />
      <Crosshair position="tr" className="text-ink/30" />

      <div className="max-w-6xl mx-auto">
        <PanelTag index="02" label="About" className="mb-10" />

        <div className="flex flex-col md:flex-row gap-16 items-start">
          <div className="flex flex-col items-center w-full md:w-[300px] shrink-0">
            <div data-aos="fade-up" className="relative flex justify-center w-full">
              <div className="bg-ink w-full max-w-[280px] p-3 shadow-[0_20px_40px_rgba(23,20,13,0.2)] relative z-20 border border-ink">
                <div className="absolute -top-3 left-4 bp-readout text-[9px] text-orange uppercase bg-paper px-2 py-0.5 border border-ink/20">
                  Fig. 02-A
                </div>
                <div className="w-full aspect-[3/4] overflow-hidden bg-paper-2 grayscale-[15%]">
                  <img
                    src={profileImage}
                    alt="Kishorekumar R - Full Stack Developer"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>

            <div className="flex items-center gap-8 mt-10">
              {TECH_STACK.map(({ src, alt, delay }) => (
                <img
                  key={alt}
                  data-aos="zoom-in"
                  data-aos-delay={delay}
                  src={src}
                  alt={alt}
                  className="w-14 h-14 md:w-16 md:h-16 object-contain hover:scale-110 transition-transform duration-300 cursor-pointer opacity-90"
                  loading="lazy"
                />
              ))}
            </div>
          </div>

          <div data-aos="fade-left" data-aos-delay="200" className="flex-1 mt-4 md:mt-0 relative z-20">
            <h2 className="font-display text-4xl md:text-6xl uppercase text-ink mb-2 leading-none">
              About <span className="bg-orange text-paper px-2">Me</span>
            </h2>
            <p className="text-ink-soft text-base md:text-lg leading-relaxed max-w-2xl mt-8 mb-12">
              I&apos;m <span className="font-semibold text-ink">Kishorekumar R</span>, a BCA student at
              SRMIST Ramapuram based in Tiruvallur, Tamil Nadu. Full-stack developer with hands-on internship
              experience at Inspire Softech Solutions, where I built end-to-end web applications. Passionate about
              creating clean, functional, and scalable web experiences.
            </p>

            <div id="skills" className="scroll-mt-24">
              <div className="bp-readout text-[10px] uppercase text-ink/50 border-b border-ink/15 pb-2 mb-1 flex justify-between">
                <span>Command Panel</span>
                <span>Skills — 06 Core</span>
              </div>
              {SKILLS.map(({ id, name, detail, delay }) => (
                <div
                  key={name}
                  data-aos="fade-up"
                  data-aos-delay={delay}
                  className="flex items-center justify-between border-b border-ink/10 py-3 group hover:bg-orange/5 transition-colors px-1"
                >
                  <div className="flex items-baseline gap-4">
                    <span className="bp-readout text-orange text-xs">{id}.</span>
                    <span className="font-semibold text-ink text-sm md:text-base">{name}</span>
                  </div>
                  <span className="bp-readout text-ink-soft text-[10px] md:text-xs uppercase">{detail}</span>
                </div>
              ))}
            </div>

            <ReadoutBar
              className="mt-8 text-ink"
              items={[
                { label: 'Location', value: 'Tiruvallur, TN' },
                { label: 'Focus', value: 'Full-Stack' },
                { label: 'Status', value: 'Open to Work' },
              ]}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
