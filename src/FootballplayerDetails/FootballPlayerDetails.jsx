import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CheckoutSteps from '../Components/Navbar/CheckoutSteps';
import axios from 'axios';
import './FootballPlayerDetails.css'


const FootballPlayerCreate = () => {

const { id } = useParams();
const [detailsPlayer, setDetailsPlayer] = useState([]);
const [number, setNumber] = useState();
const [post, setPost] = useState();

const fetchDataPlayerDetails = async () => {
  const { data } = await axios.get(
    `${process.env.REACT_APP_API_URL}/footballplayer/${id}`
  );
  setDetailsPlayer(data);
}
useEffect(fetchDataPlayerDetails, []);

const handleChange = () => {
  const values = {
    number,
    post,
  };
  axios
    .put(`${process.env.REACT_APP_API_URL}/footballplayer/${id}`, values)
    .then(({ data }) => {
      console.log({
        data,
      });
      fetchDataPlayerDetails();
    });
};

    return (
        <div>
          <CheckoutSteps step1 step2 step3 step4></CheckoutSteps>
    <div className='m-body5'>
    <h2 className="h2-c">Details de Joueur</h2>
      <div>
      {!detailsPlayer
            ? ''
            : detailsPlayer.map((detailsPlayers) => (
                <div >
                  <img
                    className="img-detailsplayer"
                    src={detailsPlayers.img}
                    alt={detailsPlayers.name}
                  />
                  <p>Prenom : {detailsPlayers.firstname}</p>
                  <p>Nom : {detailsPlayers.lastname}</p>
                  <p>age : {detailsPlayers.age}</p>
                  <p>Taille : {detailsPlayers.height}m</p>
                  <p>Poids : {detailsPlayers.weight}kg</p>
                  <p>Numero de Maillot actuel : {detailsPlayers.number}</p>
                  <form>
              <label htmlFor="maillot">
                <input
                  id="maillot"
                  type="text"
                  placeholder="Modifier le numero du maillot"
                  onChange={(e) => setNumber(e.target.value)}
                />
              </label>
              <button type="submit" onClick={handleChange}>Confirmé le changements</button>
            </form>
                  <p>Poste actuel : {detailsPlayers.post}</p>
                  <form>
              <label htmlFor="post">
                <input
                  id="post"
                  type="text"
                  placeholder="Modifier le post du joueur"
                  onChange={(e) => setPost(e.target.value)}
                />
              </label>
              <button type="submit" onClick={handleChange}>Confirmé le changements</button>
            </form>
                </div>
              ))}
      </div>
      
      </div>
    </div>
    )
  };

export default FootballPlayerCreate;
