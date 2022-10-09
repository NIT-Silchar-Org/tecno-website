import React from 'react'
import StatusCard from './StatusCard'

function TeamPend({ teams: registrations, deleteFromPending }) {
  return (
    <div className="Team">
      <ul className="TeamList">
        {registrations.map((registration) => (
          <StatusCard
            registration={registration}
            key={registration.id}
            deleteFromPending={deleteFromPending}
            color="#FFE166"
          />
        ))}
      </ul>
    </div>
  )
}

export default TeamPend
