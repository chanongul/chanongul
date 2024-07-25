import NumberSelector from "./components/NumberSelector";
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
      type: "number",
      validation: (Rule) => Rule.required().integer().min(0).max(10),
      components: { input: NumberSelector },
    }),
  ],
});
