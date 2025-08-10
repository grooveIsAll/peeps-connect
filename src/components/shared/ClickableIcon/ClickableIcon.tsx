import styles from './ClickableIcon.module.scss'

type ClickableIconProps = {
  icon: string;
  url: string;
  linkTarget?: "_blank" | "_self";
  styleConfig?: {
    linkClass?: string;
    imgClass?: string;
  };
};

const ClickableIcon = ({ icon, url, styleConfig, linkTarget="_blank" }: ClickableIconProps) => {
  return (
    <a
      className={`${styles.iconLink} ${styleConfig?.linkClass}`}
      target={linkTarget}
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