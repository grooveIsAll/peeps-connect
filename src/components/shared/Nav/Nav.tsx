import styles from './Nav.module.scss';

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <img className={styles.logo} src="#" alt="Peeps Connect Logo" />
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
          <a
            className={styles.link}
            href="https://google.com"
            target="_blank"
            rel="noreferrer"
          >
              FB</a>
          <a
            className={styles.link}
            href="https://google.com"
            target="_blank"
            rel="noreferrer"
          >
              IG</a>
        </div>
      </div>
    </nav>
  );
};

export default Nav;