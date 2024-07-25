import { defineArrayMember, defineField, defineType } from "sanity";

export default defineType({
  name: "skill",
  title: "Skill",
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
    }),
    defineField({
      name: "categories",
      title: "Categories",
      type: "array",
      of: [
        defineArrayMember({
          type: "reference",
          to: { type: "skillCategory" },
          options: {
            filter: ({ document }) => {
              const selected = (document.categories as { _ref: string }[])
                .map((s) => s._ref)
                .filter(Boolean);
              return {
                filter: "!(_id in $selected)",
                params: { selected },
              };
            },
          },
        }),
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "types",
      title: "Types",
      type: "array",
      of: [
        defineArrayMember({
          type: "reference",
          to: { type: "skillSubtype" },
          options: {
            filter: ({ document }) => {
              const selected = (document.types as { _ref: string }[])
                .map((s) => s._ref)
                .filter(Boolean);
              return {
                filter: "!(_id in $selected)",
                params: { selected },
              };
            },
          },
        }),
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "prof",
      title: "Proficiency",
      type: "string",
      validation: (Rule) =>
        Rule.custom((value) => {
          if (!value) return true;
          if (!isNaN(value as any)) {
            const num = parseFloat(value);
            if (num < 0 || num > 10) {
              return "Proficiency must be between 0 and 10";
            }
          }
          return true;
        }),
    }),
  ],
});
