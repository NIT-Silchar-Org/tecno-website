import styles from '../Navbar/Navbar.module.scss'
import ham from '../Navbar/Hamburger.module.scss'
import { useState } from 'react';
import Profile from './Profile';
import NavButton from '../Navbar/NavButton'

const navLinks = [
    {text: "ABOUT", route: "/"},
    {text: "MODULES", route: "/modules"},
    {text: "SPONSORS", route: "/"},
    {text: "TEAM", route: "/"},
    {text: "GALLERY", route: "/"},
    {text: "CONTACT US", route: "/"},
]

export default function Navbar(props) {
    const [open, ToggleNavbar] = useState(false);

    return(
        <div className={styles.nav}>
            <div className={styles.hambtn}>
                <button className={` ${ham.hamburger} ${ham.hamburger_glitch} 
                    ${open ? ham.is_active : null} ` }
                    onClick={()=>{ToggleNavbar(!open)}}
                >
                    <span className={ham.hamburger_box}>
                       <span className={ham.hamburger_inner}></span>
                    </span>
                </button>
            </div>

            <div className={open ? styles.navbarshow : styles.navbar}>
                <Profile href={props.profile} pfp={props.pfp} />
                <div className={ styles.navitemcontainer }>
                    {
                        navLinks.map((links, index) => {
                            return(
                                <NavButton text={links.text} href={links.route} key={index}/>
                            )
                       })
                    }
                </div>
            </div>
        </div>
    );
}