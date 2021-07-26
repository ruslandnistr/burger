import React from 'react';
import PropTypes from 'prop-types';

const Login = ( props) => {
    return (
        <div className='login-container'>
            <nav className='login' >
                <h2>Авторизація</h2>
                <p>
                    Введіть логін і пароль GitHub
                </p>
                <button className='github'
                onClick = {() => props.aunthenticate()}
                > Увійти</button>
            </nav>
        </div>
    )
}

Login.propTypes = {
    aunthenticate: PropTypes.func.isRequired
}
export default Login