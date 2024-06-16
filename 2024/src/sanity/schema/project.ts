import { defineArrayMember, defineField, defineType } from "sanity";

export default defineType({
  name: "project",
  title: "Project",
  type: "document",
  preview: {
    select: {
      title: "name",
      media: "images.0",
      mediaType: "images.0._type",
    },
  },
  fields: [
    defineField({
      name: "images",
      title: "Images",
      type: "array",
      of: [
        defineArrayMember({
          type: "image",
          options: { hotspot: true },
        }),
      ],
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
      name: "link",
      title: "Link",
      type: "array",
      of: [
        defineArrayMember({
          type: "url",
          validation: (Rule) =>
            Rule.uri({
              scheme: ["http", "https"],
            }),
        }),
      ],
    }),
    defineField({
      name: "src",
      title: "Source Code",
      type: "array",
      of: [
        defineArrayMember({
          type: "url",
          validation: (Rule) =>
            Rule.uri({
              scheme: ["http", "https"],
            }),
        }),
      ],
    }),
    defineField({
      name: "name",
      title: "Name",
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
      name: "contrib",
      title: "Contribution",
      type: "text",
      validation: (Rule) => Rule.required(),
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
              const skillTypes = ["Languages", "Soft Skills"];
              return {
                filter:
                  "!(type->.nameEN in $skillTypes) && !(_id in $selected)",
                params: {
                  skillTypes,
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
