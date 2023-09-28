import './styles/base.css';
import './styles/animation.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Header from './component/Header';
import Portfolio from './component/Portfolio';
import Home from './component/Home';
import About from './component/About';
import Footer from './component/Footer';
import BtntoTop from './component/BtntoTop';
import Introduce from './component/Introduce';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path='/' element={<Portfolio />} />
          <Route path='/home' element= {<Home/>} />
          <Route path='/introduce' element= {<Introduce/>} />
          <Route path='/about' element={<About />} />
        </Routes>
        <BtntoTop />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;