import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cell from './Cell.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div style = {{backgroundColor: 'lightblue', 
      display: 'flex', flexDirection: 'column', 
      alignItems: 'center', 
      minHeight: '100vh'}}>
      
    <img src = './img/awning.png'></img>
    <h1>Food Truck Favorites</h1>
    <div style = {{  
      display:'flex',
      justifyContent: 'center',
      }}>
            <table style={{ borderCollapse: 'separate', borderSpacing: '20px' }}>
                <thead>
                <tr>
                    <th></th>
                    <th></th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                    <tr>
                        <Cell img = './img/mexican.jpeg' name = 'The Halal Guys' description = 'Mexican' url = 'https://thehalalguys.com/'/>
                        <Cell img = './img/italian.jpg' name = 'Piccolo' description = 'Italian' url = 'https://www.piccolomayfield.com/'/>
                        <Cell img = './img/indian.jpg' name = 'Curry Up Now' description = 'Indian' url = 'https://www.curryupnow.com/'/>
                    </tr>
                    <tr>
                        <Cell img = './img/' name = '' description = '' url = ''/>
                        <Cell img = './img/' name = '' description = '' url = ''/>
                        <Cell img = './img/' name = '' description = '' url = ''/>
                    </tr>
                    <tr>
                      <Cell img = './img/' name = '' description = '' url = ''/>
                      <Cell img = './img/' name = '' description = '' url = ''/>
                      <Cell img = './img/' name = '' description = '' url = ''/>
                    </tr>
                    <tr>
                      <Cell img = './img/' name = '' description = '' url = ''/>
                      <Cell img = './img/' name = '' description = '' url = ''/>
                      <Cell img = './img/' name = '' description = '' url = ''/>
                    </tr>
                </tbody>
            </table>
    </div>
    </div>
  )
}

export default App
