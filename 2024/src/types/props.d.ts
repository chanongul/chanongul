import type {
  CSSProperties,
  ChangeEvent,
  Dispatch,
  FormEvent,
  ReactNode,
  SetStateAction,
} from "react";
import { type QueryParams } from "sanity";

declare global {
  type ChildrenProps = Readonly<{ children?: ReactNode }>;

  type ClassProps = { className?: string };

  type SanityFetchProps = {
    query: string;
    qParams?: QueryParams;
  };

  type HomePageProps = {
    profileData: Profile;
    contactData: Contact[];
    educationData: Education[];
    experienceData: Experience[];
    skillsData: Skill[];
    skillTypesData: SkillType[];
    projectsData: Project[];
  };

  type Profile = {
    photo: string;
    illustration: string;
    statement: string;
    description: string;
  };

  type Contact = {
    logo: string;
    name: string;
    link: string;
    color: string;
    main: boolean;
  };

  type Education = {
    logo: string;
    name: string;
    level: string;
    major?: string;
    city: string;
    from: string;
    to: string;
    gpa: string;
    temp: string;
  };

  type Experience = {
    logo: string;
    name: string;
    title: string;
    from: string;
    to: string;
    description: string;
    skills: Skill[];
    projects: Project[];
  };

  type Skill = {
    logo: string;
    name: string;
    prof: number;
    type: string;
    subtype: string;
  };

  type SkillType = {
    name: string;
    subtypes: string[];
  };

  type SkillsByType = {
    [type: string]:
      | {
          [subtype: string]: Skill[];
        }
      | Skill[];
  };

  type URLWithName = {
    name: string;
    url: string;
  };

  type Project = {
    name: string;
    type: string[];
    preview: string;
    thumbnail: string;
    figma?: string;
    video?: string;
    images?: string[];
    description: string;
    contribution: string;
    from: string;
    to: string;
    links: URLWithName[];
    src: URLWithName[];
  };

  type ProfileSectionProps = Pick<Profile, "illustration">;

  type ProfileIlustrationProps = Pick<Profile, "illustration">;

  type ContactSectionProps = {
    contacts: Contact[];
  };

  type ContactCardProps = {
    contact: Contact;
  };

  type StatementSectionProps = Pick<Profile, "statement">;

  type ExperienceSectionProps = {
    education: Education[];
    experience: Experience[];
  };

  type ExperienceLinkProps = {
    header: string;
  };

  type ExperienceTileProps = {
    header: string;
    children: ReactNode;
    className?: string;
    style?: CSSProperties;
  };

  type ExperiencePartTileProps = {
    experience: Experience[];
  };

  type EducationPartTileProps = {
    education: Education[];
  };

  type ExperienceCardProps = {
    h1: string;
    h2: string;
    from: string;
    to: string;
  };

  type SkillsSectionProps = {
    skills: Skill[];
    skillTypes: SkillType[];
  };

  type SkillsTileProps = {
    type: string;
    skills: Skill[];
    index: number;
    typesCount: number;
  };

  type SkillsLinkProps = {
    containerRef: RefObject<HTMLElement>;
    type: string;
  };

  type SkillsCarouselProps = {
    containerRef: ForwardedRef<HTMLDivElement>;
    skills: Skill[];
  };

  type SkillCardProps = {
    logo: string;
    name: string;
    prof: number;
  };

  type ProjectsProps = {
    projects: Project[];
  };

  type ProjectPreviewsProps = {
    projects: Project[];
    count: number;
  };

  type ProjectLinkProps = {
    startYear: number;
    length: number;
    previewsCount: number;
  };

  type ProjectDetailPageProps = { params: { name: string } };
}

export {};
