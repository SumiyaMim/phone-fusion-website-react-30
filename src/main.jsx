import React, { createContext } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import myCreatedRoute from './Router/Route'

// Context Api
export const GlobalContext = createContext()

const userId = "5067"
const userInfo = {
  name : "mim",
  id: "5"
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    {/* Context Api */}
    {/* <GlobalContext.Provider value={{name:"true"}}> */}
    {/* <GlobalContext.Provider value={userId}> */}
    {/* <GlobalContext.Provider value={userInfo}>
      <RouterProvider router={myCreatedRoute}></RouterProvider>
    </GlobalContext.Provider> */}

    <RouterProvider router={myCreatedRoute}></RouterProvider>
  </React.StrictMode>,
)
