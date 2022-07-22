import {Route, Routes} from 'react-router-dom';
import Header from './components/header/header';
import HomePage from './pages/home/home-page';
import GamePage from './pages/game/game-page';
import CheckOutPage from './pages/checkout/checkout';
import NotFound from './pages/notFound/not-found';
import Footer from './components/footer/footer';
import './App.css';

function App() {
  return (
      <div>
        <Header />
          <main>
            <Routes>
                  <Route path='/game/:id' element={<GamePage />}></Route>
                  <Route path='/checkout' element={<CheckOutPage />}></Route>
                  <Route path="*" element={<NotFound />}></Route>
                  <Route exact path="/" element={<HomePage />}></Route>
            </Routes>
          </main>
        <Footer />
      </div>
  );
}

export default App;
