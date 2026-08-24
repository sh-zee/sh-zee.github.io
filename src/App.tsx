import { useState } from "react";
import {
  BookOpen, BriefcaseBusiness, Code2, ExternalLink, FolderCode, Github,
  Heart, House, Linkedin, Mail, MapPin, Newspaper, Plane, Trophy,
} from "lucide-react";
import Antigravity from "./components/Antigravity";
import BounceCards from "./components/BounceCards";
import Dock from "./components/Dock";
import Folder from "./components/Folder";
import MagicBento, { type BentoCardProps } from "./components/MagicBento";
import ProfileCard from "./components/ProfileCard";
import RotatingText from "./components/RotatingText";
import ScrollStack, { ScrollStackItem } from "./components/ScrollStack";
import "./App.css";

const roles = [
  "Senior Backend Engineer", "Senior Software Engineer", "Senior Full-Stack Engineer",
  "Rust Engineer", "IoT Engineer",
];

const skills: BentoCardProps[] = [
  { label: "Core", title: "Backend systems", description: "NestJS · Node.js · Go · Python" },
  { label: "Systems", title: "Rust & performance", description: "Rust · C/C++ · concurrency · profiling" },
  { label: "Infrastructure", title: "Cloud architecture", description: "AWS · GCP · serverless · DevOps" },
  { label: "Data", title: "Storage & messaging", description: "PostgreSQL · Kafka · Redis · DynamoDB" },
  { label: "Connected", title: "IoT engineering", description: "Sensors · telemetry · monitoring · edge" },
  { label: "Intelligence", title: "Applied AI", description: "OpenAI · RAG · vector DBs · LangChain" },
];

const projects = [
  { name: "Emanda", kind: "FinTech · Digital accountant", summary: "DDD financial platform with 250+ endpoints.", impact: "8× database performance", color: "#8b5cf6", files: ["DDD", "250 APIs", "AWS"] },
  { name: "FanKave", kind: "SaaS · Event engagement", summary: "Enterprise engagement infrastructure for event apps.", impact: "5× faster APIs", color: "#06b6d4", files: ["Node 24", "TDD", "Security"] },
  { name: "KIM", kind: "AI · Professional mentor", summary: "Private, context-aware AI career mentorship.", impact: "Graph-powered context", color: "#f59e0b", files: ["OpenAI", "Graph", "NestJS"] },
  { name: "Open-AIQ", kind: "Open source · IoT", summary: "Crowdsourced real-time air quality monitoring.", impact: "Open environmental data", color: "#b8f35b", files: ["IoT", "Open", "Air"] },
];

const experience = [
  { dates: "Dec 2025 — Jul 2026", role: "Software Engineer", company: "FanKave · Santa Clara, CA", body: "Accelerated APIs by 5×, created the first meaningful test suite, and eliminated critical security vulnerabilities through a complete Node.js modernization.", facts: ["400ms → 100ms", "0% → 25% coverage", "35 major vulnerabilities resolved"] },
  { dates: "Mar 2023 — Nov 2025", role: "Lead Software Engineer", company: "Avant Tech · Victoria, Australia", body: "Led Emanda from architecture through delivery using DDD, a modular monolith, TDD, AWS, and applied AI.", facts: ["250+ endpoints", "8× faster database", "80% less memory"] },
  { dates: "Feb 2019 — Feb 2023", role: "Senior Software Engineer", company: "CYBR Node · Austin, TX", body: "Led five engineers while scaling backend infrastructure for multinational clients and mentoring three engineers into senior roles.", facts: ["2.3M+ users", "150TB data", "70% velocity increase"] },
  { dates: "Jun 2017 — Jan 2019", role: "Full-Stack & IoT Developer", company: "Makeistan · Pakistan", body: "Built connected monitoring products for research centers, startups, small businesses, and multinational companies.", facts: ["Cold-chain monitoring", "CO₂ systems", "Warehouse telemetry"] },
];

const mediumUrl = "https://medium.com";

