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
// import Mission from "../Home/Mission.png";
// import Distinct from "../Home/distinct.png";
// import Implementable from "../Home/implementation.png";
// import Scalable from "../Home/Scalable.png";
// import TimeBound from "../Home/TimeBound.png";
// import Practical from "../Home/correct.png";
// import Financially from "../Home/Costeff.png";
// import Measurable from "../Home/System.png";
// import DataChal from "../Home/datachal@2x.png";
// import DataIdea from "../Home/dataidea.png";
// import GetSetGo from "../Home/getsetgo.svg";
// import GetSetGoMob from "../Home/getsetgomob.svg";
// import Lookup from "../Home/lookup.png";
// import Benefit from "../Home/Benefit.png";
// import Howdata from "../Home/Howdata.png";
import Benefit1 from "../Home/Benefit1.svg";
import Benefit2 from "../Home/Benefit2.svg";
import Benefit3 from "../Home/Benefit3.svg";
import Benefit4 from "../Home/Benefit4.svg";
import BenefitMob1 from "../Home/Benefit1Mob1.svg";
import BenefitMob2 from "../Home/Benefit1Mob2.svg";
import BenefitMob3 from "../Home/Benefit1Mob3.svg";
import BenefitMob4 from "../Home/Benefit1Mob4.svg";

import "./Cities.scss";
import CustomizedAccordions from "./CustomizedAccordions";
import { useHistory } from "react-router-dom";

