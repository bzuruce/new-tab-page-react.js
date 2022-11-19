import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './SettingsPage.css'
export function SetupPage() {
  return (
    <div className="App">
      <div className="lessbigtitle">Setup</div>
      <br></br>
      <button className="quick-link" onClick={() => location.href="/"}>Go to the Name Setup Page</button>
      <br></br><br></br>
      <button className="quick-link" onClick={() => location.href="/"}>Go to the Todo Setup Page</button>
      <br></br><br></br>
      <button className="quick-link" onClick={() => location.href="/"}>Go to the Quick Link Setup Page</button>
      <br></br><br></br>
      <button className="quick-link" onClick={() => location.href="/"}>Go Home</button>
    </div>
  )
}