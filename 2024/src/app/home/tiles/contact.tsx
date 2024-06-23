export default function ContactTile({
  currentSection: curSect,
}: ContactTileProps) {
  return (
    <section
      className={`order-2 col-span-2 row-span-4 md:order-none md:row-span-3 landscape:order-none landscape:row-span-3 ${curSect ? "opacity-0" : "opacity-100"}`}
    >
      contact
    </section>
  );
}
