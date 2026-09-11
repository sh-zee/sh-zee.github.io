import { useEffect, useState } from 'react';
import {
  BookOpen,
  BriefcaseBusiness,
  Code2,
  ExternalLink,
  FolderCode,
  Heart,
  House,
  Mail,
  MapPin,
  Newspaper,
  Plane,
  Trophy,
} from 'lucide-react';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa6';
import { Kicker, SectionHeader } from './components/portfolio';
import {
  Antigravity,
  BounceCards,
  Folder,
  MagicBento,
  RotatingText,
  ScrollStack,
  ScrollStackItem,
  type BentoCardProps,
} from './components/react-bits';

const roles = [
  ' Senior Software ',
  ' Senior Backend. ',
  'Senior Full-Stack',
  '       IoT       ',
  '       Rust      ',
];

const skills: BentoCardProps[] = [
  {
    label: 'Core',
    title: 'Backend systems',
    description: 'NestJS · Node.js · Go · Python',
  },
  {
    label: 'Systems',
    title: 'Rust & performance',
    description: 'Rust · C/C++ · concurrency · profiling',
  },
  {
    label: 'Infrastructure',
    title: 'Cloud architecture',
    description: 'AWS · GCP · serverless · DevOps',
  },
  {
    label: 'Data',
    title: 'Storage & messaging',
    description: 'PostgreSQL · Kafka · Redis · DynamoDB',
  },
  {
    label: 'Connected',
    title: 'IoT engineering',
    description: 'Sensors · telemetry · monitoring · edge',
  },
  {
    label: 'Intelligence',
    title: 'Applied AI',
    description: 'OpenAI · RAG · vector DBs · LangChain',
  },
];

const projects = [
  {
    name: 'Emanda',
    kind: 'FinTech · Digital accountant',
    summary: 'DDD financial platform with 250+ endpoints.',
    impact: '8× database performance',
    color: '#5227FF',
    files: ['DDD', '250 APIs', 'AWS'],
  },
  {
    name: 'FanKave',
    kind: 'SaaS · Event engagement',
    summary: 'Enterprise engagement infrastructure for event apps.',
    impact: '5× faster APIs',
    color: '#7C5CFC',
    files: ['Node 24', 'TDD', 'Security'],
  },
  {
    name: 'KIM',
    kind: 'AI · Professional mentor',
    summary: 'Private, context-aware AI career mentorship.',
    impact: 'Graph-powered context',
    color: '#C06CFF',
    files: ['OpenAI', 'Graph', 'NestJS'],
  },
  {
    name: 'Open-AIQ',
    kind: 'Open source · IoT',
    summary: 'Crowdsourced real-time air quality monitoring.',
    impact: 'Open environmental data',
    color: '#FF9FFC',
    files: ['IoT', 'Open', 'Air'],
  },
];

const experience = [
  {
    dates: 'Dec 2025 — Jul 2026',
    role: 'Software Engineer',
    company: 'FanKave · Santa Clara, CA',
    body: 'Accelerated APIs by 5×, created the first meaningful test suite, and eliminated critical security vulnerabilities through a complete Node.js modernization.',
    facts: [
      '400ms → 100ms',
      '0% → 25% coverage',
      '35 major vulnerabilities resolved',
    ],
  },
  {
    dates: 'Mar 2023 — Nov 2025',
    role: 'Lead Software Engineer',
    company: 'Avant Tech · Victoria, Australia',
    body: 'Led Emanda from architecture through delivery using DDD, a modular monolith, TDD, AWS, and applied AI.',
    facts: ['250+ endpoints', '8× faster database', '80% less memory'],
  },
  {
    dates: 'Feb 2019 — Feb 2023',
    role: 'Senior Software Engineer',
    company: 'CYBR Node · Austin, TX',
    body: 'Led five engineers while scaling backend infrastructure for multinational clients and mentoring three engineers into senior roles.',
    facts: ['2.3M+ users', '150TB data', '70% velocity increase'],
  },
  {
    dates: 'Jun 2017 — Jan 2019',
    role: 'Full-Stack & IoT Developer',
    company: 'Makeistan · Pakistan',
    body: 'Built connected monitoring products for research centers, startups, small businesses, and multinational companies.',
    facts: ['Cold-chain monitoring', 'CO₂ systems', 'Warehouse telemetry'],
  },
];

