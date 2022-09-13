import React from 'react'
import Sidebar from '../components/sections/Sidebar/Sidebar'
import Main from "../components/sections/Modules/Modules"

const Modules = () => {
  return (
    <div className="grid grid-cols-7">
      <div className="col-span-6">
        <Main />
      </div>
      <div>
        <Sidebar />
      </div>
    </div>
  )
}

export default Modules
