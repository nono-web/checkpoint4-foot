import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import CheckoutSteps from '../Navbar/CheckoutSteps';
import axios from 'axios';
import './FootballPlayer.css';

const FootballPlayer = () => {
  const [stadium, setStadium] = useState([]);
  const [player, setPlayer] = useState([]);
  const navigator = useNavigate();

  const fetchDataStadium = async () => {
    const { data } = await axios.get(
      `${process.env.REACT_APP_API_URL}/stadium`
    );
    setStadium(data);
  };

  const fetchDataPlayer = async () => {
    const { data } = await axios.get(
      `${process.env.REACT_APP_API_URL}/footballplayer`
    );
    setPlayer(data);
  };

  useEffect(() => {
    fetchDataStadium();
    fetchDataPlayer();
  }, []);

  const handleReset =async (id) => {
    await axios.delete(`${process.env.REACT_APP_API_URL}/footballplayer/${id}`, [id]);
    fetchDataPlayer();
  };

  return (
    <div>
      <CheckoutSteps step1 step2 step3></CheckoutSteps>
      <div className="m-body4">
        <h2 className="h2-c">Stade</h2>
        <div>
          {!stadium
            ? ''
            : stadium.map((stadiums) => (
                <div>
                  <img
                    className="img-stadium"
                    src={stadiums.img}
                    alt={stadiums.name}
                  />
                  <p>Nom du stade : {stadiums.name}</p>
                  <p>Ville : {stadiums.city}</p>
                  <p>Capacité du Stade : {stadiums.capacity} places</p>
                </div>
              ))}
        </div>
        <h2 className="h2-c">Joueur</h2>
        <button className="buttton-create" onClick={() => navigator('/creationjoueur')}>Creer un nouveau Joueur</button>
        <div className="container-player">
          {!player
            ? ''
            : player.map((players) => (
                <div className="players">
                  <img
                    className="img-player"
                    src={players.img}
                    alt={players.name}
                  />
                  <p className="p-player">Prenom : {players.firstname}</p>
                  <p className="p-player">Nom : {players.lastname}</p>
                  <button
                    className="button-player"
                    onClick={() => navigator(`/joueurs/${players.id}`)}
                  >
                    {' '}
                    Details
                  </button>
                  <button
                    className="button-player-reset"
                    onClick={() => handleReset(players.id)}
                  >Supprimer</button>
                </div>
              ))}
        </div>
      </div>
    </div>
  );
};

export default FootballPlayer;
