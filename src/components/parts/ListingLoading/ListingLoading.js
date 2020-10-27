import React from "react";
import "./ListingLoading.css";
import { Loader, Placeholder } from "semantic-ui-react";

class ListingLoading extends React.Component {
  render() {
    return (
      <div className="listload__wrapper">
        <Placeholder style={{ maxWidth: "unset", position: "relative" }}>
          <Placeholder.Header>
            <Placeholder.Line length="short" />
            <Placeholder.Line length="very short" />
          </Placeholder.Header>
          <Placeholder.Paragraph>
            <Placeholder.Line length="full" />
            <Placeholder.Line length="very long" />
            <Placeholder.Line length="full" />
            <Placeholder.Line length="very long" />
            <Placeholder.Line length="full" />
            <Placeholder.Line length="very long" />
          </Placeholder.Paragraph>
          {/* <Loader
            active
            size="medium"
            style={{
              position: "absolute",
              marginLeft: "auto",
              marginRight: "auto",
              marginTop: "auto",
              marginBottom: "auto",
            }}
          >
            Loading...
          </Loader> */}
        </Placeholder>
      </div>
    );
  }
}

export default ListingLoading;
