import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import CheckoutSteps from '../Navbar/CheckoutSteps';
import './Championship.css';
import axios from 'axios';

const Championship = () => {
  const [ligue, setLigue] = useState([]);
  const navigator = useNavigate();

  const fetchDataLigue = async () => {
    const { data } = await axios.get(
      `${process.env.REACT_APP_API_URL}/championship`
    );
    setLigue(data);
  };

  useEffect(fetchDataLigue, []);
  return (
    <div>
      <CheckoutSteps step1></CheckoutSteps>
      <div className="m-body">
        <h2 className='h2-c'>Choisie ton championnat</h2>
        <div className="container-champion">
        {!ligue
          ? ''
          : ligue.map((ligues) => (
              <div className='champion-espace'>
                <img className='img-c' src={ligues.logo} alt={ligues.name} />
                <button className='button-c' onClick={() => navigator('/club')}>{ligues.name}</button>
              </div>
            ))}
            </div>
      </div>
    </div>
  );
};

export default Championship;
