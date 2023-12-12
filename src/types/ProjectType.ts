interface ProjectType {
  image: string;
  name: string;
  tech: string[];
  links: {
    GitHub?: string;
    Live?: string;
    Vid?: string;
  };
  about: string;
  role: string;
}

export type { ProjectType };
