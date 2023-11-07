import logo from './logo.svg';
import './App.css';
import Navbar from './Component/Navbar/Navbar';
import Hero from "./Component/Hero/Hero"
import ChoseUs from "./Component/ChoseUsSection/ChoseUs"
import AreaOFPractice from "./Component/AreaOfPracticeSection/AeraOfPractice"
import Client from "./Component/ClientSection/Client"
import Team from "./Component/TeamSection/Team"
import Faq from "./Component/FaqSection/Faq"
import Subscribe from './Component/SubscribeSection/Subscribe';
import Footer from "./Component/Footer/Footer"


function App() {
  return (
    <div className="App">
     <Navbar/>
     <Hero/>
     <ChoseUs/>
     <AreaOFPractice/>
     <Client/>
     <Team/>
     <Faq/>
     <Subscribe/>
     <Footer/>
    </div>
  );
}

export default App;
