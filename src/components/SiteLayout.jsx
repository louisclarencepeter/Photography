import { NavLink, Outlet, useLocation } from "react-router-dom";
import { aboutDetails } from "../data/siteData";
import { useActiveSection } from "../hooks";
import SocialLinks from "./SocialLinks";
import CookieConsent from "./CookieConsent";

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
      <a href="#main" className="skip-link">
        Skip to content
      </a>
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

      <main id="main">
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

export default SiteLayout;
