import React from 'react';
import styles from '../Navbar/NavButton.module.scss'

export default function NavButton({ children, onClick }) {
    return (
        <div className={styles.navbtncontainer}>
            <button className={styles.navbtn} onClick={onClick}>
                {children}
            </button>
        </div>
    );
}