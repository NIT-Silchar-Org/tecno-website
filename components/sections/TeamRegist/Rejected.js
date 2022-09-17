import React, {useState } from 'react'
import Image from 'next/image'
import TeamLogo from "../../../public/assests/TeamStat/Ellipse_2168.png"
import downArr from "../../../public/assests/TeamStat/Vector.png"
import upArr from "../../../public/assests/TeamStat/upArr.png"
// import reject from "../public/assests/TeamStat/reject.png"
import accept from "../../../public/assests/TeamStat/accept.png"


const data = [
    { name: "Levi", username: "ackermann", status: 'true' },
    { name: "Izuku", username: "midoriya", status: 'false' },
    { name: "Shoto", username: "todoroki", status: 'true' },
]

function TeamReg() {

    const [Height, setHeight] = useState('0')
    const [show, setshow] = useState(false)
    const [dis, setDis] = useState('1')
    const [arr, setArr] = useState(downArr)

    const styles1 = {
        opacity: `${dis}`
    }

    const styles = {
        width: '100%',
        transition: 'all 0.3s ease-in',
        height: `${Height}vh`
    }

    const handleExpand = () => {
        setshow(true)
        if (show) {
            setHeight('30')
            setshow(false)
            setDis('0')
            setArr(upArr)
        } else {
            setHeight('0')
            setDis('1')
            setArr(downArr)
        }

    }

    return (
        <div className="Team">
            <ul className='TeamList'>
                <li className='Teamdetail rejectedBorder'>
                    <div className='hshow'>
                        <div className="teamName">
                            <div>
                                <Image src={TeamLogo} />
                            </div>
                            <div>
                                <span className='registered rejected'>
                                    NITS Hacks 4.0
                                    <br />
                                </span>
                                <span className='registeredteam'>Team Name: Bonkers</span>
                            </div>
                        </div>
                        <div className="viewTeam">
                            <div style={styles1}>View Team </div>
                            <div onClick={handleExpand} className='downArr'><Image src={arr} /></div>
                        </div>
                    </div>
                    <div className='regcontent' style={styles}>
                        <div className="table-content">
                            <table>
                                <tr>
                                    <th>Name</th>
                                    <th>Username</th>
                                    <th>Status</th>
                                </tr>
                                {data.map((val, key) => {
                                    return (
                                        <tr key={key}>
                                            <td>{val.name}</td>
                                            <td>{val.username}</td>
                                            <td> <Image src={accept} /></td>
                                        </tr>
                                    )
                                })}
                            </table>

                        </div>
                    </div>
                </li>
                <li className='Teamdetail rejectedBorder'>
                    <div className='hshow'>
                        <div className="teamName">
                            <div>
                                <Image src={TeamLogo} />
                            </div>
                            <div>
                                <span className='registered rejected'>
                                    NITS Hacks 4.0
                                    <br />
                                </span>
                                <span className='registeredteam'>Team Name: Bonkers</span>
                            </div>
                        </div>
                        <div className="viewTeam">
                            <div style={styles1}>View Team </div>
                            <div onClick={handleExpand} className='downArr'><Image src={arr} /></div>
                        </div>
                    </div>
                    <div className='regcontent' style={styles}>
                        <div className="table-content">
                            <table>
                                <tr>
                                    <th>Name</th>
                                    <th>Username</th>
                                    <th>Status</th>
                                </tr>
                                {data.map((val, key) => {
                                    return (
                                        <tr key={key}>
                                            <td>{val.name}</td>
                                            <td>{val.username}</td>
                                            <td> <Image src={accept} /></td>
                                        </tr>
                                    )
                                })}
                            </table>

                        </div>
                    </div>
                </li>
                </ul>

        </div>
    )
}

export default TeamReg