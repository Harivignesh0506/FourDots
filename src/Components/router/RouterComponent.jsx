import React from 'react'
import { Route,Routes} from 'react-router-dom'
import LiveStreamingBanner from '../Live'
import MainCompontent  from '../Price'
import { Video} from '../Price'




import Faqs from '../Faqs'
import Market from '../Market'




const RouterComponent = () => {
  return (
     <Routes>
        <Route path="/"element={<LiveStreamingBanner/>} />
       
        <Route path="/component"element={<MainCompontent/>} />
        <Route path="/Video"element={<Video/>} />
        <Route path="/Faqs"element={<Faqs/>} />
        <Route path="/Market"element={<Market/>} />
       
        
       
        
        
     </Routes>
  )
}

export default RouterComponent