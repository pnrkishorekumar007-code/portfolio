import { motion } from 'framer-motion'
import reactImage from '../../assets/images/react.png'
import nodeImage from '../../assets/images/node.png'
import mongoImage from '../../assets/images/mongodb.png'
import Crosshair from '../ui/Crosshair'
import PanelTag from '../ui/PanelTag'
import ReadoutBar from '../ui/ReadoutBar'

const SKILLS = [
  { id: '01', name: 'HTML5', detail: '90% Proficiency' },
  { id: '02', name: 'CSS3', detail: '90% Proficiency' },
  { id: '03', name: 'JavaScript', detail: '80% Proficiency' },
  { id: '04', name: 'Python', detail: 'Full Stack' },
  { id: '05', name: 'Django', detail: 'Backend Dev' },
  { id: '06', name: 'Bootstrap', detail: 'Responsive UI' },
]

const TECH_STACK = [
  { src: reactImage, alt: 'React' },
  { src: nodeImage, alt: 'Node.js' },
  { src: mongoImage, alt: 'MongoDB' },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

const scaleUp = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function Skills() {
  return (
    <section
      id="skills"
      className="bp-panel bp-grid bg-paper-2 pt-24 pb-28 px-6 md:px-12 w-full relative font-sans scroll-mt-20 border-b border-ink/10"
    >
      <Crosshair position="tl" className="text-ink/30" />
      <Crosshair position="tr" className="text-ink/30" />

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants}>
            <PanelTag index="03" label="Skills" className="mb-10" />
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="font-display text-4xl md:text-6xl uppercase text-ink leading-[0.95] mb-6 tracking-tight"
          >
            Core <span className="bg-orange text-paper px-2 inline-block">Skills</span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-ink-soft text-base md:text-lg max-w-lg leading-relaxed mb-16"
          >
            Technologies and tools I use to build modern, scalable web applications.
          </motion.p>
        </motion.div>

        {/* Tech Stack Logos */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={containerVariants}
          className="flex items-center justify-center gap-10 md:gap-16 mb-20"
        >
          {TECH_STACK.map(({ src, alt }) => (
            <motion.div
              key={alt}
              variants={scaleUp}
              className="w-20 h-20 md:w-28 md:h-28 bg-paper border border-ink/10 p-4 flex items-center justify-center hover:border-orange hover:shadow-[0_10px_30px_rgba(225,90,42,0.15)] transition-all duration-500 cursor-pointer"
            >
              <img
                src={src}
                alt={alt}
                className="w-full h-full object-contain hover:scale-110 transition-transform duration-300"
                loading="lazy"
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Skills Panel */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={containerVariants}
          className="w-full"
        >
          <div className="border border-ink/15 bg-paper relative">
            <div className="absolute -top-3 left-4 bp-readout text-[9px] uppercase px-2 py-0.5 bg-orange text-ink border border-ink/20 z-10">
              Proficiency Panel
            </div>

            <div className="p-6 md:p-10">
              <div className="bp-readout text-[10px] uppercase text-ink/50 border-b border-ink/15 pb-2 mb-4 flex justify-between">
                <span>Command Panel</span>
                <span>Skills — 06 Core</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12">
                {SKILLS.map(({ id, name, detail }) => (
                  <motion.div
                    key={name}
                    variants={itemVariants}
                    className="flex items-center justify-between border-b border-ink/10 py-4 group hover:bg-orange/5 transition-colors px-2 cursor-default"
                  >
                    <div className="flex items-baseline gap-4">
                      <span className="bp-readout text-orange text-sm font-semibold">{id}.</span>
                      <span className="font-semibold text-ink text-base">{name}</span>
                    </div>
                    <span className="bp-readout text-ink-soft text-xs uppercase">{detail}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          <ReadoutBar
            className="mt-8 text-ink"
            items={[
              { label: 'Specialty', value: 'Full-Stack' },
              { label: 'Frontend', value: 'React / HTML / CSS' },
              { label: 'Backend', value: 'Python / Django' },
            ]}
          />
        </motion.div>
      </div>
    </section>
  )
}
