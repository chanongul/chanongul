import { defineArrayMember, defineField, defineType } from "sanity";

export default defineType({
  name: "project",
  title: "Project",
  type: "document",
  initialValue: {
    solo: false,
  },
  preview: {
    select: {
      title: "name",
      media: "thumbnail",
    },
  },
  fields: [
    defineField({
      name: "thumbnail",
      title: "Thumbnail",
      type: "image",
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "figma",
      title: "Figma Link",
      type: "url",
      hidden: ({ document }) => !!document?.video || !!document?.images,
      validation: (Rule) =>
        Rule.custom((value) => {
          const regex = /^https?:\/\/www\.figma\.com\//;
          if (value !== undefined && !regex.test(value.toString() || "")) {
            return "Please enter a valid Figma URL starting with https://www.figma.com.";
          }
          return true;
        }),
    }),
    defineField({
      name: "video",
      title: "Video",
      type: "url",
      hidden: ({ document }) => !!document?.figma || !!document?.images,
      validation: (Rule) =>
        Rule.custom((value) => {
          const regex = /^https?:\/\/www\.youtube\.com\//;
          if (value !== undefined && !regex.test(value.toString() || "")) {
            return "Please enter a valid YouTube URL starting with https://www.youtube.com.";
          }
          return true;
        }),
    }),
    defineField({
      name: "images",
      title: "Images",
      type: "array",
      hidden: ({ document }) => !!document?.figma || !!document?.video,
      of: [
        defineArrayMember({
          type: "image",
          options: { hotspot: true },
        }),
      ],
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
      name: "solo",
      title: "Solo Project",
      type: "boolean",
    }),
    defineField({
      name: "contrib",
      title: "Contribution",
      type: "text",
      hidden: ({ document }) => !!document?.solo,
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
