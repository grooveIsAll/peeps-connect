import ClickableIcon from '../ClickableIcon/ClickableIcon';

import { Icons } from '../../../assets/icons/Icons';
import mustacheLogo from '../../../assets/page-imgs/mustache.jpg';
import styles from './Nav.module.scss';

const { facebook, instagramDark } = Icons;
const googleLink = 'https://google.com';

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.logoContainer}>
        <ClickableIcon
          icon={mustacheLogo}
          url="/"
          linkTarget="_self"
          styleConfig={{ imgClass: styles.logo }}
        />
        <span className={styles.logoText}>
          Upcoming bash
          in San Diego
          March 23, 2024
        </span>
      </div>
      <div className={styles.linksContainer}>
        <div className={styles.linksRight}>
          <a
            className={styles.link}
            href={googleLink}
            target="_blank"
            rel="noreferrer"
          >
              San Diego</a>
          <a
            className={styles.link}
            href={googleLink}
            target="_blank"
            rel="noreferrer"
          >
              San Francisco</a>
          <a
            className={styles.link}
            href={googleLink}
            target="_blank"
            rel="noreferrer"
          >
              Gallery</a>
          <a
            className={styles.link}
            href={googleLink}
            target="_blank"
            rel="noreferrer"
          >
              Info</a>
        </div>
        <div className={styles.linksLeft}>
          <a
            className={styles.ticketButton}
            href={googleLink}
            target="_blank"
            rel="noreferrer">
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
    </nav>
  );
};

export default Nav;