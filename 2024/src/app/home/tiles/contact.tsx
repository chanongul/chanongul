export default function ContactTile({
  currentSection: curSect,
}: ContactTileProps) {
  return (
    <section
      className={`order-2 md:order-none row-span-4 md:row-span-3 col-span-2 ${curSect ? "opacity-0" : "opacity-100"}`}
    >
      contact
    </section>
  );
}
