import { defineConfig } from "sanity";
import { dataset, projectId } from "./src/sanity/env";
import { schema } from "./src/sanity/schema";
import { plugins } from "./src/sanity/plugins";

export default defineConfig({
  projectId,
  dataset,
  schema,
  plugins,
});
