import { sanityFetch } from "@/sanity/lib/client";
import {
  contactsQuery,
  educationQuery,
  experienceQuery,
  profileQuery,
} from "@/sanity/lib/query";
import Image from "next/image";

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

  return (
    <div className="grid grid-cols-2">
      <article className="overflow-hidden rounded-2xl">
        <Image
          src={profileData.photo}
          alt="photo"
          width={1000}
          height={1000}
          className="size-full object-cover"
        />
      </article>

      <article className="">Chanon Gulgattimas</article>

      <article className=""></article>

      <article className=""></article>
    </div>
  );
}
