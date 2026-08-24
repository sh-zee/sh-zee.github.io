import { useState } from "react";
import { ArrowDownRight, ArrowUpRight, BriefcaseBusiness, Check, Github, Linkedin, Mail, MapPin, Menu, X } from "lucide-react";
import "./App.css";

const projects = [
  { index: "01", name: "Emanda", type: "FinTech / Digital accountant", description: "A financial intelligence platform built around a modular, domain-driven architecture—turning complex accounting data into clear, actionable insight.", impact: ["250+ API endpoints", "8× database performance", "80% less memory"], stack: ["NestJS", "PostgreSQL", "AWS", "AI / LLMs"], accent: "violet" },
  { index: "02", name: "FanKave", type: "SaaS / Event engagement", description: "An enterprise event engagement platform embedded inside event apps, helping global organizations build more participatory experiences.", impact: ["5× faster APIs", "35 critical issues resolved", "Enterprise scale"], stack: ["Node.js", "TypeScript", "Testing", "Security"], accent: "cyan" },
  { index: "03", name: "KIM", type: "AI / Professional mentor", description: "A private AI mentor that uses professional context and graph-based knowledge to provide relevant, personalized career guidance.", impact: ["Context-aware guidance", "Graph knowledge", "Private product"], stack: ["OpenAI", "Graph DB", "NestJS", "Angular"], accent: "amber" },
];

const experience = [
  { date: "Dec 2025 — Jul 2026", role: "Software Engineer", company: "FanKave · Santa Clara, CA", detail: "Improved API performance by 5×, established the product's first meaningful test coverage, and led a security-focused Node.js modernization." },
  { date: "2023 — 2025", role: "Lead Software Engineer", company: "Avant Tech · Victoria, Australia", detail: "Led Emanda's architecture and delivery, using DDD, a modular monolith, TDD, AWS, and AI services to create a reliable FinTech platform." },
  { date: "2019 — 2023", role: "Senior Software Engineer", company: "CYBR Node · Austin, TX", detail: "Led five engineers and helped scale systems to 2.3M+ users and 150 TB of data while improving team velocity and mentoring three engineers into senior roles." },
  { date: "2017 — 2019", role: "Full-Stack & IoT Developer", company: "Makeistan · Pakistan", detail: "Built connected systems for cold-chain, CO₂, warehouse, and textile monitoring across research, startup, and enterprise environments." },
];

const tech = {
  Languages: ["Rust", "Go", "TypeScript", "Python", "C / C++"],
  Backend: ["NestJS", "Node.js", "Express", "Django", "Spring Boot"],
  "Data & messaging": ["PostgreSQL", "MongoDB", "DynamoDB", "Kafka", "Redis", "Couchbase"],
  "Cloud & AI": ["AWS", "GCP", "OpenAI", "RAG", "Vector DBs", "LangChain"],
};

