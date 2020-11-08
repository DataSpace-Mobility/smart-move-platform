import React from 'react';

import './Header.scss';

import Twitter from './twitter.svg';
import Instagram from './instagram.svg';
import Linkedin from './linkedin.svg';

function Header() {
    return (
        <section className="Header">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-2 social-media extra-padding">
                        <a href="https://twitter.com/SmartMove2020" target="_blank"><img src={Twitter} alt=""/></a>
                        <a href="https://www.instagram.com/smartmove_2020/" target="_blank"><img src={Instagram} alt=""/></a>
                        <a href="https://www.linkedin.com/company/smartmove2020" target="_blank"><img src={Linkedin} alt=""/></a>
                    </div>
                    <div className="col-md-8"></div>
                    <div className="col-md-2 reg-link extra-padding"><a href="https://hack.dataspace.mobi">REGISTRATION</a></div>
                </div>
                <div className="row bottom-bar">
                    <div className="col-md-12">
                        <ul>
                            <li><a href="/">HOME</a></li>
                            <li><a href="/">GUIDELINES</a></li>
                            <li><a href="/">JURY</a></li>
                            <li><a href="/">WINNERS</a></li>
                            <li><a href="/">PARTNERS</a></li>
                            <li><a href="/">FAQ</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Header;