import logo from './logo.svg';
import { useState } from 'react';
import 'react-notifications/lib/notifications.css';  
import './App.css';
import {NotificationContainer, NotificationManager} from 'react-notifications';

function App() {

  let showNotification=()=>{
      // NotificationManager.info("Welcome Soumik");      
      // NotificationManager.error("Error!");
      // NotificationManager.warning("Warning!");
      NotificationManager.success("Soumik! you have become successful SDE!");
  };

  return ( 
    <div className="App">
        <NotificationContainer/>
        <h1>React Notifications</h1>
        <button onClick={showNotification}>
            Save
        </button>
    </div>
  );
}

export default App;
