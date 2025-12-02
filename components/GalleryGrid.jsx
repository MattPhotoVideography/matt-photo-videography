import Image from "next/image";
export default function GalleryGrid({ images=[] }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
      {images.map((img, i) => (
        <div key={i} className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-gray-200">
          <Image src={img.src} alt={img.alt} fill className="object-cover" sizes="(min-width: 768px) 33vw, 50vw" />
        </div>
      ))}
    </div>
  );
}
