import React from "react";
// import Footer from "../Footer/Footer";
// import Header from "../Header/Header";
// import Hero from "../Home/hero.svg";
// import PartnerLogos from "../Home/partner-logos.png";
// import Timeline from "../Home/timeline.svg";
// import MOHUA from "../Home/partners/mohua.svg";
// import NIUA from "../Home/partners/niua.svg";
// import SCM from "../Home/partners/scm.svg";
// import GIZ from "../Home/partners/giz.svg";
// import CitiesForum from "../Home/partners/cities_forum.png";
// import DataSpace from "../Home/partners/dataspace.svg";
import Mission from "../Home/Mission.png";
import Distinct from "../Home/distinct.png";
import Implementable from "../Home/implementation.png";
import Scalable from "../Home/Scalable.png";
import TimeBound from "../Home/TimeBound.png";
import Practical from "../Home/correct.png";
import Financially from "../Home/Costeff.png";
import Measurable from "../Home/System.png";
import DataChal from "../Home/datachal@2x.png";
import DataIdea from "../Home/dataidea.png";
import GetSetGo from "../Home/getsetgo.svg";
import GetSetGoMob from "../Home/getsetgomob.svg";
import Lookup from "../Home/lookup.png";

import "./Guidelines.scss";

function Guideline() {
  return (
    <>
      <section className="Guidelines top">
        <section className="looking">
          <div className="container">
            <div className="heading heading-yellow heading-center top">
              <h1>YOUR MISSION</h1>
            </div>
            <div className="row">
              <div className="col-md-6 webhide">
                <img className="mission-image" src={Mission} alt="Mission" />
              </div>
              <div className="col-md-6 missionbox align-left">
                <p className="missiontext">
                  Your mission, should you choose to accept, is to develop
                  data-powered tech-driven innovative and sustainable solutions
                  to improve urban mobility systems while ensuring the recovery
                  of public transport and freight movement in the face of the
                  ongoing COVID-19 crisis.
                </p>

                <p className="missiontext">
                  Use big data and the power of co-creation to unlock the
                  potential of urban mobility datasets and prepare a holistic
                  proposal for safe, sustainable, efficient and smart urban
                  transport systems.
                </p>
              </div>

              <div className="col-md-6 mobilehide">
                <img className="mission-image" src={Mission} alt="Mission" />
              </div>
            </div>
          </div>
        </section>

        <section className="looking">
          <div className="container">
            <div className="heading heading-black-lookup align-right">
              <h1>WHAT ARE WE LOOKING FOR</h1>
            </div>
            <div className="row webhide">
              <div className="col-md-12">
                <img className="lookup-image" src={Lookup} alt="Mission" />
              </div>
            </div>

            <div className="row">
              <div className="col-md-4"></div>
              <div className="col-md-8 missionbox align-right top">
                <ul>
                  <li>
                    <p className="whatpara">
                      Combine different mobility datasets on a platform to
                      create integrated and multi-modal customer propositions.
                    </p>
                  </li>
                  <li>
                    <p className="whatpara">
                      Combine on-board & off-board vehicle data with users’ data
                      (e.g. from smartphones) and other data sources to create
                      value for customers.
                    </p>
                  </li>
                  <li>
                    <p className="whatpara">
                      Create a decision-making tool by linking mobility data
                      with the land use data to evaluate various demand
                      management measures.
                    </p>
                  </li>
                  <li>
                    <p className="whatpara">
                      Provide some Fin-tech solutions that deliver contactless,
                      integrated, seamless payment (e.g. multi-modal services,
                      fuel, EV charging, parking).
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="row mobilehide">
              <div className="col-md-12">
                <img className="lookup-image" src={Lookup} alt="Mission" />
              </div>
            </div>
          </div>
        </section>

        <section className=" container">
          <div className="heading heading-red-box heading-red align-right">
            <h1>WHAT MAKES A WINNING IDEA?</h1>
          </div>

          <div className="row">
            <div className="col-md-3 iconheading">
              <img className="distinct-image" src={Distinct} alt="Distinct" />
              <p>Distinctly Contextual</p>
            </div>
            <div className="col-md-3 iconheading">
              <img
                className="distinct-image"
                src={Implementable}
                alt="Implementable"
              />
              <p>Implementable</p>
            </div>
            <div className="col-md-3 iconheading">
              <img className="distinct-image" src={Scalable} alt="Scalable" />
              <p>Scalable</p>
            </div>
            <div className="col-md-3 iconheading">
              <img className="distinct-image" src={TimeBound} alt="TimeBound" />
              <p>Time-bound</p>
            </div>

            <div className="row ">
              <div className="col-md-1 iconheading"></div>

              <div className="col-md-3 iconheading">
                <img
                  className="distinct-image"
                  src={Practical}
                  alt="Practical"
                />
                <p>Practical</p>
              </div>

              <div className="col-md-3 iconheading">
                <img
                  className="distinct-image"
                  src={Financially}
                  alt="Financially"
                />
                <p iconheading>Financially Feasible</p>
              </div>

              <div className="col-md-3 iconheading">
                <img
                  className="distinct-image"
                  src={Measurable}
                  alt="Measurable"
                />
                <p iconheading>Measurable and Verifiable Outcomes</p>
              </div>
              <div className="ideaparabox row ">
                <div className="col-md-12 top">
                  <p className="ideapara">
                    Ideas could vary from the innovative tech for mobility
                    management to specific digital solutions to improve the way
                    we commute. Make sure you utilize the mobility datasets to
                    their maximum potential to arrive at evidence-driven
                    solutions. Some areas of interest are management of public
                    transport systems, improved urban transport user experience,
                    serve as a decision making tool, cater to smart mobility
                    products like contactless payment, wider mode choice
                    offerings and compliment initiatives to promote electric
                    vehicles, smart parking, improved logistics, etc.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="col-md-12 learnmorebox">
          <p>
            To learn more, download the challenge guidelines document{" "}
            <a href="/Smartmove_DataChallengeGuidelines.pdf">here</a>.
          </p>
        </section>
        <section className="looking">
          <div className="container align-left">
            <div className="heading heading-blue rightbox">
              <h1 className="align-right">DATA CHALLENGE STATEMENT</h1>
            </div>

            <div className="row">
              <div className="col-md-6">
                <img className="datachal-image" src={DataChal} alt="DataChal" />
              </div>
              <div className="col-md-6 chalpara">
                <ul>
                  <li>
                    {" "}
                    <p chalpara>
                      How to generate insights and creating value from the
                      mobility data.
                    </p>
                  </li>
                  <li>
                    {" "}
                    <p chalpara>
                      How to learn more on commuter behaviours and preferences
                      with data gathered currently with various transit agencies
                      and private transport operators.
                    </p>
                  </li>
                  <li>
                    {" "}
                    <p chalpara>
                      How to influence decision making for a traveller to
                      consider travel at a different time and / or using
                      alternate options, so transportation demand including
                      public transport demand is more evenly distributed through
                      the day.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="looking">
          <div className="container align-left">
            <div className="heading heading-yellow-left">
              <h1>POWER YOUR IDEAS WITH DATA</h1>
            </div>

            <div className="row">
              <div className="col-md-6 webhide">
                <img className="datachal-image" src={DataIdea} alt="DataIdea" />
              </div>
              <div className="col-md-6 chalpara">
                <p chalpara>
                  Log on to{" "}
                  <a href="https://dataspace.mobi">https://dataspace.mobi</a> to
                  search and find a variety of urban mobility-related datasets
                  from across the biggest Indian cities. You can also use
                  additional data of your own or available openly to justify
                  your ideas. In case you need more information to formulate
                  your ideas, reach out to us at{" "}
                  <a href="mailto:smartmove@niua.org">smartmove@niua.org</a> to
                  request for additional datasets.
                </p>

                <p chalpara>
                  Keep in mind that your proposal will be judged based on the
                  feasibility of available data.
                </p>
              </div>

              <div className="col-md-6 mobilehide">
                <img className="datachal-image" src={DataIdea} alt="DataIdea" />
              </div>
            </div>
          </div>
        </section>

        <section className="looking top">
          <div className="container top">
            <div className="heading heading-black getsetgoheadingbox heading-center">
              <h1>GET SET, GO!</h1>
            </div>
            <div className="row">
              <div className="col-md-12">
                <img
                  className="getsetgo-image mobilehide"
                  src={GetSetGo}
                  alt="GetSetGo"
                />
                <img
                  className="getsetgo-image webhide"
                  src={GetSetGoMob}
                  alt="GetSetGoMob"
                />
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}

export default Guideline;
