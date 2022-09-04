import React from 'react'
import Image from 'next/image'
import DummyLogo from '../../public/assests/stash/dummylogo.png'
import { useEffect, useState, useRef } from 'react'
function Event() {
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
                <h1 className="text-start">RoboWars</h1>
                <h1 className="text-white text-lg mokoto-glitch-font">Module : Robotron</h1>
              </div>
            </div>

            <div className="details scrollbar-hidden">
              <p className="text-white">
                Id dolor Lorem dolore veniam ad cupidatat aliqua deserunt. Sunt
                sit commodo tempor mollit do deserunt aute non enim esse
                incididunt. Eiusmod Lorem non ipsum adipisicing id dolore
                pariatur mollit ea voluptate aliquip qui ipsum. Eiusmod
                excepteur duis tempor est labore magna irure incididunt anim
                esse cupidatat. Est aliquip ullamco et cillum officia cupidatat
                fugiat amet non est ullamco aliqua Lorem ea. Elit dolor
                voluptate duis magna. In qui aliqua nisi reprehenderit cupidatat
                officia mollit laboris eiusmod dolore laborum ea consequat quis.
                Proident mollit laboris laborum in qui irure nostrud et est et
                ad nulla ad fugiat. Qui ad veniam consectetur veniam excepteur
                aliqua est ut nisi non culpa incididunt officia. Ullamco
                voluptate do sunt qui sit. Veniam quis sint pariatur id eiusmod
                cillum nisi aliqua enim occaecat labore do reprehenderit cillum.
                Laborum ea anim tempor cupidatat ea qui excepteur culpa ea
                fugiat. Laborum reprehenderit enim duis dolore non laborum
                adipisicing. Eu sint qui cupidatat tempor esse. Commodo irure
                occaecat ipsum velit amet nostrud culpa cupidatat Lorem aliquip
                commodo culpa. Ut cillum exercitation cupidatat aliqua do
                aliquip labore non ipsum qui. Do exercitation do mollit mollit
                nulla est do sunt. Cillum reprehenderit voluptate anim pariatur
                cupidatat. Dolore culpa adipisicing duis tempor nostrud. Qui
                dolore adipisicing do aute ullamco voluptate nulla culpa officia
                eu pariatur incididunt dolor. Aliquip laborum fugiat ex non
                irure non eu aliqua excepteur consequat consectetur sit. Do
                consectetur eu velit laborum proident velit ea deserunt proident
                in ipsum sit anim culpa. Aute excepteur enim tempor cillum
                cillum amet minim quis aliqua irure cupidatat sunt consequat. Do
                id velit sunt consequat esse reprehenderit. Culpa eiusmod qui
                magna elit et labore occaecat cillum esse dolor deserunt
                cupidatat qui. Enim ullamco ut do dolore aliquip eu pariatur
                irure quis Lorem. Pariatur occaecat qui ea laboris in. Aute sit
                ex labore aliquip quis do Lorem velit nisi do elit aliquip
                pariatur. Est ad laboris anim ipsum culpa proident veniam ut
                esse nisi occaecat eu laborum voluptate. Ea mollit est fugiat
                eiusmod. Non labore irure pariatur id in amet non ad proident
                ea. Elit elit non pariatur anim et sit laboris ut. Dolore quis
                ut exercitation ea pariatur minim aliquip. Reprehenderit eu et
                velit irure quis. Exercitation deserunt veniam in fugiat elit
                sunt aute cupidatat proident anim exercitation dolor. Occaecat
                elit nostrud mollit enim ullamco commodo. Tempor exercitation
                nisi nulla dolor culpa pariatur. Sunt ut culpa ex esse ut quis
                nostrud nulla ipsum. Incididunt ad adipisicing ex voluptate. Ea
                velit commodo minim fugiat cupidatat eiusmod velit officia est.
                Eu nulla quis consequat reprehenderit cillum. Deserunt cupidatat
                excepteur ad irure sunt amet magna aute ea exercitation
                pariatur. Sint aute ullamco excepteur qui laborum excepteur
                ipsum velit eiusmod fugiat. Est culpa laborum ad Lorem irure in
                anim labore pariatur adipisicing. Laborum in eiusmod aliquip
                commodo id. Commodo incididunt Lorem culpa eu pariatur anim. Ex
                elit consequat magna commodo eu voluptate cillum id elit commodo
                elit. Exercitation adipisicing officia ullamco incididunt labore
                pariatur adipisicing pariatur do consectetur ullamco ullamco
                consectetur aliquip. Velit pariatur veniam cillum fugiat eu
                magna non. Culpa consectetur est ex enim aute et Lorem nostrud
                veniam consectetur deserunt officia ipsum consequat.
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
  return {
    props: {},
  }
}
