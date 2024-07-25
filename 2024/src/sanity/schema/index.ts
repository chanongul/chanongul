import { type SchemaTypeDefinition } from "sanity";
import profile from "./profile";
import education from "./education";
import experience from "./experience";
import skill from "./skill";
import skillCategory from "./skill-category";
import skillSubtype from "./skill-subtype";
import skillType from "./skill-type";
import project from "./project";
import projLink from "./proj-link";
import projSrc from "./proj-src";
import projType from "./proj-type";
import contact from "./contact";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    profile,
    education,
    experience,
    skill,
    skillCategory,
    skillType,
    skillSubtype,
    project,
    projLink,
    projSrc,
    projType,
    contact,
  ],
};