const sectionClass =
  'mx-auto my-14 w-[88vw] max-w-[1120px] scroll-mt-12 rounded-[28px] border border-white/10 bg-white/[0.055] px-[clamp(1.25rem,4vw,4rem)] py-12 shadow-[0_24px_80px_rgba(0,0,0,0.24)] backdrop-blur-md md:my-20 md:py-16';
const monoClass = "font-['Google_Sans_Code'] uppercase tracking-[0.12em]";
const sectionIds = [
  'info',
  'skills',
  'projects',
  'experience',
  'blogs',
  'hobbies',
  'contact',
];

function isLikelyInEurope() {
  const zone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  return (
    zone.startsWith('Europe/') ||
    [
      'Atlantic/Canary',
      'Atlantic/Faroe',
      'Atlantic/Madeira',
      'Atlantic/Reykjavik',
    ].includes(zone)
  );
}

function App() {
  const [inEurope] = useState(isLikelyInEurope);
  const [activeSection, setActiveSection] = useState('info');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target.id) setActiveSection(visible.target.id);
      },
      { rootMargin: '-30% 0px -55% 0px', threshold: [0, 0.2, 0.5] },
    );

    sectionIds.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const dockItems = [
    {
      icon: <House size={18} />,
      label: 'Info',
      href: '#info',
      className: activeSection === 'info' ? 'dock-item--active' : undefined,
    },
    {
      icon: <Code2 size={18} />,
      label: 'Skills',
      href: '#skills',
      className: activeSection === 'skills' ? 'dock-item--active' : undefined,
    },
    {
      icon: <FolderCode size={18} />,
      label: 'Projects',
      href: '#projects',
      className: activeSection === 'projects' ? 'dock-item--active' : undefined,
    },
    {
      icon: <BriefcaseBusiness size={18} />,
      label: 'Experience',
      href: '#experience',
      className:
        activeSection === 'experience' ? 'dock-item--active' : undefined,
    },
    {
      icon: <Newspaper size={18} />,
      label: 'Writing',
      href: '#blogs',
      className: activeSection === 'blogs' ? 'dock-item--active' : undefined,
    },
    {
      icon: <Heart size={18} />,
      label: 'Hobbies',
      href: '#hobbies',
      className: activeSection === 'hobbies' ? 'dock-item--active' : undefined,
    },
    {
      icon: <Mail size={18} />,
      label: 'Contact',
      href: '#contact',
      className: activeSection === 'contact' ? 'dock-item--active' : undefined,
    },
  ];

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#120f17] font-['Bricolage_Grotesque'] text-[#f7f3fa] selection:bg-[#ff9ffc] selection:text-[#1a1020]">
      <div className="persistent-stars pointer-events-none fixed inset-0 z-0" />
      <div
        className="pointer-events-auto fixed inset-0 z-0 opacity-100 motion-reduce:hidden"
        aria-hidden="true"
      >
        <Antigravity
          count={120}
          color="#FF9FFC"
          particleSize={1}
          ringRadius={7}
          magnetRadius={8}
          waveAmplitude={0.2}
          waveSpeed={0.12}
          autoAnimate
          particleShape="sphere"
        />
      </div>

      <nav
        className="fixed top-1/2 right-3 z-50 flex -translate-y-1/2 flex-col gap-2 rounded-2xl border border-white/10 bg-[#18131fb8] p-2 backdrop-blur-xl max-md:right-1 max-md:scale-[0.82]"
        aria-label="Page sections"
      >
        {dockItems.map((item) => (
          <a
            className={`group relative grid size-11 place-items-center rounded-xl border bg-[#211a29] text-[#ede7f1] transition-all hover:border-white/25 hover:text-white ${item.className ?? 'border-white/10'}`}
            href={item.href}
            aria-label={item.label}
            aria-current={item.className ? 'location' : undefined}
            key={item.href}
          >
            {item.icon}
            <span className="pointer-events-none absolute top-1/2 right-[calc(100%+0.65rem)] -translate-y-1/2 rounded-md border border-white/10 bg-[#211a29] px-2 py-1 text-xs whitespace-nowrap opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
              {item.label}
            </span>
          </a>
        ))}
      </nav>

      <main className="pointer-events-none relative z-10 [&_a]:pointer-events-auto [&_button]:pointer-events-auto [&_[role=button]]:pointer-events-auto">
        <section
          className={`${sectionClass} grid items-center gap-10 lg:grid-cols-[1.5fr_0.5fr]`}
          id="info"
        >
          <div>
            <div className="my-10">
              <p className={`${monoClass} mb-5 text-xs text-[#aaa2af]`}>
                Zeeshan Iqbal
              </p>
              <h1 className="m-0 flex min-h-[1em] items-center gap-[0.18em] whitespace-nowrap text-left text-[clamp(1.5rem,3.2vw,3.5rem)] leading-none font-medium tracking-[-0.055em]">
                <RotatingText
                  texts={roles}
                  rotationInterval={2400}
                  mainClassName="inline-flex shrink-0 justify-start whitespace-pre text-[#ff9ffc] [&_.text-rotate-lines]:items-start"
                  splitLevelClassName="justify-start whitespace-pre"
                  staggerDuration={0.025}
                />
                <span>Engineer</span>
              </h1>
            </div>
          </div>

          <div className="flex flex-col items-center gap-3">
            <img
              className="h-auto w-full max-w-80 rounded-3xl object-contain shadow-[0_20px_55px_rgba(0,0,0,0.38)]"
              src="/profile-photo.jpg"
              alt="Zeeshan Iqbal"
            />
            <div className="pointer-events-auto mt-2 flex flex-wrap justify-center gap-3 text-[#aaa2af]">
              <a
                className="grid size-12 place-items-center rounded-full border border-white/10 bg-white/5 transition-all hover:border-white/20 hover:bg-white/10 hover:text-white"
                href="https://github.com/sh-zee"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                title="GitHub"
              >
                <FaGithub size={24} />
              </a>
              <a
                className="grid size-12 place-items-center rounded-full border border-white/10 bg-white/5 transition-all hover:border-white/20 hover:bg-white/10 hover:text-white"
                href="https://www.linkedin.com/in/zee-sh"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                title="LinkedIn"
              >
                <FaLinkedinIn size={24} />
              </a>
              <a
                className="grid size-12 place-items-center rounded-full border border-white/10 bg-white/5 transition-all hover:border-white/20 hover:bg-white/10 hover:text-white"
                href="mailto:hello.zeesh@gmail.com"
                aria-label="Email"
                title="Email"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
        </section>

        <section className={sectionClass} id="skills">
          <SectionHeader
            index="01 / Expertise"
            title="A practical toolkit for"
            emphasis="systems that endure."
            summary="Capability backed by shipped work—not a keyword inventory."
          />
          <div className="pointer-events-auto [&_.card-grid]:!max-w-none [&_.card-grid]:gap-3 [&_.magic-bento-card]:!rounded-[14px] [&_.magic-bento-card]:!border-white/10 [&_.magic-bento-card]:!bg-[#19141f] [&_.magic-bento-card]:!shadow-none [&_.magic-bento-card__description]:!text-[#938b99] [&_.magic-bento-card__title]:!font-['Bricolage_Grotesque']">
            <MagicBento
              items={skills}
              textAutoHide={false}
              enableStars={false}
              enableSpotlight
              enableBorderGlow
              glowColor="132, 0, 255"
              particleCount={0}
              enableTilt={false}
              enableMagnetism={false}
            />
          </div>
        </section>

        <section className={sectionClass} id="projects">
          <SectionHeader
            index="02 / Selected projects"
            title="Open the work."
            emphasis="See what’s inside."
            summary="Four products spanning finance, events, AI mentorship, and environmental IoT."
          />
          <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
            {projects.map((project) => (
              <article
                className="min-w-0 rounded-[14px] border border-white/10 bg-[#19141fb8] p-6"
                key={project.name}
              >
                <div className="pointer-events-auto grid h-[170px] place-items-center">
                  <Folder
                    color={project.color}
                    size={1.25}
                    items={project.files.map((file) => (
                      <span
                        className={`${monoClass} grid size-full place-items-center text-[0.52rem] font-bold text-[#19141f]`}
                        key={file}
                      >
                        {file}
                      </span>
                    ))}
                  />
                </div>
                <p
                  className={`${monoClass} mt-4 mb-2 text-[0.56rem] text-[#817a85]`}
                >
                  {project.kind}
                </p>
                <h3 className="mb-3 text-3xl tracking-[-0.05em]">
                  {project.name}
                </h3>
                <p className="min-h-16 text-xs leading-relaxed text-[#938b99]">
                  {project.summary}
                </p>
                <strong
                  className={`${monoClass} text-[0.6rem] font-medium text-[#ff9ffc]`}
                >
                  {project.impact}
                </strong>
              </article>
            ))}
          </div>
        </section>

        <section className={`${sectionClass} overflow-hidden`} id="experience">
          <div>
            <SectionHeader
              index="03 / Work experience"
              title="Nine years of"
              emphasis="shipping and scaling."
              summary="Scroll through the roles that shaped how I design, lead, and deliver."
            />
          </div>
          <div className="pointer-events-auto [&_.scroll-stack-inner]:!pt-12 [&_.scroll-stack-inner]:!pb-80 [&_.scroll-stack-scroller]:!h-auto [&_.scroll-stack-scroller]:!overflow-visible">
            <ScrollStack
              useWindowScroll
              itemDistance={90}
              itemScale={0.025}
              itemStackDistance={26}
              stackPosition="16%"
              baseScale={0.9}
              rotationAmount={0.4}
              blurAmount={0.3}
            >
              {experience.map((item, index) => (
                <ScrollStackItem
                  key={item.company}
                  itemClassName="!mx-auto !min-h-80 !w-full !max-w-[900px] !rounded-2xl !border !border-white/10 !bg-[#19141f] !p-10 !shadow-[0_20px_55px_rgba(0,0,0,0.2)] max-md:!min-h-[430px] max-md:!p-8"
                >
                  <div
                    className={`${monoClass} flex justify-between text-[0.62rem] font-medium text-[#ff9ffc]`}
                  >
                    <span>{item.dates}</span>
                    <b className="text-5xl leading-none text-white/10">
                      0{index + 1}
                    </b>
                  </div>
                  <p className="mt-12 mb-2 text-xs text-[#88818d]">
                    {item.company}
                  </p>
                  <h3 className="m-0 text-[clamp(2rem,4vw,4rem)] tracking-[-0.055em]">
                    {item.role}
                  </h3>
                  <p className="my-5 max-w-3xl leading-relaxed text-[#9d96a2]">
                    {item.body}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {item.facts.map((fact) => (
                      <span
                        className={`${monoClass} border border-white/10 px-3 py-2 text-[0.56rem] text-[#bbb3bf]`}
                        key={fact}
                      >
                        {fact}
                      </span>
                    ))}
                  </div>
                </ScrollStackItem>
              ))}
            </ScrollStack>
          </div>
        </section>

        <section className={sectionClass} id="blogs">
          <SectionHeader
            index="04 / Writing"
            title="Notes from the"
            emphasis="engineering trenches."
            summary="I’m working through a writer’s block. The useful ideas are still accumulating."
          />
          <a
            className="grid gap-8 rounded-[14px] border border-[#ff9ffc2e] bg-[linear-gradient(120deg,rgba(82,39,255,.13),rgba(255,159,252,.055))] p-8 transition hover:-translate-y-1 hover:border-[#ff9ffc70] md:grid-cols-[1fr_180px] md:p-12"
            href="https://medium.com"
            target="_blank"
            rel="noreferrer"
          >
            <div>
              <span
                className={`${monoClass} text-[0.62rem] font-medium text-[#ff9ffc]`}
              >
                Coming to Medium
              </span>
              <h3 className="my-4 max-w-4xl text-[clamp(1.9rem,3.4vw,3.3rem)] leading-tight tracking-[-0.05em]">
                Architecture, performance, IoT—and the trade-offs between them.
              </h3>
              <p className="max-w-3xl leading-relaxed text-[#938b99]">
                Expect field notes on practical DDD, database migrations,
                testing inherited systems, Rust backends, and connected
                products.
              </p>
            </div>
            <div className="flex flex-col items-start justify-between gap-8 md:items-end">
              <ExternalLink size={28} />
              <small className={`${monoClass} text-[0.58rem]`}>
                Read on Medium
              </small>
            </div>
          </a>
        </section>

        <section className={sectionClass} id="hobbies">
          <SectionHeader
            index="05 / Beyond the terminal"
            title="The things that keep"
            emphasis="my perspective wide."
            summary="Reading for depth, travel for context, chess for the pleasure of thinking ahead."
          />
          <div className="grid min-h-[440px] items-center gap-12 lg:grid-cols-2">
            <div className="pointer-events-auto justify-self-center max-md:-mx-24 max-md:scale-[0.68] [&_.card]:!border [&_.card]:!border-white/10 [&_.card]:!shadow-[0_22px_55px_rgba(0,0,0,0.28)]">
              <BounceCards
                images={[
                  '/hobbies/reading.svg',
                  '/hobbies/travel.svg',
                  '/hobbies/chess.svg',
                ]}
                containerWidth={520}
                containerHeight={390}
                enableHover
                transformStyles={[
                  'rotate(-9deg) translate(-145px)',
                  'rotate(2deg)',
                  'rotate(10deg) translate(145px)',
                ]}
              />
            </div>
            <div className="border-t border-white/10 max-md:-mt-20">
              {[
                [
                  <BookOpen key="icon" />,
                  'Reading',
                  'Systems, history, psychology, and anything that changes the frame.',
                ],
                [
                  <Plane key="icon" />,
                  'Travel',
                  'New cities, unfamiliar routines, and seeing how other people build.',
                ],
                [
                  <Trophy key="icon" />,
                  'Chess',
                  'Pattern recognition, patience, and the cost of the tempting move.',
                ],
              ].map(([icon, title, body]) => (
                <div
                  className="grid grid-cols-[45px_1fr] gap-5 border-b border-white/10 py-6"
                  key={String(title)}
                >
                  <span className="text-[#ff9ffc]">{icon}</span>
                  <span className="text-xs leading-relaxed text-[#938b99]">
                    <b className="mb-1 block text-base text-[#f7f3fa]">
                      {title}
                    </b>
                    {body}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className={`${sectionClass} text-center`} id="contact">
          <div className="flex justify-center">
            <Kicker>Open to what’s next</Kicker>
          </div>
          <h2 className="my-6 text-[clamp(3.2rem,6vw,5.8rem)] leading-none tracking-[-0.06em]">
            Have a hard problem?
            <br />
            <em className="font-light not-italic text-[#c6bdca]">
              Let’s make it tractable.
            </em>
          </h2>
          <p className="mx-auto mb-8 max-w-2xl leading-relaxed text-[#938b99]">
            Available for senior backend roles, select freelance projects, and
            globally distributed teams.
            {inEurope && ' Open to relocation across Europe.'}
          </p>
          <a
            className="inline-flex items-center gap-2 rounded-lg bg-[#5227ff] px-5 py-4 text-xs font-bold text-white shadow-[0_8px_30px_rgba(82,39,255,0.2)]"
            href="mailto:hello.zeesh@gmail.com"
          >
            hello.zeesh@gmail.com <ExternalLink size={16} />
          </a>
          <div
            className={`${monoClass} mt-8 flex items-center justify-center gap-2 text-[0.56rem] text-[#777079]`}
          >
            <MapPin size={14} /> Pakistan · working globally
          </div>
        </section>
      </main>

      <footer
        className={`${monoClass} pointer-events-none relative z-10 mx-auto flex w-[88vw] max-w-[1120px] items-center justify-between border-t border-white/10 py-8 text-[0.58rem] text-[#777079] max-md:mb-24 max-md:flex-col max-md:items-start max-md:gap-3`}
      >
        <span className="font-['Bricolage_Grotesque'] text-base font-bold text-[#ff9ffc]">
          ZI.
        </span>
        <p>Senior Backend Engineer · Rust · IoT</p>
        <small>© {new Date().getFullYear()} Zeeshan Iqbal</small>
      </footer>
    </div>
  );
}

export default App;
