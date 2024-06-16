import { defineField, defineType } from "sanity";

export default defineType({
  name: "education",
  title: "Education",
  type: "document",
  initialValue: {
    temp: false,
  },
  preview: {
    select: {
      title: "level",
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
      name: "from",
      title: "From",
      type: "date",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "to",
      title: "To",
      type: "date",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "level",
      title: "Level",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "city",
      title: "City",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "major",
      title: "Major",
      type: "string",
    }),
    defineField({
      name: "gpa",
      title: "GPA",
      type: "number",
      validation: (Rule) => Rule.required().min(0).max(4),
    }),
    defineField({
      name: "temp",
      title: "Temporary",
      type: "boolean",
    }),
  ],
});
