import HomePage from "@/app/home";
import { sanityFetch } from "@/sanity/lib/client";
import {
  contactsQuery,
  educationQuery,
  experienceQuery,
  profileQuery,
  projectsQuery,
  skillsQuery,
  skillTypesQuery,
} from "@/sanity/lib/query";

export const runtime = "edge";

export default async function Home() {
  const profileData = await sanityFetch<Profile>({
    query: profileQuery,
  });
  const contactsData = await sanityFetch<Contact[]>({
    query: contactsQuery,
  });
  const educationData = await sanityFetch<Education[]>({
    query: educationQuery,
  });
  const experienceData = await sanityFetch<Experience[]>({
    query: experienceQuery,
  });
  const skillsData = await sanityFetch<Skill[]>({
    query: skillsQuery,
  });
  const skillTypesData = await sanityFetch<SkillType[]>({
    query: skillTypesQuery,
  });
  const projectsData = await sanityFetch<Project[]>({
    query: projectsQuery,
  });

  return (
    <HomePage
      profileData={profileData}
      contactData={contactsData}
      educationData={educationData}
      experienceData={experienceData}
      skillsData={skillsData}
      skillTypesData={skillTypesData}
      projectsData={projectsData}
    />
  );
}
