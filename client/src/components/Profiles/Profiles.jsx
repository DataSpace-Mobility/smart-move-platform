import React from "react";
import "./Profiles.scss";
import Winner1 from "./Smart move_Team 1.png";
import Winner2 from "./Smart move_Team 2.png";
import Winner3 from "./Smart move_Team 3.png";
import Special1 from "./Smart move_Team 4.png";
import Special2 from "./Smart move_Team 5.png";
import other1 from "./Smart move_Team 6.png";
import other2 from "./Smart move_Team 7.png";
import other3 from "./Smart move_Team 8.png";
import other4 from "./Smart move_Team 9.png";
import other5 from "./Smart move_Team 10.png";
import { Link } from "react-router-dom";

const Profiles = () => {
  return (
    <section className="Faqs top">
      <div className="container">
        <div className="heading heading-yellow heading-center top">
          <h1>PROFILES</h1>
        </div>

        <div className="container">
          <h2 style={{ marginTop: "40px", textDecoration: "underline" }}>
            WINNING IDEAS
          </h2>
          <div className="row " style={{ marginTop: "60px" }}>
            <div className="col-md-4">
              <Link to="/publications">
                <img
                  style={{ width: "100%", borderRadius: "20px" }}
                  src={Winner1}
                  alt="winner_image"
                />
                <h5 style={{ marginTop: "20px" }}>
                  B-SOT - Bus Scheduling Optimization Toolkit
                </h5>
              </Link>
            </div>

            <div className="col-md-4">
              <Link to="/publications">
                <img
                  style={{ width: "100%", borderRadius: "20px" }}
                  src={Winner2}
                  alt="winner_image"
                />
                <h5 style={{ marginTop: "20px" }}>
                  Commutify - Empowering Public Transit Using Machine Learning
                </h5>
              </Link>
            </div>

            <div className="col-md-4">
              <Link to="/publications">
                <img
                  style={{ width: "100%", borderRadius: "20px" }}
                  src={Winner3}
                  alt="winner_image"
                />
                <h5 style={{ marginTop: "20px" }}>
                  Real-Time Public Transport Demand-Supply Gap Assessment Tool
                </h5>
              </Link>
            </div>
          </div>

          <h2 style={{ marginTop: "40px", textDecoration: "underline" }}>
            SPECIAL MENTION IDEAS
          </h2>
          <div className="row" style={{ marginTop: "40px" }}>
            <div className="col-md-2"></div>
            <div className="col-md-4">
              <Link to="/publications">
                <img
                  style={{ width: "100%", borderRadius: "20px" }}
                  src={Special1}
                  alt="winner_image"
                />
                <h5 style={{ marginTop: "20px" }}>EVERs Charging Platform</h5>
              </Link>
            </div>
            <div className="col-md-4">
              <Link to="/publications">
                <img
                  style={{ width: "100%", borderRadius: "20px" }}
                  src={Special2}
                  alt="winner_image"
                />
                <h5 style={{ marginTop: "20px" }}>
                  Here to There – Changing Perception through Communication
                </h5>
              </Link>
            </div>
          </div>
        </div>

        <div className="container">
          <h2 style={{ marginTop: "40px", textDecoration: "underline" }}>
            OTHER FINALIST IDEAS
          </h2>
          <div className="row " style={{ marginTop: "60px" }}>
            <div className="col-md-4">
              <Link to="/publications">
                <img
                  style={{ width: "100%", borderRadius: "20px" }}
                  src={other1}
                  alt="finalist_image"
                />
                <h5 style={{ marginTop: "20px" }}>
                  Automated Bus Shelter Safety and Accessibility Audit
                </h5>{" "}
              </Link>
            </div>

            <div className="col-md-4">
              <Link to="/publications">
                <img
                  style={{ width: "100%", borderRadius: "20px" }}
                  src={other2}
                  alt="finalist_image"
                />
                <h5 style={{ marginTop: "20px" }}>
                  Devising a Bus Priority Signalization Logic Using An ITS-based
                  Architecture
                </h5>{" "}
              </Link>
            </div>

            <div className="col-md-4">
              <Link to="/publications">
                <img
                  style={{ width: "100%", borderRadius: "20px" }}
                  src={other3}
                  alt="finalist_image"
                />
                <h5 style={{ marginTop: "20px" }}>
                  Transit Evaluation Tool for Smart Mobility - Progress Towards
                  Efficient Public Transport
                </h5>
              </Link>
            </div>
          </div>

          <div className="row" style={{ marginTop: "40px" }}>
            <div className="col-md-2"></div>
            <div className="col-md-4">
              <Link to="/publications">
                <img
                  style={{ width: "100%", borderRadius: "20px" }}
                  src={other4}
                  alt="finalist_image"
                />
                <h5 style={{ marginTop: "20px" }}>Mobilizer</h5>
              </Link>
            </div>
            <div className="col-md-4">
              <Link to="/publications">
                <img
                  style={{ width: "100%", borderRadius: "20px" }}
                  src={other5}
                  alt="finalist_image"
                />
                <h5 style={{ marginTop: "20px" }}>
                  i-Connect (India Urban Mobility Management Platform)
                </h5>
              </Link>
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
