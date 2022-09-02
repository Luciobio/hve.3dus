import './App.css';
import bonvoy from './assets/img/300x91_mb-tm_white.png'
import rclogo from './assets/img/ritz-carlton-primary-black.png'
import carrousel from './assets/img/carrousel.png'
import {ReactComponent as BurgerMenu} from './assets/img/iconmonstr-menu-lined.svg';

function App() {
  return (
    <div className="App">
      
      <nav className='nav'>
        <div className='leftBtns'>
          <button className='menuBtn'><BurgerMenu className='burgerIcon'/> <div>MENU</div></button>
          <div><a href='https://www.ritzcarlton.com/en'> RITZCARLTON.COM</a></div>
        </div>
        <div className= 'rightBtns'>
          <a className='navItem' href='/'>{`ALL HOTELS & RESORTS`}</a>
          <a className='navItem' href='/'>CONTACT US</a>
          <a className='navItem' href='/'>SIGN IN</a>
          <img className='navItem bonvoy' src={bonvoy} alt='bonvoy'/>
        </div>
      </nav>

      <div className= 'header'>
        <img className= 'logo' src= {rclogo} alt= 'rclogo'/>
        <div>NEW YORK, NOMAD</div>
      </div>

      <nav className='nav2'>
        <button className='menuBtn'><div>RESERVE NOW</div></button>
        <a className='navItem' href='/'>HOTEL OVERVIEW</a>
        <a className='navItem' href='/'>{`ROMS & SUITES`}</a>
        <a className='navItem' href='/'>DINING</a>
        <a className='navItem' href='/'>SPA</a>
        <a className='navItem' href='/'>{`AREA & ACTIVITIES`}</a>
        <a className='navItem' href='/'>MEETINGS</a>
        <a className='navItem' href='/'>WEDDINGS</a>
      </nav>
      
      <img className='carrousel' src= {carrousel} alt= 'carrousel'/>
    </div>
  );
}

export default App;
