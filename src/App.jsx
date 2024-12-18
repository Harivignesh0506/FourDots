
import './App.css';
import LiveStreamingBanner from './Components/Live'
import Main from './Components/Price';
import {Icons} from './Components/Price'

function App() {
  return (
    <div className='bg-slate-100'>
    <LiveStreamingBanner />
    <Main />
    <Icons />
    </div>
  );
}

export default App;
