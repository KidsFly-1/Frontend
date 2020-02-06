import React from 'react';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import {connect} from 'react-redux'
import {login} from '../actions/login'

const Login = (props) => {

    const handleSubmit = e => {
        e.preventDefault();
        props.login(e);
    };

    return (  
        <div><h1 className='input-h1'>Login</h1>
            <form>
                <input className='regi-text-input' type='text' placeholder='Email' /><br/>
                <input className='regi-text-input' type='text' placeholder='Password' /><br/>
                <Link to='/'><button className='input-button'>Go Back</button></Link>
                <button type="submit" className='regi-input-button'>Login</button>
            </form>
        </div>
    );
}

export default connect(null, {login})(Login);