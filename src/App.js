import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Championship from './Components/Championship/Championship';
import Club from './Components/Club/Club';
import FootballPlayer from './Components/FootballPlayer/FootballPlayer';
import Header from './Components/Header/Header';
import FootballPlayerCreate from './Components/FootballplayerDetails/FootballPlayerDetails';
import Footer from './Components/Footer/Footer';
import CreatePlayer from './Components/CreatePlayer/CreatePlayer';


function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Championship />} />
          <Route path="/club" element={<Club />} />
          <Route path="/joueurs" element={<FootballPlayer />} />
          <Route path="/joueurs/:id" element={<FootballPlayerCreate />} />
          <Route path="/creationjoueur" element={<CreatePlayer />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
