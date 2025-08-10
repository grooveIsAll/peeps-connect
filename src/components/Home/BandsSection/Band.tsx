import { ReactNode } from "react";

import ClickableIcon from "../../shared/ClickableIcon/ClickableIcon";
import { Icons } from "../../../assets/icons/Icons";

import styles from "./Band.module.scss";

export type BandProps = {
  id: string;
  name: string;
  image: string;
  description: string;
  socialLinks: SocialLink[];
};

type SocialLink = {
  platform: string;
  url: string;
};

type StringMap = {
  [key: string]: string;
};

const { instagram, spotify, youtube, web, soundcloud } = Icons;

const platformLookup: StringMap = {
  instagram,
  spotify,
  youtube,
  web,
  soundcloud,
}

const Band = ({
  name,
  image,
  description,
  socialLinks,
} : BandProps) => {
  const socialIcons = socialLinks.reduce((acc, link) => {
    const icon = platformLookup[link.platform.toLowerCase()];
    if (icon) {
      acc.push(
      <ClickableIcon
        key={link.platform}
        icon={icon}
        url={link.url}
        styleConfig={{ imgClass: styles.socialIcon }}
      />
    );
    }
    return acc;
  }, [] as ReactNode[]);

  return (
    <div className={styles.band}>
      <img src={image} alt={name} className={styles.bandImage} />
      <h3 className={styles.bandName}>{name}</h3>
      <p className={styles.bandDescription}>{description}</p>
      { socialIcons.length ? (
        <div className={styles.bandSocials}>
          {socialIcons}
        </div>
      ) : null}
    </div>
  );
};

export default Band;
