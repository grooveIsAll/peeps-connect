import Nav from './components/shared/Nav/Nav'
import Hero from './components/HeroSection/HeroSection'
import StillFlying from './components/StillFlyingSection/StillFlyingSection'
import TicsDropping from './components/TicsDroppingSection/TicsDroppingSection'
import Lineup from './components/LineupSection/LineupSection'
import Bands from './components/BandsSection/BandsSection'

import './App.css'

function App() {
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

export default App
