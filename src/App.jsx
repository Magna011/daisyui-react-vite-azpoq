import { useState } from 'react';
import './App.css';
import NavigationBar from './komponents/NavigationBar/NavigationBar'
// import Pelatihan from './komponents/HomePage/Pelatihan'
import Pelatihanserupa from './komponents/Pelatihan Serupa/Pelatihanserupa'
import Footer from './komponents/Footer/Footer'
import Dashboard from './Dashboard/Dashboard';
function App() {
  return (
    <div className="App">
      <NavigationBar/>
      {/* <Pelatihan/> */}
      <Dashboard/>
      <Pelatihanserupa/>
      <Footer/>
    </div>
  );
}

export default App;
