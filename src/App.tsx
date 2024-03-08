

import DarkModeToggle from './hooks/DarkModeToggle';
import { useDarkMode } from './hooks/useDarkMode';
import  RouterApp  from './router/RouterApp'
import {ToastContainer} from "react-toastify";
function App() {
  const isDarkMode = useDarkMode();
  return (
    <div
    className={` ${
      isDarkMode ? "bg-black text-white" : "bg-white text-black"
    }`}
  >
    <DarkModeToggle />

    <ToastContainer />
      <RouterApp />
    </div>
   
  )
}

export default App
