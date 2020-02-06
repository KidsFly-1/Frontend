import React from 'react';
import { Link } from 'react-router-dom'
import Traveler from '../img/Traveler.png'
import KidsConnect from '../img/KidsConnect.png'

const Register = () => {
    return (  
        <div className='regi-div' >
        <div className='login-banner'><h1 className='regi-h1'>Are you registering as</h1></div>
            <div className='choice-div'>
                <Link to='/register/traveler'><img className='regi-choice' src={Traveler} alt='Traveler Option' /></Link>
                <h2 className='regi-h2'>Or</h2>
                <Link to='/register/kidsconnect'><img className='regi-choice' src={KidsConnect} alt='Traveler Option' /></Link>
            </div>
            <Link to='/'><button className='regi-button'>Go Back</button></Link>
        </div>
    );
}
 
export default Register;