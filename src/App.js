import React from 'react'
import './App.css';
import Gallery from './Components/Gallery/Gallery.js';
import Navbar from './Components/Navbar/Navbar';
import Header from './Components/Header/Header.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    fetch('https://api.airtable.com/v0/app546xU983qdu4H0/icantcope', {
      headers: { Authorization: 'Bearer pat97nPdNlmslFunC.84de10acc73690f5e2ba99ff58095065b38e6fa1e9a691b14982623c2ee9ac9d' },
    })
      .then(response => response.json())
      .then(data => this.setState({ data: data.records }))
      .catch(error => console.error(error));
  }

  render() {
    const { data } = this.state;
    return (
      <div className="App">
        <div className='AppContainer'>
          <Navbar />
          <Header/>
          <Gallery data={data}/>
        </div>
      </div>
    );
  }
}

export default App;
