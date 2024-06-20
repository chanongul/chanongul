import { IoClose } from "react-icons/io5";

export default function Navigator({ currentSection }: DetailedHomePageProps) {
  const [curSect, setCurSect] = currentSection;

  return (
    <>
      <button
        className={`absolute top-10 -translate-y-1/2 -translate-x-1/2 left-10 transition-all duration-300 text-black dark:text-white ${curSect ? "z-50 opacity-100 delay-200" : "-z-10 opacity-0"}`}
        onClick={() => setCurSect(null)}
      >
        <IoClose />
      </button>
      <nav
        className={`absolute top-10 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-300 text-black dark:text-white flex gap-4 ${curSect ? "z-50 opacity-100 delay-200" : "-z-10 opacity-0"}`}
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
