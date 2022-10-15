import React, { useEffect, useState } from 'react'
// import SponserCard from '../elements/SponserCard'
import MTV from "../../../public/assests/Sponsors/MTVNewTriColor.png"
import IEEE from "../../../public/assests/Sponsors/IEEE.png"
import cdac from "../../../public/assests/Sponsors/cdac.png"

import Carousel from '../Carousel/Carousel';
import styles from "./Sponsors.module.scss";


const Sponsers = () => {

  const tierOneSponsors = [
    {imgSrc: MTV, imghref: "", text: ""},
    {imgSrc: IEEE, imghref: "", text: ""},
    {imgSrc: cdac, imghref: "", text: ""},
  ]

  const [carouselSizes,setCarouselSizes] = useState ({
    tierOneSize: tierOneSponsors.length,
  })

  useEffect(() => {
    if(screen.width<640){
      setCarouselSizes((prev) => {
        const newSizes = {...prev}
        newSizes.tierOneSize = Math.min(newSizes.tierOneSize,1);
        return newSizes;
      })
    }else if(screen.width<1200){
      setCarouselSizes((prev) => {
        const newSizes = {...prev}
        newSizes.tierOneSize = Math.min(newSizes.tierOneSize,2);
        return newSizes;
      })
    }else{
      setCarouselSizes((prev) => {
        const newSizes = {...prev}
        newSizes.tierOneSize = Math.min(newSizes.tierOneSize,3);
        return newSizes;
      })
    }

  },[])

  return (
    <div
      className={styles.sponsorContainer}
      id="sponsors"
    >
      <div
        className={styles.sponsorTitle}
      >
        <div className="font-babaPro py-2 border-b">SPONSORS</div>
      </div>

      <div
        className={styles.sponsorCarouselContainer}
      >
        <Carousel cardList={tierOneSponsors} carouselSize = {carouselSizes.tierOneSize} />
      </div>
    </div>
  )
}

export default Sponsers
