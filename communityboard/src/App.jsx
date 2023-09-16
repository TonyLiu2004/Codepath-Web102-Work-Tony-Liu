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
    <h1>Great Food Trucks</h1>
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
                        <Cell img = './img/mexican.jpeg' name = 'The Halal Guys' description = 'Middle Eastern' url = 'https://thehalalguys.com/'/>
                        <Cell img = './img/italian.jpg' name = 'Piccolo' description = 'Italian' url = 'https://www.piccolomayfield.com/'/>
                        <Cell img = './img/indian.jpg' name = 'Curry Up Now' description = 'Indian' url = 'https://www.curryupnow.com/'/>
                    </tr>
                    <tr>
                        <Cell img = './img/ethiopian.jpg' name = 'Makina' description = 'Ethiopian' url = 'https://makinacafenyc.com/'/>
                        <Cell img = './img/mexican2.jpg' name = '5 Elementos' description = 'Mexican' url = 'http://5elementosla.com/'/>
                        <Cell img = './img/italian2.jpg' name = 'The Little Sicilian Riceballs' description = 'Italian' url = 'http://https://thelittlesicilian.net/'/>
                    </tr>
                    <tr>  
                      <Cell img = './img/chinese.jpg' name = 'Mr Bing' description = 'Chinese' url = 'https://mr-bing.com/'/>
                      <Cell img = './img/southwest.jpeg' name = 'Kettle Corn' description = 'South West' url = 'https://cactuscorn.com/'/>
                      <Cell img = './img/longisland.jpg' name = 'Eddie’s Pizza' description = 'Long Island' url = 'https://www.eddiespizzany.com/'/>
                    </tr>
                    <tr>
                      <Cell img = './img/philly.jpeg' name = 'Izzys Cheesesteaks' description = 'Philadelphia' url = 'https://izzyscheesesteaks.com/'/>
                      <Cell img = './img/jamaican.jpg' name = 'High Grade Foods' description = 'Jamaican' url = 'https://highgradefoods.com/'/>
                      <Cell img = './img/columbus.jpeg' name = 'KINETIC' description = 'Columbus' url = 'https://www.kineticfoodtruck.com/'/>
                    </tr>
                </tbody>
            </table>
    </div>
    </div>
  )
}

export default App
