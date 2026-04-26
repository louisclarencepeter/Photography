import { useState } from "react";
import { galleryImages } from "../data/siteData";
import { usePageMeta } from "../hooks";
import ResponsiveImage from "../components/ResponsiveImage";
import SectionHeading from "../components/SectionHeading";
import Lightbox from "../components/Lightbox";

function GalleryPage() {
  usePageMeta({
    title: "Gallery — Louis Peter Photography",
    description:
      "Selected portrait, travel, landscape, and lifestyle photographs from the Louis Peter Photography portfolio."
  });

  const [lightboxIndex, setLightboxIndex] = useState(null);
  const closeLightbox = () => setLightboxIndex(null);
  const showNext = () =>
    setLightboxIndex((current) => (current + 1) % galleryImages.length);
  const showPrev = () =>
    setLightboxIndex(
      (current) => (current - 1 + galleryImages.length) % galleryImages.length
    );

  return (
    <section className="content-block">
      <SectionHeading
        eyebrow="Portfolio"
        title="Selected Work"
        subtitle="A curated collection of portrait, travel, landscape, and lifestyle images."
      />

      <div className="gallery-columns">
        {galleryImages.map((galleryImage, index) => (
          <figure key={index} className="gallery-tile">
            <button
              type="button"
              className="gallery-tile-button"
              onClick={() => setLightboxIndex(index)}
              aria-label={`View ${galleryImage.alt} larger`}
            >
              <ResponsiveImage
                picture={galleryImage.picture}
                alt={galleryImage.alt}
                sizes="(max-width: 680px) 100vw, (max-width: 960px) 50vw, 33vw"
                loading="lazy"
              />
            </button>
          </figure>
        ))}
      </div>

      <a href="#top" className="back-to-top">
        Back to Top
      </a>

      {lightboxIndex !== null && (
        <Lightbox
          images={galleryImages}
          index={lightboxIndex}
          onClose={closeLightbox}
          onPrev={showPrev}
          onNext={showNext}
        />
      )}
    </section>
  );
}

export default GalleryPage;
