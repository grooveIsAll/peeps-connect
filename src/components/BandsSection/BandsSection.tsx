import { useEffect, useState } from 'react';

import Band, { BandProps } from './Band';

import styles from "./BandsSection.module.scss";

const BandsSection = () => {
  const [bands, setBands] = useState<BandProps[]>([]);

  useEffect(() => {
    const fetchBands = async () => {
      try {
        const response = await fetch('band-api.json');
        const data = await response.json();
        setBands(data.data.bands);
      } catch (error) {
        console.error('Error fetching band data:', error);
      }
    };

    fetchBands();
  }, []);

  return (
    <div className={styles.bandsSection}>
      <h1>
        Featuring 4 Stages with live performances by:
      </h1>
      <div className={styles.bandsList}>
        {bands.map((band) => (
          <Band key={band.id} {...band} />
        ))}
      </div>
    </div>
  );
};

export default BandsSection;