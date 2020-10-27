import React from "react";
import "./MenuCatCard.css";
import { Link } from "react-router-dom";
import { Icon } from "semantic-ui-react";

class MenuCatCard extends React.Component {
  render() {
    return (
      <Link
        to={`/menu/${this.props.catSlug}`}
        className="mcc__wrapper menu__category-card"
        style={{
          background: `linear-gradient(rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.35)),
        url(${this.props.imageUrl})`,
          backgroundSize: "cover",
        }}
      >
        <div className="mcc__dimmer"></div>
        <h2 className="mcc__cat-title">
          {this.props.catTitle ? this.props.catTitle : "Chips & Queso"}
        </h2>
        <Icon name="right chevron" className="mcc__cat-arrow-icon" />
      </Link>
    );
  }
}

export default MenuCatCard;
