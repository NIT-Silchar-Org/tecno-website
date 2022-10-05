import React, { useState } from 'react'
import Image from 'next/image'
import EventIcon from '../../../public/assests/profile/icon.png'
import { useEffect } from 'react'
import { fetchEventById } from '../../../utils/events_fetch'
import styles from './styles.module.scss'

const Transaction = ({ data }) => {
  const [eventName, setEventName] = useState('')
  const [coinChange, setCoinChange] = useState('')
  const [changeSign, setChangeSign] = useState('')
  useEffect(() => {
    let event = fetchEventById(data.eventId)
    setEventName(event.msg.name)

    if (data.reason === 'ATTENDANCE') {
      setCoinChange('Earned')
      setChangeSign('+')
    }
    else {
      setCoinChange('Spent')
      setChangeSign('-')
    }
  }, [])
  return (
    <li className={styles.EventListLi}>
      <div className={styles.eventName}>
        <div>
          <Image src={EventIcon} />
        </div>
        <div>
          <span>
            {eventName}
            <br />
          </span>
          <span>{data.createdAt}</span>
        </div>
      </div>
      <div
        className={`${
          data.reason === 'ATTENDANCE' ? styles.EarnCoin : styles.LoseCoin
        }`}
      >
        <span>{`${changeSign} ${data.amount} ${coinChange}`}</span>
      </div>
    </li>
  )
}

export default Transaction
