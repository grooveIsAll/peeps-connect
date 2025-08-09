import styles from './ClickableIcon.module.scss'

type ClickableIconProps = {
  icon: string;
  url: string;
  styleConfig?: {
    linkClass?: string;
    imgClass?: string;
  };
};

const ClickableIcon = ({ icon, url, styleConfig }: ClickableIconProps) => {
  return (
    <a
      className={`${styles.iconLink} ${styleConfig?.linkClass}`}
      target={'_blank'}
      rel="noreferrer"
      href={url}
    >
      <img
        className={`${styles.iconImg} ${styleConfig?.imgClass}`}
        src={icon}
        alt=""
      />
    </a>
  );
};

export default ClickableIcon;