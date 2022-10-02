import React, {useState, useEffect} from 'react'
import dice from '../assets/icon-dice.svg'
import pattern from '../assets/pattern-divider-mobile.svg'

const Main = () => {
const[allAdvice, setAllAdvice] = useState(null)  
const[advice, setAdvice] = useState({
    adviceNum: '',
    advice: ''
})

useEffect(()=>{
    fetch("https://api.adviceslip.com/advice")
      .then(resp => resp.json())
      .then(adviceData => setAllAdvice(adviceData))
}, [advice])

const getAdvice = ()=>{
      setAdvice(prevAdvice => ({
        ...prevAdvice,
        adviceNum: allAdvice.slip.id,
        advice: allAdvice.slip.advice
      }))
}


  return (
    <main className='container'>
    <div className='card'>
      <p className='advice'>Advice #{!advice.adviceNum ? allAdvice && allAdvice.slip.id : advice.adviceNum}</p>
      <h3 className='tc'>"{!advice.advice ? allAdvice && allAdvice.slip.advice : advice.advice}"</h3>
      <img src={pattern} 
      className = 'pattern-divider'
      alt="pattern divider" 
      />
    </div>
    <div 
    onClick={getAdvice}
    className = 'dice-icon' >
      <img src={dice}
        alt="dice icon" 
      />
      </div>
    </main>
  )
}

export default Main
