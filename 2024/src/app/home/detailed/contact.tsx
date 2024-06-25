import { ReactSVG } from "react-svg";

export default function DetailedContacts({
  currentSection,
  contactData: contacts,
}: DetailedContactProps) {
  const [curSect, setCurSect] = currentSection;
  const sectName = "prof";

  return (
    <section
      className={`relative order-2 col-span-2 row-span-4 opacity-0 md:order-none md:row-span-3 landscape:order-none landscape:row-span-3 ${curSect ? "h-0 w-0 overflow-hidden" : "cursor-pointer"}`}
      onClick={() => setCurSect(sectName)}
    >
      <article className="grid h-full w-full grid-flow-col grid-cols-6 grid-rows-6 items-center justify-items-center gap-y-[10%] p-[20%] sm:gap-y-[12%] sm:p-[15%] md:grid-flow-row md:!gap-x-[5%] md:gap-y-[20%] md:p-[10%] xs:gap-x-[10%] landscape:!gap-x-[5%] landscape:p-[5%] md:landscape:!gap-x-[5%] md:landscape:p-[5%]">
        {contacts.map((contact, index) => (
          <a
            key={index}
            href={contact.link}
            target="_blank"
            className={`col-span-6 row-span-2 h-full min-h-10 w-full max-w-16 items-center justify-center md:!col-span-2 md:row-span-3 xl:h-fit 2xl:max-w-24 xs:col-span-3 landscape:!col-span-1 landscape:row-span-6 xl:landscape:col-span-1 xl:landscape:row-span-6 ${index < 3 ? "flex" : "hidden xs:flex"}`}
          >
            <ReactSVG
              src={contact.logo}
              className="inline-block h-full w-full text-orange-500 [&>div>svg]:h-full [&>div>svg]:w-full [&>div]:h-full [&>div]:w-auto xl:landscape:[&>div]:h-auto xl:landscape:[&>div]:w-full"
            />
          </a>
        ))}
      </article>
    </section>
  );
}
