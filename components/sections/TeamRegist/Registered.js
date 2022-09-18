import React from 'react'
import StatusCard from './StatusCard'

function TeamReg({ teams: registrations }) {
  return (
    <div className="Team">
      <ul className="TeamList">
        {registrations.map((registration) => (
          <StatusCard
            key={registration.id}
            registration={registration}
            color={'#4992FF'}
          />
        ))}
      </ul>
    </div>
  )
}

export default TeamReg
