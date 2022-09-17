import styles from '../Navbar/Profile.module.scss'
import defaultimg from '../../../public/assests/Navbar/default.png'
import Image from 'next/image';
import Link from 'next/link';

export default function Profile(props) {
    return(
        <div className={styles.surround}>
            <div className={styles.profile}>
                <Link href={props.href}>
                <Image
                    className={styles.image}
                    src={props.pfp || defaultimg} // use props.pfp if available else default pfp
                    alt="Profile Picture"
                    width={60}
                    height={60}
                    objectFit="cover"
                />
                </Link>
            </div>
        </div>
    );
}