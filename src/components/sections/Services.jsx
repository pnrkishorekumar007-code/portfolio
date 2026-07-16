import { useRef } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import TagCard from '../ui/TagCard'
import Crosshair from '../ui/Crosshair'
import PanelTag from '../ui/PanelTag'

const WORKFLOW_STEPS = [
  {
    number: '01',
    title: 'Define',
    text: 'We start by understanding your goals, user requirements, and technical constraints to lay a rock-solid foundation for the project.',
    className: 'md:absolute md:top-[10px] md:right-[5%] lg:right-[10%] rotate-2 md:rotate-6',
    aosType: 'fade-left',
    aosDelay: '100',
  },
  {
    number: '02',
    title: 'Design',
    text: 'Creating intuitive, pixel-perfect user interfaces and wireframes that guarantee an engaging and accessible user experience.',
    className: 'md:absolute md:top-[450px] md:left-[5%] lg:left-[10%] -rotate-2 md:-rotate-6',
    aosType: 'fade-right',
    aosDelay: '200',
  },
  {
    number: '03',
    title: 'Build',
    text: 'Developing scalable frontend architectures and secure backend systems using the latest modern tech stack.',
    className: 'md:absolute md:top-[700px] md:right-[5%] lg:right-[15%] rotate-1 md:rotate-3',
    aosType: 'fade-left',
    aosDelay: '300',
  },
  {
    number: '04',
    title: 'Launch',
    text: 'Rigorous testing, optimization, and seamless deployment to cloud infrastructure, followed by ongoing support.',
    className: 'md:absolute md:top-[1050px] md:left-[15%] lg:left-[25%] -rotate-1 md:-rotate-3',
    aosType: 'fade-right',
    aosDelay: '400',
  },
]

const DESKTOP_PATH =
  'M 650,200 C 400,300 200,400 300,600 C 400,800 750,750 700,950 C 650,1150 400,1150 300,1200'

export default function Services() {
  const containerRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start center', 'end center'],
  })

  const pathLength = useSpring(scrollYProgress, { stiffness: 60, damping: 20, restDelta: 0.001 })

  return (
    <section
      id="services"
      ref={containerRef}
      className="bp-panel bp-grid bg-paper pt-24 pb-32 px-6 md:px-12 w-full relative overflow-hidden font-sans scroll-mt-20 border-b border-ink/10"
    >
      <Crosshair position="tl" className="text-ink/30" />
      <Crosshair position="tr" className="text-ink/30" />

      <div className="max-w-6xl mx-auto relative md:h-[1350px]">
        <div data-aos="fade-up" className="md:absolute top-10 left-0 md:w-[450px] z-20 mb-16 md:mb-0">
          <PanelTag index="04" label="How I Work" className="mb-8" />
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl uppercase text-ink leading-[1.05] mb-6 tracking-tight relative">
            A structured approach to building modern web{' '}
            <span className="bg-orange text-paper px-2 inline-block">applications</span>
          </h2>
          <p className="text-ink-soft text-base md:text-lg max-w-sm font-medium leading-relaxed">
            I follow a structured, creative, and highly technical approach to turn ideas into robust full-stack
            applications.
          </p>
        </div>

        <svg
          className="hidden md:block absolute top-0 left-0 w-full h-[1350px] pointer-events-none z-0"
          viewBox="0 0 1000 1350"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path d={DESKTOP_PATH} fill="none" stroke="#17140d33" strokeWidth="2" strokeDasharray="8 10" />
          <mask id="path-mask">
            <motion.path
              d={DESKTOP_PATH}
              fill="none"
              stroke="white"
              strokeWidth="20"
              style={{ pathLength }}
            />
          </mask>
          <path
            d={DESKTOP_PATH}
            fill="none"
            stroke="#e15a2a"
            strokeWidth="2"
            strokeDasharray="8 10"
            mask="url(#path-mask)"
            className="drop-shadow-sm"
          />
        </svg>

        <svg
          className="md:hidden absolute top-0 left-[50%] -translate-x-1/2 w-4 h-[100%] pointer-events-none z-0"
          viewBox="0 0 4 100"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M 2,0 L 2,100"
            fill="none"
            stroke="#17140d33"
            strokeWidth="4"
            strokeDasharray="4 6"
            vectorEffect="non-scaling-stroke"
          />
          <mask id="path-mask-mobile">
            <motion.path
              d="M 2,0 L 2,100"
              fill="none"
              stroke="white"
              strokeWidth="4"
              style={{ pathLength }}
              vectorEffect="non-scaling-stroke"
            />
          </mask>
          <path
            d="M 2,0 L 2,100"
            fill="none"
            stroke="#e15a2a"
            strokeWidth="4"
            strokeDasharray="4 6"
            mask="url(#path-mask-mobile)"
            vectorEffect="non-scaling-stroke"
          />
        </svg>

        <div className="flex flex-col gap-8 md:gap-12 items-center md:block relative z-10 w-full pt-4 md:pt-0 pb-12 md:pb-0">
          {WORKFLOW_STEPS.map((step) => (
            <TagCard
              key={step.number}
              {...step}
              pathLength={pathLength}
              containerRef={containerRef}
            />
          ))}

          <div
            data-aos="fade-in"
            data-aos-delay="600"
            className="hidden md:block absolute top-[1250px] left-[60%] bp-readout text-sm text-orange uppercase tracking-widest border border-orange/40 px-3 py-1 -rotate-2"
          >
            → Ready to be delivered
          </div>
        </div>
      </div>
    </section>
  )
}
