import './App.css';
import axios from "axios";
import { useEffect } from 'react';
import Router from './router';

function App() {
  
  const initApi = async () => {
    const { data } = await axios.get("http://127.0.0.1:5000");
    console.log("initApi", data);
  }

  useEffect(() => {
    initApi();
  }, []);

  return (
    <div className="App">
        <Router />
    </div>
  );
}

export default App;