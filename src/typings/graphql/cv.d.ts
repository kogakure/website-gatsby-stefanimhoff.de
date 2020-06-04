export type CvExperience = {
  company: string;
  duration: string;
  location: string;
  tasks: string[];
  title: string;
  url?: string;
};

export type CvEducation = {
  degree: string;
  duration: string;
  location: string;
  school: string;
  url?: string;
};

export type CvSkill = {
  headline: string;
  tags: string[];
};

export type CvLanguage = {
  language: string;
  level: string;
};

export type CvProject = {
  description: string;
  notes: string[];
  title: string;
  url?: string;
};

export type CvItem = {
  personal: {
    name: string;
    tagline: string;
  };
  summary: {
    headline: string;
    text: string;
  };
  experience: {
    headline: string;
    items: CvExperience[];
  };
  education: {
    headline: string;
    items: CvEducation[];
  };
  skills: {
    headline: string;
    items: CvSkill[];
  };
  languages: {
    headline: string;
    items: CvLanguage[];
  };
  awards: {
    headline: string;
    items: string[];
  };
  interests: {
    headline: string;
    items: string[];
  };
  projects: {
    headline: string;
    items: CvProject[];
  };
};

export type Cv = {
  nodes: CvItem[];
};

export type CvQueryData = {
  allCvYaml: Cv;
};
