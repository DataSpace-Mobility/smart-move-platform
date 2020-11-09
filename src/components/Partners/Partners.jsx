import React from 'react';

import './Partners.scss';

import MOHUA from '../Home/partners/mohua.svg'
import NIUA from '../Home/partners/niua.svg'
import SCM from '../Home/partners/scm.svg'
import GIZ from '../Home/partners/giz.svg'
import CitiesForum from '../Home/partners/cities_forum.png'
import DataSpace from '../Home/partners/dataspace.svg'

function Partner() {
    return (
        <section className="Partners">
            <div className="container">
                <div className="heading heading-black heading-center">
                    <h1>MEET OUR PARTNERS</h1>
                </div>
                <div className="item-container">
                    <div className="row">
                        <div className="col-md-4">
                            <img src={NIUA} alt=""/>
                            <p>Implementation Partner: <a href="http://niua.org/" target="_blank" rel="noreferrer">National Institute of Urban Affairs</a></p>
                            <small>National Institute of Urban Affairs (NIUA) is a premier institute for research, capacity building and dissemination of knowledge for the urban sector in India and is tasked to implement this challenge.</small>
                        </div>
                        <div className="col-md-4">
                            <img src={MOHUA} alt=""/>
                            <p>Organised by the <a href="http://mohua.gov.in/" target="_blank" rel="noreferrer">Ministry of Housing and Urban Affairs</a></p>
                            <small>Ministry of Housing and Urban Affairs (MoHUA), Government of India forms the rules, regulations and laws relating to housing and urban development. For this challenge, it is implementing a Smart Cities Mission in India.</small>
                        </div>
                        <div className="col-md-4">
                            <img className="scm-logo" src={SCM} alt=""/>
                            <p>Supported by the <a href="http://smartcities.gov.in/content/" target="_blank" rel="noreferrer">Smart Cities Mission</a></p>
                            <small>The mission’s objective is to develop more resilient and technology-powered cities and urban transport systems. It aims to renew and retrofit Indian cities, transforming them to citizen-friendly and sustainable Smart Cities.</small>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <img className="dataspace-logo" src={DataSpace} alt=""/>
                            <p>Technology Partner: <a href="https://dataspace.mobi/" target="_blank" rel="noreferrer">DataSpace Mobility (ISCF)</a></p>
                            <small>It is India’s first unified data ecosystem for urban mobility developed by India Smart Cities Fellows at NIUA. It will work as a secure data-sharing platform by the Challenge’s Participants and Partners.</small>
                        </div>
                        <div className="col-md-4">
                            <img className="giz-logo" src={GIZ} alt=""/>
                            <p>Supported by <a href="https://www.giz.de/en/worldwide/368.html" target="_blank" rel="noreferrer">GIZ India</a></p>
                            <small>GIZ is a service provider in the field of international cooperation for sustainable development and international education work, we are dedicated to shaping a future worth living around the world.  GIZ is supporting the Ministry of Housing and Urban Affairs (MoHUA) in organizing this national-level challenge to address urban mobility challenges faced by Indian cities.</small>
                        </div>
                        <div className="col-md-4">
                            <img src={CitiesForum} alt=""/>
                            <p>Technical Partner: <a href="https://www.citiesforum.org/" target="_blank" rel="noreferrer">Cities Forum</a></p>
                            <small>Cities Forum is a specialized strategic advisory institution working in cities and mobility sector. It will provide technical support to GIZ and NIUA in implementing The Smart Move Challenge.</small>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Partner;