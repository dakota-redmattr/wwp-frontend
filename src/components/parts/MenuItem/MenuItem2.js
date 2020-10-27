import React from "react";
import "./MenuItem.css";
import { Item, Button } from "semantic-ui-react";

class MenuItem extends React.Component {
  state = {
    truncateText: true,
    resultString: "",
  };

  toggleTruncate = (event) => {
    const varTrunc = event.state.truncateText;
    console.log(varTrunc);

    event.state = {
      truncateText: !event.state.truncateText,
    };

    console.log(`${event.state.truncateText}`);
  };

  createTruncateButton = (buttonText) => {
    return <span onClick={this.toggleTruncate}>{buttonText}</span>;
  };

  getDescription = () => {
    const text = `${this.props.menuItemDescription}`;

    {
      text.length > this.props.truncateBy
        ? (this.state = {
            resultString: text.slice(0, this.props.truncateBy),
          })
        : (this.state = {
            resultString: text,
          });
    }
    console.log(this.state);
    return this.state.resultString;
  };

  render() {
    return (
      <Item className="mi__menu-item">
        <Item.Content className="mi__menu-item-content">
          <Item.Header className="mi__menu-item-header">
            {this.props.menuItemName}
          </Item.Header>
          <Item.Description className="mi__menu-item-description">
            {console.log(this.state.truncateText)}
            {this.getDescription()}
            <Button onClick={this.toggleTruncate}>
              {`${this.state.truncateText}`}
            </Button>
          </Item.Description>
        </Item.Content>
      </Item>
    );
  }
}

export default MenuItem;
