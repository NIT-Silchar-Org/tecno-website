import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
// import UserIcon from '../public/assests/profile/user.png'
import EventIcon from "../public/assests/profile/EventIcon.svg"
import Tecnologo from '../public/assests/profile/Tecnoesis Logo.png'
import TecnoCoin from '../public/assests/profile/Tecno Coin.svg'
import Name from '../public/assests/profile/nameIcon.png'
import Institute from '../public/assests/profile/InstiIcon.png'
import Phone from '../public/assests/profile/phone.png'
// import Location from '../public/assests/profile/location.png'
// import backgrd from "../public/assests/profile/bgMobile.png"
// import CamIcon from "../public/assests/profile/cam.svg"
import Navbar from '../components/sections/Navbar/Navbar'
import HamBurger from '../components/sections/Navbar/HamBurger'
// import axios from 'axios'
// import {  useState } from 'react'
import { useAuth } from '../providers/authContext'
import { getTransactions } from '../utils/tecnoCoins'
import Transaction from '../components/style-guide/Transaction/Transaction'
function Profile1() {
  const { auth, backendUser, logout } = useAuth()
  const router = useRouter()
  const [transactions, setTransactions] = useState([])
  const [noOfEvents, setNoOfEvents] = useState(0)
  useEffect(() => {
    auth.currentUser.getIdToken().then((token) => {
      getTransactions(token).then((resp) => {
        setTransactions(resp.data.msg)
        // console.log(transactions)
      }).then(() => {
        let num = 0;
        transactions.forEach((transaction) => { 
          if (transaction.reason === 'ATTENDANCE') num++;
        })
        setNoOfEvents(num)
      })
    })
  }, [auth, backendUser])
  // useEffect(() => {

  //   getToken()

  // }, [token])

  return (
    <>
      <Navbar
        profile="/profile"
        pfp={backendUser?.msg?.imageUrl}
        hamburger={<HamBurger />}
      />
      <div className="profilePage">
        <div className="profPhoto2 relative rounded">
          <Image
            src={backendUser?.msg?.imageUrl}
            layout="fill"
            className="rounded"
          />
        </div>
        <div className="backDiv">
          <div className="profileCard">
            <div className="profDetail">
              <div className="tecnoLogo">
                <Image src={Tecnologo} />
              </div>
              <div className="profImg">
                <div className="profPhoto relative ">
                  <Image
                    src={backendUser?.msg?.imageUrl}
                    layout="fill"
                    className="rounded"
                  />
                </div>
                <div className="eventDetail">
                  <div className="Tecnocoins">
                    <Image src={EventIcon} />
                    <div className="attendedAlign">Attended</div>
                    <div
                      className="attendedAlign"
                      style={{ fontWeight: '800' }}
                    >
                      {/* Coming Soon */}
                      {`${noOfEvents} Events`}
                    </div>
                  </div>
                  <div className="Tecnocoins">
                    <Image src={TecnoCoin} />
                    <div className="attendedAlign">Earned</div>
                    <div
                      className="attendedAlign"
                      style={{ fontWeight: '800' }}
                    >
                      {/* Coming Soon */}
                      {`${backendUser?.msg?.balance} Coins`}
                    </div>
                  </div>
                </div>
              </div>
              <div className="personalDetail">
                <ul>
                  <li className="personalDetailIcon">
                    <Image src={Name} />
                    &emsp;{backendUser?.msg?.firstName}{' '}
                    {backendUser?.msg?.lastName}
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
                <div className='btns'>
                  <button
                    className="reg"
                    onClick={() => {
                      router.push('/team')
                    }}
                  >
                    Registrations
                  </button>
                  <button className="logout" onClick={logout}>
                    Log Out
                  </button>
                </div>

                <br />
                {backendUser?.msg?.username}
              </div>
            </div>
            {/* <div className="TransactionDetail">
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
            </div> */}
            <div className="TransactionDetail">
              <h2 className="transHeading">Transactions</h2>
              <hr />
              {/* <br /> */}
              {transactions.length === 0 ? (
                <div className="transcomesoon">No transactions to show!</div>
              ) : (
                <ul className="TransactionList">
                  {transactions.map((transaction) => {
                    return (
                      <Transaction data={transaction} key={transaction.id} />
                    )
                  })}
                </ul>
              )}
              {/* <ul className="TransactionList">
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
              </ul> */}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Profile1
