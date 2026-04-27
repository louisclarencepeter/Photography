import { NavLink } from "react-router-dom";
import {
  aboutDetails,
  heroImages,
  offerings,
  socialPreviewImages,
  videography
} from "../data/siteData";
import { usePageMeta, useRevealOnScroll } from "../hooks";
import ResponsiveImage from "../components/ResponsiveImage";
import SectionHeading from "../components/SectionHeading";
import SocialLinks from "../components/SocialLinks";

function HomePage() {
  useRevealOnScroll();
  usePageMeta({
    title: "Louis Peter Photography",
    description:
      "Louis Peter Photography portfolio — portrait, event, drone, and lifestyle photography from Frankfurt."
  });

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
            action="/thanks"
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

export default HomePage;
