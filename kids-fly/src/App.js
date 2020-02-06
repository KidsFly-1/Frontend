import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';

// Components
import { PrivateRoute } from './components/PrivateRoute';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LoginRoute from './components/LoginRoutes';
import MyTrips from './components/MyTripsPage';
// import NewTrip from './components/NewTrip';
// import Login from './components/Login';
// import RegisterForm from './components/RegisterForm';
// import AllTrips from './components/AllTrips';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content-wrap">
        <Route path='/' component={LoginRoute} />
        {/* <Route path='/login' component={Login} />
        <Route path='/register' component={RegisterForm} />   */}
        <PrivateRoute path='/my-trips/:id' component={MyTrips} />
        {/* <PrivateRoute path='/new-trip/:id' component={NewTrip} /> */}
        {/* <PrivateRoute path='/all-trips/:id' component={AllTrips} /> */}
      </div>
      <Footer />
    </div>
  );
};

export default App;