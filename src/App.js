import React, { useState, useEffect } from "react";
import "./App.css";
import Controler from "./components/content/Controler";
import AllOptions from "./components/content/multipleOptions/AllOptions";
import Recommendations from "./components/content/Recommendations";
import Navbar from "./components/navbar/Navbar";
import Card from "./components/UI/Card";
function App() {
  const [width, setWidth] = useState(window.innerWidth);
  const [fullScreen, setFullScreen] = useState(true);
  const updateDimensions = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    if (width <= 1500) {
      setFullScreen(false);
    }else if(width >= 1900){
      setFullScreen(true);
    }
    return () => window.removeEventListener("resize", updateDimensions);
  }, [width]);
  return (
    <>
      <div>
        {(() => {
          if (fullScreen) {
            return (
              <div className="container ">
                <Card id="main">
                  <Navbar />
                  <Recommendations />
                  <AllOptions />
                  <Controler />
                </Card>
              </div>
            );
          } else if (width < 2500) {
            return (
              <div>
                <Navbar />
                <Recommendations />
                <AllOptions />
              </div>
            );
          }
        })()}
      </div>
    </>
  );
}

export default App;
