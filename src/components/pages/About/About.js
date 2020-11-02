import React, { useState, useEffect } from "react";
import "./About.css";
import { Header, Segment } from "semantic-ui-react";
import locationInfo from "./locationInfo";
import AboutJumbo from "../../parts/AboutJumbo/AboutJumbo";
import AboutCard from "../../parts/AboutCard/AboutCard";
import LocationLoading from "../../parts/LocationLoading/LocationLoading";

function About() {
  const [loading, setLoading] = useState(true);
  const [locationData, setLocationData] = useState([]);

  const fetchLocationData = async () => {
    const response = await locationInfo.get("/locations/");
    setLocationData(response.data);
    console.log(response.data[0].name);
    setLoading(false);
  };

  useEffect(() => {
    fetchLocationData();
  }, []);
  return (
    <div className="about__main-page-wrapper">
      <div className="about__main-page-content-wrapper">
        <div
          // style={{ width: "85%", marginTop: "1em" }}
          className="about__left-sidebar-wrapper"
        >
          <Segment secondary raised className="about__left-sidebar-seg">
            <Header className="about__left-sidebar-header">
              Our Locations
            </Header>
            <Header as="p" className="about__left-sidebar-desc">
              You've Made It This Far. Come See What We're All About In Person. You Have Nothing To Lose But Your Hunger.
            </Header>
          </Segment>
        </div>
        <AboutCard locationData={locationData} />
        {console.log(locationData)}
      </div>
    </div>
  );
}

export default About;
