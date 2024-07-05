import Name from "@/app/profile/about/name";
import Statement from "@/app/profile/about/statement";
import Contact from "@/app/profile/about/contact";
import Photo from "@/app/profile/about/photo";

export default function ProfilePageAboutSection({
  contacts,
  photo,
  statement,
  resume,
}: ProfilePageAboutSectionProps) {
  return (
    <section
      id="about"
      className="grid size-full grid-cols-10 grid-rows-[repeat(2,auto)] gap-4 text-[1em]"
    >
      <Name />

      <Statement statement={statement} />

      <Photo photo={photo} />

      <Contact contacts={contacts} resume={resume} />
    </section>
  );
}
