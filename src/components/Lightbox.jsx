import { useEffect, useRef } from "react";
import ResponsiveImage from "./ResponsiveImage";

const SWIPE_THRESHOLD = 50;
const VERTICAL_TOLERANCE = 80;

function Lightbox({ images, index, onClose, onPrev, onNext }) {
  const touchStartRef = useRef(null);

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

  function handleTouchStart(event) {
    if (event.touches.length !== 1) {
      touchStartRef.current = null;
      return;
    }
    touchStartRef.current = {
      x: event.touches[0].clientX,
      y: event.touches[0].clientY
    };
  }

  function handleTouchEnd(event) {
    const start = touchStartRef.current;
    touchStartRef.current = null;

    if (!start || event.changedTouches.length === 0) {
      return;
    }

    const dx = event.changedTouches[0].clientX - start.x;
    const dy = event.changedTouches[0].clientY - start.y;

    if (Math.abs(dy) > VERTICAL_TOLERANCE) {
      return;
    }

    if (dx <= -SWIPE_THRESHOLD) {
      onNext();
    } else if (dx >= SWIPE_THRESHOLD) {
      onPrev();
    }
  }

  const current = images[index];

  return (
    <div
      className="lightbox"
      role="dialog"
      aria-modal="true"
      aria-label="Photograph viewer"
      onClick={onClose}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
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
