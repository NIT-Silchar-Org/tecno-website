import React from 'react'

function Input({ placeholder, setVal, val, req, disabled }) {
  return (
    <>
      {/* <div className=" input-wrapper"> */}
      <div className="input-field">
        <input
          disabled={disabled}
          className="form-input"
          value={val}
          onChange={(e) => setVal(e.target.value)}
          placeholder={placeholder}
          required={req}
        />
        <div className="input-border"></div>
      </div>
      {/* </div> */}
    </>
  )
}

export default Input
