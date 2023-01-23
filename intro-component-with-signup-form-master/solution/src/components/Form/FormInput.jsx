import React from 'react'
import { useState } from 'react'
import './Form.css'

function FormInput({ label, errorMessage, onChange, ...inputProps }) {
  const [ focused, setFocused ] = useState(false)
  return (
    <div className="form-component">
      <input { ...inputProps } onChange={ onChange } onBlur={ (e) => setFocused(true) } focused={focused.toString()} />
      <span className="error">{ errorMessage }</span>
    </div>
  )
}

export default FormInput