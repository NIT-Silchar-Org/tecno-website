import React from 'react';
import styles from '../Navbar/NavButton.module.scss'

export default function NavButton({ text, onClick }) {
    return (
        <div className={styles.navbtncontainer}>
            <button className={styles.navbtn} onClick={onClick}>
                {text}
            </button>
        </div>
    );
}