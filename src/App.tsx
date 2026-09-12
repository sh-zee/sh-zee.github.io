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
  type LucideIcon,
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
} from './components/react-bits';
import {
  experience,
  externalLinks,
  hobbies,
  profile,
  projects,
  skills,
  type HobbyId,
  type ProjectId,
} from './content';

interface ProjectPresentation {
  color: string;
  files: string[];
}

const projectPresentation: Record<ProjectId, ProjectPresentation> = {
  emanda: {
    color: '#5227FF',
    files: ['DDD', '250 APIs', 'AWS'],
  },
  fankave: {
    color: '#7C5CFC',
    files: ['Node 24', 'TDD', 'Security'],
  },
  kim: {
    color: '#C06CFF',
    files: ['OpenAI', 'Graph', 'NestJS'],
  },
  'open-aiq': {
    color: '#FF9FFC',
    files: ['IoT', 'Open', 'Air'],
  },
};

interface HobbyPresentation {
  icon: LucideIcon;
  image: string;
}

const hobbyPresentation: Record<HobbyId, HobbyPresentation> = {
  reading: { icon: BookOpen, image: '/hobbies/reading.svg' },
  travel: { icon: Plane, image: '/hobbies/travel.svg' },
  chess: { icon: Trophy, image: '/hobbies/chess.svg' },
};

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
                {profile.name}
              </p>
              <h1 className="m-0 flex min-h-[1em] items-center gap-[0.18em] whitespace-nowrap text-left text-[clamp(1.5rem,3.2vw,3.5rem)] leading-none font-medium tracking-[-0.055em]">
                <RotatingText
                  texts={profile.roles}
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
              alt={profile.name}
            />
            <div className="pointer-events-auto mt-2 flex flex-wrap justify-center gap-3 text-[#aaa2af]">
              <a
                className="grid size-12 place-items-center rounded-full border border-white/10 bg-white/5 transition-all hover:border-white/20 hover:bg-white/10 hover:text-white"
                href={profile.socialUrls.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                title="GitHub"
              >
                <FaGithub size={24} />
              </a>
              <a
                className="grid size-12 place-items-center rounded-full border border-white/10 bg-white/5 transition-all hover:border-white/20 hover:bg-white/10 hover:text-white"
                href={profile.socialUrls.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                title="LinkedIn"
              >
                <FaLinkedinIn size={24} />
              </a>
              <a
                className="grid size-12 place-items-center rounded-full border border-white/10 bg-white/5 transition-all hover:border-white/20 hover:bg-white/10 hover:text-white"
                href={`mailto:${profile.email}`}
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
            {projects.map((project) => {
              const presentation = projectPresentation[project.id];

              return (
                <article
                  className="min-w-0 rounded-[14px] border border-white/10 bg-[#19141fb8] p-6"
                  key={project.id}
                >
                  <div className="pointer-events-auto grid h-[170px] place-items-center">
                    <Folder
                      color={presentation.color}
                      size={1.25}
                      items={presentation.files.map((file) => (
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
              );
            })}
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
                  key={item.id}
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
            href={externalLinks.medium}
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
                images={hobbies.map(
                  (hobby) => hobbyPresentation[hobby.id].image,
                )}
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
              {hobbies.map((hobby) => {
                const Icon = hobbyPresentation[hobby.id].icon;

                return (
                  <div
                    className="grid grid-cols-[45px_1fr] gap-5 border-b border-white/10 py-6"
                    key={hobby.id}
                  >
                    <span className="text-[#ff9ffc]">
                      <Icon />
                    </span>
                    <span className="text-xs leading-relaxed text-[#938b99]">
                      <b className="mb-1 block text-base text-[#f7f3fa]">
                        {hobby.title}
                      </b>
                      {hobby.description}
                    </span>
                  </div>
                );
              })}
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
            href={`mailto:${profile.email}`}
          >
            {profile.email} <ExternalLink size={16} />
          </a>
          <div
            className={`${monoClass} mt-8 flex items-center justify-center gap-2 text-[0.56rem] text-[#777079]`}
          >
            <MapPin size={14} /> {profile.locationLabel}
          </div>
        </section>
      </main>

      <footer
        className={`${monoClass} pointer-events-none relative z-10 mx-auto flex w-[88vw] max-w-[1120px] items-center justify-between border-t border-white/10 py-8 text-[0.58rem] text-[#777079] max-md:mb-24 max-md:flex-col max-md:items-start max-md:gap-3`}
      >
        <span className="font-['Bricolage_Grotesque'] text-base font-bold text-[#ff9ffc]">
          ZI.
        </span>
        <p>{profile.professionalSummary}</p>
        <small>
          © {new Date().getFullYear()} {profile.name}
        </small>
      </footer>
    </div>
  );
}

export default App;
