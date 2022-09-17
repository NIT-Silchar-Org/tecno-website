import React from 'react'
import Image from 'next/image'
import DummyLogo from '../../public/assests/stash/dummylogo.png'
import { useEffect, useState, useRef } from 'react'
import { fetch_event_by_id } from '../../utils/events_fetch'
function Event({data}) {
  const [isFormHidden, setIsFormHidden] = useState(true)
  const scrollToRef = useRef()
  useEffect(()=>{
    if(!isFormHidden){
        scrollToRef.current.scrollIntoView()
    }
  }, [isFormHidden])


  return (
    <>
      <div className="justify-center bg-black w-full h-screen">
        <div className="section-one">
          <div className="details-section-wrapper">
            <div className="text-3xl text-center justify-start relative items-center">
              {/* <h2>Logo</h2>
               */}
              <div className="event-logo">
                <Image src={DummyLogo} />
              </div>
              <div>
                <h1 className="text-start">{data?.name}</h1>
                <h1 className="text-white text-lg mokoto-glitch-font">Module : Robotron</h1>
              </div>
            </div>

            <div className="details scrollbar-hidden">
              <p className="text-white">
                {data?.description}
              </p>
            </div>

            <div className="my-2">
              <button
                className="btn secondary-solid text-xl"
                onClick={() => {
                  setIsFormHidden(false)
                  scrollToRef.current.scrollIntoView()

                  
                }}
              >
                Register
              </button>
            </div>
          </div>
        </div>

        <div className="section-second">
          <div className="bg-purple w-full h-full"></div>
        </div>
      </div>
      <div
        className={`bg-black w-full h-screen justify-center form-bg ${
          isFormHidden && 'hidden'
        } `}
        ref={scrollToRef}
      >
        <div className="form-section">
          <h1 className="text-lg text-white mokoto-glitch-font">Registration Form</h1>
          <form className="form">
            <div className=" input-wrapper">
              <div className='input-field'>
                <input className="form-input" placeholder="Team Name" />
                <div className="input-border"></div>
              </div>
              {/* <div>
                <input className="form-input" placeholder="" />
                <div className="input-border"></div>
              </div> */}
            </div>
            <div className='input-wrapper'>
                <div className='input-field'>

                <textarea
                className="my-2 text-input "
                placeholder="Member 1"
                rows={1}
                ></textarea>
                </div>
            </div>

            <div className=" input-wrapper">
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
          </form>
        </div>
      </div>
    </>
  )
}

export default Event
export const getServerSideProps = async ({ params }) => {

  let resp = await fetch_event_by_id(params?.id)
  // console.log(resp);
  let data = resp?.data?.msg

  return {
    props: {
      data
    },
  }
}
