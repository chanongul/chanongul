import { defineField, defineType } from "sanity";

export default defineType({
  name: "contact",
  title: "Contact",
  type: "document",
  initialValue: {
    main: false,
  },
  preview: {
    select: {
      title: "name",
      media: "logo",
    },
  },
  fields: [
    defineField({
      name: "logo",
      title: "Logo",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "link",
      title: "Link",
      type: "url",
      validation: (Rule) =>
        Rule.required().uri({
          scheme: ["http", "https", "mailto", "tel"],
        }),
    }),
    defineField({
      name: "main",
      title: "Main Contact",
      type: "boolean",
    }),
  ],
});
