import ClickableIcon from "../../shared/ClickableIcon/ClickableIcon";

import { Icons } from "../../../assets/icons/Icons";
import videoCover from "../../../assets/page-imgs/video-cover.webp";
import styles from "./StillFlyingSection.module.scss";

const StillFlyingSection = () => {
  return (
    <section className={styles.stillFlyingSection}>
      <div className={styles.contentLeft}>
        We're still flying high on 2023 leftovers. Click the tube to relive some
        action from last year.
      </div>
      <div className={styles.contentRight}>
        <ClickableIcon
          icon={videoCover}
          url={"https://google.com"}
          styleConfig={{ imgClass: styles.image }}
        />
        <a
          className={styles.link}
          href="https://google.com"
          target="_blank"
          rel="noreferrer"
        >
          View more on YouTube{" "}
          <img src={Icons.play} className={styles.icon} alt="Play Icon" />
        </a>
      </div>
    </section>
  );
};

export default StillFlyingSection;
