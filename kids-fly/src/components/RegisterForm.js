import React, { useState } from 'react';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Register = ({ link }) => {
    const [user, setUser] = useState({
        fullName: '',
        email: '',
        password: '',
        address: '',
        phone: '',
        localAirport: ''
    }) 
    const [pass, setPass] = useState('')
    const [passLink, setPassLink] = useState(link)

    user.propTypes = {
    name: PropTypes.string,
    email: PropTypes.string,
    password: PropTypes.string
    }
    
    const handleChange = e => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    const handlePass = e => {
        setPass(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault()
    }
    
    const [warning, setWarning] = useState('')

    const testPass = () => {
        if (pass === user.password) {
            setPassLink(link)
            setWarning('')
        } else {
            if (link === '/register/kidsconnect2') {
                setPassLink('/register/kidsconnect')
            } else {
                setPassLink('/register/traveler')
            }
            setWarning('Passwords Do Not Match')
        }
        return passLink
    }

    return (
        <div>
            <h1 className='regi-input-h1'>Register</h1>
            <h1 className='regi-input-warning'>{warning}</h1>
            <form onSubmit={handleSubmit}>
                <input className='regi-text-input' onChange={handleChange} value={user.fullName} name='name' type='text' placeholder='Full name' /><br/>
                <input className='regi-text-input' onChange={handleChange} value={user.email} name='email' type='password' placeholder='Email' /><br/>
                <input className='regi-text-input' onChange={handleChange} value={user.localAirport} name='password' type='password' placeholder='Local airport' /><br/>
                <input className='regi-text-input' onChange={handleChange} value={user.address} name='password' type='password' placeholder='Address' /><br/>
                <input className='regi-text-input' onChange={handleChange} value={user.phone} name='password' type='password' placeholder='Phone number' /><br/>
                <input className='regi-text-input' onChange={handleChange} value={user.password} name='password' type='password' placeholder='Password' /><br/>
                <input className='regi-text-input' onChange={handlePass} type='password' placeholder='Confirm Password' /><br/>
                <Link to='/register'><button className='regi-input-button'>Go Back</button></Link>
                <button onClick={e => testPass()} className='regi-input-button'>Continue</button>
            </form>
        </div>

    );
}

export default Register;