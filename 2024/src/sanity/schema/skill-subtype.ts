import { defineField, defineType } from "sanity";

export default defineType({
  name: "skillSubtype",
  title: "Skill Subtype",
  type: "document",
  preview: {
    select: {
      title: "name",
      type: "type.name",
    },
    prepare(value) {
      return {
        title: `${value.title} (${value.type})`,
      };
    },
  },
  fields: [
    defineField({
      name: "type",
      title: "Skill Type",
      type: "reference",
      to: { type: "skillType" },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
  ],
});
