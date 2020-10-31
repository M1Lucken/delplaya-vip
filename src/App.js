import logo from './logo.svg';
import './App.css';
import bg from './img/bg.jpg'

function App() {
  return (
     <div styles={{ backgroundImage: `url(${bg})` }}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Del Playa VIP Dev
        </p>
        </header>
      </div>
     </div>
  );
}

export default App;
