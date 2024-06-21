import { defineField, defineType } from "sanity";

export default defineType({
  name: "projType",
  title: "Project Type",
  type: "document",
  preview: {
    select: {
      title: "name",
    },
  },
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
  ],
});
