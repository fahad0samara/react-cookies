

import DarkModeToggle from './hooks/DarkModeToggle';
import { useDarkMode } from './hooks/useDarkMode';
import  RouterApp  from './router/RouterApp'
import {ToastContainer} from "react-toastify";
import { Analytics } from "@vercel/analytics/react";

function App() {
  const isDarkMode = useDarkMode();
  return (
    <div
    className={` ${
      isDarkMode ? "bg-black text-white" : "bg-white text-black"
    }`}
  >
    <DarkModeToggle />
    <Analytics />

    <ToastContainer />
      <RouterApp />
    </div>
   
  )
}

export default App
