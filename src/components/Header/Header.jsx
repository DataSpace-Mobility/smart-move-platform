import React from 'react';

import './Header.scss';

function Header() {
    return (
        <section className="Header">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-2 social-media extra-padding">1</div>
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