import React from 'react'
import PendingCard from "./PendingCard"

function TeamPend() {
    return (
      <div className="Team">
        <ul className="TeamList">
          <PendingCard color={'#FFE166'} />
          <PendingCard color={'#FFE166'} />
          <PendingCard color={'#FFE166'} />
        </ul>
      </div>
    )
}

export default TeamPend

