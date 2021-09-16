import React from "react";

const NewsLetters = () => {
  return (
    <section className="Faqs top" style={{height:"60vh"}}>
      {/* <section className="looking"> */}
      <div className="container">
        <div className="heading heading-yellow heading-center top">
          <h1>Newsletter</h1>
        </div>
        <div style={{ textAlign: "left", marginTop: "50px", marginBottom:"50px",display: "flex",justifyContent: "space-evenly", fontSize:"20px" }}>
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
        </div>
      </div>
      {/* </section> */}
    </section>
  );
};

export default NewsLetters;
