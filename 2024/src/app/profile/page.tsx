import { sanityFetch } from "@/sanity/lib/client";
import {
  contactsQuery,
  educationQuery,
  experienceQuery,
  profileQuery,
  skillsByTypeQuery,
} from "@/sanity/lib/query";
import About from "@/app/profile/about";
import Experience from "@/app/profile/experience";
import Skills from "@/app/profile/skills";
import Link from "@/app/profile/link";

export const runtime = "edge";

export default async function ProfilePage() {
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
  const skillsData = await sanityFetch<SkillsByType[]>({
    query: skillsByTypeQuery,
    qParams: { minProf: 0 },
  });

  return (
    <div className="flex size-full select-none flex-col justify-center gap-10 px-4 !pb-[5em] font-sans md:px-8 lg:px-12">
      <About
        contacts={contactsData}
        photo={profileData.photo}
        statement={profileData.statement}
        resume={profileData.resume}
      />

      <Experience education={educationData} experience={experienceData} />

      <Skills skills={skillsData} />

      <Link />
    </div>
  );
}
