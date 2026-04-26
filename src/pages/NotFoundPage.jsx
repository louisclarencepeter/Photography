import { NavLink } from "react-router-dom";
import { usePageMeta } from "../hooks";
import SectionHeading from "../components/SectionHeading";

function NotFoundPage() {
  usePageMeta({
    title: "Page Not Found — Louis Peter Photography",
    description: "The page you are looking for could not be found."
  });

  return (
    <section className="content-block not-found-page">
      <SectionHeading
        eyebrow="404"
        title="Page Not Found"
        subtitle="The page you are looking for has moved or never existed. Try the home page or the gallery instead."
      />
      <div className="not-found-actions">
        <NavLink to="/" className="primary-button">
          Back to Home
        </NavLink>
        <NavLink to="/gallery" className="secondary-link">
          View Gallery
        </NavLink>
      </div>
    </section>
  );
}

export default NotFoundPage;
