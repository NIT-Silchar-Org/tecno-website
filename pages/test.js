import React from 'react'
import {AuthProvider} from '../providers/authContext'
function test() {
  return (
    <div>

        <AuthProvider>
            <h1>Hello</h1>
        </AuthProvider>
    </div>
  )
}

export default test