function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function isLikelyInEurope() {
  const zone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  return zone.startsWith("Europe/") || ["Atlantic/Canary", "Atlantic/Faroe", "Atlantic/Madeira", "Atlantic/Reykjavik"].includes(zone);
}

function App() {
  const [inEurope] = useState(isLikelyInEurope);
  const dockItems = [
    { icon: <House size={18}/>, label: "Info", onClick: () => scrollToId("info") },
    { icon: <Code2 size={18}/>, label: "Skills", onClick: () => scrollToId("skills") },
    { icon: <FolderCode size={18}/>, label: "Projects", onClick: () => scrollToId("projects") },
    { icon: <BriefcaseBusiness size={18}/>, label: "Experience", onClick: () => scrollToId("experience") },
    { icon: <Newspaper size={18}/>, label: "Writing", onClick: () => scrollToId("blogs") },
    { icon: <Heart size={18}/>, label: "Hobbies", onClick: () => scrollToId("hobbies") },
    { icon: <Mail size={18}/>, label: "Contact", onClick: () => { window.location.href = "mailto:hello.zeesh@gmail.com"; } },
  ];

  return <div className="portfolio-shell">
    <div className="antigravity-bg" aria-hidden="true"><Antigravity count={170} color="#b8f35b" particleSize={1.15} ringRadius={7} magnetRadius={8} waveAmplitude={.55} waveSpeed={.25} autoAnimate particleShape="sphere"/></div>
    <div className="dock-position"><Dock items={dockItems} baseItemSize={42} magnification={58} panelHeight={56} dockHeight={150} distance={130}/></div>

    <main>
      <section className="info-section section" id="info">
        <div className="info-copy">
          <p className="kicker"><span/> Available for remote work</p>
          <p className="intro-label">Hello, I’m</p>
          <h1>Zeeshan<br/>Iqbal<span>.</span></h1>
          <div className="role-line"><span>I work as a</span><RotatingText texts={roles} rotationInterval={2400} mainClassName="rotating-role" splitBy="words" staggerDuration={.025}/></div>
          <p className="intro-body">Nine years engineering dependable backend systems, connected products, and cloud platforms across FinTech, SaaS, AI, and IoT.</p>
          <div className="intro-actions"><a className="primary-link" href="mailto:hello.zeesh@gmail.com">Let’s build something <ExternalLink size={16}/></a><a href="https://github.com/sh-zee" target="_blank" rel="noreferrer"><Github size={18}/> GitHub</a><a href="https://www.linkedin.com/in/zee-sh" target="_blank" rel="noreferrer"><Linkedin size={18}/> LinkedIn</a></div>
          <div className="hero-stats"><div><strong>9</strong><span>years</span></div><div><strong>2.3M+</strong><span>users scaled</span></div><div><strong>150TB</strong><span>data handled</span></div></div>
        </div>
        <div className="profile-wrap"><ProfileCard avatarUrl="/profile-photo.jpg" miniAvatarUrl="/profile-photo.jpg" iconUrl="/profile-photo.jpg" grainUrl="" name="Zeeshan Iqbal" title="Senior Backend Engineer" handle="sh-zee" status="Available" contactText="Email me" innerGradient="linear-gradient(145deg,#17201d 0%,#312e8155 52%,#164e6355 100%)" behindGlowColor="rgba(184,243,91,.28)" onContactClick={() => { window.location.href = "mailto:hello.zeesh@gmail.com"; }}/></div>
      </section>

      <section className="section" id="skills">
        <header className="section-head"><p>01 / Expertise</p><h2>A practical toolkit for<br/><em>systems that endure.</em></h2><span>Capability backed by shipped work—not a keyword inventory.</span></header>
        <div className="bento-wrap"><MagicBento items={skills} textAutoHide={false} enableTilt enableStars enableSpotlight enableBorderGlow glowColor="184, 243, 91" particleCount={8}/></div>
      </section>

      <section className="section" id="projects">
        <header className="section-head"><p>02 / Selected projects</p><h2>Open the work.<br/><em>See what’s inside.</em></h2><span>Four products spanning finance, events, AI mentorship, and environmental IoT.</span></header>
        <div className="folder-grid">{projects.map(project => <article className="folder-project" key={project.name}>
          <div className="folder-stage"><Folder color={project.color} size={1.25} items={project.files.map(file => <span className="paper-copy" key={file}>{file}</span>)}/></div>
          <p className="project-kind">{project.kind}</p><h3>{project.name}</h3><p>{project.summary}</p><strong>{project.impact}</strong>
        </article>)}</div>
      </section>

      <section className="experience-section section" id="experience">
        <header className="section-head"><p>03 / Work experience</p><h2>Nine years of<br/><em>shipping and scaling.</em></h2><span>Scroll through the roles that shaped how I design, lead, and deliver.</span></header>
        <ScrollStack useWindowScroll itemDistance={90} itemScale={.025} itemStackDistance={26} stackPosition="16%" baseScale={.9} rotationAmount={.4} blurAmount={.3}>
          {experience.map((item, index) => <ScrollStackItem key={item.company} itemClassName={`experience-card experience-${index + 1}`}><div className="experience-top"><span>{item.dates}</span><b>0{index + 1}</b></div><p className="company">{item.company}</p><h3>{item.role}</h3><p className="experience-body">{item.body}</p><div className="fact-row">{item.facts.map(fact => <span key={fact}>{fact}</span>)}</div></ScrollStackItem>)}
        </ScrollStack>
      </section>

      <section className="section writing-section" id="blogs">
        <header className="section-head"><p>04 / Writing</p><h2>Notes from the<br/><em>engineering trenches.</em></h2><span>I’m working through a writer’s block. The useful ideas are still accumulating.</span></header>
        <a className="medium-card" href={mediumUrl} target="_blank" rel="noreferrer"><div><span>Coming to Medium</span><h3>Architecture, performance, IoT—and the trade-offs between them.</h3><p>Expect field notes on practical DDD, database migrations, testing inherited systems, Rust backends, and connected products.</p></div><div className="medium-arrow"><ExternalLink size={28}/><small>Read on Medium</small></div></a>
      </section>

      <section className="section hobbies-section" id="hobbies">
        <header className="section-head"><p>05 / Beyond the terminal</p><h2>The things that keep<br/><em>my perspective wide.</em></h2><span>Reading for depth, travel for context, chess for the pleasure of thinking ahead.</span></header>
        <div className="hobbies-layout"><BounceCards images={["/hobbies/reading.svg", "/hobbies/travel.svg", "/hobbies/chess.svg"]} containerWidth={520} containerHeight={390} enableHover transformStyles={["rotate(-9deg) translate(-145px)", "rotate(2deg)", "rotate(10deg) translate(145px)"]}/><div className="hobby-list"><div><BookOpen/><span><b>Reading</b>Systems, history, psychology, and anything that changes the frame.</span></div><div><Plane/><span><b>Travel</b>New cities, unfamiliar routines, and seeing how other people build.</span></div><div><Trophy/><span><b>Chess</b>Pattern recognition, patience, and the cost of the tempting move.</span></div></div></div>
      </section>

      <section className="contact-section section"><p className="kicker"><span/> Open to what’s next</p><h2>Have a hard problem?<br/><em>Let’s make it tractable.</em></h2><p>Available for senior backend roles, select freelance projects, and globally distributed teams.{inEurope && " Open to relocation across Europe."}</p><a className="primary-link" href="mailto:hello.zeesh@gmail.com">hello.zeesh@gmail.com <ExternalLink size={16}/></a><div className="location"><MapPin size={14}/> Pakistan · working globally</div></section>
    </main>

    <footer><span>ZI.</span><p>Senior Backend Engineer · Rust · IoT</p><small>© {new Date().getFullYear()} Zeeshan Iqbal</small></footer>
  </div>;
}

export default App;