function Cities() {

  const history = useHistory();

  const handleData = () => {
    history.push('/form');
  }
  return (
    <>
      <section className="Cities top">
        <section className="looking">
          <div className="container">
            <div className="heading heading-yellow heading-center top">
              <h1>OUTLINE OF THE CHALLENGE</h1>
            </div>
            <div className="row">
              <div className="col-md-1"></div>
              <div className="col-md-10 missionbox align-center">
                <p className="missiontext">
                  SMART Move challenge is outlined considering the Government of
                  India’s efforts towards Aatmanirbhar (self-reliance) and help
                  cities to transform into a digitally empowered milieu. It aims
                  to provide a common platform to young minds to brainstorm and
                  come up with feasible solutions to tackle the multitude of
                  issues that plague the modern urban mobility, including the
                  threats posed by COVID-19 pandemic on transportation. With
                  this, we hope to help the cities build efficient and resilient
                  urban transport systems and address problems that commuters
                  face every day.
                </p>
              </div>
              <div className="col-md-1"></div>
            </div>
          </div>
        </section>

        <section className="looking">
          <div className="container">
            <div className="heading heading-black-lookup align-center top">
              <h1>BENEFITS FOR THE CITIES</h1>
            </div>

            <div className="row top">
              <div className="col-md-12">
                <img
                  className="distinct-image mobilehide"
                  src={Benefit1}
                  alt="TimeBound"
                />
                <img
                  className="distinct-image webhide"
                  src={BenefitMob1}
                  alt="TimeBound"
                />
              </div>
            </div>

            <div className="row ">
              <div className="col-md-12">
                <img
                  className="distinct-image mobilehide"
                  src={Benefit2}
                  alt="TimeBound"
                />
                <img
                  className="distinct-image webhide"
                  src={BenefitMob2}
                  alt="TimeBound"
                />
              </div>
            </div>

            <div className="row ">
              <div className="col-md-12">
                <img
                  className="distinct-image mobilehide"
                  src={Benefit3}
                  alt="TimeBound"
                />
                <img
                  className="distinct-image webhide"
                  src={BenefitMob3}
                  alt="TimeBound"
                />
              </div>
            </div>

            <div className="row ">
              <div className="col-md-12">
                <img
                  className="distinct-image mobilehide"
                  src={Benefit4}
                  alt="TimeBound"
                />
                <img
                  className="distinct-image webhide"
                  src={BenefitMob4}
                  alt="TimeBound"
                />
              </div>
            </div>
          </div>
        </section>

        <section className=" container">
          <div className="heading heading-red-box heading-red align-right">
            <h1>USAGE OF YOUR DATA IN THE CHALLENGE</h1>
          </div>

          <div className="row">
            <CustomizedAccordions />
            {/* <div className="col-md-12 ">
              <div
                className="accordion top md-accordion"
                id="accordionEx"
                role="tablist"
                aria-multiselectable="true"
              >
                <div className="card">
                  <div className="card-header" role="tab" id="headingOne1">
                    <a
                      data-toggle="collapse"
                      data-parent="#accordionEx"
                      href="#collapseOne1"
                      aria-expanded="true"
                      aria-controls="collapseOne1"
                    >
                      <h5 className="mb-0">
                        Who can become a data partner as part of the SMART-MOVE
                        challenge?{" "}
                        <i className="fas fa-angle-down rotate-icon"></i>
                      </h5>
                    </a>
                  </div>

                  <div
                    id="collapseOne1"
                    className="collapse show"
                    role="tabpanel"
                    aria-labelledby="headingOne1"
                    data-parent="#accordionEx"
                  >
                    <div className="card-body">
                      From 15.11.2020 to 15.01.2021 the data partners are
                      invited to share their urban mobility datasets on
                      https://smartmove.niua.org/cities. Data Partners are Smart
                      Cities, State Capitals, Cities (with more than 500,000
                      population), Autonomous Bodies, Public Transport
                      Authorities, Private Sector Partners etc. from India.
                    </div>
                  </div>
                </div>

                <div className="card">
                  <div className="card-header" role="tab" id="headingTwo2">
                    <a
                      className="collapsed"
                      data-toggle="collapse"
                      data-parent="#accordionEx"
                      href="#collapseTwo2"
                      aria-expanded="false"
                      aria-controls="collapseTwo2"
                    >
                      <h5 className="mb-0">
                        Why should cities partner with MoHUA as part of the
                        SMART-MOVE challenge?
                        <i className="fas fa-angle-down rotate-icon"></i>
                      </h5>
                    </a>
                  </div>

                  <div
                    id="collapseTwo2"
                    className="collapse"
                    role="tabpanel"
                    aria-labelledby="headingTwo2"
                    data-parent="#accordionEx"
                  >
                    <div className="card-body">
                      By participating in the SMART-MOVE challenge, cities will
                      be able to collaborate with students and researchers in
                      finding innovative solutions to overcome the challenges
                      faced due to COVID-19 pandemic and plan for the
                      post-pandemic city. Cities will have the opportunity to
                      collaborate with students and researchers to develop quick
                      and innovative solutions to become Aatma Nirbhar
                      (self-reliant) and help cities to transform into a
                      digitally empowered society. The challenge will also help
                      cities to support solutions for enhancing innovation in
                      urban mobility by taking the current situation as an
                      opportunity to improve urban mobility system and to help
                      public transport’s and freight recovery from the ongoing
                      COVID-19 crisis using big data.
                    </div>
                  </div>
                </div>

                <div className="card">
                  <div className="card-header" role="tab" id="headingThree3">
                    <a
                      className="collapsed"
                      data-toggle="collapse"
                      data-parent="#accordionEx"
                      href="#collapseThree3"
                      aria-expanded="false"
                      aria-controls="collapseThree3"
                    >
                      <h5 className="mb-0">
                        How will the data partners collaborate with students and
                        researchers as part of the SMART-MOVE challenge?
                        <i className="fas fa-angle-down rotate-icon"></i>
                      </h5>
                    </a>
                  </div>

                  <div
                    id="collapseThree3"
                    className="collapse"
                    role="tabpanel"
                    aria-labelledby="headingThree3"
                    data-parent="#accordionEx"
                  >
                    <div className="card-body">
                      On 15.01.2021, a review committee of international and
                      national urban mobility experts, bureaucrats,
                      academicians, data scientists, industry professionals,
                      city officials, policy makers, think tanks etc will
                      announce the shortlisted concept notes submitted by the
                      participating teams in the Stage I selection process. From
                      15.01.2021 to 15.02.2021 virtual workshops would be
                      organised, the shortlisted concept notes and cities will
                      be matched to collaborate and work together with the
                      organizers, mentoring committee to refine their solutions.
                      Cities and mentors will give guidance to the participating
                      team to adapt and scale their concepts to the specific
                      local context as a solution to the urban challenges. The
                      challenge-owning cities and mentors will be mentoring the
                      participating teams to submit their final solution by
                      31.03.2021.
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </section>

        <section className="looking top">
          <div className="container top">
            <div className="heading heading-black getsetgoheadingbox heading-center">
              <h1>JOIN US A DATA PARTNER</h1>
            </div>
            <div className="row top">
              <div className="col-md-12">
                <p>
                  Be a City Partner and get benefited from the Challenge
                  Proposals. You can share data from a wide range of Sectors and
                  Sub sectors. Please click the link below to begin with the
                  Sharing Wizard.
                </p>
              </div>

              <div className="col-md-12">
                <button className="butgol" onClick={handleData}>
                  Continue to Data Sharing Wizard
                </button>
              </div>
              <div className="col-md-12 learnmorebox">
                {/* <p>To learn more, download the challenge guidelines document <a href="/Smartmove_DataChallengeGuidelines.pdf">here</a>.
</p> */}
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}

export default Cities;
