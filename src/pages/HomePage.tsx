import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './HomePage.css'
import dayjs from 'dayjs'

const initDate = dayjs(new Date());

export function HomePage() {
  const d = new Date
  const [time, setTime] = useState<string>(initDate.format("h:mm"))
  const [ampm, setAmPm] = useState<string>(initDate.format("A"))
  const [date, setDate] = useState<string>()
  const [todo, setTodo] = useState<string>('Nothing')
  const [quickLinkName, setQuickLinkName] = useState<string>('Google')
  const [quickLinkURL, setQuickLinkURL] = useState<string>('https://google.com')
  const [searchBar, setSearchBar] = useState<string>('Boz')

  return (
    <div className="App">
      <form action="https://www.google.com/search" method="get" target="_blank" id="search-form">
      <input name="q" type="text" placeholder="Google Search"></input>
      </form>
      <div className="mediumtitle">{date}</div>
      <div className="bigtitle">{time}</div> <div className="mediumtitle">{ampm}</div><br></br>
      <div className="lessmediumtitle">What you need to do today: </div>
      <div className="lessbigtitle">{todo}</div>
      <br></br>
      <button className="quick-link" onClick={() => window.location.href=quickLinkURL}>{quickLinkName}</button><br></br><br></br>
      <button className="quick-link" onClick={() => window.location.href="/settings"}>Settings</button>
    </div>
  )
}