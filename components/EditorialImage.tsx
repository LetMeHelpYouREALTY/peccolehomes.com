import Image from "next/image";

type EditorialImageProps = {
  src: string;
  alt: string;
  priority?: boolean;
  ratio?: "16/9" | "4/3";
  sizes?: string;
};

export function EditorialImage({
  src,
  alt,
  priority = false,
  ratio = "4/3",
  sizes = "(min-width: 1024px) 960px, 100vw",
}: EditorialImageProps) {
  const ratioClass = ratio === "16/9" ? "aspect-video" : "aspect-[4/3]";

  return (
    <figure className="my-10">
      <div className={`relative w-full ${ratioClass}`}>
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes={priority ? "100vw" : sizes}
          className="object-cover"
        />
      </div>
      <figcaption className="mt-3 text-[0.72rem] uppercase tracking-[0.18em] text-muted">
        Illustrative photograph. Not a listing.
      </figcaption>
    </figure>
  );
}
