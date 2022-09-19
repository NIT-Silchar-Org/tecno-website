import React from 'react';
import styles from '../components/Button.module.css';

export default function Button({ children, onClick, id }) {
    return (
        <div id={id} className={styles.navbtncontainer}>
            <button className={styles.navbtn} onClick={onClick}>
                {children}
            </button>
        </div>
    );
}