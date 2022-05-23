import React from 'react'

import blockOne from '../img/validation-one.jpg'
import blockTwo from '../img/validation-two.jpg'
import blockThree from '../img/validation-three.jpg'

const Blockchain = () => {
    return (
        <div className='block-section'>
            <div className="container">
                <h2 className="title">4. Blockchain.ipbee</h2>
                <div className="blocks-container">
                    <div className="block-one">
                        <img src={blockOne} alt="Image"/>
                    </div>
                    <div className='block-wrapper'>
                        <div className="block-two">
                            <img src={blockTwo} alt="Image"/>
                            <p className='block-two-text'>
                                Он был посвящен проверке blockchain записей
                            </p>
                        </div>
                        <div className="block-three">
                            <p className='block-three-text'>
                                Этот сайт был моей первой оплачиваемой работой
                            </p>
                            <img src={blockThree} alt="Image"/>
                        </div>
                    </div>
                </div>
                <p className='link block-link'><a target='_blank' href='https://veronika0509.github.io/ipbee/'>Сайт здесь</a></p>
            </div>
        </div>
    )
}

export default Blockchain