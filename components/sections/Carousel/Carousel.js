import { useEffect, useRef, useState } from "react";
import SponserCard from "../SponsorCard/SponsorCard";
import styles from "./Carousel.module.scss"

const Carousel = ({cardList = [],carouselSize}) => {
  const cardContainer = useRef();
  const [carouselCardSize,setCarouselCardSize] = useState(360);

  useEffect(() => {

    const currentCardStyle = getComputedStyle(cardContainer.current.firstChild);
    
    const cardWidth = cardContainer.current.firstChild.offsetWidth;
    const cardMargin = parseInt(currentCardStyle.marginLeft.replace("px","")) + parseInt(currentCardStyle.marginRight.replace("px",""));

    setCarouselCardSize(cardMargin+cardWidth);

    const carouselInterval = setInterval(()=>{
      handleLeftMovement(cardList,carouselSize);
    },3000)

    return () => {
      clearInterval(carouselInterval);
    }
  },[carouselSize])


  const style = {
    width: carouselCardSize*carouselSize,
  }
  
  let counter = 0;

  const handleLeftMovement = (cardList,carouselSize) => {
    counter = (counter+1)%(cardList.length - (carouselSize-1));
    cardContainer.current.style.transform = `translateX(-${counter*carouselCardSize}px)`;
  }

  const handleRightMovement = (cardList,carouselSize) => {
    counter = (counter-1+cardList.length)%(cardList.length - (carouselSize-1));
    cardContainer.current.style.transform = `translateX(-${counter*carouselCardSize}px)`;
  }

  let firstTouch = null;

  const handleTouchStart = (e) => {
    firstTouch = e.touches[0].clientX;
  }

  const handleTouchMove = (e) => {

    const currTouch = e.touches[0].clientX;
    if(firstTouch && Math.abs(firstTouch-currTouch)>=50){
      if(firstTouch<currTouch){
        handleRightMovement(cardList,carouselSize);
      }else{
        handleLeftMovement(cardList,carouselSize);
      }
      firstTouch=null;
    }
  }

  return (
    <div className={styles.carouselContainer}>
      <div style={style} className = {styles.carouselSlit} onTouchStart={(e)=> handleTouchStart(e)} onTouchMove={(e) => handleTouchMove(e)} >
        <div ref={cardContainer} className="flex flex-row duration-300" id={styles.carousalCardContainer}>
          {
            cardList.map((elem,idx) => {
              return(
                <SponserCard imgSrc={elem.imgSrc} imghref={elem.imghref} text={elem.text} key={idx}/>
              )
            })
          }
        </div>
      </div>
      <div className={styles.buttonContainer}>
        <div onClick={() => handleRightMovement(cardList,carouselSize)} className={styles.leftButton}></div>
        <div onClick={() => handleLeftMovement(cardList,carouselSize)} className={styles.rightButton}></div>
      </div>
    </div>
  );
}
 
export default Carousel;