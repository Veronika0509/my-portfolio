import React from "react";

import javOne from '../img/javascript.jpg'

const Javascript = () => {
    return (
        <div className='jav-section'>
            <div className="container">
                <h2 className="title">3. 15 Javascript Projects</h2>
                <div className="jav-image">
                    <img src={javOne} alt="Image"/>
                    <p className='jav-text'>
                        Этот проект состоит из 15 javascript проектов. Это не сайт на заказ, он был сделан для того чтобы люди которые заказывали у меня сайт, понимали на что я могу для них сделать. Вы также можете перейти по ссылке снизу и посмотреть сайт
                    </p>
                </div>
                <div className="jav-link">
                    <p className='link'><a target='_blank' href='https://veronika0509.github.io/Portfolio/'>Сайт здесь</a></p>
                </div>
            </div>
        </div>
    )
}

export default Javascript