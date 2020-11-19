import React from "react";

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
import CustomizedFaqAccordions from "./CustomizedFaqAccordions";
import { useHistory } from "react-router-dom";

function Cities() {

  const history = useHistory();

  const handleData = () => {
    history.push('/form');
  }
  return (
    <>
      <section className="Cities top">
      <section className="looking top">
          <div className="container ">
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
                
              </div>
            </div>
          </div>
        </section>

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
           
          </div>
        </section>
        <section className="container top bottom">
          <div className="heading heading-yellow heading-center">
            <h1>FAQs</h1>
          </div>

          <div className="row">
            <CustomizedFaqAccordions />
           
          </div>
        </section>

        
      </section>
    </>
  );
}

export default Cities;
