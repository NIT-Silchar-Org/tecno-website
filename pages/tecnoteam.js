import TeamMain from '../components/sections/teams/TeamMain'
import Navbar from '../components/sections/Navbar/Navbar'
import HamBurger from '../components/sections/Navbar/HamBurger'
import teamdata from '../Data/tecnoteamdata.json'

const TecnoTeam = ({ data }) => {
  return (
    <>
      <Navbar profile="/profile" pfp="" hamburger={<HamBurger />} />
      <TeamMain data={data} />
    </>
  )
}

export default TecnoTeam

export async function getStaticProps() {
  const resp = teamdata
  const data = resp
  return {
    props: {
      data,
    },
  }
}
