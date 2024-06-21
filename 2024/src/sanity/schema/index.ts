import { type SchemaTypeDefinition } from "sanity";
import profile from "./profile";
import education from "./education";
import experience from "./experience";
import skillType from "./skill-type";
import skillSubtype from "./skill-subtype";
import skill from "./skill";
import project from "./project";
import contact from "./contact";
import projLink from "./proj-link";
import projSrc from "./proj-src";
import projType from "./proj-type";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    profile,
    education,
    experience,
    skill,
    skillType,
    skillSubtype,
    project,
    projLink,
    projSrc,
    projType,
    contact,
  ],
};
