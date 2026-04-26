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
  socialPreviewImages,
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
  const activeSection = useActiveSection(location.pathname);
  const videographyHref = isHome ? "#videography" : "/#videography";
  const aboutHref = isHome ? "#about" : "/#about";
  const offeringsHref = isHome ? "#offerings" : "/#offerings";
  const contactHref = isHome ? "#contact" : "/#contact";

  return (
    <div className="site-shell" id="top">
      <header className="site-header">
        <NavLink to="/" className="brand-mark" aria-label="Louis Peter Photography home">
          <img src={aboutDetails.logo} alt="Louis Peter Photography logo" />
          <span>Louis Peter Photography</span>
        </NavLink>

        <nav className="site-nav" aria-label="Main navigation">
          <NavLink
            to="/"
            end
            className={() => (isHome && activeSection === "home" ? "active" : undefined)}
          >
            Home
          </NavLink>
          <a
            href={aboutHref}
            className={activeSection === "about" ? "active" : undefined}
            aria-current={activeSection === "about" ? "location" : undefined}
          >
            About
          </a>
          <a
            href={offeringsHref}
            className={activeSection === "offerings" ? "active" : undefined}
            aria-current={activeSection === "offerings" ? "location" : undefined}
          >
            What I Offer
          </a>
          <a
            href={videographyHref}
            className={activeSection === "videography" ? "active" : undefined}
            aria-current={activeSection === "videography" ? "location" : undefined}
          >
            Videography
          </a>
          <a
            href={contactHref}
            className={activeSection === "contact" ? "active" : undefined}
            aria-current={activeSection === "contact" ? "location" : undefined}
          >
            Contact
          </a>
          <NavLink to="/gallery" className={({ isActive }) => (isActive ? "active" : undefined)}>
            Gallery
          </NavLink>
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
      <section className="hero-section" id="home">
        <div className="hero-copy">
          <p className="eyebrow">Photography and visual storytelling from Frankfurt</p>
          <h1>Louis Peter Photography</h1>
          <p className="hero-lead">
            Thoughtful photography for the people, places, and moments that matter most.
          </p>
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

      <section className="content-block" id="about">
        <SectionHeading
          eyebrow="About"
          title="Meet Louis Peter"
          subtitle="Photography shaped by atmosphere, detail, and moments that feel honest, natural, and lasting."
        />
        <div className="about-grid reveal">
          <div className="about-image-panel">
            <ResponsiveImage
              picture={aboutDetails.portrait}
              alt="Louis Peter"
              sizes="(max-width: 960px) 100vw, 45vw"
              loading="lazy"
            />
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

      <section className="content-block" id="offerings">
        <SectionHeading
          eyebrow="Services"
          title="Photography Services"
          subtitle="Portrait, event, lifestyle, and location-based photography created with a thoughtful, story-led approach."
        />
        <div className="offer-grid">
          {offerings.map((offering) => (
            <article key={offering.title} className="glass-card service-card reveal">
              <ResponsiveImage
                picture={offering.image}
                alt={offering.title}
                sizes="(max-width: 680px) 100vw, (max-width: 960px) 50vw, 30vw"
                loading="lazy"
              />
              <h3>{offering.title}</h3>
              <p>{offering.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="content-block" id="videography">
        <SectionHeading
          eyebrow="Motion"
          title="Videography"
          subtitle="Cinematic storytelling for ideas, milestones, and moments that deserve movement, rhythm, and atmosphere."
        />
        <div className="video-layout reveal">
          <div className="video-frame">
            <video
              autoPlay
              loop
              muted
              playsInline
              controls={false}
              preload="metadata"
              poster={videography.poster}
            >
              <source src={videography.video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <p className="support-copy">{videography.description}</p>
        </div>
      </section>

      <section className="content-block" id="contact">
        <SectionHeading
          eyebrow="Contact"
          title="Get in Touch"
          subtitle="If you would like to connect, collaborate, or ask about future availability, you can reach out here."
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

            <p className="form-intro">
              Fill out the form below and I will get back to you as soon as I can.
            </p>

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
            <div className="contact-visuals">
              <ResponsiveImage
                picture={socialPreviewImages[0].picture}
                alt={socialPreviewImages[0].alt}
                className="contact-visual contact-visual--feature"
                sizes="(max-width: 680px) 100vw, 25vw"
                loading="lazy"
              />
              <div className="contact-visual-stack">
                {socialPreviewImages.slice(1).map((preview) => (
                  <ResponsiveImage
                    key={preview.alt}
                    picture={preview.picture}
                    alt={preview.alt}
                    className="contact-visual"
                    sizes="(max-width: 680px) 100vw, 20vw"
                    loading="lazy"
                  />
                ))}
              </div>
            </div>
            <h3>Find Me Online</h3>
            <p>
              You can also connect through my social channels to follow new work, recent
              uploads, and portfolio updates.
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
        eyebrow="Portfolio"
        title="Selected Work"
        subtitle="A curated collection of portrait, travel, landscape, and lifestyle images."
      />

      <div className="gallery-columns">
        {galleryImages.map((galleryImage, index) => (
          <figure key={index} className="gallery-tile">
            <ResponsiveImage
              picture={galleryImage.picture}
              alt={galleryImage.alt}
              sizes="(max-width: 680px) 100vw, (max-width: 960px) 50vw, 33vw"
              loading="lazy"
            />
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

function ResponsiveImage({ picture, alt, className, sizes, loading, ...rest }) {
  const sources = picture.sources ?? {};
  const fallback = picture.img ?? {};

  return (
    <picture>
      {sources.avif && <source type="image/avif" srcSet={sources.avif} sizes={sizes} />}
      {sources.webp && <source type="image/webp" srcSet={sources.webp} sizes={sizes} />}
      {sources.jpg && <source type="image/jpeg" srcSet={sources.jpg} sizes={sizes} />}
      <img
        src={fallback.src}
        width={fallback.w}
        height={fallback.h}
        alt={alt}
        loading={loading}
        sizes={sizes}
        className={className}
        {...rest}
      />
    </picture>
  );
}

function SectionHeading({ eyebrow = "Portfolio", title, subtitle }) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{eyebrow}</p>
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

function useActiveSection(pathname) {
  const [activeSection, setActiveSection] = useState(pathname === "/" ? "home" : null);

  useEffect(() => {
    if (pathname !== "/") {
      setActiveSection(null);
      return undefined;
    }

    const sectionIds = ["home", "about", "offerings", "videography", "contact"];

    function updateActiveSection() {
      const offset = 160;
      let currentSection = "home";

      for (const sectionId of sectionIds) {
        const section = document.getElementById(sectionId);

        if (!section) {
          continue;
        }

        if (section.getBoundingClientRect().top <= offset) {
          currentSection = sectionId;
        }
      }

      setActiveSection(currentSection);
    }

    const frame = window.requestAnimationFrame(updateActiveSection);

    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, [pathname]);

  return activeSection;
}

const iconMap = {
  facebook: FaFacebookF,
  instagram: FaInstagram,
  fiveHundredPx: Fa500Px
};

export default App;
