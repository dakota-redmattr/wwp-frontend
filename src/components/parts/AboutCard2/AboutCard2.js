import React from "react";
import "./AboutCard.css";
import HourCard from "../HourCard/HourCard";

class AboutCard extends React.Component {
  state = {
    locationData: [],
    loading: true,
  };

  componentDidUpdate(prevState) {
    if (prevState.locationData !== this.props.locationData) {
      this.setState({
        locationData: this.props.locationData,
        loading: this.props.loading,
      });
      console.log(this.props.locationData);
    }
  }

  render() {
    const { locationData, loading } = this.state;
    return (
      // <div>
      //   <h1 className="abc__h1">{`${
      //     locationData && !loading ? locationData[0].name : "Loading"
      //   }`}</h1>
      //   <HourCard />
      // </div>

      <div className="ab-card__card-grid-wrapper">
        <div className="ab-card__col-left-wrapper">
          <h1 className="abc__h1">{`${
            locationData && !loading ? locationData[0].name : "Loading"
          }`}</h1>
        </div>

        <HourCard className="ab-card__col-right-wrapper" />
      </div>
    );
  }
}

export default AboutCard;
