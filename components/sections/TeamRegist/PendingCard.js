import React, { useState } from 'react'
import Image from 'next/image'
import TeamLogo from '../../../public/assests/TeamStat/Ellipse_2168.png'
import downArr from '../../../public/assests/TeamStat/Vector.png'
import upArr from '../../../public/assests/TeamStat/upArr.png'
// import reject from "../public/assests/TeamStat/reject.png"
import Accept from '../../../public/assests/TeamStat/accept.png'
import Reject from '../../../public/assests/TeamStat/reject.png'
import { teamRespond } from '../../../utils/team_fetch'
import { useAuth } from '../../../providers/authContext'

const RejectCard = ({ color = '#FFE166', registration, deleteFromPending }) => {
  const [Height, setHeight] = useState('0')
  const [show, setshow] = useState(false)
  const [dis, setDis] = useState('1')
  const [arr, setArr] = useState(downArr)
  const { auth } = useAuth()
  const styles1 = {
    opacity: `${dis}`,
  }

  const styles = {
    width: '100%',
    transition: 'all 0.3s ease-in',
    height: `${Height}vh`,
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

  const handleRespond = (status) => {
    auth.currentUser.getIdToken().then((token) => {
      if (token) {
        teamRespond(token, status, registration.team.id).then((resp) => {
          if (resp.status < 300) {
            deleteFromPending(registration.id)
          }
        })
      }
    })
  }

  return (
    <li className="Teamdetail" style={{ borderColor: color }}>
      <div className="hshow">
        <div className="teamName">
          <div>
            <Image src={TeamLogo} />
          </div>
          <div>
            <span className="registered" style={{ color: color }}>
              NITS Hacks 4.0
              <br />
            </span>
            <span className="registeredteam">
              Team Name: {registration.team.teamName}
            </span>
          </div>
        </div>
        <div className="StatBtn">
          <button className="reg" onClick={handleRespond('REGISTERED')}>
            <Image src={Accept} />
            &nbsp; Accept
          </button>
          <button className="logout" onClick={handleRespond('REJECTED')}>
            <Image src={Reject} />
            &nbsp; Reject
          </button>
        </div>
        <div className="viewTeam">
          <div className="viewTeamSize" style={styles1}>
            View Team{' '}
          </div>
          <div onClick={handleExpand} className="downArr">
            <Image src={arr} />
          </div>
        </div>
      </div>
      <div className="regcontent" style={styles}>
        <div className="table-content">
          <table>
            <tr>
              <th>Name</th>
              <th>Username</th>
            </tr>
            {registration.team.members.map((val, key) => {
              return (
                <tr key={key}>
                  <td>
                    {val.firstName} {val.middleName ? val.middleName + ' ' : ''}
                    {val.lastName}
                  </td>
                  <td>{val.username}</td>
                </tr>
              )
            })}
          </table>
        </div>
      </div>
    </li>
  )
}

export default RejectCard
