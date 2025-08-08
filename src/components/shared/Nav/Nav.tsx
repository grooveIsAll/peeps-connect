import classNames from 'classnames';

import styles from './Nav.module.scss';

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <img className={styles.logo} src="#" alt="Peeps Connect Logo" />
      <div className={styles.linksContainer}>
        <div className={styles.linksRight}>
          <a className={styles.link} href="https://google.com">San Diego</a>
          <a className={styles.link} href="https://google.com">San Francisco</a>
          <a className={styles.link} href="https://google.com">Gallery</a>
          <a className={styles.link} href="https://google.com">Info</a>
        </div>
        <div className={styles.linksLeft}>
          <button>
            TICKETS SOON
          </button>
          <a className={styles.link} href="https://google.com">FB</a>
          <a className={styles.link} href="https://google.com">IG</a>
        </div>
      </div>
    </nav>
  );
};

export default Nav;