import React, { useState } from 'react';
import axios from 'axios';
import CheckoutSteps from '../Navbar/CheckoutSteps';
import { useNavigate } from 'react-router-dom';
import './CreatePlayer.css';

const CreatePlayer = () => {
  const navigator = useNavigate();
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [age, setAge] = useState('');
  const [img, setImg] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [number, setNumber] = useState('');
  const [post, setPost] = useState('');
  const [clubId, setClubId] = useState('');

  const handleSubmit = () => {
    const values = {
      firstname,
      lastname,
      age,
      img,
      height,
      weight,
      number,
      post,
      clubId,
    };
    axios
      .post(`${process.env.REACT_APP_API_URL}/footballplayer`, values)
      .then(() => {
       
      })
      .catch(
        ({
          response: {
            data: { message },
          },
        }) => {
          setError(message);
        }
      );
      navigator('/joueurs');
  };

  return (
    <div>
      <CheckoutSteps step1 step2 step3 step4></CheckoutSteps>
      <div className="m-body6">
        <h2 className="h2-c">Creer ton joueur</h2>
        <form className="form-playercreate" onSubmit={handleSubmit}>
          <label htmlFor="fistname">
            <p>Prenom : </p>
            <input
              id="fistname"
              type="text"
              placeholder="firstname"
              onChange={(e) => setFirstname(e.target.value)}
            />
          </label>
          <label htmlFor="lastname">
            <p>Nom : </p>
            <input
              id="lastname"
              type="text"
              placeholder="lastname"
              onChange={(e) => setLastname(e.target.value)}
            />
          </label>
          <label htmlFor="age">
            <p>Age : </p>
            <input
              id="age"
              type="text"
              placeholder="age"
              onChange={(e) => setAge(e.target.value)}
            />
          </label>
          <label htmlFor="img">
            <p>Image : </p>
            <input
              id="img"
              type="text"
              placeholder="image"
              onChange={(e) => setImg(e.target.value)}
            />
          </label>
          <label htmlFor="height">
            <p>Taille : </p>
            <input
              id="height"
              type="text"
              placeholder="Taille"
              onChange={(e) => setHeight(e.target.value)}
            />
          </label>
          <label htmlFor="weight">
            <p>Poids : </p>
            <input
              id="weight"
              type="text"
              placeholder="Poids"
              onChange={(e) => setWeight(e.target.value)}
            />
          </label>
          <label htmlFor="Number">
            <p>Numero de Maillot : </p>
            <input
              id="Number"
              type="text"
              placeholder="numero du maillot"
              onChange={(e) => setNumber(e.target.value)}
            />
          </label>
          <label htmlFor="Post">
            <p>Poste du Joueur : </p>
            <input
              id="Post"
              type="text"
              placeholder="Poste"
              onChange={(e) => setPost(e.target.value)}
            />
          </label>
          <label htmlFor="clubId">
            <p>Numero du Club : </p>
            <input
              id="clubId"
              type="text"
              placeholder="numero du Club"
              onChange={(e) => setClubId(e.target.value)}
            />
          </label>
          <button>Creer son Joueur</button>
        </form>
      </div>
    </div>
  );
};

export default CreatePlayer;
