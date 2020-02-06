import React from 'react';
import PropTypes from 'prop-types'
import './Login.css'
import { Link } from 'react-router-dom'

const Login = () => {
    return (  
        <div><h1 className='input-h1'>Login</h1>
            <form>
                <input className='text-input' type='text' placeholder='Email' /><br/>
                <input className='text-input' type='text' placeholder='Password' /><br/>
                <Link to='/'><button className='input-button'>Go Back</button></Link>
                <button className='input-button'>Login</button>
            </form>
        </div>
    );
}
 
export default Login;