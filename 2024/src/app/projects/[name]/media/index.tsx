import Youtube from "@/app/projects/[name]/media/youtube";
import Figma from "@/app/projects/[name]/media/figma";
import Images from "@/app/projects/[name]/media/images";

export default function ProjectDetailPageMedia({
  youtube,
  figma,
  images,
  preview,
}: ProjectDetailPageMediaProps) {
  return (
    <section className="size-full">
      {youtube && <Youtube src={youtube} />}

      {figma && <Figma src={figma} />}

      {images && images.length > 0 && <Images src={images} />}
    </section>
  );
}
