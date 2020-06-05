export type CvSummary = {
  headline: string;
  text: string;
};

export type CvPersonal = {
  name: string;
  tagline: string;
};

export type CvExperienceItem = {
  company: string;
  duration: string;
  location: string;
  tasks: string[];
  title: string;
  url?: string;
};

export type CvExperience = {
  headline: string;
  items: CvExperienceItem[];
};

export type CvEducationItem = {
  degree: string;
  duration: string;
  location: string;
  school: string;
  url?: string;
};

export type CvEducation = {
  headline: string;
  items: CvEducationItem[];
};

export type CvSkillsItem = {
  headline: string;
  tags: string[];
};

export type CvSkills = {
  headline: string;
  items: CvSkillsItem[];
};

export type CvLanguagesItem = {
  language: string;
  level: string;
};

export type CvLanguages = {
  headline: string;
  items: CvLanguagesItem[];
};

export type CvAwards = {
  headline: string;
  items: string[];
};

export type CvInterests = {
  headline: string;
  items: string[];
};

export type CvItem = {
  personal: CvPersonal;
  summary: CvSummary;
  experience: CvExperience;
  education: CvEducation;
  skills: CvSkills;
  languages: CvLanguages;
  awards: CvAwards;
  interests: CvInterests;
};

export type Cv = {
  nodes: CvItem[];
};

export type CvQueryData = {
  allCvYaml: Cv;
};
