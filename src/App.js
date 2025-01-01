
import Alert from './Alert/Alert';
import './App.css';
import { ConvertToUpperCase } from './HandleEvents/Event';
import MovieComponent from './MovieComponent';
import NavBar from './NavBar';
import About from './State/About';
import {useState} from 'react';
// import { BrowserRouter as Router ,Route,Routes} from 'react-router-dom';

function App() {

  const [darkMode,lightMode]=useState('light');
  const[enableMode,disableMode]=useState('Enable Dark mode');
  const [alert,setAlert]=useState(null);

  const toggleModeSwitch=()=>{
    if(darkMode==='light'){
      lightMode('dark');
      disableMode('Dark mode enabled');
      document.body.style.backgroundColor='rgb(62 68 74)';
      document.body.style.color='whitesmoke';
      showAlert("Dark mode has  been enable","success")
    }
    else{
      lightMode('light');
      disableMode('Enable Dark mode');
      document.body.style.backgroundColor='whitesmoke';
      document.body.style.color='black';
      showAlert("Dark mode has been disabled","warning")
    }
  }

  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    });
    setTimeout(()=>{
      setAlert(null)
    },1200)
  }

  return (
    // <Router>
      <div className="App">
        {/* <NavBar toggleMode={darkMode} toggleModeSwitch={toggleModeSwitch} switchtext={enableMode}  />
        
        <Routes>
          <Route path='/about' element={<About/>} />
          <Route path='/convert' element={<ConvertToUpperCase heading="Convert to upper case" mode={darkMode} />} />
        </Routes> */}
        {/* <MovieComponent /> */}
        <NavBar toggleMode={darkMode} toggleModeSwitch={toggleModeSwitch} switchtext={enableMode} />
        <Alert alert={alert}/>
        <ConvertToUpperCase heading="Convert to upper case" mode={darkMode} />
        {/* <About/> */}
      </div>
    // </Router>
  );
}

export default App;
