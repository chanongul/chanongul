import Image from "next/image";

export default function SkillCard({ logo, name, prof }: Skill) {
  return (
    <div
      className={`mx-1 flex items-center justify-center md:mx-1.5 xl:mx-2 ${logo ? "size-8 min-w-8 rounded-[20%] sm:!size-14 sm:!min-w-14 md:!size-16 md:!min-w-16 2xs:size-10 2xs:min-w-10 landscape:!size-6 landscape:!min-w-6 md:landscape:!size-10 md:landscape:!min-w-10 lg:landscape:!size-14 lg:landscape:!min-w-14 xl:landscape:!size-20 xl:landscape:!min-w-20 2xl:landscape:!size-[5vw] 2xl:landscape:!min-w-[5vw]" : "w-max rounded-xl"}`}
      style={{
        background: !isNaN(+prof)
          ? `conic-gradient(transparent ${360 - (+prof / 10) * 360}deg, #bbb ${360 - (+prof / 10) * 360}deg)`
          : "none",
      }}
    >
      {logo ? (
        <div
          className={`pointer-events-none flex size-full items-center justify-center rounded-[18%] bg-neutral-100 object-cover transition-all duration-300 dark:bg-neutral-800 ${!isNaN(+prof) ? "touch:group-active:size-[96%] no-touch:group-hover:size-[96%]" : ""}`}
        >
          <Image
            loading="lazy"
            src={logo}
            alt={name}
            width={250}
            height={250}
            className="size-3/5 rounded-[15%] lg:size-7/12"
          />
        </div>
      ) : (
        <p
          className={`rounded-xl border border-neutral-400 bg-neutral-100 bg-clip-padding px-[1em] py-[0.5em] font-sans text-[0.75em] leading-none transition-[background-color,border-color] duration-300 md:text-[1.25em] landscape:text-[0.75em] lg:landscape:text-[1.25em] dark:border-neutral-500 dark:bg-neutral-800 ${!isNaN(+prof) ? "touch:group-active:border-transparent no-touch:group-hover:border-transparent" : ""}`}
        >
          {name}
        </p>
      )}
    </div>
  );
}
