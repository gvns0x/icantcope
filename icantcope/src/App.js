import './App.css';
import Gallery from './Components/Gallery/Gallery.js';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <div className='AppContainer'>
        <Navbar/>
        <Gallery />
      </div>
    </div>
  );
}

export default App;
