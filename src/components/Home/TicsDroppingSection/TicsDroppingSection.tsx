import backgroundImage from "../../../assets/page-imgs/intro.webp";
import styles from "./TicsDroppingSection.module.scss";

const TicsDroppingSection = () => {
  return (
    <section className={styles.ticsDroppingSection}>
      <div className={styles.contentLeft}>
        <img
          src={backgroundImage}
          alt="Sunglasses Man"
          className={styles.backgroundImg}
        />
      </div>
      <div className={styles.contentRight}>
        <div className={styles.contentContainer}>
          <h2 className={styles.title}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed</h2>
          <p className={styles.description}>
            lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. lorem
            ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
            sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
            sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
            sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
            incididunt ut
          </p>
          <a
            className={styles.followButton}
            href="https://google.com"
            target="_blank"
            rel="noreferrer"
          >
            Follow on Instagram
          </a>
        </div>
      </div>
    </section>
  );
};

export default TicsDroppingSection;
