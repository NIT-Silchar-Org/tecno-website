import React from 'react'
import StatusCard from './StatusCard'
// import reject from "../public/assests/TeamStat/reject.png"

function TeamReg({ teams: registrations }) {
  return (
    <div className="Team">
      <ul className="TeamList">
        {registrations.map((registration) => (
          <StatusCard
            key={registration.id}
            registration={registration}
            color={'#D03CAB'}
          />
        ))}
      </ul>
    </div>
  )
}

export default TeamReg
