import React from 'react';
import "./DrinkItem.css";

class DrinkItem extends React.Component {
  state = {
    drinkItems: [],
    categoryName: '',
    categoryDesc: ''
  }


  getListedItems() {
    console.log(this.props)
    if (this.state.drinkItems !== []) {
      const drinkItems = this.props.items;
      return (
        <ul>
          {drinkItems.map((item) => (
            <li className="dm-item__ul-item" key={item.order_index}>
              <h4 className="dm-item__item-li-name">{item.name}</h4>
            </li>
          ))}
        </ul>
      )
    }
  }

  componentDidUpdate() {
    if (this.state.drinkItems !== this.props.items) {
      this.setState({
        drinkItems: this.props.drinkItems
      })
    }
  }

  render() {
    const list = this.props.items;
    // console.log(this.props)
    return(
      <div className="dm-item__main-content-wrapper">
        <h1 className="dm-item__item-title-header">{this.props.cat_name ? this.props.cat_name : "Loading"}</h1>
        {this.props.desc && this.props.listed == false
        ? (
          <h2 className="dm-item__item-desc">{this.props.desc}</h2>
        ) : (
          null
        )}
        {this.props.listed == true
        ? (
          <div>
            {this.getListedItems()}
          </div>
        ) : (
          null
        )
        }
      </div>  
    )
    }
  }


export default DrinkItem