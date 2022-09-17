import React from 'react'
import Image from 'next/image'
import TeamLogo from "../../../public/assests/TeamStat/Ellipse_2168.png"
import Accept from "../../../public/assests/TeamStat/accept.png"
import Reject from "../../../public/assests/TeamStat/reject.png"

function TeamPend() {
    return (
        <div className="Team">
            <ul className='TeamList'>
                <li className='Teamdetail'>
                    <div className="teamName">
                        <div>
                            <Image src={TeamLogo} />
                        </div>
                        <div>
                            <span className='registered'>
                                Nits Hack 4.0
                                <br />
                            </span>
                            <span className='registeredteam'>Team Name:Bonkers</span>
                        </div>
                    </div>
                    <div className="viewTeam">
                        <button className='reg'><Image src={Accept}/>&nbsp; Accept</button><br />
                        <button className='logout'><Image src={Reject}/>&nbsp; Reject</button><br />
                    </div>
                </li>

            </ul>

        </div>
    )
}

export default TeamPend