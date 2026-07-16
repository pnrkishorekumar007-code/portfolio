import { PROJECTS } from '../../constants/projects'
import Crosshair from '../ui/Crosshair'
import PanelTag from '../ui/PanelTag'
import ReadoutBar from '../ui/ReadoutBar'

function GitHubIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.09 3.29 9.4 7.86 10.93.58.1.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.52-1.33-1.28-1.68-1.28-1.68-1.04-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.68 0-1.25.44-2.28 1.18-3.08-.12-.29-.51-1.46.11-3.04 0 0 .97-.31 3.18 1.18a10.9 10.9 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.58.23 2.75.12 3.04.73.8 1.17 1.83 1.17 3.08 0 4.41-2.7 5.38-5.26 5.67.41.36.78 1.05.78 2.12 0 1.53-.01 2.76-.01 3.14 0 .31.2.67.8.56C20.71 21.39 24 17.08 24 12 24 5.73 18.27.5 12 .5Z" />
    </svg>
  )
}

function ProjectCard({ project, index }) {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay={index * 100}
      className="bp-panel border border-ink/15 bg-paper relative flex flex-col h-full"
    >
      <div className="absolute -top-3 left-4 bp-readout text-[9px] uppercase px-2 py-0.5 bg-orange text-ink border border-ink/20">
        {project.status}
      </div>

      <div className="p-6 md:p-8 flex flex-col flex-1">
        <div className="flex items-baseline gap-3 mb-1">
          <span className="font-display text-orange text-2xl">{project.id}</span>
          <h3 className="font-display text-2xl md:text-3xl uppercase text-ink tracking-tight">
            {project.title}
          </h3>
        </div>
        <p className="bp-readout text-[11px] uppercase text-ink-soft mb-5">{project.tagline}</p>

        <p className="text-ink-soft text-sm md:text-base leading-relaxed mb-6">
          {project.description}
        </p>

        <div className="mb-6">
          <div className="bp-readout text-[9px] uppercase text-ink/40 mb-2">Stack</div>
          <div className="flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="bp-readout text-[10px] uppercase border border-ink/20 px-2 py-1 text-ink-soft"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <ul className="mb-8 space-y-1.5">
          {project.features.map((feature) => (
            <li key={feature} className="flex items-start gap-2 text-xs md:text-sm text-ink-soft">
              <span className="text-orange mt-1">▸</span>
              {feature}
            </li>
          ))}
        </ul>

        <div className="border-t border-ink/10 pt-4 flex items-center justify-between mt-auto">
          {project.repoUrl ? (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bp-readout inline-flex items-center gap-2 text-xs uppercase text-ink hover:text-orange transition-colors group"
            >
              <GitHubIcon className="w-4 h-4" />
              View Code
              <svg
                className="w-3 h-3 transform group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          ) : (
            <span className="bp-readout text-xs uppercase text-ink/30">Repo not public</span>
          )}
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  return (
    <section
      id="projects"
      className="bp-panel bp-grid bg-paper pt-24 pb-28 px-6 md:px-12 w-full relative overflow-hidden font-sans scroll-mt-20 border-b border-ink/10"
    >
      <Crosshair position="tl" className="text-ink/30" />
      <Crosshair position="tr" className="text-ink/30" />

      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <PanelTag index="03" label="Selected Work" className="mb-8" />
          <h2 className="font-display text-4xl md:text-6xl uppercase text-ink leading-[0.95] mb-6 tracking-tight">
            Projects <span className="bg-orange text-paper px-2 inline-block">Built</span>
          </h2>
          <p className="text-ink-soft text-base md:text-lg max-w-lg leading-relaxed">
            A few things I&apos;ve shipped — from a full e-commerce storefront to campus event
            sites. Source code is linked wherever the repo is public.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch mb-16">
          {PROJECTS.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

        <ReadoutBar
          className="text-ink border-t border-ink/10 pt-4"
          items={[
            { label: 'Total Shipped', value: `0${PROJECTS.length}` },
            { label: 'Repo Host', value: 'GitHub' },
            { label: 'Full History', value: '@pnrkishorekumar007-code' },
          ]}
        />
      </div>
    </section>
  )
}
