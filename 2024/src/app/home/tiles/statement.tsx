export default function StatementTile({
  currentSection: curSect,
  statement,
}: StatementTileProps) {
  return (
    <section
      className={`order-3 col-span-6 row-span-2 md:order-none md:col-span-2 md:row-span-3 landscape:order-none landscape:col-span-2 landscape:row-span-3 ${curSect ? "opacity-0" : "opacity-100"}`}
    >
      statement
    </section>
  );
}
