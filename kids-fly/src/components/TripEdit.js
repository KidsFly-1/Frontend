import React from 'react';
import {useForm} from 'react-hook-form';
import {updateTrip} from '../actions/tripsActions';
import {connect} from 'react-redux';

const TripEdit = props => {

    const { errors, touched, handleSubmit, value, register} = useForm(props)

    const onSubmit = values => {
        console.log(values);
        props.updateTrip(values);
    }

    return (
        <div class="form-style-10">
        <h1>KidsFly<span>Prepare for trip today</span></h1>

        <form onSubmit ={handleSubmit(onSubmit)}>
        <div class="inner-wrap">
        <label>Airport<input type="text" placeholder="Local airport" value={props.airport} name="field1" ref={register({required: 'Required'})} /></label>
            {touched.airport && errors.airport && (<p className="errors">{errors.airport}</p>)}
        <label>Airline<input type="text" value={props.airline}/> <textarea name="field2" ref={register({required: 'Required'})}></textarea></label>
            {touched.airline && errors.airline && (<p className="errors">{errors.airline}</p>)}
        </div>

       
        <div class="inner-wrap">
        <label>Flight <input type="text" placeholder="Flight Number" name="field3" value={props.flight} ref={register({required: 'Required'})} /></label>
            {touched.flight && errors.flight && (<p className="errors">{errors.flight}</p>)}
        <label>DepartureTime<input type="text" name="field4" value={props.departureTime} ref={register({required: 'Required'})} /></label>
            {touched.departureTime && errors.departureTime && (<p className="errors">{errors.departureTime}</p>)}
        </div>

        <div class="inner-wrap">
        <label>CarryonBags<input type="text" name="field5" value={props.carryOnBags} ref={register({required: 'Required'})}/> </label>
            {touched.carryOnBags && errors.carryOnBags && (<p className="errors">{errors.carryOnBags}</p>)}
        <label>CheckedBags <input type="text" value={props.checkedBags} name="field6" ref={register({required: 'Required'})} /></label>
        {touched.checkedBags && errors.checkedBags && (<p className="errors">{errors.checkedBags}</p>)}
        </div>

        <div class="inner-wrap">
        <label>Children<input type="text" name="field7" value={props.children} ref={register({required: 'Required'})}/></label>
        {touched.children && errors.children && (<p className="errors">{errors.children}</p>)}
        <label>Arrived <input type="text" value={props.arrived} name="field8" ref={register({required: 'Required'})} /></label>
        {touched.arrived && errors.arrived && (<p className="errors">{errors.arrived}</p>)}
        <label>Enroute <input type="text" name="field9" value={props.enroute} ref={register({required: 'Required'})}/></label>
        {touched.enroute && errors.enroute && (<p className="errors">{errors.enroute}</p>)}
        </div>
        <button type="submit">submit</button>
        </form>
        </div>
    )
}

export default connect(null, {updateTrip})(TripEdit);