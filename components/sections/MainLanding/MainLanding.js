import React, { useEffect, useReducer, useRef, useState } from 'react'
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

/*

entire container will be non-scrollable, meanwhile hero animation runs
When hero observes a scroll, the hero animation stops and the main section comes into view
flicker animation starts

IsScrollable
IsInView
Animation

*/
export const ANIMATION_NORMAL = 0
export const ANIMATION_EXIT = 1
export const ANIMATION_STOP = 2
const initialState = { animation: ANIMATION_NORMAL, scrollable: false }

const ACTION_SCROLL = 'scroll'
const ACTION_EXIT_ANIMATION_COMPLETE = 'exit-animation-complete'

const reducer = (state, action) => {
  switch (action) {
    case ACTION_SCROLL: {
      return {
        ...state,
        animation: ANIMATION_EXIT,
      }
    }
    case ACTION_EXIT_ANIMATION_COMPLETE: {
      return {
        ...state,
        animation: ANIMATION_STOP,
        scrollable: true,
      }
    }
  }
}
const MainLanding = () => {
  const [offsetY, setOffsetY] = useState(0)
  // const [isScrollable, setIsScrollable] = useState(false)
  // const [startRoll, setStartRoll] = useState(false)
  // const [isAnimationComplete, setIsAnimationComplete] = useState(false)
  const [activeInd, setActiveind] = useState([0, 1])
  const divRef = useRef(null)
  const { ref, inView: heroInView } = useInView({
    threshold: 0.1,
  })

  const [state, dispatch] = useReducer(reducer, initialState)
  const handleScroll = () => {
    setOffsetY(window.pageYOffset)
  }
  const handleAnimation = () => {
    // setStartRoll(true)

    // setTimeout(() => {
    //   if (heroInView && !isScrollable && !isAnimationComplete) {
    //     setIsScrollable(true)
    //     setIsAnimationComplete(true)
    //   }
    // }, 3999)
    dispatch(ACTION_SCROLL)
    setTimeout(() => {
      dispatch(ACTION_EXIT_ANIMATION_COMPLETE)
    }, 1200)
  }

  useEffect(() => {
    if (state.scrollable)
      setTimeout(() => {
        divRef.current?.scrollIntoView({ behavior: 'smooth' })
      }, 10)
  }, [state.scrollable])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  })
  useEffect(() => {
    if (heroInView) {
      window.addEventListener('mousewheel', handleAnimation)
    }
    return () => {
      window.removeEventListener('mousewheel', handleAnimation)
    }
  }, [heroInView])
  useEffect(() => {
    const interval = setInterval(() => {
      const index = [0, 1, 2, 3, 4, 5]
      const shuffled = index.sort(() => 0.5 - Math.random())

      // Get sub-array of first n elements after shuffled
      const selected = shuffled.slice(0, 2)
      setActiveind(selected)
      console.log(selected)
    }, 4000)

    return () => clearInterval(interval)
  }, [])
  return (
    <div
      className={`${styles.container} ${
        !state.scrollable ? styles.static : ''
      }`}
    >
      <div className={`${styles.hero}`} ref={ref}>
        <div className={`${styles.bgEle} ${heroInView ? '' : styles.blank}`}>
          <LeftBg state={state.animation} />
        </div>
        <div
          className={`${styles.bgEle} ${heroInView ? '' : styles.blank}`}
          id={styles.right}
        >
          <RightBg state={state.animation} />
        </div>
        <div className={styles.overlay}>
          <Header state={state.animation} view={heroInView} />
        </div>
      </div>
      <div className={styles.main} ref={divRef}>
        <div className={styles.bg}>
          <div
            className={styles.ele}
            id={styles.eclipse}
            style={{ transform: `translateY(-${offsetY * 0.2}px)` }}
          >
            <Image src={eclipse} />
          </div>
          <div
            className={styles.sphere}
            id={styles.sp1}
            style={{ transform: `translateY(-${offsetY * 0.25}px)` }}
          >
            <Image src={sphere} />
          </div>
          <div
            className={styles.ele}
            id={styles.ball}
            style={{ transform: `translateY(-${offsetY * 0.3}px)` }}
          >
            <Image src={ball} />
          </div>
          <div
            className={styles.ele}
            id={styles.ring}
            style={{ transform: `translateY(-${offsetY * 0.35}px)` }}
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
        <div className={`${styles.back} ${!heroInView ? '' : styles.off}`}>
          <Hacks active={activeInd.includes(0)} />
          <Robotron active={activeInd.includes(1)} />
          <Modules active={activeInd.includes(2)} />
          <Vwarz active={activeInd.includes(3)} />
          <Spark active={activeInd.includes(4)} />
          <Tecno active={activeInd.includes(5)} />
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
