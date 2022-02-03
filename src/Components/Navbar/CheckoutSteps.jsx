import React from 'react';
import { useNavigate } from 'react-router';
import "./CheckoutSteps.css";

export default function CheckoutSteps(props) {
const navigate = useNavigate();

    return (
        <div className='row checkout-steps'>
            <div className={props.step1 ? 'active' : ''} onClick={()=>navigate('/')}>Championnat</div>
            <div className={props.step2 ? 'active' : ''} onClick={()=>navigate('/club')}>Club</div>
            <div className={props.step3 ? 'active' : ''} onClick={()=>navigate('/joueurs')}>Joueurs</div>
            <div className={props.step4 ? 'active' : ''} onClick={()=>navigate('/joueurs/:id')}>Detail Joueur</div>
        </div>
    )
}
