import { useEffect } from "react";
import ResponsiveImage from "./ResponsiveImage";

function Lightbox({ images, index, onClose, onPrev, onNext }) {
  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === "Escape") {
        onClose();
      } else if (event.key === "ArrowLeft") {
        onPrev();
      } else if (event.key === "ArrowRight") {
        onNext();
      }
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose, onPrev, onNext]);

  const current = images[index];

  return (
    <div
      className="lightbox"
      role="dialog"
      aria-modal="true"
      aria-label="Photograph viewer"
      onClick={onClose}
    >
      <div className="lightbox-stage" onClick={(event) => event.stopPropagation()}>
        <ResponsiveImage
          picture={current.picture}
          alt={current.alt}
          sizes="100vw"
          className="lightbox-image"
        />
      </div>

      <button
        type="button"
        className="lightbox-control lightbox-prev"
        onClick={(event) => {
          event.stopPropagation();
          onPrev();
        }}
        aria-label="Previous photograph"
      >
        ‹
      </button>
      <button
        type="button"
        className="lightbox-control lightbox-next"
        onClick={(event) => {
          event.stopPropagation();
          onNext();
        }}
        aria-label="Next photograph"
      >
        ›
      </button>
      <button
        type="button"
        className="lightbox-control lightbox-close"
        onClick={onClose}
        aria-label="Close viewer"
      >
        ×
      </button>

      <p className="lightbox-counter" aria-live="polite">
        {index + 1} / {images.length}
      </p>
    </div>
  );
}

export default Lightbox;
