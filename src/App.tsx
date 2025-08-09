import Nav from './components/shared/Nav/Nav'
import Hero from './components/HeroSection/HeroSection'
import StillFlying from './components/StillFlyingSection/StillFlyingSection'
import TicsDropping from './components/TicsDroppingSection/TicsDroppingSection'
import Lineup from './components/LineupSection/LineupSection'

import './App.css'

function App() {
  return (
    <div>
      <Nav />
      <Hero />
      <StillFlying />
      <TicsDropping />
      <Lineup />
    </div>
  )
}

export default App
