import logo from './logo.svg';
import './App.css';
import{BrowserRouter,NavLink,Route,Router,Routes}from "react-router-dom";
import Homescrean from './pages/Home';
import Navbar from './components/Navbar';
import Tutorial from './pages/Tutorial';
import Datasheet from './pages/Datasheet';
import Labpractical from './pages/Labpractical';
import RegisterAndLogin from './pages/RegisterAndLogin';
import GuidedVideoPage from './pages/GuidedVideo';
import { AuthContextProvider } from './utils/AuthContext';
import MultipleChoiceQuestions from './pages/Question';
import Sensors from './pages/Sensors';
import Actuators from './pages/Actuators';
import PLCProgramming from './pages/PLCProgramming';




function App() {
  return (
    <AuthContextProvider>

    <div className="App">

      
      <BrowserRouter>
      
      <Navbar/>
      <Routes>
      <Route path="/" element={<RegisterAndLogin/>}/>
        <Route path="/home" element={<Homescrean/>}/>
        <Route path="/Tutorial" element={<Tutorial/>}/>
        <Route path="/Datasheet" element={<Datasheet/>}/>
        <Route path="/Labpractical" element={<Labpractical/>}/>
        <Route path="/guided-video" element={<GuidedVideoPage></GuidedVideoPage>} />
        <Route path="/MultipleChoiceQuestions" element={<MultipleChoiceQuestions/>} />
        <Route path='/Sensors' element={<Sensors/>}/>
        <Route path='/Actuators' element={<Actuators/>}/>
        <Route path='/PLCProgramming' element={<PLCProgramming/>}/>
      </Routes>
  
      
      </BrowserRouter>
     
      
      
      
      
    </div>
    </AuthContextProvider>

  );
}

export default App;
