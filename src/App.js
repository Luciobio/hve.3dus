import './App.css';
import bonvoy from './assets/img/300x91_mb-tm_white.png'
import rclogo from './assets/img/ritz-carlton-primary-black.png'
import {ReactComponent as BurgerMenu} from './assets/img/iconmonstr-menu-lined.svg';
import { BrowserRouter , Routes, Route, Link} from "react-router-dom";
import Rooms from './Components/Rooms/Rooms';
import Home from './Components/Home/Home';

function App() {
  return (
    <BrowserRouter>

      <div className="App">
        <nav className='nav'>
          <div className='leftBtns'>
            <button className='menuBtn'><BurgerMenu className='burgerIcon' /> <div>MENU</div></button>
            <div><a href='https://www.ritzcarlton.com/en'> RITZCARLTON.COM</a></div>
          </div>
          <div className='rightBtns'>
            <a className='navItem' href='/'>{`ALL HOTELS & RESORTS`}</a>
            <a className='navItem' href='/'>CONTACT US</a>
            <a className='navItem' href='/'>SIGN IN</a>
            <img className='navItem bonvoy' src={bonvoy} alt='bonvoy' />
          </div>
        </nav>

        <div className='header'>
          <img className='logo' src={rclogo} alt='rclogo' />
          <div><Link to= '/home'>{`NEW YORK, NOMAD`}</Link></div>
        </div>

        <nav className='nav2'>
          <a className='navItem2' href='/'>HOTEL OVERVIEW</a>
          <Link className='navItem2' to= '/rooms-suites'>{`ROMS & SUITES`}</Link>
          <a className='navItem2' href='/'>DINING</a>
          <a className='navItem2' href='/'>SPA</a>
          <a className='navItem2' href='/'>{`AREA & ACTIVITIES`}</a>
          <a className='navItem2' href='/'>MEETINGS</a>
          <a className='navItem2' href='/'>WEDDINGS</a>
        </nav>

        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/home' element={<Home/>}/>
        <Route exact path='/rooms-suites' element={<Rooms/>}/>
        
      </Routes>

      </div>
    </BrowserRouter>
    
  );
}

export default App;
