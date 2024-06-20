export default function ProfileTile({
  currentSection: curSect,
}: HomePageTilesProps) {
  return (
    <section
      className={`order-1 md:order-none row-span-4 md:row-span-6 col-span-4 md:col-span-2 ${curSect ? "opacity-0" : "opacity-100"}`}
    >
      profile
    </section>
  );
}
