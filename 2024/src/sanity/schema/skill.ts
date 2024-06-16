import NumberSelector from "./components/NumberSelector";
import { defineField, defineType } from "sanity";

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
      name: "type",
      title: "Type",
      type: "reference",
      to: { type: "skillType" },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "subtype",
      title: "Subtype",
      type: "reference",
      to: { type: "skillSubtype" },
      hidden: ({ document }) => !document?.type,
      options: {
        filter: ({ document }) => {
          const selectedType = (document.type as { _ref: string })._ref;
          return {
            filter: '_type == "skillSubtype" && references($selectedType)',
            params: { selectedType },
          };
        },
      },
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
