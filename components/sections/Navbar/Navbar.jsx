import styles from '../Navbar/Navbar.module.scss'
// import ham from '../Navbar/Hamburger.module.scss'
import React, { useState } from 'react';
import Profile from './Profile';
import NavButton from '../Navbar/NavButton'
import Link from 'next/link';

const navLinks = [
    /* Set navlinks to different routes */
    {text: "ABOUT", route: "/"},
    {text: "MODULES", route: "/"},
    {text: "SPONSORS", route: "/"},
    {text: "TEAM", route: "/"},
    {text: "GALLERY", route: "/"},
    {text: "CONTACT US", route: "/"},
]

export default function Navbar(props) {
    const [open, toggleNavbar] = useState(false);
    console.log(open);


    return(
        <div className={styles.nav}>
            <div onClick={()=>{
                console.log("click");
                toggleNavbar(!open)
            }}>
            {/* {props?.hamburger}
             */}
             {React.cloneElement(props.hamburger, {
                open:open
             })}
            </div>

            <div className={open ? styles.navbarshow : styles.navbar}>
                <Profile href={props.profile} pfp={props.pfp} />
                <div className={ styles.navitemcontainer }>
                    {
                        navLinks.map((links, index) => {
                            return(
                                <Link href={links.route} key={index}>
                                    <NavButton text={links.text} href={links.route} key={index}/>
                                </Link>
                            )
                       })
                    }
                </div>
            </div>
        </div>
    );
}