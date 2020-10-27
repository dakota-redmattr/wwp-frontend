import React from "react";
import "./Apply.css";
import { useParams } from "react-router-dom";
import { Segment, Loader, Divider } from "semantic-ui-react";
import ApplicationForm from "../../parts/ApplicationForm/ApplicationForm";
import listings from "./listings";

class Apply extends React.Component {
  state = {
    job: [],
    listingId: "",
    jobTitle: "",
    jobDesc: <Loader active inverted />,
  };

  fetchListingDetails = async () => {
    const listingId = this.props.match.params.job;
    const response = await listings.get(`/opportunities/${listingId}`);
    this.setState({
      job: response.data[0],
      listingId: response.data[0].id,
      jobTitle: response.data[0].position.name,
      jobDesc: `${response.data[0].position.description}`,
    });
    console.log(response.data[0]);
  };

  componentDidMount() {
    this.fetchListingDetails();
  }

  render() {
    return (
      <div className="apply__page-wrapper">
        <div className="apply__content-wrapper">
          <div className="apply__seg-wrapper apply__content-seg-wrapper">
            <Segment raised className="apply__content-seg apply__seg">
              <ApplicationForm
                listingId={this.state.listingId}
                jobDesc={this.state.jobDesc}
                jobTitle={this.state.jobTitle}
                {...this.props}
              />
            </Segment>
          </div>
          <div className="apply__mobile-divider-container">
            <Divider className="apply__mobile-divider"/>
          </div>

          <div className="apply__seg-wrapper apply__side-seg-wrapper">
            <Segment raised compact className="apply__side-seg apply__seg">
              <h1 className="apply__apply-page-sidebar-header">
                Lorem, ipsum dolor.
              </h1>
            </Segment>
          </div>
        </div>
      </div>
    );
  }
}

export default Apply;
