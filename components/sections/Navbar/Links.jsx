import React from "react";
import Link from "next/link";
import styles from '../Navbar/NavButton.module.scss';

export default function Links(props) {
    return (
    <Link href={props.href}>
        <a className={styles.navbtntext}>
            {props.text}
        </a>
    </Link>
    )
}