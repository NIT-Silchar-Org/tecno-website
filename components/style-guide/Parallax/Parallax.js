import ParallaxStyle from "../Parallax/ParallaxStyle.module.scss"
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import BGFIRST from "../../../public/assests/landingPage/parallaxbg.png"
import BGBOTTOM from '../../../public/assests/landingPage/parallaxpng.png'
import BGBOTTOMSM from '../../../public/assests/landingPage/parallaxpng-crop.png'
import Header from '../Header/Header'
import Socials from '../Socials/Socials'

function Parallax() {
    const [offsetY, setOffsetY] = useState(0)
    const handleScroll = () => {
        setOffsetY(window.pageYOffset)
    }
    useEffect(() => {
        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])
    return (
        // <div className="relative h-screen w-screen overflow-y-hidden bg-black">
        //     <div className="bg-black bg-opacity-30 z-20  absolute inset-0"></div>

        //     <div className="absolute top-[15vh] w-full z-20 text-white">
        //         <Header />
        //     </div>
        //     <div className="absolute hidden md:block   md:top-48 right-8  md:left-8 z-40">
        //         <Socials />
        //     </div>

        //     <div
        //         className="absolute relative w-screen h-screen top-0 left-0"
        //         style={{ transform: `translateY(${offsetY * 0.5}px)` }}
        //     >
        //         <Image src={BGFIRST} layout="fill" objectFit="cover" />
        //     </div>
        //     <div className="absolute relative z-10 w-screen -top-[42vh] left-0 h-[80vh] hidden md:block">
        //         <Image src={BGBOTTOM} layout="fill" objectFit="cover" priority="true" />
        //     </div>
        //     <div className="absolute relative z-10 w-screen -top-[41vh] left-0 h-[80vh] md:hidden">
        //         <Image
        //             src={BGBOTTOMSM}
        //             layout="fill"
        //             objectFit="cover"
        //             priority="true"
        //         />
        //     </div>
        // </div>

        <div className={ParallaxStyle.main}>
            <div className={ParallaxStyle.start}></div>

            <div className={ParallaxStyle.head}>
                <Header />
            </div>
            <div className={ParallaxStyle.social}>
                <Socials />
            </div>

            <div
                className={ParallaxStyle.bgImageStyle}
                style={{ transform: `translateY(${offsetY * 0.5}px)` }}
            >
                <Image src={BGFIRST} layout="fill" objectFit="cover" />
            </div>
            <div
                className={ParallaxStyle.bgImageStyle2}
            // style={{ transform: `translateY(${offsetY * 0.3}px)` }}
            >
                <Image src={BGBOTTOM} layout="fill" objectFit="cover" priority="true" />
            </div>
            <div className={ParallaxStyle.bgBottomStyle}>
                <Image
                    src={BGBOTTOMSM}
                    layout="fill"
                    objectFit="cover"
                    priority="true"
                />
            </div>
        </div>
    )
}

export default Parallax
