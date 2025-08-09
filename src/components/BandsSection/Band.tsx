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

const Band = ({
  name,
  image,
  description,
  socialLinks,
} : BandProps) => {
  return (
    <div className={styles.band}>
      <img src={image} alt={name} className={styles.bandImage} />
      <h3 className={styles.bandName}>{name}</h3>
      <p className={styles.bandDescription}>{description}</p>
      <div className={styles.bandSocials}>
        {socialLinks.map((link) => (
          <a key={link.platform} href={link.url} className={styles.socialLink}>
            {link.platform}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Band;
