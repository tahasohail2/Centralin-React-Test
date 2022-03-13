
import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
import './App.css';
import {BrowserRouter as Router, Switch,Route } from "react-router-dom";
import Profile from "./components/profile/Profile";
function App() {
  return (
    <>
    
    <div className="App">
    <div className="Sidebar">
    <Router>
    <Sidebar />
    </Router>
      
      </div>
      <div className="Topbar">
      <Topbar/>
      <Profile/>
      </div>
    </div>
    
    </>
   
    
  );
}

export default App;
