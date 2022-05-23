import React from "react";

import womOne from '../img/womazing-one.jpg'
import womTwo from '../img/womazing-two.jpg'

const Womazing = () => {
    return (
        <div className='wom-section'>
            <div className="container">
                <div className="titles">
                    <h2 className="title">2. Womazing</h2>
                    <p className="wom-text">
                        Я решила создать интернет-магазин одежды. Это был не лендинг а полноценный
                        многостроничный сайт. В этой работе я выложилась на все 100%. Там был и параллакс (это
                        движущаяся картинка в первом экране), и слайдер (текст в певом экране), и табы.
                    </p>
                </div>
                <div className="wom-images">
                    <img src={womOne} alt="Image"/>
                    <img src={womTwo} alt="Image"/>
                </div>
                <div className="links">
                    <p className='link'><a target='_blank' href='https://veronika0509.github.io/womazing/'>Сайт здесь</a></p>
                </div>
            </div>
        </div>
    )
}

export default Womazing