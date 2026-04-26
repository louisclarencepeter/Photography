import { NavLink } from "react-router-dom";
import { usePageMeta } from "../hooks";
import SectionHeading from "../components/SectionHeading";

function ThanksPage() {
  usePageMeta({
    title: "Thank You — Louis Peter Photography",
    description: "Thank you for getting in touch. I will reply as soon as I can."
  });

  return (
    <section className="content-block not-found-page">
      <SectionHeading
        eyebrow="Thank You"
        title="Message Received"
        subtitle="Thanks for reaching out. I will get back to you as soon as I can. In the meantime, feel free to keep exploring."
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

export default ThanksPage;
