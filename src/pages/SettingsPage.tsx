import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './SettingsPage.css'
export function SettingsPage() {
  return (
    <div className="App">
      <div className="lessbigtitle">Settings</div>
      <br></br><br></br>
      <button className="quick-link" onClick={() => location.href="/setup"}>Go to the Setup Page</button>
      <br></br><br></br>
      <button className="quick-link" onClick={() => location.href="/"}>Go Home</button>
    </div>
  )
}