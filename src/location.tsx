import {ReactLocation} from "@tanstack/react-location"
import { SettingsPage, HomePage, SetupPage } from "./pages"

// create a location object
export const location = new ReactLocation()

// create a routes object
export const routes = [
    { path: "/", element: <HomePage /> },
    { path: "/settings", element: <SettingsPage/>},
    { path: "/setup", element: <SetupPage/>}
  ]