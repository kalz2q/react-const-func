import React from 'react';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <div className='section'>
        <img src={require("./tenshi.JPG")} alt="太郎のアイコン画像です" />
        <h1>山田太郎</h1>
        <p>UI/UXデザイナー見習いです。日々の勉強、頑張っています。</p>
      </div>

      <footer>(c) dotinstallsample </footer>
    </div>
  );
}

export default App;
