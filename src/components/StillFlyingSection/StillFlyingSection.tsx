
import videoCover from '../../assets/page-imgs/video-cover.webp';
import styles from './StillFlyingSection.module.scss';

const StillFlyingSection = () => {
  return (
    <section className={styles.stillFlyingSection}>
      <div className={styles.contentRight}>
        We're still flying high on 2023 leftovers.
        Click the tube to relive some action from last year.
      </div>
      <div className={styles.contentLeft}>
        <img src={videoCover} alt="Still Flying" className={styles.image} />
        <a
          className={styles.link}
          href="https://google.com"
          target="_blank"
          rel="noreferrer"
        >
          View more on YouTube
        </a>
      </div>
    </section>
  );
}

export default StillFlyingSection;