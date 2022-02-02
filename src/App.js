import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Championship from './Components/Championship/Championship';
import Club from './Components/Club/Club';
import FootballPlayer from './Components/FootballPlayer/FootballPlayer';
import Header from './Components/Header/Header';
import FootballPlayerCreate from './FootballplayerCreate/FootballPlayerCreate';
import Footer from './Components/Footer/Footer';


function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Championship />} />
          <Route path="/club" element={<Club />} />
          <Route path="/joueur" element={<FootballPlayer />} />
          <Route path="/joueur/:id" element={<FootballPlayerCreate />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
