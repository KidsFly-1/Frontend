import React from 'react';

const TripEdit = () => {
    return (
        <div class="form-style-10">
        <h1>KidsFly<span>Prepare for trip today</span></h1>

        <form>
        <div class="inner-wrap">
        <label>Airport Name <input type="text" name="field1" /></label>
        <label>Airline <textarea name="field2"></textarea></label>
        </div>
       
        <div class="inner-wrap">
        <label>Departure Time <input type="text" name="field3" /></label>
        <label>Number of Carryon(s)<input type="text" name="field4" /></label>
        </div>
  
        <div class="inner-wrap">
        <label>Number of Checked Items <input type="text" name="field5" /></label>
        <label>Number of Children <input type="text" name="field6" /></label>
        </div>
        <div class="inner-wrap">
        <label>Additional Request<input type="text" name="field6" /></label>
        </div>
        <button>submit</button>
        </form>
        </div>
    )
}

export default TripEdit ; 
