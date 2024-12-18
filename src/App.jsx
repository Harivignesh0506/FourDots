
import './App.css';
import YourAppBanner from "./Components/Header"
import Features from "./Components/Content"
import PricingTable from './Components/Box';
import FooterCTA from './Components/Footer';
import Section from './Components/Section';



function App() {
  return(
    <div>
        <YourAppBanner />
        <Features />
        <PricingTable/>
       <FooterCTA/>
       <Section />
     
    </div>
  )
}



export default App;


