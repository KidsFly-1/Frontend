import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';

// Components
import { PrivateRoute } from './components/PrivateRoute';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Login from './components/Login';
import RegisterForm from './components/RegisterForm';
import MyTrips from './components/MyTrips';
import AllTrips from './components/AllTrips';
import NewTrip from './components/NewTrip';

function App() {
  return (
    <div className="App">
      <div className="content-wrap">
        <Route path='/' component={NavBar} />
        <Route path='/login' component={Login} />
        <Route path='/register' component={RegisterForm} />  
        <PrivateRoute path='/my-trips/:id' component={MyTrips} />
        <PrivateRoute path='/new-trip/:id' component={NewTrip} />
        <PrivateRoute path='/all-trips/:id' component={AllTrips} />
      </div>
      <Footer />
    </div>
  );
};

export default App;