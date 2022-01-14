import React from 'react';
import './App.css';
import ProfilePhoto from './Component/Profile/ProfilePhoto.js';
import Address from './Component/Profile/Address.js';
import FullName from './Component/Profile/FullName.js';
function App() {
  return (
    <div className="App">
<div className="profile-card">
  <div className="card-header">
    <div className="pic">
      <ProfilePhoto/>
    </div>
    <FullName/>
  
    <div className="sm">
      <a href="#" className="fas fa-address-card" />
     <Address/>
    </div>
  </div> 
</div>
</div>
    
  );
}
export default App;
