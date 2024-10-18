import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './counter';
import Team from './Team';
import Users from './users';
import Friends from './Friends';
function App() {

  function handleClick() {
    alert('button clicked');
  }
  const handleClick2 = () => {
    alert('button 2 clicked')
  }

  const addToFive = (num) => {
    alert(num + 5);
  }
  return (
    <>
      <h1>React Core Concepts 2</h1>
      <Friends></Friends>
      <Users></Users>

      <Counter></Counter>
      <Team></Team>


      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click2</button>
      <button onClick={() => { alert('third clicked') }}>third</button>
      <button onClick={() => addToFive(3)}>Four</button>
    </>
  )
}

export default App
