import React from 'react';
import './Home.css';
import Header from './Components/Header'
import Navbar from './Components/Navbar'
import Banner from './Components/Banner'
import Contact from './Components/Contact'



function App() {
  return (
    <div className="App">
      <Header />
      <hr />
      <Navbar />
      <br />
      <Banner />
      <br />
      <hr />
      <h1 id="contactnav" className="contact">Contato</h1>
      <hr />
      <Contact />

    </div>
  );
}

export default App;
