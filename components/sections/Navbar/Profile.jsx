import styles from '../Navbar/Profile.module.scss'
import Image from 'next/image';
import Link from 'next/link';
// import { useAuth } from '../../../providers/authContext';
// import LoginButton from '../../AuthLayer/LoginButton';
// import Image from 'next/image'
import {useAuth} from '../../../providers/authContext'
import {useState} from 'react'
export default function Profile(props) {

    const {firebaseUser, backendUser} = useAuth()
    console.log(firebaseUser);
    console.log(backendUser);

    const { signup} = useAuth()
    const [isdisabled, setIsdisabled] = useState(false)
    const handleLogin = async () =>{
        setIsdisabled(true)
        try{
            await signup()
        }catch(err){
            console.log(err);
        }
        setIsdisabled(false)
    }

    return(

        <>

        {firebaseUser?(
            <div className={styles.surround}>

          
            <div className={styles.profile}>
                
                    <>
                        <Link href={props.href}>
                        <Image
                            className={styles.image}
                            src={firebaseUser.photoURL}
                            alt="Profile Picture"
                            width={60}
                            height={60}
                            objectFit="cover"
                            
                        />
                        </Link>
                    </>
                
            </div>
            
        </div>

        ):(
            <div className={ styles.surrounddisabled } onClick={handleLogin} disabled={isdisabled}>
            <img src = "/assests/Navbar/signin.svg"/>

            </div>

        )}


        </>
        
    );
}