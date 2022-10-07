import React, { useState } from 'react'
import Image from 'next/image'
import EventIcon from '../../../public/assests/profile/icon.png'
import { useEffect } from 'react'
import { fetchEventById } from '../../../utils/events_fetch'
import styles from './styles.module.scss'
import { format } from 'date-fns'

const Transaction = ({ data }) => {
  const [eventName, setEventName] = useState('')
  const [coinChange, setCoinChange] = useState('')
  const [changeSign, setChangeSign] = useState('')
  console.log(data)
  useEffect(() => {
    var event
    if (data.eventId == null) {
      setEventName('Event')
    } else {
      event = fetchEventById(data.eventId)
      setEventName(event.msg?.name)
    }

    if (data.reason === 'PURCHASE') {
      setCoinChange('Spent')
      setChangeSign('-')
    } else {
      setCoinChange('Earned')
      setChangeSign('+')
    }
  }, [])
  return (
    <li className={styles.EventListLi}>
      <div className={styles.eventName}>
        <div style={{marginTop: '5px'}}>
          <Image src={EventIcon} />
        </div>
        <div>
          <span>
            {eventName}
            <br />
          </span>
          <span>{format(new Date(data.createdAt), 'PP')}</span>
        </div>
      </div>
      <div
        className={`${
          data.reason === 'PURCHASE' ? styles.LoseCoin : styles.EarnCoin
        }`}
      >
        <span>{`${changeSign} ${data.amount} ${coinChange}`}</span>
      </div>
    </li>
  )
}

export default Transaction
