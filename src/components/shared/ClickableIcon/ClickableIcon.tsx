import styles from './ClickableIcon.module.scss'

type ClickableIconProps = {
  icon: string;
  url: string;
};

const ClickableIcon = ({ icon, url }: ClickableIconProps) => {
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
        alt=""
      />
    </a>
  );
};

export default ClickableIcon;