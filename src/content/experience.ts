import type { ExperienceContent } from './types';

export const experience: ExperienceContent[] = [
  {
    id: 'fankave',
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
    id: 'avant-tech',
    dates: 'Mar 2023 — Nov 2025',
    role: 'Lead Software Engineer',
    company: 'Avant Tech · Victoria, Australia',
    body: 'Led Emanda from architecture through delivery using DDD, a modular monolith, TDD, AWS, and applied AI.',
    facts: ['250+ endpoints', '8× faster database', '80% less memory'],
  },
  {
    id: 'cybr-node',
    dates: 'Feb 2019 — Feb 2023',
    role: 'Senior Software Engineer',
    company: 'CYBR Node · Austin, TX',
    body: 'Led five engineers while scaling backend infrastructure for multinational clients and mentoring three engineers into senior roles.',
    facts: ['2.3M+ users', '150TB data', '70% velocity increase'],
  },
  {
    id: 'makeistan',
    dates: 'Jun 2017 — Jan 2019',
    role: 'Full-Stack & IoT Developer',
    company: 'Makeistan · Pakistan',
    body: 'Built connected monitoring products for research centers, startups, small businesses, and multinational companies.',
    facts: ['Cold-chain monitoring', 'CO₂ systems', 'Warehouse telemetry'],
  },
];
