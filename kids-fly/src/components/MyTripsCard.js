import React, { useState }from 'react';
import TripEdit from './TripEdit';

const MyTripsCard = props => {
    const [showModal, setShowModal] = useState(false)

    return (

        <div className="individual-card">
            <h1>{`${props.trip.airport_name}: ${props.trip.airline}`}</h1>
            <h3>Departure: <span>{props.trip.departure_time}</span></h3>
            <p>Carry-ons: <span>{props.trip.carryon_number}</span></p>
            <p>Luggage: <span>{props.trip.checked_items_number}</span></p>
            <p>Children: <span>{props.trip.child_number}</span></p><br/>
            <p>Email: <span>{props.trip.email}</span></p>
            <p>Phone: <span>{props.trip.phone}</span></p>
            <p className="card-last-line">Special Needs: <span>{props.trip.special_needs}</span></p>
            <div className="card-btn-container">
                <button className="card-btn" onClick={()=> setShowModal(!showModal)}>Edit</button>
                <button className="card-btn">Delete</button>
            </div>
            { showModal ? <TripEdit trip={props.trip} tripId={props.trip.id} setShowModal={setShowModal}/> : null}
        </div>
    );
};

export default MyTripsCard;