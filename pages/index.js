import Parallax from '../components/style-guide/sections/Parallax'
import AboutUs from '../components/style-guide/sections/AboutUs'
import AboutNIT from '../components/style-guide/sections/AboutNIT'

export default function Home() {
  return (

    <div className="relative">
      <div className='bg-black  bg-opacity-20 inset-0 absolute z-20'>

      </div>
      <Parallax />
      <AboutUs />
      <AboutNIT />
    </div>
  )
};
