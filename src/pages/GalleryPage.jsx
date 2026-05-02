import { useMemo, useState } from "react";
import { galleryCategories, galleryImages } from "../data/siteData";
import { usePageMeta } from "../hooks";
import ResponsiveImage from "../components/ResponsiveImage";
import SectionHeading from "../components/SectionHeading";
import Lightbox from "../components/Lightbox";

function GalleryPage() {
  usePageMeta({
    title: "Gallery — Louis Peter Photography",
    description:
      "Selected portrait, wedding, aerial, wildlife, and architecture photographs from the Louis Peter Photography portfolio."
  });

  const [activeCategory, setActiveCategory] = useState("all");
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const filteredImages = useMemo(() => {
    if (activeCategory === "all") {
      return galleryImages;
    }
    return galleryImages.filter((image) => image.category === activeCategory);
  }, [activeCategory]);

  const categoryCounts = useMemo(() => {
    const counts = { all: galleryImages.length };
    for (const image of galleryImages) {
      counts[image.category] = (counts[image.category] ?? 0) + 1;
    }
    return counts;
  }, []);

  function handleCategoryChange(categoryId) {
    setActiveCategory(categoryId);
    setLightboxIndex(null);
  }

  const closeLightbox = () => setLightboxIndex(null);
  const showNext = () =>
    setLightboxIndex((current) => (current + 1) % filteredImages.length);
  const showPrev = () =>
    setLightboxIndex(
      (current) => (current - 1 + filteredImages.length) % filteredImages.length
    );

  return (
    <section className="content-block">
      <SectionHeading
        eyebrow="Portfolio"
        title="Selected Work"
        subtitle="A curated collection of portrait, wedding, aerial, wildlife, and architectural photography."
      />

      <div
        className="gallery-filters"
        role="tablist"
        aria-label="Filter gallery by category"
      >
        {galleryCategories.map((category) => {
          const count = categoryCounts[category.id] ?? 0;
          const isActive = activeCategory === category.id;
          const isDisabled = count === 0;

          return (
            <button
              key={category.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              aria-controls="gallery-grid"
              className={`gallery-filter${isActive ? " is-active" : ""}`}
              onClick={() => handleCategoryChange(category.id)}
              disabled={isDisabled}
            >
              {category.label}
              <span className="gallery-filter-count" aria-hidden="true">
                {count}
              </span>
            </button>
          );
        })}
      </div>

      <div className="gallery-columns" id="gallery-grid">
        {filteredImages.map((galleryImage, index) => (
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

      {filteredImages.length === 0 && (
        <p className="gallery-empty">No photographs in this category yet.</p>
      )}

      <a href="#top" className="back-to-top">
        Back to Top
      </a>

      {lightboxIndex !== null && (
        <Lightbox
          images={filteredImages}
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
