import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import {  ReactLocation, Router, Outlet  } from "@tanstack/react-location";
import { location, routes } from "./location";
function App() {
  return (<Router location={location} routes={routes}>
  <React.StrictMode>
    <Outlet />
  </React.StrictMode>
</Router>)
}

export default App
