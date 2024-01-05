import './App.css';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import { BrowserRouter,Routes,Route } from 'react-router-dom'
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='*' element={<Error/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
