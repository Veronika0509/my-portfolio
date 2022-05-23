import React from 'react'

import metaOne from '../img/pheta-one.jpg'
import metaTwo from '../img/pheta-two.jpg'

const Metamask = () => {
    return (
        <div className='meta-section'>
            <div className="container">
                <h2 className="title">5. Pheta Token</h2>
                <div className="meta-container">
                    <div className="img-one">
                        <img src={metaOne} alt="Image"/>
                    </div>
                    <p className="meta-text">
                        Этот сайт тоже связан с блокчейном. Также это был React Проект. По-моему получилось красиво
                    </p>
                    <div className="img-one">
                        <img src={metaTwo} alt="Image"/>
                    </div>
                </div>
                <p className='link meta-link'><a target='_blank' href='https://veronika0509.github.io/phenom-app/'>Сайт здесь</a></p>
            </div>
        </div>
    )
}

export default Metamask