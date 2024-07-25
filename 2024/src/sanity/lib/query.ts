import { groq } from "next-sanity";

export const profileQuery = groq`*[_type=="profile"]{
  "photo":photo.asset->url,
  "illustration":illus.asset->url,
  "resume":resume.asset->url,
  "statement":stmt,
  "description":desc
}[0]`;

export const contactsQuery = groq`*[_type=="contact"]|order(name asc){
  "logo":logo.asset->url,
  name,
  link,
  color,
  main
}`;

export const educationQuery = groq`*[_type=="education"]|order(from desc){
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

export const experienceQuery = groq`*[_type=="experience"]|order(from desc){
  "logo":logo.asset->url,
  name,
  title,
  from,
  to,
  city,
  "description":desc,
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

export const skillsByCategoryQuery = groq`*[_type=="skillCategory"]|order(name asc){
  name,
  "skills":*[_type=="skill"&&references(^._id)&&defined(prof)]|order(name asc){
    "logo":logo.asset->url,
    name,
    prof
  }
}`;

export const skillsByTypeQuery = groq`*[_type=="skillType"&&count(*[_type=="skillSubtype"&&references(^._id)&&count(*[_type=="skill"&&references(^._id)&&defined(prof)])>0])>0]|order(name asc){
  name,
  "subtypes":*[_type=="skillSubtype"&&references(^._id)&&count(*[_type == "skill"&&references(^._id)&&defined(prof)])>0]{
    name,
    "skills":*[_type=="skill"&&references(^._id)&&defined(prof)]|order(name asc){
      "logo":logo.asset->url,
      name,
      prof
    }
  }
}`;

export const projectsQuery = groq`*[_type=="project"]|order(to desc){
  from,
  to,
  name,
  "slug":slug.current,
  "types":type[]->name,
  "preview":preview.asset->url
}`;

export const projectQuery = groq`*[_type=="project"&&slug.current==$slug]|order(to asc){
    figma,
    youtube,
    "images":images[].asset->url,
    from,
    to,
    process,
    name,
    "slug":slug.current,
    "types":type[]->name,
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
    "stack":stack[]->{
      ...select(defined(prof)=>{
        "logo":logo.asset->url,
        prof,
        name
      })
    }
  }[0]`;
