import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
// import { useState } from 'react';
import Button from "./Button";

import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faXmark
} from '@fortawesome/free-solid-svg-icons'
library.add(faXmark)

function TeamMember({ username, setUsername, memberCount, setMemberCount, members, setMembers, maxMemberCount, deleteMember }) {
  // const [username, setUsername] = useState("")
  // const [memberCount, setMemberCount] = useState(1)
  // const [members, setMembers] = useState([])
  const addMember = () => {
    if (!username) return
    const temp = [...members, username]
    setMembers(temp)
    setMemberCount(memberCount + 1)

  }

  return (
    <>
      <form className="form">
        <div className='input-wrapper text-lg'>
          <div className='input-field monte text-lg'>
            <h2 className="my-2 text-input text-lg">Members</h2>
            {/* <input
                            className="my-2 text-input"
                            placeholder="MEMBERS"
                            disabled

                        ></input> */}
          </div>
        </div>


        <div className="input-field">

          {members.map((val, index) => {

            return (
              <div className="member text-xl" key={index}>
                <input className="form-input " value={val} disabled />
                <button className="btn-cross" onClick={() => deleteMember(index)}><FontAwesomeIcon icon={["fa", "fa-xmark"]} /></button>
              </div>
            )
          })}


        </div>


        {maxMemberCount > memberCount && <>
          <div className='input-field'>

            <input className="form-input" value={username} required onChange={(e) => {
              setUsername(e.target.value)
            }} placeholder="Tecno ID" />

            <div className="input-border"></div>
          </div>

          <div className="gap">

            <Button onClick={() => {
              setUsername("")
              addMember()
            }}>+ Add Member</Button>
          </div>
        </>}

        {/* <div className=" input-wrapper">
                    <div className='input-field'>
                        <input className="form-input" placeholder="First Name" />
                        <div className="input-border"></div>
                    </div>
                    <div className='input-field'>
                        <input className="form-input" placeholder="Last Name" />
                        <div className="input-border"></div>
                    </div>
                </div>
                <div className=" input-wrapper">
                    <div className='input-field'>
                        <input className="form-input" placeholder="Phone Number" />
                        <div className="input-border"></div>
                    </div>
                    <div className='input-field'>
                        <input className="form-input" placeholder="Gender" />
                        <div className="input-border"></div>
                    </div>
                </div>
                */}
      </form>
    </>
  )
}

export default TeamMember
