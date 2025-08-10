import Hero from './HeroSection/HeroSection'
import StillFlying from './StillFlyingSection/StillFlyingSection'
import TicsDropping from './TicsDroppingSection/TicsDroppingSection'
import Lineup from './LineupSection/LineupSection'
import Bands from './BandsSection/BandsSection'

import styles from './Home.module.scss'

function Home() {
  return (
    <section className={styles.home}>
      <Hero />
      <StillFlying />
      <TicsDropping />
      <Lineup />
      <Bands />
    </section>
  )
}

export default Home