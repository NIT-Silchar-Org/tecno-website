import React from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IoMdClose } from 'react-icons/io'
function Modal() {
  return (
    <div className="modal-wrapper">
      <div className="modal">
        {/* <FontAwesomeIcon  icon="fa-xmark"/> */}

        <div className="justify-start">
          <div className="text-3xl px-2 py-2">
            <IoMdClose />
          </div>
        </div>

        <div className="justify-start">


          <div >
            <h1 className="text-3xl">RoboTron</h1>

          </div>

        </div>

        <h1 className="text-xl">Module Name</h1>
      </div>
    </div>
  )
}

export default Modal
