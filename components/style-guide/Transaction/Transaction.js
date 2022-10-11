import React, { useState } from 'react'
import { useEffect } from 'react'
import { fetchEventById } from '../../../utils/events_fetch'
import styles from './styles.module.scss'
import { format } from 'date-fns'

const Transaction = ({ data }) => {
  const [eventName, setEventName] = useState('')
  const [coinChange, setCoinChange] = useState('')
  const [changeSign, setChangeSign] = useState('')
  useEffect(() => {
    if (data.reason === 'ONLINE_EVENT') {
      setEventName('Online Event')
    }
    else if (data.reason != 'REGISTRATION') {
      setEventName(data.reason.charAt(0) + data.reason.slice(1).toLowerCase())
    }
    else {
      fetchEventById(data.eventId).then((res) => { 
        setEventName(res.data?.msg?.name)
      })
    }

    if (data.type === 'DEBIT') {
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
        <div>
          <span>
            {eventName}
            <br />
          </span>
          <span>{format(new Date(data.createdAt), 'PPp')}</span>
        </div>
      </div>
      <div
        className={`${
          data.type === 'DEBIT' ? styles.LoseCoin : styles.EarnCoin
        }`}
      >
        <span>{`${changeSign}${data.amount} ${coinChange}`}</span>
      </div>
    </li>
  )
}

export default Transaction
