import HomePage from "@/app/home";
import { sanityFetch } from "@/sanity/lib/client";
import {
  contactsQuery,
  educationQuery,
  experienceQuery,
  profileQuery,
  projectsQuery,
  skillsByCategoryQuery,
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
  const skillsData = await sanityFetch<SkillsByCategory[]>({
    query: skillsByCategoryQuery,
    qParams: { minProf: 0 },
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
      projectsData={projectsData}
    />
  );
}
