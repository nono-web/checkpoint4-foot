import React, { useState, useEffect } from 'react';
import CheckoutSteps from '../Navbar/CheckoutSteps';
import './Championship.css';
import axios from 'axios';

const Championship = () => {
  const [ligue, setLigue] = useState([]);

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
        {!ligue
          ? ''
          : ligue.map((ligues) => (
              <div>
                <img className='img-c' src={ligues.logo} alt={ligues.name} />
                <button className='button-c'>{ligues.name}</button>
              </div>
            ))}
      </div>
    </div>
  );
};

export default Championship;
