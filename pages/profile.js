import React from 'react'
import Image from 'next/image'
import UserIcon from '../public/assests/profile/user.png'
import EventIcon from '../public/assests/profile/icon.png'
import Tecnologo from '../public/assests/profile/Tecnoesis Logo.png'
import Attended from '../public/assests/profile/Event Attended.svg'
import TecnoCoin from '../public/assests/profile/Tecno Coin.svg'
import Name from '../public/assests/profile/nameIcon.png'
import Institute from '../public/assests/profile/InstiIcon.png'
import Phone from '../public/assests/profile/phone.png'
import Location from '../public/assests/profile/location.png'
// import backgrd from "../public/assests/profile/bgMobile.png"
// import CamIcon from "../public/assests/profile/cam.svg"

import axios from 'axios'
import { useEffect, useState } from 'react'
import { useAuth } from '../providers/authContext'
function Profile1() {

  const { backendUser } = useAuth()
  const [token, setToken] = useState(null)
  console.log({backendUser});
  const getToken = async () =>{
    let t = await auth.currentUser.getIdToken()
    setToken(t)
  }
  // useEffect(() => {
    
  //   getToken()
    
  // }, [token])

  

  return (
    <div>
      <div className="profPhoto2 relative rounded">
        <Image src={backendUser?.msg?.imageUrl} layout="fill" className='rounded'/>
      </div>
      <div className="backDiv">
        <div className="profileCard">
          <div className="profDetail">
            <div className="tecnoLogo">
              <Image src={Tecnologo} />
            </div>
            <div className="profImg">
              <div className="profPhoto relative">
                <Image src={backendUser?.msg?.imageUrl} layout="fill" className='rounded' />
              </div>
              <div className="eventDetail">
                <div className="Attended">
                  <Image src={Attended} />
                  <br />
                  <span className="attendedAlign">
                    Attended
                    <br />
                  </span>
                  {/* <span>6 Events<br /></span> */}
                  <span className="attendedAlign">6 Events</span>
                </div>
                <div className="Tecnocoins">
                  <Image src={TecnoCoin} />
                  <br />
                  <span className="attendedAlign">
                    Earned
                    <br />
                  </span>
                  <span className="attendedAlign">
                    300 Coins
                    <br />
                  </span>
                </div>
              </div>
            </div>
            <div className="personalDetail">
              <ul>
                <li className="personalDetailIcon">
                  <Image src={Name} />
                  &emsp;{backendUser?.msg?.firstName} {backendUser?.msg?.lastName}
                </li>
                <li className="personalDetailIcon">
                  <Image src={Institute} />
                  &emsp;{backendUser?.msg?.collegeName}
                </li>
                <li className="personalDetailIcon">
                  <Image src={Phone} />
                  &emsp;+91 {backendUser?.msg?.phoneNumber}
                </li>
                {/* <li className='personalDetailIcon'><Image src={Location} />&emsp;Address</li> */}
              </ul>
              <button className="reg">Registrations</button>
              <br />
              <button className="logout">Log Out</button>
              <br />
              {backendUser?.msg?.registrationId}
            </div>
          </div>
          <div className="TransactionDetail">
            <h2 className="transHeading">Transactions</h2>
            <hr />
            <br />
            <ul className="TransactionList">
              <li className="EventListLi">
                <div className="eventName">
                  <div>
                    <Image src={EventIcon} />
                  </div>
                  <div>
                    <span>
                      ROBOTRON
                      <br />
                    </span>
                    <span>Date</span>
                  </div>
                </div>
                <div className="EarnCoin">
                  <span>30</span>
                </div>
              </li>
              <li className="EventListLi">
                <div className="eventName">
                  <div>
                    <Image src={EventIcon} />
                  </div>
                  <div>
                    <span>
                      ROBOTRON
                      <br />
                    </span>
                    <span>Date</span>
                  </div>
                </div>
                <div className="EarnCoin">
                  <span>30</span>
                </div>
              </li>
              <li className="EventListLi">
                <div className="eventName">
                  <div>
                    <Image src={EventIcon} />
                  </div>
                  <div>
                    <span>
                      ROBOTRON
                      <br />
                    </span>
                    <span>Date</span>
                  </div>
                </div>
                <div className="EarnCoin">
                  <span>30</span>
                </div>
              </li>
              <li className="EventListLi">
                <div className="eventName">
                  <div>
                    <Image src={EventIcon} />
                  </div>
                  <div>
                    <span>
                      ROBOTRON
                      <br />
                    </span>
                    <span>Date</span>
                  </div>
                </div>
                <div className="EarnCoin">
                  <span>30</span>
                </div>
              </li>
              <li className="EventListLi">
                <div className="eventName">
                  <div>
                    <Image src={EventIcon} />
                  </div>
                  <div>
                    <span>
                      ROBOTRON
                      <br />
                    </span>
                    <span>Date</span>
                  </div>
                </div>
                <div className="EarnCoin">
                  <span>30</span>
                </div>
              </li>
              <li className="EventListLi">
                <div className="eventName">
                  <div>
                    <Image src={EventIcon} />
                  </div>
                  <div>
                    <span>
                      ROBOTRON
                      <br />
                    </span>
                    <span>Date</span>
                  </div>
                </div>
                <div className="EarnCoin">
                  <span>30</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile1
