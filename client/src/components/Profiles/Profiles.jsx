import React from "react";
import profile1 from "./Smart move_Team 1.jpg";
import profile2 from "./Smart move_Team 2.jpg";
import profile3 from "./Smart move_Team 3.jpg";
import profile4 from "./Smart move_Team 4.jpg";
import profile5 from "./Smart move_Team 5.jpg";
import profile6 from "./Smart move_Team 6.jpg";
import profile7 from "./Smart move_Team 7.jpg";
import profile8 from "./Smart move_Team 8.jpg";
import profile9 from "./Smart move_Team 9.jpg";
import profile10 from "./Smart move_Team 10.jpg";
import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import "./Profiles.scss";

const Profiles = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="profile">
      <Carousel activeIndex={index} onSelect={handleSelect} >
        <Carousel.Item>
          <img className="d-block w-100" src={profile1} alt="Team Profile" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={profile2} alt="Team Profile" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={profile3} alt="Team Profile" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={profile4} alt="Team Profile" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={profile5} alt="Team Profile" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={profile6} alt="Team Profile" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={profile7} alt="Team Profile" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={profile8} alt="Team Profile" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={profile9} alt="Team Profile" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={profile10} alt="Team Profile" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Profiles;
