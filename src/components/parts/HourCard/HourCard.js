import React from "react";
import "./HourCard.css";
import { Segment, Header } from "semantic-ui-react";

class HourCard extends React.Component {
  state = {
    locationHours: [],
    loading: true,
  };

  componentDidUpdate(prevState) {
    if (this.state.locationHours !== this.props.locationHours) {
      this.setState({
        locationHours: this.props.locationHours,
        loading: false,
      });
      console.log(this.props.locationHours);
    }
  }

  render() {
    const { locationHours, loading } = this.state;

    return (
      <Segment
        placeholder
        loading={loading}
        className="hr-card__main-segment-desktop"
      >
        <Header as="h2" className="hr-card__header">
          Hours:
        </Header>
        <div className="hr-card__hour-grid">
          <div className="hr-card__day-column">
            <Header as="h5" className="hr-card__day-header">
              Monday:
            </Header>
            <Header as="h5" className="hr-card__day-header">
              Tuesday:
            </Header>
            <Header as="h5" className="hr-card__day-header">
              Wednesday:
            </Header>
            <Header as="h5" className="hr-card__day-header">
              Thursday:
            </Header>
            <Header as="h5" className="hr-card__day-header">
              Friday:
            </Header>
            <Header as="h5" className="hr-card__day-header">
              Saturday:
            </Header>
            <Header as="h5" className="hr-card__day-header">
              Sunday:
            </Header>
          </div>

          <div className="hr-card__time-column">
            <Header color="grey" as="h5" className="hr-card__time-range">
              {locationHours && !loading
                ? locationHours.monday_open + "-" + locationHours.monday_close
                : "CLOSED"}
            </Header>

            <Header color="grey" as="h5" className="hr-card__time-range">
              {locationHours && !loading
                ? locationHours.tuesday_open + "-" + locationHours.tuesday_close
                : "CLOSED"}
            </Header>

            <Header color="grey" as="h5" className="hr-card__time-range">
              {locationHours && !loading
                ? locationHours.wednesday_open +
                  "-" +
                  locationHours.wednesday_close
                : "CLOSED"}
            </Header>

            <Header color="grey" as="h5" className="hr-card__time-range">
              {locationHours && !loading
                ? locationHours.thursday_open +
                  "-" +
                  locationHours.thursday_close
                : "CLOSED"}
            </Header>

            <Header color="grey" as="h5" className="hr-card__time-range">
              {locationHours && !loading
                ? locationHours.friday_open + "-" + locationHours.friday_close
                : "CLOSED"}
            </Header>

            <Header color="grey" as="h5" className="hr-card__time-range">
              {locationHours && !loading
                ? locationHours.saturday_open +
                  "-" +
                  locationHours.saturday_close
                : "CLOSED"}
            </Header>

            <Header color="grey" as="h5" className="hr-card__time-range">
              {locationHours && !loading
                ? locationHours.sunday_open + "-" + locationHours.sunday_close
                : "CLOSED"}
            </Header>
          </div>
        </div>
      </Segment>
    );
  }
}

export default HourCard;
