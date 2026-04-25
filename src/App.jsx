import { useEffect, useState } from "react";
import { NavLink, Outlet, Route, Routes, useLocation } from "react-router-dom";
import { Fa500Px, FaFacebookF, FaInstagram } from "react-icons/fa";
import {
  aboutDetails,
  galleryImages,
  heroImages,
  legalSections,
  offerings,
  socialLinks,
  videography
} from "./data/siteData";

function App() {
  return (
    <>
      <ScrollManager />
      <Routes>
        <Route element={<SiteLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/impressum" element={<ImpressumPage />} />
        </Route>
      </Routes>
    </>
  );
}

function ScrollManager() {
  const location = useLocation();

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      if (location.hash) {
        const target = document.querySelector(location.hash);
        if (target) {
          target.scrollIntoView({ behavior: "smooth", block: "start" });
          return;
        }
      }

      window.scrollTo({ top: 0, behavior: "smooth" });
    });

    return () => window.cancelAnimationFrame(frame);
  }, [location]);

  return null;
}

function SiteLayout() {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const aboutHref = isHome ? "#about" : "/#about";
  const contactHref = isHome ? "#contact" : "/#contact";

  return (
    <div className="site-shell" id="top">
      <header className="site-header">
        <NavLink to="/" className="brand-mark" aria-label="Louis Peter Photography home">
          <img src={aboutDetails.logo} alt="Louis Peter Photography logo" />
          <span>Louis Peter Photography</span>
        </NavLink>

        <nav className="site-nav" aria-label="Main navigation">
          <NavLink to="/" end>
            Home
          </NavLink>
          <a href={aboutHref}>About</a>
          <NavLink to="/gallery">Gallery</NavLink>
          <a href={contactHref}>Contact</a>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>

      <footer className="site-footer">
        <div className="footer-meta">
          <p>&copy; Louis Peter Photography</p>
          <NavLink to="/impressum" className="text-link">
            Impressum
          </NavLink>
        </div>
        <SocialLinks />
      </footer>

      <CookieConsent />
    </div>
  );
}

