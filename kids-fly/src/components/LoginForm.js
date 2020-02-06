import React, { useState } from 'react';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import {connect} from 'react-redux'
import {login} from '../actions/login'

const Login = () => {
    const [user, setUser] = useState({ 
        email: '',
        password: ''
    })

    const handleChange = e => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    handleSubmit = (e, values) => {
        e.preventDefault()
        props.login(values)
    }

    return (  
        <div><h1 className='input-h1'>Login</h1>
            <form onSubmit={handleSubmit}>
                <input onChange={handleChange} name='email' className='regi-text-input' type='text' value={user.email} placeholder='Email' /><br/>
                <input onChange={handleChange} name='password' className='regi-text-input' type='password' placeholder='Password' /><br/>
                <Link to='/'><button className='input-button'>Go Back</button></Link>
                <button type="submit" className='regi-input-button'>Login</button>
            </form>
        </div>
    );
}

export default connect(null, {login})(Login);