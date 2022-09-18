import React from 'react'
import PendingCard from './PendingCard'

function TeamPend({ teams: registrations }) {
  return (
    <div className="Team">
      <ul className="TeamList">
        {registrations.map((registration) => (
          <PendingCard registration={registration} key={registration.id} />
        ))}
      </ul>
    </div>
  )
}

export default TeamPend
