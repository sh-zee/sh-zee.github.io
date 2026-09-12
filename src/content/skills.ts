import type { SkillContent } from './types';

export const skills: SkillContent[] = [
  {
    id: 'core',
    label: 'Core',
    title: 'Backend systems',
    description: 'NestJS · Node.js · Go · Python',
  },
  {
    id: 'systems',
    label: 'Systems',
    title: 'Rust & performance',
    description: 'Rust · C/C++ · concurrency · profiling',
  },
  {
    id: 'infrastructure',
    label: 'Infrastructure',
    title: 'Cloud architecture',
    description: 'AWS · GCP · serverless · DevOps',
  },
  {
    id: 'data',
    label: 'Data',
    title: 'Storage & messaging',
    description: 'PostgreSQL · Kafka · Redis · DynamoDB',
  },
  {
    id: 'connected',
    label: 'Connected',
    title: 'IoT engineering',
    description: 'Sensors · telemetry · monitoring · edge',
  },
  {
    id: 'intelligence',
    label: 'Intelligence',
    title: 'Applied AI',
    description: 'OpenAI · RAG · vector DBs · LangChain',
  },
];
