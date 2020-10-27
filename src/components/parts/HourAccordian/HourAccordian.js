import React from 'react';
import "./HourAccordian.css";
import { Accordion, Dimmer, Grid, GridColumn, Header, Icon, Image, Loader, Segment } from 'semantic-ui-react'
import HourCard from '../HourCard/HourCard';

class HourAccordian extends React.Component {
    state = { 
      activeIndex: null,
      locationHours: [],
      loading: true
    }

    componentDidUpdate(prevState) {
      if (this.state.locationHours !== this.props.locationHours) {
        this.setState({
          locationHours: this.props.locationHours,
          loading: false
        })
      }
    }

    handleClick = (e, titleProps) => {
      const { index } = titleProps
      const { activeIndex } = this.state
      const newIndex = activeIndex === index ? -1 : index
  
      this.setState({ activeIndex: newIndex })
    }
  
    render() {
      const { activeIndex, locationHours, loading } = this.state
  
      return (
        <div className="hour-a__container">
          <Accordion styled className="hour-a__accordian">
            <Accordion.Title
              className="hour-a__dropdown-title"
              active={activeIndex === 0}
              index={0}
              onClick={this.handleClick}
            >
              <Icon name='dropdown' />
              Hours
            </Accordion.Title>
            <Accordion.Content active={activeIndex === 0}>
              {locationHours && !loading ? (
              <Grid className="hour-a__hours-grid">
                <Grid.Row columns={2}>
                  <Grid.Column>
                    <Header as="h5" className="hour-a__day-header">Monday:</Header>
                  </Grid.Column>

                  <GridColumn>
                    <Header color="grey" as="h5" className="hour-a__time-range">
                      {locationHours
                        ? locationHours.monday_open + "-" + locationHours.monday_close
                        : "CLOSED"}</Header>
                  </GridColumn>
                </Grid.Row>

                <Grid.Row columns={2}>
                  <Grid.Column>
                    <Header as="h5" className="hour-a__day-header">Tuesday:</Header>
                  </Grid.Column>

                  <GridColumn>
                    <Header color="grey" as="h5" className="hour-a__time-range">
                    {locationHours && !loading
                      ? locationHours.tuesday_open + "-" + locationHours.tuesday_close
                      : "CLOSED"}
                    </Header>
                  </GridColumn>
                </Grid.Row>

                <Grid.Row columns={2}>
                  <Grid.Column>
                    <Header as="h5" className="hour-a__day-header">Wednesday:</Header>
                  </Grid.Column>

                  <GridColumn>
                    <Header color="grey" as="h5" className="hour-a__time-range">
                    {locationHours && !loading
                      ? locationHours.wednesday_open +
                        "-" +
                        locationHours.wednesday_close
                      : "CLOSED"}
                    </Header>
                  </GridColumn>
                </Grid.Row>

                <Grid.Row columns={2}>
                  <Grid.Column>
                    <Header as="h5" className="hour-a__day-header">Thursday:</Header>
                  </Grid.Column>

                  <GridColumn>
                    <Header color="grey" as="h5" className="hour-a__time-range">
                    {locationHours && !loading
                      ? locationHours.thursday_open +
                        "-" +
                        locationHours.thursday_close
                      : "CLOSED"}
                    </Header>
                  </GridColumn>
                </Grid.Row>

                <Grid.Row columns={2}>
                  <Grid.Column>
                    <Header as="h5" className="hour-a__day-header">Friday:</Header>
                  </Grid.Column>

                  <GridColumn>
                    <Header color="grey" as="h5" className="hour-a__time-range">
                    {locationHours && !loading
                      ? locationHours.friday_open + "-" + locationHours.friday_close
                      : "CLOSED"}
                    </Header>
                  </GridColumn>
                </Grid.Row>

                <Grid.Row columns={2}>
                  <Grid.Column>
                    <Header as="h5" className="hour-a__day-header">Saturday:</Header>
                  </Grid.Column>

                  <GridColumn>
                    <Header color="grey" as="h5" className="hour-a__time-range">
                    {locationHours && !loading
                      ? locationHours.saturday_open +
                        "-" +
                        locationHours.saturday_close
                      : "CLOSED"}
                    </Header>
                  </GridColumn>
                </Grid.Row>

                <Grid.Row columns={2}>
                  <Grid.Column>
                    <Header as="h5" className="hour-a__day-header">Sunday:</Header>
                  </Grid.Column>

                  <GridColumn>
                    <Header color="grey" as="h5" className="hour-a__time-range">
                    {locationHours && !loading
                      ? locationHours.sunday_open + "-" + locationHours.sunday_close
                      : "CLOSED"}
                    </Header>
                  </GridColumn>
                </Grid.Row>
              </Grid>
               ) : (
                 <div>
                <Dimmer className="hour-a__loading-dimmer" active inverted>
                  <Loader inverted>Loading</Loader>
                </Dimmer>
                </div>
               )}
            </Accordion.Content>
          </Accordion>
        </div>
      )
    }
}

export default HourAccordian;