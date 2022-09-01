import './App.css';
import bonvoy from './assets/img/300x91_mb-tm_white.png'

function App() {
  return (
    <div className="App">
      <nav className='nav'>
        <div>
          <button></button>
          <div><a href='https://www.ritzcarlton.com/en'> RITZCARLTON.COM</a></div>
          <div>
            <div><a href='/'>{`ALL HOTELS & RESORTS`}</a></div>
            <div><a href='/'>CONTACT US</a></div>
            <div><a href='/'>SIGN IN</a></div>
            <div><img src={bonvoy} alr='bonvoy'/></div>
          </div>
        </div>

      </nav>
    </div>
  );
}

export default App;
