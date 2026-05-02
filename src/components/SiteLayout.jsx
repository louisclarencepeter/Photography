import { useState, useEffect } from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import { aboutDetails } from "../data/siteData";
import { useActiveSection } from "../hooks";
import ResponsiveImage from "./ResponsiveImage";
import SocialLinks from "./SocialLinks";
import CookieConsent from "./CookieConsent";
import ThemeSwitch from "./ThemeSwitch";

function SiteLayout() {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const activeSection = useActiveSection(location.pathname);
  const videographyHref = isHome ? "#videography" : "/#videography";
  const aboutHref = isHome ? "#about" : "/#about";
  const offeringsHref = isHome ? "#offerings" : "/#offerings";
  const contactHref = isHome ? "#contact" : "/#contact";

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  // Close menu on anchor link click
  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="site-shell" id="top">
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <header className={`site-header${isMenuOpen ? " menu-open" : ""}`}>
        <div className="header-mobile-bar">
          <NavLink to="/" className="brand-mark" aria-label="Louis Peter Photography home" onClick={handleNavClick}>
            <ResponsiveImage
              picture={aboutDetails.logo}
              alt="Louis Peter Photography logo"
              sizes="46px"
              loading="eager"
            />
            <span>Louis Peter Photography</span>
          </NavLink>

          <button 
            className="mobile-menu-toggle" 
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="hamburger-box">
              <span className="hamburger-inner"></span>
            </span>
          </button>
        </div>

        <nav className={`site-nav${isMenuOpen ? " is-active" : ""}`} aria-label="Main navigation">
          <NavLink
            to="/"
            end
            className={() => (isHome && activeSection === "home" ? "active" : undefined)}
            onClick={handleNavClick}
          >
            Home
          </NavLink>
          <a
            href={aboutHref}
            className={activeSection === "about" ? "active" : undefined}
            aria-current={activeSection === "about" ? "location" : undefined}
            onClick={handleNavClick}
          >
            About
          </a>
          <a
            href={offeringsHref}
            className={activeSection === "offerings" ? "active" : undefined}
            aria-current={activeSection === "offerings" ? "location" : undefined}
            onClick={handleNavClick}
          >
            What I Offer
          </a>
          <a
            href={videographyHref}
            className={activeSection === "videography" ? "active" : undefined}
            aria-current={activeSection === "videography" ? "location" : undefined}
            onClick={handleNavClick}
          >
            Videography
          </a>
          <a
            href={contactHref}
            className={activeSection === "contact" ? "active" : undefined}
            aria-current={activeSection === "contact" ? "location" : undefined}
            onClick={handleNavClick}
          >
            Contact
          </a>
          <NavLink 
            to="/gallery" 
            className={({ isActive }) => (isActive ? "active" : undefined)}
            onClick={handleNavClick}
          >
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
        <div className="footer-actions">
          <ThemeSwitch />
          <SocialLinks />
        </div>
      </footer>

      <CookieConsent />
    </div>
  );
}

export default SiteLayout;
