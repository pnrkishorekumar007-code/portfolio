const CURRENT_YEAR = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="bg-ink text-paper/70 py-16 px-6 md:px-12 w-full bp-readout text-[10px] md:text-xs tracking-widest flex flex-col justify-between min-h-[50vh] border-t-2 border-orange">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 w-full font-medium uppercase">
        <div className="flex flex-col gap-1">
          <p>Full Stack Web Development</p>
          <p>HTML, CSS, Bootstrap</p>
          <p>Python, Django &amp; JavaScript</p>
        </div>

        <div className="flex flex-col gap-1 md:items-center">
          <p className="text-sm leading-relaxed max-w-xs normal-case font-body">
            BCA student at SRMIST Ramapuram with hands-on internship experience building
            end-to-end web applications and scalable digital experiences.
          </p>
          <a
            href="#services"
            className="underline text-orange hover:text-paper transition-colors mt-2 underline-offset-4 decoration-1"
          >
            View My Work
          </a>
        </div>

        <div className="flex flex-col gap-1 md:items-end">
          <p>Available for Opportunities</p>
          <p>{CURRENT_YEAR}</p>
        </div>
      </div>

      <div className="w-full flex justify-center items-center py-20 md:py-24 overflow-hidden">
        <h2 className="font-display text-[18vw] md:text-[16vw] leading-none tracking-tighter lowercase select-none text-paper/10 w-full text-center">
          Kishore Kumar
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 w-full items-end font-medium uppercase">
        <div className="flex flex-col gap-6">
          <a href="#contact" className="underline text-orange hover:text-paper transition-colors underline-offset-4 decoration-1 font-bold">
            Contact
          </a>
          <p className="text-paper/40 text-[9px] md:text-[10px] normal-case">
            &copy; {CURRENT_YEAR} Kishorekumar R | Full Stack Developer
          </p>
        </div>

        <div className="flex flex-col gap-1 md:items-center normal-case">
          <a
            href="mailto:pnrkishorekumar007@gmail.com"
            className="underline hover:text-orange transition-colors underline-offset-4 decoration-1"
          >
            pnrkishorekumar007@gmail.com
          </a>
          <a
            href="https://github.com/pnrkishorekumar007-code"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-orange transition-colors underline-offset-4 decoration-1 text-sm"
          >
            GitHub
          </a>
        </div>

        <div className="flex flex-col gap-1 md:items-end normal-case">
          <a
            href="https://www.linkedin.com/in/kishore007kumar"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-orange transition-colors underline-offset-4 decoration-1"
          >
            LinkedIn
          </a>
          <p className="text-paper/40 text-[9px] md:text-[10px]">+91 9123505027</p>
        </div>
      </div>
    </footer>
  )
}
