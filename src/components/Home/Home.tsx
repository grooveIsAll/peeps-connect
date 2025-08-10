

import Nav from '../shared/Nav/Nav'
import Hero from './HeroSection/HeroSection'
import StillFlying from './StillFlyingSection/StillFlyingSection'
import TicsDropping from './TicsDroppingSection/TicsDroppingSection'
import Lineup from './LineupSection/LineupSection'
import Bands from './BandsSection/BandsSection'

function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <StillFlying />
      <TicsDropping />
      <Lineup />
      <Bands />
    </>
  )
}

export default Home