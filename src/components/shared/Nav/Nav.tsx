import ClickableIcon from '../ClickableIcon/ClickableIcon';

import { Icons } from '../../../assets/icons/Icons';
import styles from './Nav.module.scss';

const { facebook, instagramDark } = Icons;

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <img className={styles.logo} src={'mustache'} alt="Peeps Connect Logo" />
      <div className={styles.linksContainer}>
        <div className={styles.linksRight}>
          <a
            className={styles.link}
            href="https://google.com"
            target="_blank"
            rel="noreferrer"
          >
              San Diego</a>
          <a
            className={styles.link}
            href="https://google.com"
            target="_blank"
            rel="noreferrer"
          >
              San Francisco</a>
          <a
            className={styles.link}
            href="https://google.com"
            target="_blank"
            rel="noreferrer"
          >
              Gallery</a>
          <a
            className={styles.link}
            href="https://google.com"
            target="_blank"
            rel="noreferrer"
          >
              Info</a>
        </div>
        <div className={styles.linksLeft}>
          <button>
            TICKETS SOON
          </button>
          <ClickableIcon
            icon={facebook}
            url="https://google.com"
            // className={styles.icon}
          />

          <ClickableIcon
            icon={instagramDark}
            url="https://google.com"
            // className={styles.icon}
          />
        </div>
      </div>
    </nav>
  );
};

export default Nav;