import { groq } from "next-sanity";

export const profileQuery = groq`*[_type=="profile"]{
  "photo":photo.asset->url,
  "statement":stmt
}[0]`;

export const contactsQuery = groq`*[_type=="contact"]{
  "logo":logo.asset->url,
  name,
  link
}`;

export const educationQuery = groq`*[_type=="education"]{
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

export const experienceQuery = groq`*[_type=="experience"]{
  "logo":logo.asset->url,
  name,
  title,
  from,
  to,
  "description":desc,
  "skills":skills[]->{
    "logo":logo.asset->url,
    name,
    prof,
    "type":type->name,
    "subtype":subtype->name,
  },
  "projects":projects[]->{
    "thumbnail":thumbnail.asset->url,
    figma,
    video,
    "images":images[].asset->url,
    from,
    to,
    "links":links[]->{
      name,
      url,
    },
    "src":src[]->{
      name,
      url,
    }
  }
}`;

export const skillsQuery = groq`*[_type=="skill"]{
  "logo":logo.asset->url,
  name,
  prof,
  "type":type->name,
  "subtype":subtype->name,
}`;

export const skillTypesQuery = groq`*[_type=="skillType"]{
  name,
  "subtypes": *[_type=="skillSubtype" && references(^._id)].name
}`;

export const projectsQuery = groq`*[_type=="project"]{
  "thumbnail":thumbnail.asset->url,
  figma,
  video,
  "images":images[].asset->url,
  from,
  to,
  "links":links[]->{
    "tag":name,
    url,
  },
  "src":src[]->{
    "tag":name,
    url,
  }
}`;
