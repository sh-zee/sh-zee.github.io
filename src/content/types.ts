export interface ProfileContent {
  name: string;
  email: string;
  locationLabel: string;
  professionalSummary: string;
  roles: string[];
  socialUrls: {
    github: string;
    linkedin: string;
  };
}

export interface SkillContent {
  id: SkillId;
  label: string;
  title: string;
  description: string;
}

export type SkillId =
  'core' | 'systems' | 'infrastructure' | 'data' | 'connected' | 'intelligence';

export type ProjectId = 'emanda' | 'fankave' | 'kim' | 'open-aiq';

export interface ProjectContent {
  id: ProjectId;
  name: string;
  kind: string;
  summary: string;
  impact: string;
}

export type ExperienceId = 'fankave' | 'avant-tech' | 'cybr-node' | 'makeistan';

export interface ExperienceContent {
  id: ExperienceId;
  dates: string;
  role: string;
  company: string;
  body: string;
  facts: string[];
}

export type HobbyId = 'reading' | 'travel' | 'chess';

export interface HobbyContent {
  id: HobbyId;
  title: string;
  description: string;
}

export interface ExternalLinks {
  medium: string;
}
