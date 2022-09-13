import { useRouter } from "next/router";
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeftLong  } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    const router = useRouter();

    return(
            <button onClick={ () => router.back() } className="back-button"><FontAwesomeIcon icon={ faArrowLeftLong } />
            </button> 
    )
}

export default Header