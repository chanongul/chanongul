import Card from "@/app/home/contact/card";
import ThemeToggler from "@/app/home/contact/theme-toggler";
import Resume from "@/app/home/contact/resume";

export default function ContactSection({ contacts }: ContactSectionProps) {
  return (
    <section
      className="order-2 col-span-1 row-span-4 grid size-full grid-flow-col grid-rows-4 gap-2 sm:gap-3 xl:gap-4 portrait:!grid-cols-1 xs:portrait:!grid-cols-2 landscape:col-span-4 landscape:row-span-1 landscape:grid-flow-row landscape:gap-2 xl:landscape:gap-4"
      style={{ gridTemplateColumns: `repeat(${contacts.length + 1},1fr)` }}
    >
      <Resume />

      {contacts.map((contact, i) => (
        <Card key={i} contact={contact} />
      ))}

      <ThemeToggler />
    </section>
  );
}
