import React from 'react' 
// import homebg from '../../public/assests/landingPage/parallaxbg.png'

function Parallax() {
  return (
    <div className='relative  h-screen w-screen'>
    <img src='../../assests/landingPage/parallaxbg.png' className=" w-screen h-screen absolute top-0 left-0"/>
    <img src='../../assests/landingPage/parallaxpng.png' className="w-screen relative z-10 bottom-1/2 left-0"/>

    </div>
  )
}

export default Parallax