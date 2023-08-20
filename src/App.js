import "./App.css";
import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import News from "./Components/News";
import About from "./Components/About";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'



const App = ()=> {
 const pageSize = 9;
  const apiKey =  process.env.REACT_APP_NEWS_API;

  const [progress, setProgress] =useState(0);
 

  // const setProgress=(progress)=>{
    
  //   setProgress(progress);
  // }

 
    
    document.body.style.backgroundColor = "#F1C93B";
    return (
      <Router>
      <div>
        <LoadingBar
        height={3}
        color='#f11946'
        progress={progress}
        
      />
        <Navbar />
  
      </div>
      <Routes>
        <Route  exact path="/" element={<News setProgress = {setProgress} apiKey= {apiKey}   key="home" pageSize={pageSize} country="in" category="general" />} />
        <Route  exact path="/business"   element={<News setProgress = {setProgress} apiKey= {apiKey}   key="business" pageSize={pageSize} country="in" category="business" />}/>
        <Route  exact path="/entertainment"   element={<News setProgress = {setProgress} apiKey= {apiKey}   key="entertainment" pageSize={pageSize} country="in" category="entertainment" />}/>
        <Route  exact path="/general"   element={<News setProgress = {setProgress} apiKey= {apiKey}   key="general" pageSize={pageSize} country="in" category="general" />}/>
        <Route  exact path="/health"   element={<News setProgress = {setProgress} apiKey= {apiKey}   key="health" pageSize={pageSize} country="in" category="health" />}/>
        <Route  exact path="/science"   element={<News setProgress = {setProgress} apiKey= {apiKey}   key="science" pageSize={pageSize} country="in" category="science" />}/>
        <Route  exact path="/sports"   element={<News setProgress = {setProgress} apiKey= {apiKey}   key="sports" pageSize={pageSize} country="in" category="sports" />}/>
        <Route  exact path="/technology"   element={<News setProgress = {setProgress} apiKey= {apiKey}    key="technology"pageSize={pageSize} country="in" category="technology" />}/>
        <Route  exact path="/about"   element={<About/>}/>
      </Routes>

      </Router>

    );
  
}

export default App;