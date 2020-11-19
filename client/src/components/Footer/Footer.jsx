import React from 'react';

import './Footer.scss';

import Logo from './smart-move-logo.svg'
import TwitterLogo from './twitter.svg'
import InstagramLogo from './instagram.svg'
import LinkedinLogo from './linkedin.svg'

function Footer() {
    return (
        <section className="Footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <img src={Logo} alt=""/>
                    </div>
                    <div className="col-md-6">
                        <small>For more details, contact us at: <b>smartmove@niua.org</b></small>
                        <small>National Institute of Urban Affairs, 1st and 2nd Floor, Core 4B, India Habitat Centre, Lodhi Road, New Delhi</small>
                        <small><b>The SMART MOVE Challenge is a part of the Indian-German Green Urban Mobility Partnership</b></small>
                        <small>
                            <a href="https://smartmove.niua.org/#/privacy">Privacy Policy</a>
                        </small>
                    </div>
                    <div className="col-md-3 social-media">
                        <a href="https://twitter.com/SmartMove2020" target="_blank" rel="noreferrer"><img src={TwitterLogo} alt=""/></a>
                        <a href="https://www.instagram.com/smartmove_2020/" target="_blank" rel="noreferrer"><img src={InstagramLogo} alt=""/></a>
                        <a href="https://www.linkedin.com/company/smartmove2020" target="_blank" rel="noreferrer"><img src={LinkedinLogo} alt=""/></a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer;