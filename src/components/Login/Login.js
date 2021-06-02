import React from 'react';
import Api from '../../Api';
import GTranslateIcon from '@material-ui/icons/GTranslate';
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
            {/* <button onClick={handleFacebookLogin}>Logar com o Facebook</button> */}
            <h1>Faça o login em meu Whatsapp Clone</h1>
            <button onClick={actionLoginGoogle}>
            <i class="bi bi-google"></i>
                <GTranslateIcon />
                <div className="center">Logar com o Gmail</div>
            </button>
        </div>
        
    )
}