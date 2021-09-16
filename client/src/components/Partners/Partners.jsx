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
        <section className="Partners ">
            <div className="container">
                <div className="heading heading-black heading-center">
                    <h1>MEET OUR PARTNERS</h1>
                </div>
                <div className="item-container">
                    <div className="row">
                        <div className="col-md-4">
                            <img src={NIUA} alt=""/>
                            <p>Implemented by : <br></br><a href="http://niua.org/" target="_blank" rel="noreferrer">National Institute of Urban Affairs</a></p>
                            <small>National Institute of Urban Affairs (NIUA) is a premier institute for research, capacity building and dissemination of knowledge for the urban sector in India.</small>
                        </div>
                        <div className="col-md-4">
                            <img src={MOHUA} alt=""/>
                            <p>Organised by : <br></br><a href="http://mohua.gov.in/" target="_blank" rel="noreferrer">Ministry of Housing and Urban Affairs</a></p>
                            <small>The Ministry of Housing and Urban Affairs is the apex authority of Government of India to formulate policies, coordinate the activities of various central ministries, state governments and other nodal authorities and monitor programs related to issues of housing and urban affairs in the country.</small>
                        </div>
                        <div className="col-md-4">
                            <img className="scm-logo" src={SCM} alt=""/>
                            <p>Supported by : <br></br> <a href="http://smartcities.gov.in/content/" target="_blank" rel="noreferrer">Smart Cities Mission</a></p>
                            <small>The Smart Cities Mission was launched by the Ministry of Housing and Urban Affairs in 2015 to renew and retrofit Indian cities to promote sustainable and inclusive cities that provide core infrastructure, ensure a decent quality of life to its citizens and facilitate the innovative application of ‘Smart’ Solutions.</small>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <img className="dataspace-logo" src={DataSpace} alt=""/>
                            <p>Technology Partner : <br></br> <a href="https://dataspace.mobi/" target="_blank" rel="noreferrer">DataSpace Mobility (ISCF)</a></p>
                            <small>DataSpace is a unified data ecosystem for urban mobility developed by India Smart Cities Fellows at the National Institute of Urban Affairs. It aims to enable the democratic sharing of standardized, high quality urban data among various stakeholders in a secure and controlled manner.</small>
                        </div>
                        <div className="col-md-4">
                            <img className="giz-logo" src={GIZ} alt=""/>
                            <p>Supported by : <br></br><a href="https://www.giz.de/en/worldwide/368.html" target="_blank" rel="noreferrer">GIZ India</a></p>
                            <small>The Deutsche Gesellschaft für Internationale Zusammenarbeit (GIZ) GmbH has been working jointly with partners in India for sustainable economic, ecological, and social development. GIZ is supporting the Ministry of Housing and Urban Affairs (MoHUA) to organize SMART-MOVE Challenge as part of the technical cooperation project “Integrated Sustainable Urban Transport Systems for Smart Cities (SMART-SUT)”. The project is a part of the Green Urban Mobility Partnership between India and Germany.</small>
                        </div>
                        <div className="col-md-4">
                            <img src={CitiesForum} alt=""/>
                            <p>Technical Partner : <br></br> <a href="https://www.citiesforum.org/" target="_blank" rel="noreferrer">Cities Forum</a></p>
                            <small>Cities Forum is a global organisation with a multidisciplinary international group of experts with experience in the breadth of topics related to sustainable urban development. Cities Forum aims at being a catalyst, working with cities, companies and organisations to address and solve their urban and sustainable development challenges more efficiently.</small>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Partner;