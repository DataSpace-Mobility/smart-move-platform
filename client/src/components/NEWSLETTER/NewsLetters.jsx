import React from "react";
import Compendium from "./SMCM.png";
import Volume1 from "./SMNL1.png";
import Volume2 from "./SMNL2.png";
import Volume3 from "./SMNL3.png";
import Volume4 from "./SMNL4.png";

const NewsLetters = () => {
  return (
    <section className="Faqs top">
      <div className="container">
        <div className="heading heading-yellow heading-center top">
          <h1>NEWSLETTER</h1>
        </div>

        <div className="container">
          <div className="row " style={{ marginTop: "60px" }}>
            <div className="col-md-4">
              <a href="./compendium.pdf">
                <img
                  style={{ width: "100%", borderRadius: "20px" }}
                  src={Compendium}
                  alt="Newsletter"
                />
              </a>
            </div>

            <div className="col-md-4">
              <a href="./Volume_I.pdf">
              <img
                style={{ width: "100%", borderRadius: "20px" }}
                src={Volume1}
                alt="Newsletter"
              />
              </a>
            </div>

            <div className="col-md-4">
              <a href="./Volume_II.pdf">
              <img
                style={{ width: "100%", borderRadius: "20px" }}
                src={Volume2}
                alt="Newsletter"
              />
              </a>
            </div>
          </div>

          <div className="row" style={{ marginTop: "40px" }}>
            <div className="col-md-2"></div>
            <div className="col-md-4">
              <a href="./Volume_III.pdf">
              <img
                style={{ width: "100%", borderRadius: "20px" }}
                src={Volume3}
                alt="Newsletter"
              />
              </a>
            </div>
            <div className="col-md-4">
              <a href="./Volume_IV.pdf">
              <img
                style={{ width: "100%", borderRadius: "20px" }}
                src={Volume4}
                alt="Newsletter"
              />
              </a>
            </div>
          </div>
        </div>
        <br></br>
        <br></br>

        {/* <div style={{ textAlign: "left", marginTop: "50px", marginBottom:"50px",display: "flex",justifyContent: "space-evenly", fontSize:"20px" }}>
          <ul>
            <li>
              <a href="./Volume_I.pdf">Volume I</a>.
            </li>
            <li>
              <a href="./Volume_II.pdf">Volume II</a>.
            </li>
          </ul>
          <ul>
            <li>
              <a href="./Volume_III.pdf">Volume III</a>.
            </li>
            <li>
              <a href="./Volume_IV.pdf">Volume IV</a>.
            </li>
          </ul>
        </div> */}
      </div>
    </section>
  );
};

export default NewsLetters;
