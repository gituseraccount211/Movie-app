import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './Emoji.js'
import EMOJI from './Emoji.js'

console.log(EMOJI)

function App() {
  return (
    <>
     <div className="container">
      {EMOJI.map((element) => (
        <div key={element.id}>
          <div>{element.emoji}</div>
          <div>{element.name}</div>
          <div>{element.meaning}</div>
        </div>
        
      ))}
     </div>
    </>
  )
}

export default App