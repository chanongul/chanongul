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
    contactsData: ContactsFetchProps;
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
  };

  type ContactsFetchProps = {
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
    prof: string;
  };

  type SkillTypesFetchProps = {
    name: string;
    subtypes: string[];
  }[];

  type SkillsByType = {
    [type: string]: {
      [subtype: string]: Skill[];
    };
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

  type ProfileTileProps = Pick<HomePageTilesProps, "currentSection"> &
    Pick<ProfileFetchProps, "photo">;

  type StatementTileProps = Pick<HomePageTilesProps, "currentSection"> &
    Pick<ProfileFetchProps, "statement">;

  type ContactTileProps = Pick<HomePageTilesProps, "currentSection"> & {
    contactsData: ContactsFetchProps;
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

  type DetailedProfileProps = Pick<DetailedHomePageProps, "currentSection"> &
    ProfileFetchProps & { contactsData: ContactsFetchProps };

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
  };

  type DetailedProjectsProps = Pick<DetailedHomePageProps, "currentSection"> & {
    projectsData: ProjectsFetchProps;
    filters: string[];
  };

  type TileBackgroundProps = Pick<HomePageTilesProps, "currentSection">;

  type NavigatorProps = Pick<DetailedHomePageProps, "currentSection">;
}

export {};
