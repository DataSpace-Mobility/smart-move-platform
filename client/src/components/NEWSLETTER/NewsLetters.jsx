import React from "react";
import Compendium from "./Compendium_cover.png";
import Volume1 from "./Volume_I.png";
import Volume2 from "./Volume_II.png";
import Volume3 from "./Volume_III.png";
import Volume4 from "./Volume_IV.png";
import Volume5 from "./Volumne_V.png";

const NewsLetters = () => {
  return (
    <section className="Faqs top">
      <div className="container">
        <div className="heading heading-yellow heading-center top">
          <h1 style={{ textTransform: "uppercase", marginTop: "10px" }}>
            Compendium
          </h1>
        </div>

        <div className="container">
          <div className="row " style={{ marginTop: "60px", height: "70%" }}>
            <div className="col-md-4"></div>
            <div className="col-md-4">
              <a href="./compendium.pdf">
                <img
                  style={{
                    width: "100%",
                    height: "70%",
                    borderRadius: "20px",
                    objectFit: "contain",
                  }}
                  src={Compendium}
                  alt="Newsletter"
                />
              </a>
              <h5 style={{ textTransform: "uppercase", marginTop: "10px" }}>
                Compendium 2020-21
              </h5>
            </div>
            <div className="col-md-4"></div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="heading heading-yellow heading-center top">
          <h1 style={{ textTransform: "uppercase", marginTop: "10px" }}>
            Newsletter
          </h1>
        </div>

        <div className="container">
          <div className="row " style={{ marginTop: "60px" }}>
            <div className="col-md-4">
              <a href="./Volume_I.pdf">
                <img
                  style={{
                    width: "100%",
                    height: "70%",
                    borderRadius: "20px",
                    objectFit: "contain",
                  }}
                  src={Volume1}
                  alt="Newsletter"
                />
              </a>
              <h5 style={{ textTransform: "uppercase", marginTop: "10px" }}>
                Newsletter Volume 1
              </h5>
            </div>

            <div className="col-md-4">
              <a href="./Volume_II.pdf">
                <img
                  style={{
                    width: "100%",
                    height: "70%",
                    borderRadius: "20px",
                    objectFit: "contain",
                  }}
                  src={Volume2}
                  alt="Newsletter"
                />
              </a>
              <h5 style={{ textTransform: "uppercase", marginTop: "10px" }}>
                Newsletter Volume 2
              </h5>
            </div>

            <div className="col-md-4">
              <a href="./Volume_III.pdf">
                <img
                  style={{
                    width: "100%",
                    height: "70%",
                    borderRadius: "20px",
                    objectFit: "contain",
                  }}
                  src={Volume3}
                  alt="Newsletter"
                />
              </a>
              <h5 style={{ textTransform: "uppercase", marginTop: "10px" }}>
                Newsletter Volume 3
              </h5>
            </div>
          </div>

          <div className="row" style={{ marginTop: "40px" }}>
            <div className="col-md-2"></div>
            <div className="col-md-4">
              <a href="./Volume_IV.pdf">
                <img
                  style={{
                    width: "100%",
                    height: "70%",
                    borderRadius: "20px",
                    objectFit: "contain",
                  }}
                  src={Volume4}
                  alt="Newsletter"
                />
              </a>
              <h5 style={{ textTransform: "uppercase", marginTop: "10px" }}>
                Newsletter Volume 4
              </h5>
            </div>

            <div className="col-md-4">
              <a href="./Volume_V.pdf">
                <img
                  style={{
                    width: "100%",
                    height: "70%",
                    borderRadius: "20px",
                    objectFit: "contain",
                  }}
                  src={Volume5}
                  alt="Newsletter"
                />
              </a>
              <h5 style={{ textTransform: "uppercase", marginTop: "10px" }}>
                Newsletter Volume 5
              </h5>
            </div>
            <div className="col-md-2"></div>
          </div>
        </div>
        <br></br>
        <br></br>
      </div>
    </section>
  );
};

export default NewsLetters;
