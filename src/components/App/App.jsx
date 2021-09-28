
import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';

function App () {

  const[results, setResults] = useState([]);

  useEffect(() => {
    fetchGiphyResults();
  }, [])

  const fetchGiphyResults = () => {
    axios({
      method: 'GET', 
      url: '/giphy',
    }).then(response => {
      console.log('log this as a starting point:', response);
      setResults(response.data.data) //check console for what this is
    })
  }

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">APIS</h1>
          <h4><i>APIS</i></h4>
        </header>

        {JSON.stringify(results)}

      {
        results.map(gif => (
          gif.images.downsized_medium.url
        ))
      }

        <br/>
      </div>
    );
  
}

export default App;
