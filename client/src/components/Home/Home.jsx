import React from "react";

import "./Home.scss";

import Hero from "./hero.svg";
import PartnerLogos from "./partner-logos.png";
import Timeline from "./timeline.svg";
import TimelineMob from "./timelinemob.svg";
import MOHUA from "./partners/mohua.svg";
import NIUA from "./partners/niua.svg";
import SCM from "./partners/scm.svg";
import GIZ from "./partners/giz.svg";
import CitiesForum from "./partners/cities_forum.png";
import DataSpace from "./partners/dataspace.svg";
// import Themes from "./Themes.svg";
import Theme1 from "./Theme1.svg";
import Theme2 from "./Theme2.svg";
import Theme3 from "./Theme3.svg";
import button1 from "./Button1.png";
import button2 from "./Button2.png";
import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="Home">
      <section className="hero">
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <img src={Hero} alt="" />
            </div>
            <div className="col-md-7 hero-text">
              <h1>
                JOIN THE GLOBAL CALL TO REIMAGINE MOBILITY IN INDIAN CITIES
              </h1>
              <img src={PartnerLogos} alt="" />
            </div>
          </div>
        </div>
      </section>

      <section className="about">
        <div className="container">
          <p>
            Do you think you can solve India’s most complex urban mobility
            challenges? Let’s bring your ideas from the drawing board to
            reality!
          </p>
          <p>
            Collaborate with multidisciplinary teams of students/researchers and
            co-create data-powered sustainable digital solutions to reimagine
            the way we commute in our Indian cities.
          </p>
          <p>
            Keep in mind the principles of
            <a
              href="https://www.india.gov.in/spotlight/building-atmanirbhar-bharat-overcoming-covid-19"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              AatmaNirbhar Bharat Abhiyan
            </a>
            ,
            <a
              href="https://www.digitalindia.gov.in"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              Digital India{" "}
            </a>
            and
            <a
              href="https://smartnet.niua.org/dsc/"
              rel="noreferrer"
              target="_blank"
            >
              {" "}
              DataSmart Cities{" "}
            </a>
            to unlock innovation through co-creation.
          </p>
          <p>
            SMART MOVE Innovative Urban Mobility Challenge is an initiative by
            the Ministry of Housing and Urban Affairs supported by the Smart
            Cities Mission, the National Institute of Urban Affairs and GIZ
            India.
          </p>

          <iframe
            width="100%"
            height="500px"
            title="Launch Video"
            src="https://www.youtube.com/embed/vwHQo5ywPCo"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
           />
        </div>
      </section>

      <section className="invite-button">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6 compete">
              {/* <button className="compete-text">COMPETE IN THE CHALLENGE</button> */}
              <a href="https://hack.dataspace.mobi/login">
                <img
                  className="compete-text"
                  src={button1}
                  alt="compete partner"
                />
              </a>
            </div>
            <div className="col-md-6 data-partner">
              <Link to="/cities">
              <img
                className="data-partner-text"
                src={button2}
                alt="data partner"
              />
              </Link>
              
              {/* <button className="data-partner-text">
                BECOME A DATA PARTNER
              </button> */}
            </div>
          </div>
        </div>
      </section>

      <section className="unlock container">
        <div className="heading ">
          <h1>KEY THEME AREAS</h1>
        </div>

        <p className="align-left">
          Calling all students and researchers from India and around the world!
          Put on your thinking caps, ideate, innovate and share with us a brief
          concept note on any of the following themes.
        </p>

        <div className="row">
          <div className="col-md-4 top">
            <img className="themeimg" src={Theme1} alt="" />
          </div>
          <div className="col-md-4 top">
            <img className="themeimg" src={Theme2} alt="" />
          </div>
          <div className="col-md-4 top">
            <img className="themeimg" src={Theme3} alt="" />
          </div>
        </div>
        {/* <div className="row unlock-item">
                    <div className="col-md-4">
                        <div className="heading-box heading-box-yellow">
                            <h1 class="big">1</h1>
                            <h1>RESTORING PUBLIC TRANSPORT RIDERSHIP</h1>
                        </div>
                    </div>
                    <div className="col-md-8 align-left">
                        <p className="themes">COVID-19 recovery</p>
                        <p className="themes">Cost-effective solutions</p>
                        <p>Never waste a crisis. Innovate with tech-driven solutions to leapfrog today's public transport systems into the post-pandemic world. Keep in mind the need to remain cost-effective while also fulfilling every commuter’s aspiration for safer public transit.</p>
                    </div>
                </div>

                <div className="row unlock-item">
                <div className="col-md-4 webhide">
                        <div className="heading-box heading-box-blue">
                            <h1 class="big">2</h1>
                            <h1>ACHIEVING SUSTAINABLE TRANSPORT AND RESILIENCE</h1>
                        </div>
                    </div>
                    
                    <div className="col-md-8 align-right">
                        <p className="themes">Multi-modal integration</p>
                        <p className="themes">Sustainable transport modes</p>
                        <p>Build data-powered solutions to reimagine our streets equitably with adequate space for pedestrians, cyclists, formal and informal modes of para-transit, public transport and urban freight delivery modes. Follow through with a holistic plan to ensure multi-modal integration and shift towards sustainable transport.</p>
                    </div>
                    <div className="col-md-4 mobilehide">
                        <div className="heading-box heading-box-blue">
                            <h1 class="big">2</h1>
                            <h1>ACHIEVING SUSTAINABLE TRANSPORT AND RESILIENCE</h1>
                        </div>
                    </div>
                </div>

                <div className="row unlock-item">
                    <div className="col-md-4">
                        <div className="heading-box heading-box-red equity-box">
                            <h1 class="big">3</h1>
                            <h1>EQUITY IN MOBILITY</h1>
                        </div>
                    </div>
                    <div className="col-md-8 align-left">
                        <p className="themes">Gender and safety</p>
                        <p className="themes">Inclusivity and efficiency improvement</p>
                        <p>The city is for one and all. Look at urban mobility through the lens of the differently-abled, women and children, the young and the old, the rich and the poor, and ideate for safer, more inclusive and efficient transportation.</p>
                    </div>
                </div> */}
      </section>

      <section className="reward top">
        <div className="container">
          <div className="heading heading-yellow heading-center">
            <h1>REWARDS AND RECOGNITION</h1>
          </div>
          <br />
          <p>Rewards worth</p>
          <h1 className="prize-money">
            <span>₹</span> 20,00,000
          </h1>
          <p>
            The top 3 proposals will be provided contracts jointly worth ₹
            20,00,000 with a minimum contract value of ₹ 5,00,000. Additionally,
            the winning teams will have an opportunity to present their solution
            to Smart Cities Mission, Government of India.
          </p>
        </div>
      </section>

      <section className="timeline">
        <div className="container">
          <div className="heading heading-black heading-center">
            <h1>JOURNEY</h1>
          </div>
          <img className="mobilehide top" src={Timeline} alt="" />
          <img className="webhide top" src={TimelineMob} alt="" />
        </div>
      </section>

      <section className="partners">
        <div className="container">
          <div className="heading heading-black heading-center">
            <h1>MEET OUR PARTNERS</h1>
          </div>
          <div className="item-container">
            <div className="row">
              <div className="col-md-4">
                <img src={NIUA} alt="" />
                <p>
                  Implementation Partner:
                  <a href="http://niua.org/" target="_blank" rel="noreferrer">
                    National Institute of Urban Affairs
                  </a>
                </p>
              </div>
              <div className="col-md-4">
                <img src={MOHUA} alt="" />
                <p>
                  Organised by the{" "}
                  <a
                    href="http://mohua.gov.in/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Ministry of Housing and Urban Affairs
                  </a>
                </p>
              </div>
              <div className="col-md-4">
                <img className="scm-logo" src={SCM} alt="" />
                <p>
                  Supported by the{" "}
                  <a
                    href="http://smartcities.gov.in/content/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Smart Cities Mission
                  </a>
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <img className="dataspace-logo" src={DataSpace} alt="" />
                <p>
                  Technology Partner:{" "}
                  <a
                    href="https://dataspace.mobi/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    DataSpace Mobility (ISCF)
                  </a>
                </p>
              </div>
              <div className="col-md-4">
                <img className="giz-logo" src={GIZ} alt="" />
                <p>
                  Supported by{" "}
                  <a
                    href="https://www.giz.de/en/worldwide/368.html"
                    target="_blank"
                    rel="noreferrer"
                  >
                    GIZ India
                  </a>
                </p>
              </div>
              <div className="col-md-4">
                <img src={CitiesForum} alt="" />
                <p>
                  Technical Partner:{" "}
                  <a
                    href="https://www.citiesforum.org/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Cities Forum
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}

export default Home;
