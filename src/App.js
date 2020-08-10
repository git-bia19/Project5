import React from 'react';
import './App.css';
import {Main} from './components/main';
import {About} from './components/About';
import {Contact} from './components/contact';
import {Footer} from "./components/Footer";


function App() {
  return (
    <div class="background" className ="font"  >
      
     <Main></Main>
     <About></About>
     <Contact></Contact>
     <Footer></Footer>
    </div>
  )
  }

export default App;
