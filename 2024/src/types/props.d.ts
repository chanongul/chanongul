import { PortfolioDropdown } from "@/app/[locale]/home/portfolio/header";
import {
  ChangeEvent,
  Dispatch,
  FormEvent,
  ReactNode,
  SetStateAction,
} from "react";
import { type QueryParams } from "sanity";

declare global {
  type ChildrenProps = Readonly<{ children?: ReactNode }>;

  type SanityFetchProps = {
    query: string;
    qParams?: QueryParams;
  };

  type HomePageProps = {
    profileData: ProfileFetchProps;
    contactData: ContactFetchProps;
    educationData: EducationFetchProps;
    experienceData: ExperienceFetchProps;
    skillsData: SkillsByType;
    projectsData: ProjectsFetchProps;
  };

  type DetailedHomePageProps = {
    currentSection: [string | null, Dispatch<SetStateAction<string | null>>];
  } & HomePageProps;

  type HomePageTilesProps = {
    currentSection: string | null;
  } & HomePageProps;

  type ProfileFetchProps = {
    photo: string;
    statement: string;
    description: string;
  };

  type ContactFetchProps = {
    logo: string;
    name: string;
    link: string;
  }[];

  type EducationFetchProps = {
    logo: string;
    name: string;
    level: string;
    major?: string;
    city: string;
    from: string;
    to: string;
    gpa: string;
    temp: string;
  }[];

  type ExperienceFetchProps = {
    logo: string;
    name: string;
    title: string;
    from: string;
    to: string;
    description: string;
    skills: SkillsFetchProps;
    projects: ProjectsFetchProps;
  }[];

  type SkillsFetchProps = (Skill & {
    type: string;
    subtype: string;
  })[];

  type Skill = {
    logo: string;
    name: string;
    prof: number;
  };

  type SkillTypesFetchProps = {
    name: string;
    subtypes: string[];
  }[];

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

  type ProjectsFetchProps = {
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
  }[];

  type ProfileTileProps = Pick<HomePageTilesProps, "currentSection"> & {
    profileData: Pick<ProfileFetchProps, "photo" | "description">;
  };

  type StatementTileProps = Pick<HomePageTilesProps, "currentSection"> & {
    statementData: Pick<ProfileFetchProps, "statement">;
  };

  type ContactTileProps = Pick<HomePageProps, "currentSection"> & {
    contactData: ContactFetchProps;
  };

  type EdutcationTileProps = Pick<HomePageTilesProps, "currentSection"> & {
    educationData: EducationFetchProps;
  };

  type ExperienceTileProps = Pick<HomePageTilesProps, "currentSection"> & {
    experienceData: ExperienceFetchProps;
  };

  type SkillsTileProps = Pick<HomePageTilesProps, "currentSection"> & {
    skillsData: SkillsByType;
  };

  type ProjectsTileProps = Pick<HomePageTilesProps, "currentSection"> & {
    projectsData: ProjectsFetchProps;
  };

  type DetailedProfileProps = Pick<DetailedHomePageProps, "currentSection"> & {
    profileData: ProfileFetchProps;
    contactData: ContactFetchProps;
  };

  type DetailedContactProps = Pick<DetailedHomePageProps, "currentSection"> & {
    contactData: ContactFetchProps;
  };

  type DetailedEducationProps = Pick<
    DetailedHomePageProps,
    "currentSection"
  > & { educationData: EducationFetchProps };

  type DetailedExperienceProps = Pick<
    DetailedHomePageProps,
    "currentSection"
  > & { experienceData: ExperienceFetchProps };

  type DetailedSkillsProps = Pick<DetailedHomePageProps, "currentSection"> & {
    skillsData: SkillsByType;
    setProjFilters: Dispatch<SetStateAction<string[]>>;
  };

  type DetailedProjectsProps = Pick<DetailedHomePageProps, "currentSection"> & {
    projectsData: ProjectsFetchProps;
    filters: string[];
  };

  type TileBackgroundProps = Pick<HomePageTilesProps, "currentSection">;

  type NavigatorProps = Pick<DetailedHomePageProps, "currentSection">;
}

export {};
