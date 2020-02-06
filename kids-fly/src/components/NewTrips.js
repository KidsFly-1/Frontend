import React from 'react';

const NewTrip = () => {
    
    return (
        <div className="blocktext">
            <div className="banner">
            <h1>New Trip</h1>
            </div>
        <form className="form">
            <label>
                Airport Name:
                <input type="text"/>
            </label>
            <label>
                AirLine:
                <input type="text"/>
            </label>
            <label>
                Departure Time: 
                <input type="text"/>
            </label>
            <label>
                Number of Carryon Items:
                <input type="text"/>
            </label>
            <label>
                Number of Checked Items:
                <input type="text"/>
            </label>
            <label>
                Number of Children:
                <input type="text"/>
            </label>
            <label>
                Additonal Request:
                <input className="Additional" type="text"/>
            </label>
            <label>
                Total:
            </label>
        </form>
        <button>submit</button>
        </div>
    )
}

export default NewTrip ; 