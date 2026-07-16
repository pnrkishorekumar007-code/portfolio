import { useState } from 'react'
import Crosshair from '../ui/Crosshair'
import PanelTag from '../ui/PanelTag'
import ReadoutBar from '../ui/ReadoutBar'

const RESUME_PATH = '/resume/Kishorekumar-R-Resume.pdf'
const CONTACT_EMAIL = 'pnrkishorekumar007@gmail.com'

function DownloadIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v12m0 0l-4-4m4 4l4-4M4 17v2a2 2 0 002 2h12a2 2 0 002-2v-2" />
    </svg>
  )
}

export default function Contact() {
  const [status, setStatus] = useState('idle') // idle | opened

  const handleSubmit = (e) => {
    e.preventDefault()

    const form = e.target
    const firstName = form.firstName.value.trim()
    const lastName = form.lastName.value.trim()
    const email = form.email.value.trim()
    const message = form.message.value.trim()

    const subject = `Portfolio inquiry from ${firstName} ${lastName}`.trim()
    const body = `${message}\n\n—\n${firstName} ${lastName}\n${email}`

    const mailtoUrl = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`

    window.location.href = mailtoUrl
    setStatus('opened')
    form.reset()
  }

  return (
    <section
      id="contact"
      className="bp-panel bp-grid-dark bg-ink w-full py-24 md:py-32 px-6 md:px-12 relative overflow-hidden scroll-mt-20"
    >
      <Crosshair position="tl" className="text-paper/30" />
      <Crosshair position="tr" className="text-paper/30" />
      <Crosshair position="bl" className="text-paper/30 hidden md:block" />
      <Crosshair position="br" className="text-paper/30 hidden md:block" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-14 lg:gap-16">
          {/* Left: intro + info */}
          <div data-aos="fade-up" className="flex flex-col">
            <PanelTag index="05" label="Get In Touch" tone="paper" className="mb-8 w-fit" />

            <h2 className="font-display text-paper text-4xl md:text-5xl lg:text-6xl uppercase leading-[0.95] mb-6 tracking-tight">
              Let&apos;s Build<br />
              <span className="bg-orange text-ink px-2 inline-block">Something.</span>
            </h2>

            <p className="text-paper/70 text-base md:text-lg leading-relaxed max-w-md mb-10">
              Open to full-stack internships and freelance work. Fill out the form, email me
              directly, or grab a copy of my résumé below.
            </p>

            <div className="flex flex-col gap-4 mb-10 bp-readout text-xs uppercase">
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="flex items-center justify-between border-b border-paper/15 pb-3 text-paper/80 hover:text-orange transition-colors group"
              >
                <span className="opacity-50">Email</span>
                <span className="flex items-center gap-2 normal-case font-semibold text-sm">
                  {CONTACT_EMAIL}
                  <svg className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              </a>

              <a
                href="tel:+919123505027"
                className="flex items-center justify-between border-b border-paper/15 pb-3 text-paper/80 hover:text-orange transition-colors"
              >
                <span className="opacity-50">Phone</span>
                <span className="normal-case font-semibold text-sm">+91 91235 05027</span>
              </a>

              <a
                href="https://www.linkedin.com/in/kishore007kumar"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between border-b border-paper/15 pb-3 text-paper/80 hover:text-orange transition-colors"
              >
                <span className="opacity-50">LinkedIn</span>
                <span className="normal-case font-semibold text-sm">/kishore007kumar</span>
              </a>

              <a
                href="https://github.com/pnrkishorekumar007-code"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between border-b border-paper/15 pb-3 text-paper/80 hover:text-orange transition-colors"
              >
                <span className="opacity-50">GitHub</span>
                <span className="normal-case font-semibold text-sm">@pnrkishorekumar007-code</span>
              </a>
            </div>

            <a
              href={RESUME_PATH}
              download="Kishorekumar-R-Resume.pdf"
              className="inline-flex items-center justify-center gap-3 px-6 py-4 bg-orange text-ink font-semibold uppercase tracking-wide text-sm hover:bg-paper transition-all duration-300 w-fit"
            >
              <DownloadIcon className="w-4 h-4" />
              Download Résumé
            </a>
            <p className="bp-readout text-[9px] uppercase text-paper/30 mt-3">
              PDF · View or Download Only
            </p>
          </div>

          {/* Right: form */}
          <div
            data-aos="fade-up"
            data-aos-delay="150"
            className="bp-panel bg-paper p-8 md:p-10 border-t-4 border-orange"
          >
            <div className="flex items-center justify-between mb-8">
              <span className="bp-readout text-[10px] uppercase text-ink/40">Message Form</span>
              <span className="bp-readout text-[10px] uppercase text-ink/40">Ref — 0005</span>
            </div>

            <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="bp-readout block text-[9px] uppercase text-ink/40 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    className="w-full bg-transparent border-b border-ink/25 pb-2 text-base focus:outline-none focus:border-orange transition-colors text-ink font-medium rounded-none"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="bp-readout block text-[9px] uppercase text-ink/40 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    required
                    className="w-full bg-transparent border-b border-ink/25 pb-2 text-base focus:outline-none focus:border-orange transition-colors text-ink font-medium rounded-none"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="bp-readout block text-[9px] uppercase text-ink/40 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full bg-transparent border-b border-ink/25 pb-2 text-base focus:outline-none focus:border-orange transition-colors text-ink font-medium rounded-none"
                />
              </div>

              <div>
                <label htmlFor="message" className="bp-readout block text-[9px] uppercase text-ink/40 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="w-full bg-transparent border-b border-ink/25 pb-2 text-base focus:outline-none focus:border-orange transition-colors text-ink font-medium resize-none rounded-none"
                />
              </div>

              <div className="flex items-start gap-3 text-xs text-ink-soft">
                <input
                  type="checkbox"
                  id="permission"
                  name="permission"
                  required
                  className="mt-0.5 w-4 h-4 border-ink/30 bg-transparent cursor-pointer shrink-0"
                  style={{ accentColor: '#e15a2a' }}
                />
                <label htmlFor="permission" className="cursor-pointer leading-snug">
                  I give permission to contact me at this email address.
                </label>
              </div>

              <button
                type="submit"
                className="mt-2 px-8 py-4 bg-ink text-paper font-semibold uppercase tracking-wide text-sm flex items-center justify-center gap-3 hover:bg-orange hover:text-ink transition-all duration-300 group"
              >
                Send Message
                <svg
                  className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>

              {status === 'opened' && (
                <p className="bp-readout text-[11px] uppercase text-orange-deep bg-orange/10 border border-orange/30 px-4 py-3">
                  ✓ Your email app should have opened with the message pre-filled — hit send there to deliver it.
                </p>
              )}
            </form>
          </div>
        </div>

        <ReadoutBar
          className="text-paper mt-16 pt-6 border-t border-paper/10"
          items={[
            { label: 'Based', value: 'Tiruvallur, TN' },
            { label: 'Status', value: 'Open to Work' },
            { label: 'Response Time', value: '< 24 Hrs' },
          ]}
        />
      </div>
    </section>
  )
}
