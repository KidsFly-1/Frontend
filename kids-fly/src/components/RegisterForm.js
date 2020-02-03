import React from 'react';


const RegisterForm = () => {
    
    return (
        <div >
            <div className="banner">
            <h1>New Trip</h1>
            <header className='logout'> Log Out</header>
            </div>
        <form>
            <label>
                Airport Name:
            </label>
            <label>
                AirLine:
            </label>
            <label>
                Departure Time: 
            </label>
            <label>
                Number of Carryon Items:
            </label>
            <label>
                Number of Checked Items:
            </label>
            <label>
                Number of Children:
                <input type="text"/>
            </label>
            <label>
                Total:
            </label>
        </form>
        </div>
    )
}

export default RegisterForm ; 