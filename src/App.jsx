
import './App.css';
import LiveStreamingBanner from './Components/Live'
import Main from './Components/Price';
import {Icons} from './Components/Price';
import { Video} from './Components/Price'
import {FAQ} from './Components/Price'
import Footer from './Components/Footer'
import HighlightTabs from './Components/News'
import {Navbar} from './Components/Header'
import  Market from './Components/Market'
import {CricketService} from './Components/Market'
import  Faqs from "./Components/Faqs"

function App() {
  return (
    <div className='bg-slate-100'>
      {/* <Navbar /> */}
    <LiveStreamingBanner />
    <Main />
    <Icons />
    <Video /> 
    <FAQ />
    <Footer />
    <HighlightTabs />
    <Market />
    <Faqs />
  
    
    </div>
  );
}

export default App;
