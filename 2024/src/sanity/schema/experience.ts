import { defineArrayMember, defineField, defineType } from "sanity";

export default defineType({
  name: "experience",
  title: "Experience",
  type: "document",
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
      name: "title",
      title: "Job Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "desc",
      title: "Description",
      type: "text",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "projects",
      title: "Projects",
      type: "array",
      of: [
        defineArrayMember({
          type: "reference",
          to: [{ type: "project" }],
          options: {
            filter: ({ document }) => {
              const selected = (document.projects as { _ref: string }[])
                .map((s) => s._ref)
                .filter(Boolean);
              return {
                filter: "!(_id in $selected)",
                params: {
                  selected,
                },
              };
            },
          },
        }),
      ],
    }),
    defineField({
      name: "skills",
      title: "Skills",
      type: "array",
      of: [
        defineArrayMember({
          type: "reference",
          to: [{ type: "skill" }],
          options: {
            filter: ({ document }) => {
              const selected = (document.skills as { _ref: string }[])
                .map((s) => s._ref)
                .filter(Boolean);
              return {
                filter: "type!=$type && !(_id in $selected)",
                params: {
                  type: "lang",
                  selected,
                },
              };
            },
          },
        }),
      ],
      options: {
        layout: "grid",
      },
    }),
  ],
});
