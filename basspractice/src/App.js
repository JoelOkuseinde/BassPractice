import './App.css';
import {useEffect, useState} from "react";


function App() {
  const listOfKeys = ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#']
  
  const [num1,setNum1] = useState(0) 
  const [num2,setNum2] = useState(0) 
  const [num3,setNum3] = useState(0) 

  const [key, setKey] = useState("A")

  function handleClick(ev) {
    ev.preventDefault();
    setNum1(Math.floor(Math.random()*7) + 1)
    setNum2(Math.floor(Math.random()*7) + 1)
    setNum3(Math.floor(Math.random()*7) + 1)

    const RandomIndex = Math.floor(Math.random()*listOfKeys.length)
    setKey(listOfKeys[RandomIndex])
  }

  return (
  <main>
    <div className="first">
    <h1>BassPractice</h1>
    <p>Press the Button and get a key and some numbers</p>
    <form>
    <button className="go" type="submit" onClick={handleClick}>Let's Go!</button>
    </form>
    </div>
    <div className="result">
    
    <div className="key">{key}</div>
    <div className="num">{num1}-{num2}-{num3}</div> {/* This is gonna need array destructuring to render */}
    <p className="altCarousel">...Alternatively, here are some songs in the key of {key}</p>
    
    <div className="carousel">
      <div className="songDisplay">
        <img src="./everyPraise.png" width="250"alt="album-cover" />
        <p className="title">Every Praise</p>
        <p className="artist">Hezekiah Walker</p>
      </div>
      <div className="Links">
        <p>Spotify</p>
        <p>Apple Music</p>
      </div>
    </div>
    </div>
  </main>
  );
}

export default App;
