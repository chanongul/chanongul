import { groq } from "next-sanity";

export const profileQuery = groq`*[_type=="profile"]{
  "photo":photo.asset->url,
  "illustration":illus.asset->url,
  "statement":stmt,
  "description":desc
}[0]`;

export const contactsQuery = groq`*[_type=="contact"] | order(name asc){
  "logo":logo.asset->url,
  name,
  link,
  color,
  main
}`;

export const educationQuery = groq`*[_type=="education"] | order(from desc){
  "logo":logo.asset->url,
  name,
  level,
  major,
  city,
  from,
  to,
  gpa,
  temp
}`;

export const experienceQuery = groq`*[_type=="experience"] | order(from desc){
  "logo":logo.asset->url,
  name,
  title,
  from,
  to,
  "description":desc,
  "skills":skills[]->{
    "logo":logo.asset->url,
    name
  },
  "projects":projects[]->{
    "thumbnail":thumbnail.asset->url,
    "preview":preview.asset->url,
    from,
    to,
    name,
    "slug":slug.current,
    "type":type[]->name
  }
}`;

export const skillsQuery = groq`*[_type=="skill"] | order(name asc){
  "logo":logo.asset->url,
  name,
  prof,
  "type":type->name,
  "subtype":subtype->name
}`;

export const skillTypesQuery = groq`*[_type=="skillType"] | order(name asc){
  name,
  "subtypes": *[_type=="skillSubtype" && references(^._id)].name
}`;

export const projectsQuery = groq`*[_type=="project"] | order(to asc){
  from,
  to,
  name,
  "slug":slug.current,
  "type":type[]->name,
  "preview":preview.asset->url,
  "thumbnail":thumbnail.asset->url,
}`;

export function projectBySlugQuery(slug: string) {
  return groq`*[_type=="project" && slug.current == ${slug}] | order(to asc){
    figma,
    video,
    "images":images[].asset->url,
    from,
    to,
    name,
    "slug":slug.current,
    "type":type[]->name,
    "preview":preview.asset->url,
    "thumbnail":thumbnail.asset->url,
    "description":desc,
    "contribution":contrib,
    "links":links[]->{
      name,
      url
    },
    "src":src[]->{
      name,
      url
    },
    "skills":skills[]->{
      "logo":logo.asset->url,
      name
    }
  }[0]`;
}
