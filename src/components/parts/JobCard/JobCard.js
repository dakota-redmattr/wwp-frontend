import React from "react";
import "./JobCard.css";
import { Button, Image, Item, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";
import TextTruncator from "../TextTruncator/TextTruncator";

class JobCard extends React.Component {
  render() {
    return (
      <>
        <Item className="jobcard__wrapper">
          <Item.Content>
            <Item.Header className="jobcard__position-title" as="a">{this.props.jobTitle}</Item.Header>
            <Item.Meta className="jobcard__position-address" style={{ paddingLeft: ".75rem" }}>
              {this.props.locationAddress}
            </Item.Meta>
            <Item.Description style={{ paddingLeft: "0.25rem" }}>
              <TextTruncator content={this.props.jobDescription} truncateLength={450} />
            </Item.Description>
            <Item.Extra style={{ display: "flex", justifyContent: "flex-end" }}>
              <Link
                to={{
                  pathname: `/opportunities/${this.props.listingId}`,
                  state: {
                    jobTitle: `${this.props.jobTitle}`,
                    jobDescription: this.props.jobDescription,
                  },
                }}
              >
                <Button
                  style={{
                    backgroundColor: "#1678c2",
                    color: "white",
                  }}
                >
                  Apply Now <Icon name="right chevron" />
                </Button>
              </Link>
            </Item.Extra>
          </Item.Content>
        </Item>
      </>
    );
  }
}

export default JobCard;
