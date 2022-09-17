import Link from 'next/link';
import styles from '../Navbar/NavButton.module.scss'

export default function NavButton(props) {
    return(
        <div className={styles.navbtncontainer}>
            <button className={styles.navbtn}>
                <Link href={props.href}>
                    <a className={styles.navbtntext}>
                        { props.text }
                    </a>
                </Link>
            </button>
        </div>
    );
}