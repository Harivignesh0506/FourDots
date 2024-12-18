import React from 'react'
import { Route,Routes } from 'react-router-dom'
import LiveStreamingBanner from '../Live'
import Main from "../Price"
import { Icons } from '../Live'


const RouterComponent = () => {
  return (
     <Routes>
        <Route path="/"element={<LiveStreamingBanner/>} />
        <Route path="/controlled"element={<Main/>} />
        <Route path="/controlled"element={<Icons/>} />
        
     </Routes>
  )
}

export default RouterComponent