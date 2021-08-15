import React from "react";

const NewsLetters = () => {
  return (
    <section className="Faqs top">
      {/* <section className="looking"> */}
      <div className="container">
        <div className="heading heading-yellow heading-center top">
          <h1>Newsletter</h1>
        </div>
        <ul style={{textAlign:"left", marginTop:"50px"}}>
          <li>
            <a href="./Volume_I.pdf">Volume I</a>.
          </li>
          <li>
            <a href="./Volume_II.pdf">Volume II</a>.
          </li>
          <li>
            <a href="./Volume_III.pdf">Volume III</a>.
          </li>
          <li>
            <a href="./Volume_IV.pdf">Volume IV</a>.
          </li>
        </ul>
      </div>
      {/* </section> */}
    </section>
  );
};

export default NewsLetters;
