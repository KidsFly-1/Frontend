import React, { useState } from 'react';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import {connect} from 'react-redux'
import {login} from '../actions/login'

const Login = () => {
    const [data, setData] = useState('')
    const api = `http://numbersapi.com/random/math`
    useEffect(() => {
        axios.get(api)
            .then(res => {
                setData(res.data)
            })
            .catch(err => {
                console.log("ERROR", err)
            })
    }, [])
    const [user, setUser] = useState({
        email: '',
        password: ''
    })

    const handleChange = e => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e, values) => {
        e.preventDefault()
        props.login(values)
    }

    return (
        <div>
        <p>{data}</p>
        <h1 className='input-h1'>Login</h1>
            <form onSubmit={handleSubmit}>
                <input onChange={handleChange} name='email' className='text-input' type='text' value={user.email} placeholder='Email' required /><br />
                <input onChange={handleChange} name='password' className='text-input' type='password' placeholder='Password' required /><br />
                <Link to='/'><button className='input-button'>Go Back</button></Link>
                <button type="submit" className='input-button'>Login</button>
            </form>
        </div>
    );
}

export default connect(null, {login})(Login);