import React from "react";

function TeamMember() {
    return (
        <form className="form">
            <div className='input-wrapper'>
                <div className='input-field'>

                    <textarea
                        className="my-2 text-input "
                        placeholder="Member 1"
                        rows={1}
                    ></textarea>
                </div>
            </div>

            <div className='input-field'>
                    <input className="form-input" placeholder="User Name" />
                    <div className="input-border"></div>
                </div>

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
    )
}

export default TeamMember