import React from 'react'

import regOne from '../img/register-hash-two.jpg'
import regTwo from '../img/register-hash.jpg'

const Register = () => {
    return (
        <div className='reg-section'>
            <div className="container">
                <h2 className="title">6. Registrate Hash</h2>
                <div className="reg-container">
                    <div className="reg-item-one">
                        <img src={regOne} alt="Image"/>
                        <p className="reg-item-one-text">
                            Там главная цель была сверстать его на React.js
                        </p>
                    </div>
                    <div className="reg-item-two">
                        <p className="reg-item-two-text">
                            Этот сайт был создан для регистрации документов для ipbee сайта
                        </p>
                        <img src={regTwo} alt="Image"/>
                    </div>
                </div>
                <p className='link reg-link'><a target='_blank' href='https://enginer.github.io/ipbee-originstamp-admin/build/'>Сайт здесь</a></p>
            </div>
        </div>
    )
}

export default Register