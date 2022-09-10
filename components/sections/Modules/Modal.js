import React from 'react'
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IoMdClose } from 'react-icons/io'
function Modal() {
  return (
    <div className="modal-wrapper">
      <div className="modal">
        {/*<FontAwesomeIcon  icon="fa-xmark"/>*/}
        <div className="justify-start heroimg"></div>
        <div className="justify-start">
          <div className="text-3xl px-2 py-2 cross">
            <IoMdClose/>
          </div>
        </div>
        <div className="justify-start">
          <div >
            <h1 className="text-3xl title">RoboTron</h1>
            <div className='heropara'>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque pariatur sint aliquam atque. Blanditiis, laudantium. Nobis quam quasi ducimus architecto vero ipsa itaque minima in omnis voluptates iusto corporis facilis, maxime, sunt quis. Doloremque recusandae cum qui libero, facilis illum quisquam molestiae! Quo at molestiae expedita eos voluptas natus necessitatibus?</p>
            </div>
          </div>
        </div>
        {/*<h1 className="text-xl">Module Name</h1>*/}
      </div>
    </div>
  )
}

export default Modal