function isLikelyInEurope() {
  const zone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  return zone.startsWith("Europe/") || ["Atlantic/Canary", "Atlantic/Faroe", "Atlantic/Madeira", "Atlantic/Reykjavik"].includes(zone);
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [inEurope] = useState(isLikelyInEurope);
  const [photoAvailable, setPhotoAvailable] = useState(true);
  return <div className="site-shell">
    <header className="nav-wrap">
      <a className="monogram" href="#top" aria-label="Zeeshan Iqbal home">ZI<span>.</span></a>
      <button className="menu-button" aria-label="Toggle navigation" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={20}/> : <Menu size={20}/>}</button>
      <nav className={menuOpen ? "nav-links open" : "nav-links"}>
        <a href="#work" onClick={() => setMenuOpen(false)}>Work</a><a href="#experience" onClick={() => setMenuOpen(false)}>Experience</a><a href="#about" onClick={() => setMenuOpen(false)}>About</a>
        <a className="nav-cta" href="mailto:hello.zeesh@gmail.com">Let's talk <ArrowUpRight size={15}/></a>
      </nav>
    </header>
    <main id="top">
      <section className="hero section-pad">
        <div className="hero-copy reveal">
          <div className="availability"><i/> Available for remote opportunities</div>
          <p className="eyebrow">Senior Backend Engineer · Rust · IoT</p>
          <h1>I engineer the systems <em>behind the experience.</em></h1>
          <p className="hero-lede">I'm Zeeshan—a backend-focused software engineer with 9 years of experience turning complex product ideas into dependable, scalable systems.</p>
          <div className="hero-actions"><a className="button primary" href="#work">Explore my work <ArrowDownRight size={17}/></a><a className="text-link" href="mailto:hello.zeesh@gmail.com">hello.zeesh@gmail.com <ArrowUpRight size={15}/></a></div>
        </div>
        <div className="hero-visual reveal delay-1" aria-label="Portrait of Zeeshan Iqbal">
          <div className="orbit orbit-one"/><div className="orbit orbit-two"/>
          <div className="portrait-frame">{photoAvailable ? <img src="/profile-photo.jpg" alt="Zeeshan Iqbal" onError={() => setPhotoAvailable(false)}/> : <span className="portrait-fallback">ZI</span>}</div>
          <div className="code-card"><span>system.profile</span><strong>backend_first</strong><small>reliable · scalable · human</small></div>
        </div>
        <div className="metric-strip"><div><strong>9</strong><span>years building<br/>production systems</span></div><div><strong>2.3M+</strong><span>users served by<br/>systems I've scaled</span></div><div><strong>150TB</strong><span>data infrastructure<br/>handled at scale</span></div><div><strong>5×</strong><span>API performance<br/>improvement</span></div></div>
      </section>
      <section className="projects section-pad" id="work">
        <div className="section-heading"><div><p className="eyebrow">Selected work</p><h2>Products with<br/><em>real-world weight.</em></h2></div><p>From financial intelligence to event platforms and AI mentorship—systems built to perform when the stakes are real.</p></div>
        <div className="project-list">{projects.map(project => <article className={`project-card ${project.accent}`} key={project.name}><div className="project-number">{project.index}</div><div className="project-main"><p className="project-type">{project.type}</p><h3>{project.name}</h3><p>{project.description}</p><div className="tags">{project.stack.map(item => <span key={item}>{item}</span>)}</div></div><div className="project-impact"><p>Selected impact</p>{project.impact.map(item => <span key={item}><Check size={13}/> {item}</span>)}</div></article>)}</div>
      </section>
      <section className="experience section-pad" id="experience">
        <div className="section-heading compact"><div><p className="eyebrow">Experience</p><h2>Nine years of<br/><em>shipping & scaling.</em></h2></div><p>Hands-on engineering, architectural ownership, and calm technical leadership across international teams.</p></div>
        <div className="timeline">{experience.map(item => <article key={item.company}><p className="timeline-date">{item.date}</p><div><h3>{item.role}</h3><p className="company">{item.company}</p></div><p className="timeline-detail">{item.detail}</p></article>)}</div>
      </section>
      <section className="about section-pad" id="about">
        <div className="about-intro"><p className="eyebrow">Under the hood</p><h2>Depth where it matters.<br/><em>Range where it helps.</em></h2><p>I work best at the intersection of product thinking and deep backend engineering: designing clear domains, choosing pragmatic architecture, and making software easier for the next engineer to change.</p></div>
        <div className="tech-grid">{Object.entries(tech).map(([group, items]) => <div className="tech-group" key={group}><h3>{group}</h3><p>{items.join(" · ")}</p></div>)}</div>
        <div className="principles"><span>01</span><p>Architecture should make the product easier to evolve, not merely look impressive on a diagram.</p><span>02</span><p>Tests are a design tool. They create the confidence needed to move quickly without gambling on quality.</p><span>03</span><p>Senior engineering means raising the capability of the entire team—not becoming its single point of failure.</p></div>
      </section>
      <section className="contact section-pad" id="contact">
        <div className="contact-glow"/><p className="eyebrow">Open to what's next</p><h2>Have a hard problem?<br/><em>Let's make it tractable.</em></h2><p className="contact-copy">Available for senior backend roles, select freelance projects, and ambitious teams working across borders.{inEurope && " Open to relocation opportunities across Europe."}</p><a className="button primary large" href="mailto:hello.zeesh@gmail.com">Start a conversation <ArrowUpRight size={18}/></a><div className="contact-meta"><span><MapPin size={15}/> Pakistan · working globally</span><span><BriefcaseBusiness size={15}/> Remote & async-friendly</span></div>
      </section>
    </main>
    <footer><a className="monogram" href="#top">ZI<span>.</span></a><p>Designed around systems, built with intention.</p><div className="socials"><a href="https://github.com/sh-zee" target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={18}/></a><a href="https://www.linkedin.com/in/zee-sh" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={18}/></a><a href="mailto:hello.zeesh@gmail.com" aria-label="Email"><Mail size={18}/></a></div></footer>
  </div>;
}
export default App;
