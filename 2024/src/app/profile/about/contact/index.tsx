import GetInTouch from "@/app/profile/about/contact/get-in-touch";
import Resume from "@/app/profile/about/contact/resume";
import Card from "@/app/profile/about/contact/card";

export default function ProfilePageContact({
  contacts,
}: ProfilePageContactProps) {
  return (
    <article className="col-span-full grid grid-cols-[1fr,auto] gap-3 text-[1.25em] sm:order-last sm:col-span-5 md:grid-rows-[1fr,auto] xl:col-span-3">
      <GetInTouch email={contacts.filter((c) => c.main)[0].link} />

      <div className="col-span-2 grid h-auto grid-cols-5 grid-rows-2 gap-3">
        {contacts
          .filter((c) => !c.main)
          .map((contact, i) => (
            <Card key={i} {...contact} />
          ))}
      </div>
    </article>
  );
}
