import { defineField, defineType } from "sanity";

export default defineType({
  name: "projLink",
  title: "Project Link",
  type: "document",
  preview: {
    select: {
      title: "url",
    },
  },
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "url",
      title: "Link",
      type: "url",
      validation: (Rule) =>
        Rule.uri({
          scheme: ["http", "https"],
        }),
    }),
  ],
});
