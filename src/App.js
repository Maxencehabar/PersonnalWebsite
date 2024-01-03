import './App.css';
import { NavBar } from "./components/NavBar.js"
import { Home } from "./components/Home/Home.js"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {Blog} from "./components/Blog/Blog"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className='mainPage'>
          <NavBar className='navbar'></NavBar>
          <Routes className='route'>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/blog" element={<Blog></Blog>}></Route>
            </Routes>
        </div>
        
      </BrowserRouter>
      
    </div>
  );
}


export default App;