import React from 'react'

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IoMdClose } from 'react-icons/io'

function Modal() {
    return (
        <div className="modal-wrapper">
            <div className='modal'>
                <div className='modalImg'></div>
                <div className='Content-part'>

                    <div className="text-3xl cross px-2 py-2">
                        <IoMdClose />
                    </div>

                    <div className='desPop'>
                        <h1 className="text-3xl title">RoboTron</h1>
                        <div className='modalDes'>
                            <p className='modalpara'>
                                Robotronix Engineering Tech. Private Limited is a client-serving company based in Indore.Robotronix Engineering Tech. Private Limited is a client-serving company based in Indore.
                                Robotronix Engineering Tech. Private Limited is a client-serving company based in Indore.
                                Robotronix Engineering Tech. Private Limited is a client-serving company based in Indore.
                            </p>
                        </div>
                    </div>

                </div>
            </div>



        </div>
    )
}

export default Modal;