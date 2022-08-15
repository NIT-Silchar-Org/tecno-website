import React from 'react'
import { icons } from '../../style-guide/utils/icons'

const EventAttended = ({ noOfEvents }) => {
  return (
    <div className="w-2/5 flex flex-col items-center justify-center">
      {icons.eventsIcon}
      <div className="text-white">
        <span className="font-semibold">{noOfEvents} events</span>
        <span className="font-normal"> attended</span>
      </div>
    </div>
  )
}

export default EventAttended
