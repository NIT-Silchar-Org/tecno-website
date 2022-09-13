import React, { useEffect, useState } from 'react'
// import Logo from '../../../style-guide/utils/Icons/Logo'
import Image from 'next/dist/client/image'
import LogoPng from '../../../public/assests/landingPage/tecnoesis.png'
import headerStyle from "../Header/HeaderStyle.module.scss"

function Header() {
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
        <div className={headerStyle.main}>
            <h1
                className={headerStyle.h1}
                style={{
                    transform: `translateY(${offsetY * 0.2}px)`,
                }}
            >
                Coming Soon
            </h1>
            <div className={headerStyle.tecnoesisText}>
                <div className={headerStyle.textAndLogo}>
                    <div className={headerStyle.logo}>
                        <Image src={LogoPng} />
                    </div>
                    <h1
                        className={headerStyle.headingText}
                    >
                        TECNOESIS
                    </h1>
                </div>
                <div className={headerStyle.year}>
                    <h1
                        className={headerStyle.yearH1}
                    >
                        2022
                    </h1>
                </div>
            </div>

            <h1
                className={headerStyle.backToTheFuture}
            >
                BACK TO THE FUTURE
            </h1>
            <h1 className={headerStyle.dates}>
                20. 21. 22. 23
            </h1>
            <h1 className={headerStyle.month}>
                October
            </h1>
        </div>
    )
}

export default Header
