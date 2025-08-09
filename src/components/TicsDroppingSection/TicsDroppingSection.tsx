import backgroundImage from "../../assets/page-imgs/intro.webp";
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
        <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed</h2>
        <p>
          lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. lorem
          ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. lorem ipsum dolor
          sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua.
        </p>
        <button>
          Follow on Instagram
        </button>
      </div>
    </section>
  );
};

export default TicsDroppingSection;
