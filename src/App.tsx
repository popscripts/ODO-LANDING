import React, {useEffect, useState} from 'react';
import Blob from "./components/Blob/Blob";
import AnimatedLogo from "./components/AnimatedLogo/AnimatedLogo";
import Footer from "./components/Footer/Footer";
import MainLayout from "./components/MainLayout/MainLayout";


function App() {
    const [screen, setScreen] = useState("start");

    const [loaded, setLoaded] = useState(false);

    const wakeUpServer = () => {
        try {
            fetch("https://panel.organizer-dni-otwartych.pl", {}).then()
        } catch (e) {}
    }

    useEffect(() => {
        setTimeout(() => {setLoaded(true)}, 2500)
        !loaded && wakeUpServer()
    });

  return (
      <div className="App">
        <Blob/>
        <AnimatedLogo loaded={loaded}/>
        <MainLayout screen={screen} loaded={loaded} />
        <Footer setScreen={setScreen} loaded={loaded} screen={screen}/>
      </div>
  )
}

export default App;
