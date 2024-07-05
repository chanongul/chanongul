import Card from "@/app/home/contact/card";
import ThemeToggler from "@/app/components/theme-toggler";
import Resume from "@/app/home/contact/resume";

export default function ContactSection({
  contacts,
  resume,
}: HomePageContactSectionProps) {
  return (
    <section className="order-2 col-span-1 row-span-4 grid size-full grid-flow-col grid-cols-2 grid-rows-4 gap-2 sm:gap-3 lg:gap-3.5 xl:gap-4 landscape:col-span-4 landscape:row-span-1 landscape:grid-flow-row landscape:!grid-cols-7 landscape:gap-2 lg:landscape:gap-3.5 xl:landscape:gap-4">
      <Resume resume={resume} />

      {contacts.map((contact, i) => (
        <Card key={i} {...contact} />
      ))}

      <ThemeToggler className="col-span-1 col-start-2 row-span-1 row-start-1 landscape:col-span-1 landscape:col-start-auto landscape:row-span-4 landscape:row-start-auto" />
    </section>
  );
}
