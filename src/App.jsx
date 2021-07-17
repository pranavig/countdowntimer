import React, { useEffect, useRef, useState } from 'react'
import logo from './logo.svg'
import './App.css'
import CounterCard from './Components/CounterCard'
import SocialIcons from './Components/SocialIcons'

function App() {
  const [days, setDays] = useState(14)
  const [hours, setHours] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0)

  const dateRef = useRef(new Date(new Date().setDate(new Date().getDate() + 14)).getTime()); // 14 days

  useEffect(() => {

    //every 1 second
    setInterval(() => {
      const todaysDate = new Date().getTime();

      const distance = dateRef.current - todaysDate;

      // Time calculations for days, hours, minutes and seconds
      var newdays = Math.floor(distance / (1000 * 60 * 60 * 24));
      var newhours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var newminutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var newseconds = Math.floor((distance % (1000 * 60)) / 1000);

      days !== newdays && setDays(newdays)
      hours !== newhours && setHours(newhours)
      minutes !== newminutes && setMinutes(newminutes)
      seconds !== newseconds && setSeconds(newseconds)

    }, 1000)
  }, [])

  return (
    <div className="App">
      <div className="counterDiv Center-Content">
        <img src="../images/bg-stars.svg" />
        <h2>we're launching Soon</h2>
        <div className="counter-cards">
          <CounterCard counterNumber={days} counterText="DAYS" />
          <CounterCard counterNumber={hours} counterText="HOURS" />
          <CounterCard counterNumber={minutes} counterText="MINUTES" />
          <CounterCard counterNumber={seconds} counterText="SECONDS" />
        </div>
      </div>
      <div className="socialDiv Center-Content">
        <img src="../images/pattern-hills.svg" />
        <SocialIcons />
      </div>
    </div>
  )
}

export default App
