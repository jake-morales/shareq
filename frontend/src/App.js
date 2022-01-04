import {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [item, setItem] = useState([]);

  useEffect(() => {
    fetch("/api")
      .then(res => res.text())
      .then(
        (result) => {
          setIsLoaded(true);
          setItem(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

  if (error) {
    return <div>Error: {error.message}</div> 
  } else if (!isLoaded) {
    return <div>Loading...</div>
  } else {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            {item} LOL
          </p>
        </header>
      </div>
    );
  }
}

export default App;
