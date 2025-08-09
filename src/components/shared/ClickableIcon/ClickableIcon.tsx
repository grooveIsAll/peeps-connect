import styles from './ClickableIcon.module.scss'

const ClickableIcon = ({ icon, url }) => {
  return (
    <a
      className={styles.iconLink}
      target={'_blank'}
      rel="noreferrer"
      href={url}
    >
      <img
        className={styles.iconImg}
        src={icon}
        alt={''}
      />
    </a>
  );
};

export default ClickableIcon;