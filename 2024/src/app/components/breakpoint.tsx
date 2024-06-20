export default function Breakpoints() {
  return (
    <div className="fixed top-0 right-0 w-10 h-10 bg-white/40 backdrop-blur-md text-white rounded-full flex items-center justify-center">
      <p className="inline xs:hidden sm:hidden md:hidden lg:hidden xl:hidden 2xl:hidden">
        2xs
      </p>
      <p className="hidden xs:inline sm:hidden md:hidden lg:hidden xl:hidden 2xl:hidden">
        xs
      </p>
      <p className="hidden xs:hidden sm:inline md:hidden lg:hidden xl:hidden 2xl:hidden">
        sm
      </p>
      <p className="hidden xs:hidden sm:hidden md:inline lg:hidden xl:hidden 2xl:hidden">
        md
      </p>
      <p className="hidden xs:hidden sm:hidden md:hidden lg:inline xl:hidden 2xl:hidden">
        lg
      </p>
      <p className="hidden xs:hidden sm:hidden md:hidden lg:hidden xl:inline 2xl:hidden">
        xl
      </p>
      <p className="hidden xs:hidden sm:hidden md:hidden lg:hidden xl:hidden 2xl:inline">
        2xl
      </p>
    </div>
  );
}
