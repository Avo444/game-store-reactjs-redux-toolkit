import './App.css';
// import * as React from "react";
import {Route, Routes} from 'react-router-dom';
import Header from './components/header/header';
import HomePage from './pages/home/home-page';
import GamePage from './pages/game/game-page';
import Footer from './components/footer/footer';
function App() {
  return (
      <div>
        <Header />
          <main>
            <Routes>
                  <Route path='/game/:id' element={<GamePage />}></Route>
                  <Route exact path="/" element={<HomePage />}></Route>
            </Routes>
          </main>
        <Footer />
      </div>
  );
}

export default App;
