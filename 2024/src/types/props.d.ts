import { PortfolioDropdown } from "@/app/[locale]/home/portfolio/header";
import {
  ChangeEvent,
  Dispatch,
  FormEvent,
  ReactNode,
  SetStateAction,
} from "react";

declare global {
  type ChildrenProps = Readonly<{ children?: ReactNode }>;

  type RootLayoutProps = ChildrenProps & LocaleTogglerProps;

  type SanityFetchProps = {
    query: string;
    qParams?: QueryParams;
  };

  type DetailedHomePageProps = {
    currentSection: [string | null, Dispatch<SetStateAction<string | null>>];
  };

  type HomePageTilesProps = {
    currentSection: string | null;
  };
}

export {};
