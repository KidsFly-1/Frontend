import React from 'react';
import Login from './LoginForm'
import RegisterForm from './RegisterForm'
import Register from './Register'
import { Link, Route } from 'react-router-dom'

function Routes() {
  return (
    <div className="login-div">
      <Route exact path='/'>
        <Link className='login-link' to="/login" ><h1 className='login-h1'>Login</h1></Link><br/>
        <Link className='login-link' to='/register' ><h1 >Register</h1></Link>
      </Route>
      <Route path='/login' >
        <Login/>
      </Route>
      <Route exact path='/register' >
        <Register/>
      </Route>
      <Route path='/register/kidsconnect' >
        <RegisterForm link='/register/kidsconnect2'/>
      </Route>
      <Route path='/register/traveler' >
        <RegisterForm link='/trips' />
      </Route>
    </div>
  );
}

export default Routes;