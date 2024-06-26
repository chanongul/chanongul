import { IoClose } from "react-icons/io5";

export default function Navigator({ currentSection }: NavigatorProps) {
  const [curSect, setCurSect] = currentSection;

  return (
    <>
      <button
        className={`absolute left-10 top-10 -translate-x-1/2 -translate-y-1/2 rounded-full bg-black p-1 text-white [transition:color_300ms,background-color_300ms,opacity_400ms] dark:bg-white dark:text-black ${curSect ? "z-50 opacity-100" : "-z-10 opacity-0"}`}
        onClick={() => setCurSect(null)}
      >
        <IoClose />
      </button>
      <nav
        className={`absolute left-1/2 top-10 flex -translate-x-1/2 -translate-y-1/2 gap-4 text-black [transition:color_300ms,opacity_400ms] dark:text-white ${curSect ? "z-50 opacity-100" : "-z-10 opacity-0"}`}
      >
        <button className="hover:underline" onClick={() => setCurSect("prof")}>
          prof
        </button>
        <button className="hover:underline" onClick={() => setCurSect("edu")}>
          edu
        </button>
        <button className="hover:underline" onClick={() => setCurSect("exp")}>
          exp
        </button>
        <button
          className="hover:underline"
          onClick={() => setCurSect("skills")}
        >
          skills
        </button>
        <button className="hover:underline" onClick={() => setCurSect("proj")}>
          proj
        </button>
      </nav>
    </>
  );
}
