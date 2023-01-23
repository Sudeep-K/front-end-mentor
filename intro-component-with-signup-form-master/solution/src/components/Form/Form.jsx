import './Form.css';
import React, { useState } from 'react'
import FormInput from './FormInput';

function Form() {
    const [ values, setValues ] = useState({
        firstname: '',
        lastname: '',
        email: '',
        password: ''
    })

    const inputs = [
        {
            id: 1,
            name: "firstname",
            type: "text",
            placeholder: "First Name",
            errorMessage:"First name cannot be empty",
            label: "First Name",
            required: true
        },
        {
            id: 2,
            name: "lastname",
            type: "text",
            placeholder: "Last Name",
            errorMessage:"Last name cannot be empty",
            label: "Last Name",
            required: true
        },
        {
            id: 3,
            name: "email",
            type: "email",
            placeholder: "Email Address",
            errorMessage:"Looks like this is not an email",
            label: "Email Address",
            required: true
        },
        {
            id: 4,
            name: "password",
            type: "password",
            placeholder: "Password",
            errorMessage:"Password cannot be empty",
            label: "Password",
            required: true
        }
    ]

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value })
    }
  return (
    <form>
        {
            inputs.map(input => <FormInput key={ input.id } { ...input } value={ values[input.name] } onChange={ onChange } />)
        }
        <button onClick={ handleSubmit }>Claim your free trial</button>
        <p className="footer">By clicking the button, you are agreeing to our <span className="red">Terms and Services</span></p>
    </form>
  )
}

export default Form