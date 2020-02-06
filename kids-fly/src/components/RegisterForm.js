import React, { useState } from 'react';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import {connect} from 'react-redux';
import {register} from '../actions/register'

const Register = (props) => {
    const [user, setUser] = useState({
        fullName: '',
        email: '',
        password: '',
        address: '',
        phone: '',
        localAirport: ''
    }) 
    const [pass, setPass] = useState('')
    const [passLink, setPassLink] = useState(props.link)

    user.propTypes = {
        name: PropTypes.string,
        email: PropTypes.string,
        password: PropTypes.string,
        // fullName: PropTypes.string,
        // address: PropTypes.string,
        // phone: PropTypes.string,
        // localAirport: PropTypes.string
    }
    
    const handleChange = e => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    const handlePass = e => {
        setPass(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault()
        props.register(e);
    }
    
    const [warning, setWarning] = useState('')

    const testPass = () => {
        if (pass === user.password) {
            setPassLink(props.link)
            setWarning('')
        } else {
            setWarning('Passwords Do Not Match')
        }
        return passLink
    }

    return (
        <div>
            <h1 className='regi-input-h1'>Register</h1>
            <h1 className='regi-input-warning'>{warning}</h1>
            <form onSubmit={handleSubmit}>
                <input className='regi-text-input' onChange={handleChange} value={user.fullName} name='fullName' type='text' placeholder='Full name' /><br/>
                <input className='regi-text-input' onChange={handleChange} value={user.email} name='email' type='text' placeholder='Email' /><br/>
                <input className='regi-text-input' onChange={handleChange} value={user.localAirport} name='localAirport' type='text' placeholder='Local airport' /><br/>
                <input className='regi-text-input' onChange={handleChange} value={user.address} name='address' type='text' placeholder='Address' /><br/>
                <input className='regi-text-input' onChange={handleChange} value={user.phone} name='phone' type='number' placeholder='Phone number' /><br/>
                <input className='regi-text-input' onChange={handleChange} value={user.password} name='password' type='password' placeholder='Password' /><br/>
                <input className='regi-text-input' onChange={handlePass} type='password' placeholder='Confirm Password' /><br/>
                <Link to='/register'><button className='regi-input-button'>Go Back</button></Link>
                <button onClick={e => testPass()} type="submit" className='regi-input-button'>Continue</button>
            </form>
        </div>
    );
}

export default connect(null, {register})(Register);