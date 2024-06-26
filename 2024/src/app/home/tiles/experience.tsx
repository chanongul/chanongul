import Image from "next/image";

export default function ExperienceTile({
  currentSection: curSect,
  experienceData: experience,
}: ExperienceTileProps) {
  const curExp = experience.slice(experience.length - 1)[0];

  return (
    <section
      className={`order-5 col-span-3 row-span-3 md:order-none md:col-span-1 md:row-span-6 landscape:order-none landscape:col-span-1 landscape:row-span-6 ${curSect ? "opacity-0" : "opacity-100"}`}
    >
      <article className="">
        <Image
          src={curExp.logo}
          alt={curExp.name}
          width={100}
          height={100}
          className=""
        />
      </article>
    </section>
  );
}
