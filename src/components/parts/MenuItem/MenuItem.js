import React from "react";
import "./MenuItem.css";
import { Item, Button } from "semantic-ui-react";

class MenuItem extends React.Component {
  state = {
    truncateText: true,
    truncateSet: false,
    truncateBtnText: "Read More",
    initialString: "",
    resultString: "",
    loading: true
  };

  toggleTruncate() {
    if (this.state.truncateText) {
        return this.setState({
            truncateText: false,
            resultString: `${this.props.menuItemDescription}`,
            truncateBtnText: "Read Less"
        });
    } else {
        return this.setState({
            truncateText: true,
            resultString: this.truncate(this.props.menuItemDescription),
            truncateBtnText: "Read More"
        })
    }
  }

  truncate(str) {
    if (str.length > this.props.truncateBy) {
        this.setState({truncateSet: true})
        console.log("here");
        return str.substring(0, (this.props.truncateBy - 35)) + "..."
    } else {
        return str;
    }
  }
  


  componentDidMount() {
    if (this.state.resultString !== this.props.menuItemDescription) {
      this.setState({
          // content: this.props.menuItemDescription,
          loading: false,
          resultString: this.truncate(this.props.menuItemDescription)
      })
    
    }
  }


  render() {
    const {loading, truncate, resultString, truncateText, truncateSet} = this.state;
    return (
      <Item className="mi__menu-item">
        <Item.Content className="mi__menu-item-content">
          <Item.Header className="mi__menu-item-header">
            {this.props.menuItemName}
          </Item.Header>
          <Item.Description className="mi__menu-item-description">

            {resultString}
            {"  "}
            {!loading && truncateSet ? (
            <span
                onClick={() => this.toggleTruncate(this)}
                className="mi__text-truncate-span"
            >
                {this.state.truncateBtnText}
            </span>
            ) : null}
          </Item.Description>
        </Item.Content>
      </Item>
    );
  }
}

export default MenuItem;
