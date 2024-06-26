import Image from "next/image";

export default function EducationTile({
  currentSection: curSect,
  educationData: education,
}: EdutcationTileProps) {
  const curEdu = education.slice(education.length - 1)[0];

  return (
    <section
      className={`order-4 col-span-3 row-span-3 md:order-none md:col-span-1 md:row-span-6 landscape:order-none landscape:col-span-1 landscape:row-span-6 ${curSect ? "opacity-0" : "opacity-100"}`}
    >
      <article className="">
        <Image
          src={curEdu.logo}
          alt={curEdu.name}
          width={100}
          height={100}
          className=""
        />
      </article>
    </section>
  );
}
