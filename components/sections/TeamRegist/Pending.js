import React from 'react'
import PendingCard from './PendingCard'

function TeamPend({ teams: registrations, deleteFromPending }) {
  return (
    <div className="Team">
      <ul className="TeamList">
        {registrations.map((registration) => (
          <PendingCard
            registration={registration}
            key={registration.id}
            deleteFromPending={deleteFromPending}
          />
        ))}
      </ul>
    </div>
  )
}

export default TeamPend
