import slider from "../../../public/assests/modules/slider.svg"
import styles from "./Slider.module.scss"
import Image from "next/image"

const Slider = ({setActive, active}) =>{
return(
    <div className={styles.slider} onClick={()=>{
        setActive(true)
        console.log(active)
      }}>
        <Image src={slider} alt=""/>
      </div>
)
}

export default Slider;