import { string } from 'prop-types'
import { useEffect, useRef, useState } from 'react'
import { useNewTabStore } from '../store'
import reactLogo from './assets/react.svg'
import './SettingsPage.css'

export function SetupPage() {
  const todoRef = useRef<HTMLInputElement>(null);
  const {userTodo, setUserTodo} = useNewTabStore();

  const onUpdate = () => {
    const value = todoRef.current?.value || ''
    setUserTodo(value);
    location.href = "/"
  }
  
  useEffect( () => setUserTodo(userTodo), []);

  return (
    <div className="App">
      <div className="lessbigtitle">Setup</div>
      <br></br>
      <input ref={todoRef} id='todo' placeholder='What you need to do' /*value = {userTodo}*/></input>
      <button className="quick-link" onClick={onUpdate}>Submit and Proceed</button>
    </div>
  )
}