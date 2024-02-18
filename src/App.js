import './App.css';
import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import Preloader from './Preloader'; // Import the Preloader component

function App() {
  useEffect(() => {
    const baseBg = document.querySelector('.base-bg');
    const pinkCircle = document.getElementById('pink');
    const blueCircle = document.getElementById('blue');

    function getRandom(min, max) {
      return Math.random() * (max - min) + min;
    }

    function moveCircle(circle) {
      const maxX = baseBg.offsetWidth - circle.offsetWidth - 1000;
      const maxY = baseBg.offsetHeight - circle.offsetHeight - 1000;

      gsap.to(circle, {
        x: () => getRandom(50, maxX),
        y: () => getRandom(50, maxY),
        duration: 2,
        onComplete: () => {
          moveCircle(circle);
        }
      });
    }

    moveCircle(pinkCircle);
    moveCircle(blueCircle);
  }, []);

  return (
    <div className='overlay'>
      {/* Include the Preloader component */}
      <Preloader />
      <div className='App'>
        <div className="Grad-bg">
          <div className="circle pink" id="pink"></div>
          <div className="circle blue" id="blue"></div>
          <div className="base-bg">
            <h1 className="Hero">Under construction but not for long!</h1>
            <h2 className="Small-para">*I have not even started building it yet bro i don't know what should i make its been like this for like 2 years!</h2>
            <h1 className="bottom-right-text">Animesh Srivastava</h1>
          </div>
        </div >
      </div>
    </div>
  );
}

export default App;
