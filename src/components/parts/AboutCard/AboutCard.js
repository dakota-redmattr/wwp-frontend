import React from "react";
import "./AboutCard.css";
import {
  Segment,
  Image,
  Item,
  Header,
  Button,
  Icon,
  Placeholder,
  Accordion,
} from "semantic-ui-react";
import HourCard from "../HourCard/HourCard";
import LocationLoading from "../LocationLoading/LocationLoading";
import HourAccorian from "../HourAccordian/HourAccordian";
import { Link } from "react-router-dom";

class AboutCard extends React.Component {
  state = {
    loading: true,
    locationData: [],
    locationHours: [],
    imageLoading: true,
    activeIndex: null,
    accordianDisplay: "none",
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.state.locationData !== this.props.locationData) {
      this.setState({
        locationData: this.props.locationData,
        locationHours: this.props.locationData[0].hours[0],
        loading: false,
      });
      console.log(this.state);
    }
  }

  handleAccordianClick = (e, titleProps) => {
    const { index } = titleProps;
    const { activeIndex } = this.state;
    const newIndex = activeIndex === index ? -1 : index;

    this.setState({ activeIndex: newIndex });
  };

  handleImageLoaded() {
    this.setState({ imageLoading: false });
  }

  render() {
    const {
      locationData,
      locationHours,
      loading,
      imageLoading,
      activeIndex,
      accordianDisplay,
    } = this.state;
    console.log(this.state);
    return (
      <Segment raised fluid className="ab-card__main-segment">
        {!loading && locationData ? (
          <>
            <div className="ab-card__left-col">
              {locationData && !loading ? (
                <Image
                  onLoad={this.handleImageLoaded.bind(this)}
                  hidden={imageLoading}
                  src={locationData[0].image}
                />
              ) : (
                <Placeholder>
                  <Placeholder.Image className="ab-card__image-placeholder" />
                </Placeholder>
              )}
              <div className="ab-card__left-col-text">
                <div>
                  <h1 className="ab-card__location-name">
                    {locationData && !loading
                      ? locationData[0].name
                      : "Loading..."}
                  </h1>
                  <Header
                    disabled
                    as="h3"
                    className="ab-card__location-address"
                  >
                    {locationData && !loading
                      ? locationData[0].street_address_1
                      : "Loading..."}
                  </Header>
                  <Header
                    as="h3"
                    color="grey"
                    className="ab-card__location-phone"
                  >
                    <span>Phone: </span>
                    <span>
                      {locationData && !loading
                        ? locationData[0].phone
                        : "Loading..."}
                    </span>
                  </Header>
                </div>
                <HourAccorian locationHours={locationHours} />
                <div className="ab-card__left-col-btn-group-container">
                <div className="ab-card__left-col-btn-group">
                  <Link to="/menu">
                  <Button  className="ab-card__left-col-btn ab-card__left-col-btn-menu">
                    <span className="ab-card__left-col-btn-text">
                      <Icon name="food" /> Menu
                    </span>
                  </Button>
                  </Link>
                  <Button
                    as="a" 
                    href="http://maps.apple.com/?q=Wicked+Wing+Pub"
                    primary
                    className="ab-card__left-col-btn ab-card__left-col-btn-directions"
                  >
                    <span className="ab-card__left-col-btn-text">
                      <Icon style={{ marginRight: ".1vw" }} name="map" />{" "}
                      Directions
                    </span>
                  </Button>
                  
                </div>
                </div>
               
              </div>
            </div>

            <div className="ab-card__right-col">
              <div className="ab-card__hour-card-container">
              <HourCard locationHours={locationHours} />
              </div>
            </div>
          </>
        ) : (
          <LocationLoading />
        )}
      </Segment>
    );
  }
}

export default AboutCard;
