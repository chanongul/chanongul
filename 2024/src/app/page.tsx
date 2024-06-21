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

export default async function Home() {
  const profileData = await sanityFetch<ProfileFetchProps>({
    query: profileQuery,
  });
  const contactsData = await sanityFetch<ContactsFetchProps>({
    query: contactsQuery,
  });
  const educationData = await sanityFetch<EducationFetchProps>({
    query: educationQuery,
  });
  const experienceData = await sanityFetch<ExperienceFetchProps>({
    query: experienceQuery,
  });
  const skillsData = await sanityFetch<SkillsFetchProps>({
    query: skillsQuery,
  });
  const skillTypesData = await sanityFetch<SkillTypesFetchProps>({
    query: skillTypesQuery,
  });
  const projectsData = await sanityFetch<ProjectsFetchProps>({
    query: projectsQuery,
  });
  const skills: SkillsByType = {};

  return (
    <HomePage
      profileData={profileData}
      contactsData={contactsData}
      educationData={educationData}
      experienceData={experienceData}
      skillsData={skills}
      projectsData={projectsData}
    />
  );
}
