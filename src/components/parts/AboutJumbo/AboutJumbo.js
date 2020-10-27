import React from "react";
import "./AboutJumbo.css";

class AboutJumbo extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.locationName}</h1>
      </div>
    );
  }
}

export default AboutJumbo;
