import React from "react";
import "./LocationLoading.css";
import { Segment, Placeholder, Grid } from "semantic-ui-react";

class LocationLoading extends React.Component {
  render() {
    return (
      <div className="lc-load__main-content-wrapper">
      <div raised fluid className="lc-load__main-segment">
        <div className="lc-load__main-left-col">
          <Placeholder className="lc-load__image-placeholder">
            <Placeholder.Image />
          </Placeholder>

          <div className="lc-load__left-col-text">
            <div>
              <Placeholder className="lc-load__header">
                <Placeholder.Line
                  as="div"
                  length="long"
                  style={{ fontSize: "4vw", height: "0" }}
                />
                <Placeholder.Line
                  as="div"
                  length="medium"
                  style={{ fontSize: "1.5vw", height: ".5vw" }}
                />

                <Placeholder.Line
                  as="div"
                  length="medium"
                  style={{ fontSize: "1.5vw", height: "1.5vw" }}
                />
              </Placeholder>
            </div>
            <div className="lc-load__buttons">
              <Placeholder style={{ width: "10vw" }}>
                <Placeholder.Line
                  as="div"
                  length="very long"
                  style={{ fontSize: "5vw", height: ".5vw" }}
                />
              </Placeholder>

              <Placeholder style={{ width: "10vw" }}>
                <Placeholder.Line
                  as="div"
                  length="very long"
                  style={{ fontSize: "5vw", height: ".5vw" }}
                />
              </Placeholder>
            </div>
          </div>
        </div>

        <div className="lc-load__main-right-col">
          <Placeholder style={{ height: "97%", alignSelf: "center"}}>
            <Placeholder.Image />
          </Placeholder>
        </div>
      </div>

      <div className="lc-load__main-segment-mobile">
        <Placeholder style={{ height: "64vw", maxWidth: 'unset' }}>
          <Placeholder.Image style={{ width: "92vw" }} />
        </Placeholder>

        <Placeholder style={{marginTop: "20px", maxWidth: 'unset'}}>
          <Placeholder.Header>
            <Placeholder.Line className="lc-load__mobile-name-placeholder" as="div" length="medium" />

            <Placeholder.Line className="lc-load__mobile-address-placeholder" as="div" length="long"/>
            <Placeholder.Line className="lc-load__mobile-phone-placeholder" as="div" length="long"/>
            <Placeholder.Line className="lc-load__mobile-hours-placeholder" as="div" fluid/>

          </Placeholder.Header>
        </Placeholder>

        <Grid>
          <Grid.Row columns={2}>
            <Grid.Column className="lc-load__mobile-button-placeholder-column">
              <Placeholder>
                <Placeholder.Line className="lc-load__mobile-button-placeholder" as="div" fluid />
              </Placeholder>
            </Grid.Column>

            <Grid.Column className="lc-load__mobile-button-placeholder-column">
              <Placeholder>
                <Placeholder.Line className="lc-load__mobile-button-placeholder" as="div" fluid />
              </Placeholder>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
      </div>
    );
  }
}

export default LocationLoading;
