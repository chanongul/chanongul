import { defineField, defineType } from "sanity";

export default defineType({
  name: "profile",
  title: "Profile",
  type: "document",
  fields: [
    defineField({
      name: "photo",
      title: "Photo",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "illus",
      title: "Illustration",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "stmt",
      title: "Personal Statement",
      type: "text",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "desc",
      title: "Description",
      type: "text",
      validation: (Rule) => Rule.required(),
    }),
  ],
});
