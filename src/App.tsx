import React from 'react';
import Blob from "./components/Blob/Blob";
import AnimatedLogo from "./components/AnimatedLogo/AnimatedLogo";
import Description from "./components/Description/Descritpion";
import Footer from "./components/Footer/Footer";


function App() {
  return (
      <div className="App">
        <Blob/>
        <AnimatedLogo/>
        <Description />
        <Footer/>
      </div>
  )
}

export default App;
