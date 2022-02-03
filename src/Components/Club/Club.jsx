import React, { useState, useEffect } from 'react';
import './club.css';
import { useNavigate } from 'react-router-dom';
import CheckoutSteps from '../Navbar/CheckoutSteps';
import axios from 'axios';

const Club = () => {
  const [club, setClub] = useState([]);
  const navigator = useNavigate();

  const fetchDataClub = async () => {
    const { data } = await axios.get(`${process.env.REACT_APP_API_URL}/club`);
    setClub(data);
  };
  useEffect(fetchDataClub, []);

  return (
    <div>
      <CheckoutSteps step1 step2></CheckoutSteps>
      <div className="m-body2">
        <h2 className="h2-c">Choisie ton club</h2>
        <div className="container">
          {!club
            ? ''
            : club.map((clubs) => (
                <div className='club-espace'>
                  <img className="img-d" src={clubs.crest} alt={clubs.name} />
                  <button
                    className="button-d"
                    onClick={() => navigator('/joueurs')}
                  >
                    {clubs.name}
                  </button>
                </div>
              ))}
        </div>
      </div>
    </div>
  );
};

export default Club;
