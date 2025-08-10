import { useState } from "react";

import ClickableIcon from "../ClickableIcon/ClickableIcon";

import { Icons } from "../../../assets/icons/Icons";
import mustacheLogo from "../../../assets/page-imgs/mustache.jpg";
import styles from "./Nav.module.scss";

const { facebook, instagramDark, hamburger } = Icons;
const googleLink = "https://google.com";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.nav}>
      <div className={styles.navContainer}>
        <div className={styles.logoContainer}>
          <ClickableIcon
            icon={mustacheLogo}
            url="/"
            linkTarget="_self"
            styleConfig={{ imgClass: styles.logo }}
          />
          <span className={styles.logoText}>
            Upcoming bash in San Diego March 23, 2024
          </span>
        </div>
        <DesktopLinks />
        <button
          className={styles.menuButton}
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Open menu"
        >
          <span className={styles.menuIcon}>
            <img src={hamburger} alt="" />
          </span>
        </button>
        <div className={`${styles.mobileOverlay} ${menuOpen ? styles.open : ""}`}>
          <button
            className={styles.closeButton}
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            ×
          </button>
          <MobileLinks />
        </div>
      </div>
    </nav>
  );
};

export default Nav;

const DesktopLinks = () => {
  return (
    <div className={styles.linksContainer}>
      <div className={styles.linksLeft}>
        <a
          className={styles.link}
          href={googleLink}
          target="_blank"
          rel="noreferrer"
        >
          San Diego
        </a>
        <a
          className={styles.link}
          href={googleLink}
          target="_blank"
          rel="noreferrer"
        >
          San Francisco
        </a>
        <a
          className={styles.link}
          href={googleLink}
          target="_blank"
          rel="noreferrer"
        >
          Gallery
        </a>
        <a
          className={styles.link}
          href={googleLink}
          target="_blank"
          rel="noreferrer"
        >
          Info
        </a>
      </div>
      <div className={styles.linksRight}>
        <a
          className={styles.ticketButton}
          href={googleLink}
          target="_blank"
          rel="noreferrer"
        >
          TICKETS SOON
        </a>
        <ClickableIcon
          icon={facebook}
          url={googleLink}
          styleConfig={{ imgClass: styles.socialIcon }}
        />

        <ClickableIcon
          icon={instagramDark}
          url={googleLink}
          styleConfig={{ imgClass: styles.socialIcon }}
        />
      </div>
    </div>
  );
};

const MobileLinks = () => {
  return (
    <div className={styles.overlayLinks}>
      <a
        className={styles.link}
        href={googleLink}
        target="_blank"
        rel="noreferrer"
      >
        San Diego
      </a>
      <a
        className={styles.link}
        href={googleLink}
        target="_blank"
        rel="noreferrer"
      >
        San Francisco
      </a>
      <a
        className={styles.link}
        href={googleLink}
        target="_blank"
        rel="noreferrer"
      >
        Gallery
      </a>
      <a
        className={styles.link}
        href={googleLink}
        target="_blank"
        rel="noreferrer"
      >
        Info
      </a>
      <a
        className={styles.ticketButton}
        href={googleLink}
        target="_blank"
        rel="noreferrer"
      >
        TICKETS SOON
      </a>
      <div className={styles.overlaySocials}>
        <ClickableIcon
          icon={facebook}
          url={googleLink}
          styleConfig={{ imgClass: styles.socialIcon }}
        />
        <ClickableIcon
          icon={instagramDark}
          url={googleLink}
          styleConfig={{ imgClass: styles.socialIcon }}
        />
      </div>
    </div>
  );
};
