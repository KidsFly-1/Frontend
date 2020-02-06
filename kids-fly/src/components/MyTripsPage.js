import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";

// Components
import MyTripsCard from './MyTripsCard';

// Actions
import {
    getUserTrips,
    addTrip,
    deleteTrip,
    updateTrip
} from '../actions/tripsActions';


const MyTrips = props => {
    useEffect(()=>{
        props.getUserTrips(props.match.params.id);
    },[])
    
    return (
        <div className="mytrips-page">
            <div className="mytrips-header">
                <h2>My Trips</h2>
                <div className="new-trip-btn">
                    <Link to={`/new-trip/${props.match.params.id}`} className="new-trip-link">
                        New Trip
                    </Link>
                </div>
            </div>
            <div className="mytrip-cards">
                {props.userTrips.map(val=>{
                    return (
                        <>
                            <MyTripsCard key={val.id} trip={val} deleteTrip={props.deleteTrip}/>
                        </>

                    )
                })}
            </div>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        userTrips: state.userTrips,
        isUpdating: state.isUpdating,
        error: state.error
    };
};

export default connect(
    mapStateToProps,
    {
        getUserTrips,
        addTrip,
        deleteTrip,
        updateTrip
    }
)(MyTrips);