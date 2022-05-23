import React from "react";

import fullOne from '../img/fullviewapp-one.jpg'
import fullTwo from '../img/fullwievapp-two.jpg'

const Fullviewapp = () => {
    return (
        <div className='fullviewapp'>
            <div className="container">
                <h2 className="title full-title">1. Fullviewapp</h2>
                <div className="full-container">
                    <div className="full-one">
                        <img src={fullOne} alt="Image"/>
                        <p className='full-one__text'>
                            Также сделала адаптив под мобильные устройства. По-моему получилось очень красиво)
                        </p>
                    </div>
                    <div className="full-two">
                        <p className="full-two__text">
                            Этот лендинг посвящен прогнозу погоды. В этой работе я использовала Bootstrap.
                        </p>
                        <img src={fullTwo} alt="Image"/>
                    </div>
                </div>
                <p className='link'><a target='_blank' href='https://veronika0509.github.io/fullviewapp/'>Сайт здесь</a></p>
            </div>
        </div>
    )
}

export default Fullviewapp