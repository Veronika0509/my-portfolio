import React from 'react'

const Socials = () => {
    return (
        <div className='socials-section'>
            <h2 className='contacts-title'>Контакты</h2>
            <div className="socials">
                <div className="wrapper">
                    <div className="social telegram">
                        <p className="telegram-title social-title">телеграм:</p>
                        <a href='https://t.me/VeronikaSkakun' className="telegram-link social-link" target='_blank'>Здесь</a>
                    </div>
                    <div className="social tel">
                        <p className="tel-title social-title">телефон:</p>
                        <p className="tel-link social-link">+380 99 450 98 30</p>
                    </div>
                    <div className="social gmail">
                        <p className="gmail-title social-title">почта:</p>
                        <a href='mailto:veronika.dev.0509@gmail.com' className="gmail-link social-link">Здесь</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Socials