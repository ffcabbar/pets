import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Header, Main, BackToTop} from "./components";


function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <BackToTop />
    </div>
  );
}

export default App;
