import React from 'react';

import './Footer.scss';

import Logo from './smart-move-logo.svg'

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
                        <small>The SMART MOVE Challenge is a part of the Indian-German Green Urban Mobility Partnership</small>
                    </div>
                    <div className="col-md-3"></div>
                </div>
            </div>
        </section>
    )
}

export default Footer;