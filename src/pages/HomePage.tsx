import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './HomePage.css'
import dayjs from 'dayjs'
import { useNewTabStore } from '../store';

let djs = dayjs(new Date());

export function HomePage() {
  const {userName, userTodo, urlName, urlLink} = useNewTabStore();
  let [time, setTime] = useState<string>(djs.format("h:mm"))
  let [ampm, setAmPm] = useState<string>(djs.format("A"))
  let greeting = "Hi, " + userName
  if (time >= "7:00" && time <= "11:59" && ampm == "AM"){
    greeting = "Good Morning, " + userName
  }
  if (time >= "12:00" && time <= "3:00" && ampm == "PM"){
    greeting = "Good Afternoon, " + userName
  }
  if (time >= "3:00" && time <= "11:59" && ampm == "PM" ){
    greeting = "Good Evening, " + userName
  }
  if (time >= "12:00" && time <= "6:59" && ampm == "AM"){
    greeting = "Good Night, " + userName
  }
  let dateAndGreeting = djs.format("dddd, MMMM DD, YYYY") + " - " + greeting
  let [date, setDate] = useState<string>(djs.format("dddd, MMMM DD, YYYY"))
  return (
    <div className="App">
      <form action="https://www.google.com/search" method="get" target="_blank" id="search-form">
      <input name="q" type="text" placeholder="Google Search"></input>
      </form>
      <div className="mediumtitle">{dateAndGreeting}</div>
      <div className="bigtitle">{time}</div> <div className="mediumtitle">{ampm}</div><br></br>
      <div className="lessmediumtitle">What you need to do today: </div>
      <div className="lessbigtitle">{userTodo}</div>
      <br></br>
      <button className="quick-link" onClick={() => window.location.href = urlLink }>URL: {urlName}</button><br></br><br></br>
      <button className="quick-link" onClick={() => location.href="/settings"}>Settings</button>
    </div>
  )
  let timeSinceNewMinute = djs.format("s")
  let timeUntilNewMinute = 60-parseInt(timeSinceNewMinute)
  let timeoutUntilNewMinute = 1000*timeUntilNewMinute
  setTimeout(() => {location.reload()}, timeoutUntilNewMinute)
}