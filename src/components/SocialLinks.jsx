import { Fa500Px, FaFacebookF, FaInstagram } from "react-icons/fa";
import { socialLinks } from "../data/siteData";

const iconMap = {
  facebook: FaFacebookF,
  instagram: FaInstagram,
  fiveHundredPx: Fa500Px
};

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

export default SocialLinks;
