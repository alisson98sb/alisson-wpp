import React from 'react';
import Api from '../../Api';

import imglogoGoogle from '../../image/pesquisa.png';
import imgAlisson from '../../image/alissonCamisaBranca.jpg';

import './Login.css';

export default ({onReceiveGoogle}) => {

    const actionLoginGoogle = async () => {
        let result = await Api.googleLogar();

        if(result) {
            onReceiveGoogle(result.user);
        } else {
            alert("Erro;");
        }
    }

    return (
        <div className="login">
            <div>
                <img src={imgAlisson} style={{width: '140px', borderRadius: '50%'}} alt="Alisson" />
            </div>
            <h1>Bem-vindo ao meu WhatsApp Clone</h1>
            <button onClick={actionLoginGoogle}>
            <i className="bi bi-google"></i>
            <img src={imglogoGoogle} style={{ width: '25px' }} alt="logo"/>
                <div className="center">Logar com o Gmail</div>
            </button>
        </div>
        
    )
}