function HomePage() {
  useRevealOnScroll();

  return (
    <>
      <section className="hero-section">
        <div className="hero-copy">
          <p className="eyebrow">Visual storytelling from Frankfurt</p>
          <h1>Louis Peter Photography</h1>
          <p className="hero-lead">Visuals for all of your special occasions.</p>
          <div className="hero-actions">
            <NavLink to="/gallery" className="primary-button">
              View Gallery
            </NavLink>
            <a href="#contact" className="secondary-link">
              Drop Me a Message
            </a>
          </div>
        </div>

        <div className="hero-collage" aria-hidden="true">
          {heroImages.map((image, index) => (
            <div
              key={image}
              className={`hero-card hero-card--${index + 1}`}
              style={{ backgroundImage: `url(${image})` }}
            />
          ))}
        </div>
      </section>

      <section className="content-block">
        <SectionHeading
          title="Videography"
          subtitle="Cinematic coverage designed to bring your ideas and milestones to life."
        />
        <div className="video-layout reveal">
          <div className="video-frame">
            <video autoPlay loop muted playsInline controls={false}>
              <source src={videography.video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <p className="support-copy">{videography.description}</p>
        </div>
      </section>

      <section className="content-block" id="about">
        <SectionHeading
          title="About Louis Peter"
          subtitle="A photographer with a sharp eye for atmosphere, detail, and honest moments."
        />
        <div className="about-grid reveal">
          <div className="about-image-panel">
            <img src={aboutDetails.portrait} alt="Louis Peter" />
          </div>
          <article className="glass-card about-card">
            <SocialLinks />
            <p>{aboutDetails.bio}</p>
            <p className="note-text">{aboutDetails.note}</p>
            <NavLink to="/impressum" className="text-link">
              Impressum
            </NavLink>
          </article>
        </div>
      </section>

      <section className="content-block">
        <SectionHeading
          title="What I Offer"
          subtitle="A mix of portrait, event, and lifestyle photography tailored to real people and real stories."
        />
        <div className="offer-grid">
          {offerings.map((offering) => (
            <article key={offering.title} className="glass-card service-card reveal">
              <img src={offering.image} alt={offering.title} />
              <h3>{offering.title}</h3>
              <p>{offering.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="content-block" id="contact">
        <SectionHeading
          title="Drop Me a Message"
          subtitle="Use the form below to get in touch about a project, idea, or future shoot."
        />
        <div className="contact-grid reveal">
          <form
            className="glass-card contact-form"
            name="contact"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
          >
            <input type="hidden" name="form-name" value="contact" />
            <p className="hidden-field">
              <label>
                Don&apos;t fill this out if you&apos;re human:
                <input name="bot-field" />
              </label>
            </p>

            <p className="form-intro">Please fill in the form below to send me a message.</p>

            <label htmlFor="name">Name</label>
            <input id="name" name="name" type="text" required />

            <label htmlFor="email">Email</label>
            <input id="email" name="email" type="email" required />

            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="6" required />

            <button type="submit" className="primary-button submit-button">
              Send
            </button>
          </form>

          <aside className="glass-card contact-aside">
            <h3>Find Me Online</h3>
            <p>
              You can also reach out through my social channels to follow new work,
              recent uploads, and portfolio updates.
            </p>
            <SocialLinks />
          </aside>
        </div>
      </section>
    </>
  );
}

function GalleryPage() {
  return (
    <section className="content-block">
      <SectionHeading
        title="Gallery"
        subtitle="A curated collection of portrait, travel, landscape, and lifestyle work."
      />

      <div className="gallery-columns">
        {galleryImages.map((image, index) => (
          <figure key={image.src} className="gallery-tile">
            <img src={image.src} alt={`Portfolio photograph ${index + 1}`} loading="lazy" />
          </figure>
        ))}
      </div>

      <a href="#top" className="back-to-top">
        Back to Top
      </a>
    </section>
  );
}

function ImpressumPage() {
  return (
    <section className="content-block legal-page">
      <SectionHeading
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

function SectionHeading({ title, subtitle }) {
  return (
    <div className="section-heading">
      <p className="eyebrow">Portfolio</p>
      <h2>{title}</h2>
      <p>{subtitle}</p>
    </div>
  );
}

function SocialLinks() {
  return (
    <ul className="social-list">
      {socialLinks.map((link) => {
        const Icon = iconMap[link.icon];

        return (
          <li key={link.label}>
            <a href={link.href} target="_blank" rel="noreferrer" aria-label={link.label}>
              <Icon />
            </a>
          </li>
        );
      })}
    </ul>
  );
}

function CookieConsent() {
  const [preference, setPreference] = useState(null);

  useEffect(() => {
    const savedPreference = window.localStorage.getItem("lp-cookie-consent");
    setPreference(savedPreference);
  }, []);

  function handlePreference(choice) {
    window.localStorage.setItem("lp-cookie-consent", choice);
    setPreference(choice);
  }

  if (preference) {
    return null;
  }

  return (
    <aside className="cookie-banner" aria-label="Cookie consent">
      <div className="cookie-copy">
        <p className="cookie-title">Cookies</p>
        <p>
          This site uses essential browser storage to remember your preferences. Right
          now, this banner only saves your cookie choice on this device.
        </p>
      </div>

      <div className="cookie-actions">
        <button
          type="button"
          className="secondary-button"
          onClick={() => handlePreference("necessary")}
        >
          Only Necessary
        </button>
        <button
          type="button"
          className="primary-button"
          onClick={() => handlePreference("accepted")}
        >
          Accept
        </button>
        <NavLink to="/impressum" className="text-link cookie-link">
          Learn More
        </NavLink>
      </div>
    </aside>
  );
}

function useRevealOnScroll() {
  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.18, rootMargin: "0px 0px -60px 0px" }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);
}

const iconMap = {
  facebook: FaFacebookF,
  instagram: FaInstagram,
  fiveHundredPx: Fa500Px
};

export default App;
