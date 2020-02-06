import React, { useState } from 'react';
import {useForm} from 'react-hook-form';



function NewTrip (props) {

    const { errors, touched, handleSubmit, value, register} = useForm(props)
    const onSubmit = value => {
        console.log(value);
    }
    
    return (
        <div class="form-style-10">
        <h1>KidsFly<span>Prepare for trip today</span></h1>

        <form onSubmit ={handleSubmit(onSubmit)}>
        <div class="inner-wrap">
        <label>Airport<input type="text" placeholder="Airport" value={props.Airport} name="field1" ref={register({required: 'Required'})} /></label>
            {touched.Airport && errors.Airport && (<p className="errors">{errors.Airport}</p>)}
        <label>Airline<input type="text" value={props.Airline}/> <textarea name="field2" ref={register({required: 'Required'})}></textarea></label>
            {touched.Airline && errors.Airline && (<p className="errors">{errors.Airline}</p>)}
        </div>

       
        <div class="inner-wrap">
        <label>Flight <input type="text" placeholder="Flight Number" name="field3" value={props.Flight} ref={register({required: 'Required'})} /></label>
            {touched.Flight && errors.Flight && (<p className="errors">{errors.Flight}</p>)}
        <label>DepartureTime<input type="text" name="field4" value={value.DepartureTime} ref={register({required: 'Required'})} /></label>
            {touched.DepartureTime && errors.DepartureTime && (<p className="errors">{errors.DepartureTime}</p>)}
        </div>

        <div class="inner-wrap">
        <label>CarryonBags<input type="text" name="field5" value={props.CarryonBags} ref={register({required: 'Required'})}/> </label>
            {touched.CarryonBags && errors.CarryonBags && (<p className="errors">{errors.CarryonBags}</p>)}
        <label>CheckedBags <input type="text" value={props.CheckedBags} name="field6" ref={register({required: 'Required'})} /></label>
        {touched.CheckedBags && errors.CheckedBags && (<p className="errors">{errors.CheckedBags}</p>)}
        </div>

        <div class="inner-wrap">
        <label>Children<input type="text" name="field7" value={props.Children} ref={register({required: 'Required'})}/></label>
        {touched.Children && errors.Children && (<p className="errors">{errors.Children}</p>)}
        <label>Arrived <input type="text" value={props.Arrived} name="field8" ref={register({required: 'Required'})} /></label>
        {touched.Arrived && errors.Arrived && (<p className="errors">{errors.Arrived}</p>)}
        <label>Enroute <input type="text" name="field9" value={props.Enroute} ref={register({required: 'Required'})}/></label>
        {touched.Enroute && errors.Enroute && (<p className="errors">{errors.Enroute}</p>)}
        </div>
        <button type="submit">submit</button>
        </form>
        </div>
    )
}

export default NewTrip ; 