import { legalSections } from "../data/siteData";
import { usePageMeta } from "../hooks";
import SectionHeading from "../components/SectionHeading";

function ImpressumPage() {
  usePageMeta({
    title: "Impressum — Louis Peter Photography",
    description:
      "Rechtliche Angaben und Kontaktdaten für Louis Peter Photography in Frankfurt am Main.",
    lang: "de"
  });

  return (
    <section className="content-block legal-page">
      <SectionHeading
        eyebrow="Legal"
        title="Impressum"
        subtitle="Legal information and contact details for Louis Peter Photography."
      />

      <article className="glass-card legal-card">
        {legalSections.map((section) => (
          <section key={section.heading} className="legal-section">
            <h3>{section.heading}</h3>
            {section.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </section>
        ))}
      </article>
    </section>
  );
}

export default ImpressumPage;
