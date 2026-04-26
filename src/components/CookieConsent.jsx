import { useState } from "react";
import { NavLink } from "react-router-dom";

function CookieConsent() {
  const [preference, setPreference] = useState(() => {
    if (typeof window === "undefined") {
      return null;
    }
    return window.localStorage.getItem("lp-cookie-consent");
  });

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

export default CookieConsent;
