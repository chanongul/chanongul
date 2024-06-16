import { visionTool } from "@sanity/vision";
import { PluginOptions } from "sanity";
import { structureTool } from "sanity/structure";

export const plugins: PluginOptions[] = [
  structureTool({
    structure: (S) =>
      S.list()
        .title("Base")
        .items([
          S.listItem()
            .title("Profile")
            .child(
              S.document()
                .schemaType("profile")
                .documentId("PROFILE")
                .title("Profile")
            ),
          ...S.documentTypeListItems().filter(
            (listItem) => !["profile"].includes(listItem.getId()!)
          ),
        ]),
  }),
  visionTool({ defaultApiVersion: "2024-06-16" }),
];
