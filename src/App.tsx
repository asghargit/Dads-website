import portrait from './assets/aga_ammar.png'
import keaAward from './assets/kea_award 2.jpg'
function App() {
  return (
    <main className="min-h-screen bg-[#f8f9fb] text-[#172033]">
      {/* Navigation */}
      <nav className="fixed inset-x-0 top-0 z-50 px-4 pt-4 lg:px-8">
  <div className="mx-auto flex max-w-5xl items-center justify-center rounded-full border border-[#172033]/10 bg-white/80 px-6 py-3 shadow-sm backdrop-blur-xl">

    <div className="hidden items-center gap-8 text-xs font-medium text-[#64748b] md:flex">
      <a href="#about" className="transition hover:text-[#172033]">
        About
      </a>

      <a href="#journey" className="transition hover:text-[#172033]">
        Journey
      </a>

      <a href="#research" className="transition hover:text-[#172033]">
        Teaching & Research
      </a>

      <a href="#achievements" className="transition hover:text-[#172033]">
        Achievements
      </a>

      <a href="#contact" className="transition hover:text-[#172033]">
        Contact
      </a>
    </div>

    <button
      className="rounded-full border border-[#172033]/10 px-4 py-2 text-xs font-medium text-[#172033] md:hidden"
      type="button"
    >
      Menu
    </button>

  </div>
</nav>

      {/* Hero */}
<section className="relative min-h-screen overflow-hidden px-6 pb-20 pt-32 lg:px-10">
  <div className="mx-auto grid min-h-[calc(100vh-8rem)] w-full max-w-7xl items-center gap-14 lg:grid-cols-[1fr_0.85fr]">

    {/* Left */}
    <div className="relative z-10">
      <div className="mb-7 flex items-center gap-3">
        <span className="h-px w-10 bg-[#172033]/30" />
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#64748b]">
          Professor of Anatomy
        </p>
      </div>

      <h1 className="max-w-4xl text-[clamp(3.5rem,7vw,7rem)] font-semibold leading-[0.9] tracking-[-0.055em]">
        Dr. Aga
        <br />
        <span className="text-[#64748b]">
          Ammar Murthuza
        </span>
      </h1>

      <p className="mt-9 max-w-xl text-base leading-7 text-[#172033]/60 sm:text-lg">
        Educator, anatomist and researcher dedicated to anatomy education,
        academic research, and mentoring the next generation of healthcare
        professionals.
      </p>

      <div className="mt-9 flex flex-wrap gap-3">
        <a
          href="#about"
          className="rounded-full bg-[#172033] px-7 py-3.5 text-sm font-medium text-white transition duration-300 hover:-translate-y-1 hover:shadow-xl"
        >
          Explore his work
        </a>

        <a
          href="https://scholar.google.com/citations?hl=en&user=rVj5WpoAAAAJ"
          target="_blank"
          rel="noreferrer"
          className="rounded-full border border-[#172033]/15 bg-white px-7 py-3.5 text-sm font-medium text-[#172033] transition duration-300 hover:-translate-y-1 hover:bg-[#f1f3f5]"
        >
          Google Scholar ↗
        </a>
      </div>

      <div className="mt-14 flex flex-wrap gap-x-10 gap-y-5 border-t border-[#172033]/10 pt-7">
        <div>
          <p className="text-2xl font-semibold tracking-tight">MBBS · MD</p>
          <p className="mt-1 text-xs uppercase tracking-[0.16em] text-[#64748b]">
            Qualification
          </p>
        </div>

        <div>
          <p className="text-2xl font-semibold tracking-tight">Anatomy</p>
          <p className="mt-1 text-xs uppercase tracking-[0.16em] text-[#64748b]">
            Specialization
          </p>
        </div>

        <div>
          <p className="text-2xl font-semibold tracking-tight">Research</p>
          <p className="mt-1 text-xs uppercase tracking-[0.16em] text-[#64748b]">
            Academic focus
          </p>
        </div>
      </div>
    </div>

    {/* Right / Portrait */}
    <div className="relative mx-auto w-full max-w-[520px]">
      <div className="absolute -inset-10 rounded-full bg-[#dfe6ed]/70 blur-3xl" />

      <div className="relative overflow-hidden rounded-[2.75rem] bg-[#edf0f2] shadow-2xl shadow-[#172033]/10">
        <img
          src={portrait}
          alt="Dr. Aga Ammar Murthuza"
          className="block aspect-[4/5] h-full w-full object-cover object-top"
        />

        <div className="absolute inset-x-5 bottom-5 rounded-2xl border border-white/40 bg-white/85 p-4 shadow-lg backdrop-blur-md">
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#64748b]">
            Academic Profile
          </p>
          <p className="mt-1 text-sm font-semibold text-[#172033]">
            Professor of Anatomy · Vydehi Institute of Medical Sciences and Research Center, Bangalore
          </p>
        </div>
      </div>
    </div>
  </div>

  {/* Decorative circles */}
  <div className="pointer-events-none absolute -right-40 top-1/2 h-[32rem] w-[32rem] -translate-y-1/2 rounded-full border border-[#172033]/5" />
  <div className="pointer-events-none absolute -right-20 top-1/2 h-[24rem] w-[24rem] -translate-y-1/2 rounded-full border border-[#172033]/5" />
</section>

      {/* Temporary section markers */}
      <section
  id="about"
  className="relative overflow-hidden bg-white px-6 py-28 lg:px-10 lg:py-40"
>
  {/* Subtle anatomical / academic grid */}
  <div className="pointer-events-none absolute inset-0 opacity-[0.035]">
    <div
      className="absolute inset-0"
      style={{
        backgroundImage:
          "linear-gradient(#172033 1px, transparent 1px), linear-gradient(90deg, #172033 1px, transparent 1px)",
        backgroundSize: "80px 80px",
      }}
    />
  </div>

  <div className="relative mx-auto max-w-7xl">
    <div className="grid gap-16 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">

      {/* Section label */}
      <div>
        <div className="flex items-center gap-3">
          <span className="h-px w-8 bg-[#172033]/30" />
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#64748b]">
            About Me
          </p>
        </div>

        <p className="mt-8 max-w-xs text-sm leading-6 text-[#64748b]">
          A career shaped by anatomy, education, research and a commitment
          to teaching healthcare professionals.
        </p>
      </div>

      {/* Main content */}
      <div className="max-w-4xl">
        <h2 className="text-4xl font-semibold leading-tight tracking-[-0.04em] sm:text-5xl lg:text-6xl">
          Understanding the human body is at the heart of his work.
        </h2>

        <div className="mt-10 grid gap-8 text-base leading-8 text-[#172033]/65 sm:grid-cols-2">
          <p>
            I am a Professor of Anatomy with a longstanding interest in medical education, anatomical research, and student mentorship. My teaching experience spans students from medicine, dentistry, physiotherapy, nursing, and allied health sciences.
          </p>

          <p>
            I believe anatomy is best understood when strong foundational knowledge is combined with clear explanation, clinical relevance, and practical learning.
          </p>
        </div>

        {/* Academic identity */}
        <div className="mt-14 grid border-y border-[#172033]/10 sm:grid-cols-3">
          <div className="border-b border-[#172033]/10 py-7 sm:border-b-0 sm:border-r sm:pr-8">
            <p className="text-lg font-semibold">MBBS · MD</p>
            <p className="mt-2 text-xs uppercase tracking-[0.18em] text-[#64748b]">
              Medical education
            </p>
          </div>

          <div className="border-b border-[#172033]/10 py-7 sm:border-b-0 sm:px-8 sm:border-r">
            <p className="text-lg font-semibold">Anatomy</p>
            <p className="mt-2 text-xs uppercase tracking-[0.18em] text-[#64748b]">
              Academic discipline
            </p>
          </div>

          <div className="py-7 sm:pl-8">
            <p className="text-lg font-semibold">Research</p>
            <p className="mt-2 text-xs uppercase tracking-[0.18em] text-[#64748b]">
              Academic contribution
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      <section
  id="journey"
  className="relative overflow-hidden bg-[#f8f9fb] px-6 py-28 lg:px-10 lg:py-40"
>
  <div className="mx-auto max-w-7xl">

    {/* Section header */}
    <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
      <div>
        <div className="flex items-center gap-3">
          <span className="h-px w-8 bg-[#172033]/30" />

          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#64748b]">
            Academic experience
          </p>
        </div>

        <p className="mt-8 max-w-xs text-sm leading-6 text-[#64748b]">
          A progression through academic roles in anatomy and medical
          education.
        </p>
      </div>

      <div>
        <h2 className="max-w-3xl text-4xl font-semibold leading-tight tracking-[-0.04em] sm:text-5xl lg:text-6xl">
          A career built around
          <br />
          <span className="text-[#64748b]">
            anatomy and education.
          </span>
        </h2>
      </div>
    </div>

    {/* Timeline */}
    <div className="relative mt-20 max-w-5xl">

      {/* Timeline line */}
      <div className="absolute bottom-0 left-[7px] top-0 w-px bg-[#172033]/10" />

      <div className="space-y-14">

        {/* Professor */}
        <div className="relative grid gap-5 pl-10 md:grid-cols-[180px_1fr] md:gap-12">
          <div className="absolute left-0 top-1 h-[15px] w-[15px] rounded-full border-[3px] border-[#f8f9fb] bg-[#172033] ring-1 ring-[#172033]/20" />

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#64748b]">
              Current
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold tracking-tight">
              Professor of Anatomy
            </h3>

            <p className="mt-2 text-sm leading-6 text-[#64748b]">
              Vydehi Institute of Medical Sciences & Research Centre
            </p>
          </div>
        </div>

        {/* Associate Professor */}
        <div className="relative grid gap-5 pl-10 md:grid-cols-[180px_1fr] md:gap-12">
          <div className="absolute left-0 top-1 h-[15px] w-[15px] rounded-full border-[3px] border-[#f8f9fb] bg-[#64748b] ring-1 ring-[#64748b]/20" />

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#64748b]">
              Previous
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold tracking-tight">
              Associate Professor of Anatomy
            </h3>

            <p className="mt-2 text-sm leading-6 text-[#64748b]">
              Vydehi Institute of Medical Sciences & Research Centre
            </p>
          </div>
        </div>

        {/* Assistant Professor */}
        <div className="relative grid gap-5 pl-10 md:grid-cols-[180px_1fr] md:gap-12">
          <div className="absolute left-0 top-1 h-[15px] w-[15px] rounded-full border-[3px] border-[#f8f9fb] bg-[#64748b] ring-1 ring-[#64748b]/20" />

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#64748b]">
              Previous
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold tracking-tight">
              Assistant Professor of Anatomy
            </h3>

            <p className="mt-2 text-sm leading-6 text-[#64748b]">
              Vydehi Institute of Medical Sciences & Research Centre
            </p>
          </div>
        </div>

      </div>
    </div>

  </div>
</section>

      <section
  id="research"
  className="relative overflow-hidden bg-white px-6 py-28 lg:px-10 lg:py-40"
>
  <div className="mx-auto max-w-7xl">

    {/* Header */}
    <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
      <div>
        <div className="flex items-center gap-3">
          <span className="h-px w-8 bg-[#172033]/30" />

          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#64748b]">
            Teaching & Research
          </p>
        </div>

        <p className="mt-8 max-w-xs text-sm leading-6 text-[#64748b]">
          Academic work shaped by teaching, mentorship and continued
          engagement with anatomical research.
        </p>
      </div>

      <div>
        <h2 className="max-w-4xl text-4xl font-semibold leading-[1.05] tracking-[-0.04em] sm:text-5xl lg:text-6xl">
          Sharing knowledge.
          <br />
          <span className="text-[#64748b]">
            Advancing knowledge.
          </span>
        </h2>
      </div>
    </div>

    {/* Teaching */}
    <div className="mt-24 border-t border-[#172033]/10 pt-12">
      <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#64748b]">
            Teaching
          </p>

          <h3 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">
            Anatomy across
            <br />
            healthcare education.
          </h3>

          <p className="mt-6 max-w-sm text-sm leading-7 text-[#64748b]">
            Teaching anatomy to students across different healthcare
            disciplines, with an emphasis on strong foundations and clear
            understanding.
          </p>
        </div>

        <div className="grid gap-px overflow-hidden rounded-3xl border border-[#172033]/10 bg-[#172033]/10 sm:grid-cols-2">

          <div className="bg-white p-7 transition hover:bg-[#f8f9fb]">
            <span className="text-xs text-[#94a3b8]">01</span>
            <h4 className="mt-10 text-xl font-semibold">Medicine</h4>
            <p className="mt-2 text-sm text-[#64748b]">
              Anatomy education for medical students.
            </p>
          </div>

          <div className="bg-white p-7 transition hover:bg-[#f8f9fb]">
            <span className="text-xs text-[#94a3b8]">02</span>
            <h4 className="mt-10 text-xl font-semibold">Dentistry</h4>
            <p className="mt-2 text-sm text-[#64748b]">
              Anatomical foundations for dental education.
            </p>
          </div>

          <div className="bg-white p-7 transition hover:bg-[#f8f9fb]">
            <span className="text-xs text-[#94a3b8]">03</span>
            <h4 className="mt-10 text-xl font-semibold">Physiotherapy</h4>
            <p className="mt-2 text-sm text-[#64748b]">
              Anatomy teaching connected to movement and clinical practice.
            </p>
          </div>

          <div className="bg-white p-7 transition hover:bg-[#f8f9fb]">
            <span className="text-xs text-[#94a3b8]">04</span>
            <h4 className="mt-10 text-xl font-semibold">Nursing & Allied Health</h4>
            <p className="mt-2 text-sm text-[#64748b]">
              Foundational anatomy for healthcare professionals.
            </p>
          </div>

        </div>
      </div>
    </div>

    {/* Research */}
    <div className="mt-28 border-t border-[#172033]/10 pt-12">
      <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#64748b]">
            Research
          </p>

          <h3 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">
            Research,
            <br />
            publications & inquiry.
          </h3>

          <p className="mt-6 max-w-sm text-sm leading-7 text-[#64748b]">
            Explore selected academic publications and research contributions
            in anatomy and related areas.
          </p>

          
        </div>

        {/* Featured publications */}
        <div className="space-y-4">

          <article className="group rounded-3xl border border-[#172033]/10 p-7 transition duration-300 hover:-translate-y-1 hover:border-[#172033]/20 hover:shadow-xl">
            <div className="flex items-start justify-between gap-6">
              <span className="text-xs font-semibold uppercase tracking-[0.15em] text-[#64748b]">
                2025 · Cureus
              </span>

              <span className="text-[#64748b] transition-transform group-hover:translate-x-1">
                ↗
              </span>
            </div>

            <h4 className="mt-6 max-w-2xl text-xl font-semibold leading-snug tracking-tight">
              Anatomical variations of the recurrent thenar branch of the
              median nerve in the carpal tunnel
            </h4>

            <p className="mt-4 text-sm leading-6 text-[#64748b]">
              A cadaveric anatomical study examining variation relevant to
              anatomical understanding and clinical practice.
            </p>
          </article>

          <article className="group rounded-3xl border border-[#172033]/10 p-7 transition duration-300 hover:-translate-y-1 hover:border-[#172033]/20 hover:shadow-xl">
            <div className="flex items-start justify-between gap-6">
              <span className="text-xs font-semibold uppercase tracking-[0.15em] text-[#64748b]">
                Selected publication
              </span>

              <span className="text-[#64748b] transition-transform group-hover:translate-x-1">
                ↗
              </span>
            </div>

            <h4 className="mt-6 max-w-2xl text-xl font-semibold leading-snug tracking-tight">
              Research in anatomy and medical education
            </h4>

            <p className="mt-4 text-sm leading-6 text-[#64748b]">
              A selection of academic work exploring anatomy, education and
              related biomedical subjects.
            </p>
          </article>

          <div className="pt-4">
            <a
              href="https://scholar.google.com/citations?hl=en&user=rVj5WpoAAAAJ"
              target="_blank"
              rel="noreferrer"
              className="text-sm font-semibold text-[#172033] underline decoration-[#172033]/20 underline-offset-8 transition hover:decoration-[#172033]"
            >
              Explore all publications →
            </a>
          </div>

        </div>
      </div>
    </div>

  </div>
</section>

      <section
  id="achievements"
  className="relative overflow-hidden bg-[#f8f9fb] px-6 py-24 lg:px-10 lg:py-28"
>
  <div className="mx-auto max-w-7xl">

    {/* Header */}
    <div className="flex flex-col justify-between gap-6 border-b border-[#172033]/10 pb-10 lg:flex-row lg:items-end">
      <div>
        <div className="flex items-center gap-3">
          <span className="h-px w-8 bg-[#172033]/30" />

          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#64748b]">
            Achievements
          </p>
        </div>

        <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-[-0.04em] sm:text-5xl">
          Recognition
          <span className="text-[#64748b]"> through teaching.</span>
        </h2>
      </div>

      <p className="max-w-sm text-sm leading-6 text-[#64748b] lg:text-right">
        Recognition for contributions to anatomy education and teaching.
      </p>
    </div>

    {/* Featured award */}
    <article className="mt-12 overflow-hidden rounded-[1.75rem] border border-[#172033]/10 bg-white">
  <div className="grid lg:grid-cols-[1fr_0.8fr]">

    {/* Image */}
    <div className="relative h-[420px] overflow-hidden bg-[#edf0f2] sm:h-[500px] lg:h-[560px]">
      <img
        src={keaAward}
        alt="Dr. Aga Ammar Murthuza receiving an award"
        className="h-full w-full object-cover object-center transition duration-700 hover:scale-[1.02]"
      />
    </div>

    {/* Award information */}
    <div className="flex items-center p-8 sm:p-10 lg:p-14">

      <div>
        <span className="text-2xl font-semibold uppercase tracking-[0.2em] text-[#94a3b8]">
          Academic Recognition
        </span>

        <div className="mt-8 h-px w-12 bg-[#172033]/20" />

        <p className="mt-8 text-xl font-medium text-[#64748b]">
          Karnataka Educational Awards
        </p>

        <h3 className="mt-4 max-w-sm text-xl font-semibold leading-tight tracking-tight text-[#172033] sm:text-4xl">
          A moment of
          <br />
          recognition.
        </h3>
      </div>

    </div>
  </div>
</article>

  </div>
</section>

      <section
  id="contact"
  className="relative overflow-hidden bg-[#172033] px-6 py-24 text-white lg:px-10 lg:py-28"
>
  <div className="mx-auto max-w-7xl">

    <div className="grid gap-12 lg:grid-cols-[1fr_0.7fr] lg:items-end">

      {/* Heading */}
      <div>
        <div className="flex items-center gap-3">
          <span className="h-px w-8 bg-white/30" />

          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/50">
            Contact
          </p>
        </div>

        <h2 className="mt-6 max-w-3xl text-5xl font-semibold leading-[0.95] tracking-[-0.05em] sm:text-6xl lg:text-7xl">
          Get in touch.
        </h2>

        <p className="mt-7 max-w-xl text-sm leading-7 text-white/55 sm:text-base">
          For professional and academic enquiries, connect with me on
          LinkedIn.
        </p>
      </div>

      {/* LinkedIn */}
      <div className="lg:flex lg:justify-end">
        <a
          href="https://www.linkedin.com/in/ammar-murthuza-601b1898/"
          target="_blank"
          rel="noreferrer"
          className="group inline-flex items-center gap-5 rounded-full border border-white/15 bg-white/5 px-7 py-4 transition duration-300 hover:-translate-y-1 hover:bg-white/10"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-sm font-bold text-[#172033]">
            in
          </span>

          <span className="text-sm font-medium">
            Connect on LinkedIn
          </span>

          <span className="text-lg text-white/50 transition-transform duration-300 group-hover:translate-x-1">
            ↗
          </span>
        </a>
      </div>

    </div>

  </div>
</section>
    </main>
  )
}

export default App