import React from "react";
import "./Profiles.scss";
import profile1 from "./Smart move_Team 1.jpg";
import profile3 from "./Smart move_Team 3.jpg";
import profile6 from "./Smart move_Team 6.jpg";
import profile7 from "./Smart move_Team 7.jpg";
import profile9 from "./Smart move_Team 9.jpg";
import Winner1 from "../Pilot/1.jpg";
import Winner2 from "../Pilot/2.jpg";
import Winner3 from "../Pilot/3.jpg";
import Special1 from "../Pilot/4.jpg";
import Special2 from "../Pilot/5.jpg";

const Profiles = () => {
  return (
    <section className="Faqs top">
      <div className="container">
        <div className="heading heading-yellow heading-center top">
          <h1>PROFILES</h1>
        </div>

        <div className="container">
          <h2 style={{ marginTop: "40px", textDecoration: "underline" }}>
            WINNING IDEA
          </h2>
          <div className="row " style={{ marginTop: "60px" }}>
            <div className="col-md-4">
              <img
                style={{ width: "100%", borderRadius: "20px" }}
                src={Winner1}
                alt="winner_image"
              />
              <h5 style={{ marginTop: "20px" }}>
                B-SOT - Bus Scheduling Optimization Toolkit
              </h5>
            </div>

            <div className="col-md-4">
              <img
                style={{ width: "100%", borderRadius: "20px" }}
                src={Winner2}
                alt="winner_image"
              />
              <h5 style={{ marginTop: "20px" }}>
                Commutify - Empowering Public Transit Using Machine Learning
              </h5>
            </div>

            <div className="col-md-4">
              <img
                style={{ width: "100%", borderRadius: "20px" }}
                src={Winner3}
                alt="winner_image"
              />
              <h5 style={{ marginTop: "20px" }}>
                Real-Time Public Transport Demand-Supply Gap Assessment Tool
              </h5>
            </div>
          </div>

          <h2 style={{ marginTop: "40px", textDecoration: "underline" }}>
            SPECIAL MENTION IDEA
          </h2>
          <div className="row" style={{ marginTop: "40px" }}>
            <div className="col-md-2"></div>
            <div className="col-md-4">
              <img
                style={{ width: "100%", borderRadius: "20px" }}
                src={Special1}
                alt="winner_image"
              />
              <h5 style={{ marginTop: "20px" }}>EVERs Charging Platform</h5>
            </div>
            <div className="col-md-4">
              <img
                style={{ width: "100%", borderRadius: "20px" }}
                src={Special2}
                alt="winner_image"
              />
              <h5 style={{ marginTop: "20px" }}>
                Here to There – Changing Perception through Communication
              </h5>
            </div>
          </div>
        </div>

        <div className="container">
          <h2 style={{ marginTop: "40px", textDecoration: "underline" }}>
            FINALIST IDEA
          </h2>
          <div className="row " style={{ marginTop: "60px" }}>
            <div className="col-md-4">
              <img
                style={{ width: "100%", borderRadius: "20px" }}
                src={profile6}
                alt="finalist_image"
              />
              <h5 style={{ marginTop: "20px" }}>
                Automated Bus Shelter Safety and Accessibility Audit
              </h5>
            </div>

            <div className="col-md-4">
              <img
                style={{ width: "100%", borderRadius: "20px" }}
                src={profile3}
                alt="finalist_image"
              />
              <h5 style={{ marginTop: "20px" }}>
                Devising a Bus Priority Signalization Logic Using An ITS-based
                Architecture
              </h5>
            </div>

            <div className="col-md-4">
              <img
                style={{ width: "100%", borderRadius: "20px" }}
                src={profile1}
                alt="finalist_image"
              />
              <h5 style={{ marginTop: "20px" }}>
                Transit Evaluation Tool for Smart Mobility - Progress Towards
                Efficient Public Transport
              </h5>
            </div>
          </div>

          <div className="row" style={{ marginTop: "40px" }}>
            <div className="col-md-2"></div>
            <div className="col-md-4">
              <img
                style={{ width: "100%", borderRadius: "20px" }}
                src={profile7}
                alt="finalist_image"
              />
              <h5 style={{ marginTop: "20px" }}>Mobilizer</h5>
            </div>
            <div className="col-md-4">
              <img
                style={{ width: "100%", borderRadius: "20px" }}
                src={profile9}
                alt="finalist_image"
              />
              <h5 style={{ marginTop: "20px" }}>
              i-Connect (India Urban Mobility Management Platform)
              </h5>
            </div>
          </div>
        </div>

        <br></br>
        <br></br>
        <br></br>
      </div>
    </section>
  );
};

export default Profiles;
