export default function StatementTile({
  currentSection: curSect,
  statement,
}: StatementTileProps) {
  return (
    <section
      className={`order-3 md:order-none row-span-2 md:row-span-3 col-span-6 md:col-span-2 ${curSect ? "opacity-0" : "opacity-100"}`}
    >
      statement
    </section>
  );
}
