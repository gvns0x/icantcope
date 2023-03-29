import './App.css';
import Gallery from './Components/Gallery/Gallery.js';
import Navbar from './Components/Navbar/Navbar';
import Header from './Components/Header/Header.js';

function App() {
  return (
    <div className="App">
      <div className='AppContainer'>
        <Navbar />
        <Header/>
        <Gallery />
      </div>
    </div>
  );
}

export default App;