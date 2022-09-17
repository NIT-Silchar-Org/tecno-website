import React, { useEffect, useRef, useState } from 'react'
import AboutNITS from '../AboutNITS/AboutNITS'
import About from '../AboutUs/About'
import Footer from '../Footer/Footer'
import Slide from '../Slide/Slide'
import MainModule from '../MainModule/Index'
import Header from '../Header/Header'
import styles from './MainLanding.module.scss'
import Image from 'next/image'
import eclipse from '../../../public/assests/landingPage/eclipse.svg'
import ball from '../../../public/assests/landingPage/ball.svg'
import sphere from '../../../public/assests/landingPage/sphere.svg'
import ring from '../../../public/assests/landingPage/ring.svg'
import LeftBg from '../../style-guide/LeftBg/LeftBg'
import RightBg from '../../style-guide/RightBg/RightBg'
import Hacks from '../../style-guide/hacksBanner/Hacks'
import Robotron from '../../style-guide/robotronBanner/Robotron'
import Modules from '../../style-guide/modulesBanner/Modules'
import Vwarz from '../../style-guide/vwarzBanner/Vwarz'
import Spark from '../../style-guide/sparkBanner/Spark'
import Tecno from '../../style-guide/tecnoBanner/Tecno'
import { useInView } from 'react-intersection-observer'

const MainLanding = () => {
  const [offsetY, setOffsetY] = useState(0)
  const [animation, setAnimation] = useState(false)
  const [animationState, setAnimationState] = useState(0)
  const divRef = useRef(null)
  const { ref, inView } = useInView({
    threshold: 0.1,
  })
  const handleScroll = () => {
    setOffsetY(window.pageYOffset)
  }
  const handleAnimation = () => {
    setTimeout(() => {
      if (inView) {
        setAnimationState(1)
      }
    }, 1500)
  }
  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    window.addEventListener('mousewheel', handleAnimation)
    if (inView) {
      setAnimation(false)
    } else {
      setAnimation(true)
    }
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('mousewheel', handleAnimation)
    }
  }, [inView])
  return (
    <div
      className={`${styles.container} ${
        animationState === 0 ? styles.static : ''
      }`}
    >
      <div className={styles.hero} ref={ref}>
        <div className={styles.bgEle}>
          <LeftBg />
        </div>
        <div className={styles.bgEle} id={styles.right}>
          <RightBg />
        </div>
        <div className={styles.overlay}>
          <Header />
        </div>
      </div>
      <div className={styles.main} ref={divRef}>
        <div className={styles.bg}>
          <div
            className={styles.ele}
            id={styles.eclipse}
            style={{ transform: `translateY(-${offsetY * 0.3}px)` }}
          >
            <Image src={eclipse} />
          </div>
          <div
            className={styles.sphere}
            id={styles.sp1}
            style={{ transform: `translateY(-${offsetY * 0.3}px)` }}
          >
            <Image src={sphere} />
          </div>
          <div
            className={styles.ele}
            id={styles.ball}
            style={{ transform: `translateY(-${offsetY * 0.4}px)` }}
          >
            <Image src={ball} />
          </div>
          <div
            className={styles.ele}
            id={styles.ring}
            style={{ transform: `translateY(-${offsetY * 0.4}px)` }}
          >
            <Image src={ring} />
          </div>
          <div
            className={styles.sphere}
            id={styles.sp2}
            style={{ transform: `translateY(-${offsetY * 0.2}px)` }}
          >
            <Image src={sphere} />
          </div>
        </div>
        <div className={`${styles.back} ${animation ? '' : styles.off}`}>
          <Hacks />
          <Robotron />
          <Modules />
          <Vwarz />
          <Spark />
          <Tecno />
        </div>
        <div className={styles.sections}>
          <About />
          <AboutNITS />
          <MainModule />
          <Slide />
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default MainLanding
