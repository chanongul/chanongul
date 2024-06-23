export default function Breakpoints() {
  return (
    <div className="fixed bottom-0 left-0 m-2 flex items-center rounded-full bg-white p-2 text-sm text-orange-500">
      <span className="font-extrabold sm:hidden md:hidden lg:hidden xl:hidden">
        xs
      </span>
      <span className="hidden font-extrabold sm:inline md:hidden">sm</span>
      <span className="hidden font-extrabold md:inline lg:hidden">md</span>
      <span className="hidden font-extrabold lg:inline xl:hidden">lg</span>
      <span className="hidden font-extrabold xl:inline">xl</span>
    </div>
  );
}
