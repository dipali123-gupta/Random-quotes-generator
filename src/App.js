import logo from './logo.svg';
import { useState, useEffect } from 'react';
//import './App.css';
import dice from './images/icon-dice.svg';
import './index.css';
import pauseDesktop from './images/pattern-divider-desktop.svg';
import pauseMobile from './images/pattern-divider-mobile.svg';;

function App() {

  const [text, setText] = useState([])

  const fetchAdvice = async () => {
    const res = await fetch("https://api.adviceslip.com/advice")
    const data = await res.json()

    console.log(data)

    setText(data.slip)
  }

  useEffect(() => {
    fetchAdvice()
  }, [])

  return (
    <div className="container">
    <h1>Advice #{text.id}</h1>
    <p>{text.advice}</p>
    <picture>
      <source media="(min-width: 768px)" srcSet={pauseDesktop}/
      >
      <img src={pauseMobile} alt=""/>

    </picture>
    <div>
      <button onClick={fetchAdvice}>
        <img src={dice} alt="" />
      </button>
    </div>

      
  </div>
  );
}

export default App;
