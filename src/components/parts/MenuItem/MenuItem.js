import React from "react";
import "./MenuItem.css";
import { Item, Button } from "semantic-ui-react";

class MenuItem extends React.Component {
  state = {
    truncateText: true,
    truncateButtonText: "Read More",
    initialString: "",
    resultString: "",
  };

  toggleTruncate = () => {
    if (this.state.truncateText === true) {
      this.state = { truncateText: false, truncateButtonText: " Read Less" };
    } else {
      this.state = { truncateText: true, truncateButtonText: " Read More" };
    }
  };

  getDescription = () => {
    const initialStr = `${this.props.menuItemDescription}`;

    initialStr.length > this.props.truncateBy
      ? (this.state = {
          resultString: initialStr.slice(0, this.props.truncateBy),
        })
      : (this.state = {
          resultString: "Fuck You",
        });

    return this.state.resultString;
  };

  createToggleButton = () => {
    return (
      <>
        <span
          className="mi__text-truncate-span"
          onClick={() => this.toggleTruncate()}
        >
          {this.state.truncateButtonText}
        </span>
      </>
    );
  };

  render() {
    return (
      <Item className="mi__menu-item">
        <Item.Content className="mi__menu-item-content">
          <Item.Header className="mi__menu-item-header">
            {this.props.menuItemName}
          </Item.Header>
          <Item.Description className="mi__menu-item-description">
            {this.getDescription()}
            {/* {console.log(this.state.toggleTruncate)} */}
            {this.createToggleButton()}
          </Item.Description>
        </Item.Content>
      </Item>
    );
  }
}

export default MenuItem;
