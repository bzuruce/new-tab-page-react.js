import { useNavigate } from '@tanstack/react-location'
import { string } from 'prop-types'
import { useEffect, useRef, useState } from 'react'
import { useNewTabStore } from '../store'
import reactLogo from './assets/react.svg'
import './SettingsPage.css'

export function SetupPage() {
  const nameRef = useRef<HTMLInputElement>(null);
  const todoRef = useRef<HTMLInputElement>(null);
  const qlNameRef = useRef<HTMLInputElement>(null);
  const qlURLRef = useRef<HTMLInputElement>(null);
  const {userName, setUserName} = useNewTabStore();
  const {userTodo, setUserTodo} = useNewTabStore();
  const {urlName, setUrlName} = useNewTabStore();
  const {urlLink, setUrlLink} = useNewTabStore();
  const navigate = useNavigate()
  const onUpdate = () => {
    const namevalue = nameRef.current?.value || 'User'
    setUserName(namevalue);
    const todovalue = todoRef.current?.value || "You're good to go!"
    setUserTodo(todovalue);
    const qlnamevalue = qlNameRef.current?.value || "You don't have a quick link! Click here to set it up"
    setUrlName(qlnamevalue);
    console.log('setUrlName', qlnamevalue)
    const qlURLvalue = qlURLRef.current?.value || '/setup'
    setUrlLink(qlURLvalue);
    navigate({ to: '/', replace: true })
  }
  return (
    <div className="App">
      <div className="lessbigtitle">Setup</div>
      <br></br>
      <input ref={nameRef} id='todo' placeholder='What is your name?'></input>
      <input ref={todoRef} id='todo' placeholder='What do you need to do'></input>
      <input ref={qlNameRef} id='todo' placeholder='What is the name of the website you visit most'></input>
      <input ref={qlURLRef} id='todo' placeholder='What is the URL of the website you visit most'></input>
      <button className="quick-link" onClick={onUpdate}>Submit and Proceed</button>
    </div>
  )
}