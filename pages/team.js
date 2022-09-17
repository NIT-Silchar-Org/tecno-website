import React from 'react'
import Image from 'next/image'
import TeamLogo from "../public/assests/TeamStat/Ellipse_2168.png"
import downArr from "../public/assests/TeamStat/vector.png"


function Team() {
    return (
        <div className='teamBack'>
            <div className='registration1'>
                <div></div>
                <div className='regStatus'>
                    <div></div>
                    <div>Pending</div>
                    <div>Registered</div>
                    <div>Rejected</div>
                    <div></div>
                </div>
               
                <div className="TeamName">
                    <ul className='TeamList'>
                        <li className='Teamdetail'>
                            <div className="eventName">
                                <div>
                                    <Image src={TeamLogo} />
                                </div>
                                <div>
                                    <span>
                                        ROBOTRON
                                        <br />
                                    </span>
                                    <span>Date</span>
                                </div>
                            </div>
                            <div className="viewTeam">
                                <div>View Team</div>
                              <div><Image src={downArr}/></div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Team