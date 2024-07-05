import type {
  CSSProperties,
  ChangeEvent,
  Dispatch,
  FormEvent,
  ReactNode,
  SetStateAction,
} from "react";
import type { QueryParams } from "sanity";

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
    resume: string;
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
    city: string;
    description: string;
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
        }[]
      | Skill[];
  };

  type URLWithName = {
    name: string;
    url: string;
  };

  type Project = {
    name: string;
    slug: string;
    types: string[];
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
    stack: Skill[];
    process: string;
  };

  type ResumeProps = {
    resume: string;
  };

  type HomePageProfileSectionProps = Pick<Profile, "illustration">;

  type HomePageProfileIlustrationProps = Pick<Profile, "illustration">;

  type HomePageContactSectionProps = {
    contacts: Contact[];
    resume: string;
  };

  type HomePageContactCardProps = {
    contact: Contact;
  };

  type HomePageStatementSectionProps = Pick<Profile, "statement">;

  type HomePageExperienceSectionProps = {
    education: Education[];
    experience: Experience[];
  };

  type HomePageExperienceLinkProps = {
    header: string;
  };

  type HomePageExperienceTileProps = {
    header: string;
    children: ReactNode;
    className?: string;
    style?: CSSProperties;
  };

  type HomePageExperiencePartTileProps = {
    experience: Experience[];
  };

  type HomePageEducationPartTileProps = {
    education: Education[];
  };

  type HomePageExperienceCardProps = {
    h1: string;
    h2: string;
    from: string;
    to: string;
  };

  type HomePageSkillsSectionProps = {
    skills: Skill[];
    skillTypes: SkillType[];
  };

  type HomePageSkillsTileProps = {
    type: string;
    skills: Skill[];
    index: number;
    typesCount: number;
  };

  type HomePageSkillsLinkProps = {
    containerRef: RefObject<HTMLElement>;
    type: string;
  };

  type HomePageSkillsCarouselProps = {
    containerRef: ForwardedRef<HTMLDivElement>;
    skills: Skill[];
  };

  type SkillCardProps = {
    logo: string;
    name: string;
    prof: number;
    type?: string;
  };

  type HomePageProjectsSectionProps = {
    projects: Project[];
    resume: string;
  };

  type HomePageProjectPreviewsProps = {
    projects: Project[];
    count: number;
  };

  type HomePageProjectLinkProps = {
    startYear: number;
    length: number;
    previewsCount: number;
    resume: string;
  };

  type ProfilePageAboutSectionProps = {
    statement: string;
    contacts: Contact[];
    photo: string;
    resume: string;
  };

  type ProfilePageExperienceSectionProps = {
    experience: Experience[];
    education: Education[];
  };

  type ProfilePageExperienceCardProps = {
    experience: Education | Experience;
    index: number;
    length: number;
  };

  type ProfilePageExperienceEducationCardProps = Education & {
    index: number;
  };

  type ProfilePageExperienceExperienceCardProps = Experience & {
    index: number;
  };

  type ProjectDetailPageProps = { params: { name: string } };

  type ProfilePageStatementProps = Pick<Profile, "statement">;

  type ProfilePageContactProps = {
    contacts: Contact[];
    resume: string;
  };

  type ProfilePageEmailProps = {
    email: string;
    resume: string;
  };

  type ProfilePagePhotoProps = Pick<Profile, "photo">;

  type ProfilePageSkillsSectionProps = {
    skills: Skill[];
    skillTypes: SkillType[];
  };

  type ProfilePageSkillWithNoSubtypesProps = {
    type: string;
    skills: Skill[];
  };

  type ProfilePageSkillWithSubtypesProps = {
    type: string;
    subtypes: {
      [subtype: string]: Skill[];
    }[];
  };

  type ProjectsPageCatalogProps = {
    projects: Project[];
  };

  type ProjectsPageHeaderProps = {
    f: [
      null | "Development" | "Design",
      Dispatch<SetStateAction<null | "Development" | "Design">>,
    ];
  };

  type ProjectDetailPageHeaderProps = {
    name: string;
    types: string[];
    links: URLWithName[];
  };

  type ProjectDetailPageLinksProps = {
    links: URLWithName[];
  };

  type ProjectDetailPageStackProps = {
    stack: Skill[];
  };

  type ProjectDetailPageProcessProps = {
    process: string;
  };

  type ProjectDetailPageMediaProps = {
    figma?: string;
    youtube?: string;
    images?: string[];
    preview: string;
  };

  type ProjectDetailPageMediaSourceProps = {
    src: string | string[];
  };

  type ProjectDetailPageInfoProps = {
    from: string;
    to: string;
    contribution: string;
    src: URLWithName[];
    preview: string;
  };

  type ProjectDetailPageAboutProps = {
    description: string;
  };
}

export {};
