
import './App.css';
import LiveStreamingBanner from './Components/Live'
import Main from './Components/Price';
import {Icons} from './Components/Price';
import { Video} from './Components/Price'
import {FAQ} from './Components/Price'
import Footer from './Components/Footer'
import HighlightTabs from './Components/News'

function App() {
  return (
    <div className='bg-slate-100'>
    <LiveStreamingBanner />
    <Main />
    <Icons />
    <Video /> 
    <FAQ />
    <Footer />
    <HighlightTabs />
    </div>
  );
}

export default App;
