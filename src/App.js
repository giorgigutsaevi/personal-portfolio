import './App.css';
import Header from "./components/Header/Header"
import {Routes, Route} from "react-router-dom"

import Projects from './components/Projects/Projects';

const App = () => {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path="/projects" element={<Projects/>}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
