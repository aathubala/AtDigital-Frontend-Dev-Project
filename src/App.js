import React from 'react';
import Header from './components/Header/header';
import Service from './components/Services/service';
import Hero from './components/Hero/hero';
import Footer from './components/Footer/footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero/>
      <Service />
      <Footer/>
    </div>
  );
}

export default App;