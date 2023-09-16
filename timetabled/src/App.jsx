import './App.css';
import Calendar from './components/Calendar'
const App = () => {

  return (
    <div className="App">
      <h1>Weekly Event Calendar</h1>
      <h2>This is the Calendar of what we have planned for the week!  </h2>
      <Calendar />
    </div>
  )
}

export default App