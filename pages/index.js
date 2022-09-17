
import MainLanding from '../components/sections/MainLanding/MainLanding'
import Navbar from '../components/sections/Navbar/Navbar'
import HamBurger from '../components/sections/Navbar/HamBurger'
const Home = () => {
  return (
    <div>
      <Navbar profile="/profile" pfp="" hamburger={<HamBurger/>}  />
      <MainLanding />
    </div>

  )
}

export default Home
