import React, { useState, useEffect } from "react";
import "../MenuDetail.css";
import "./DrinkMenu.css";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import { Message, ItemGroup, Segment, Icon } from "semantic-ui-react";
import DrinkItem from "../../../parts/DrinkItem/DrinkItem.js";

function DrinkMenu() {
  let params = useParams();
  const [loading, setLoading] = useState(true);
  const [drinkItems, setDrinkItems] = useState([]);
  const [category, setCategory] = useState("");
  const [isError, setIsError] = useState(false);
  const [messageVisible, setMessageVisible] = useState("visible");
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    let mounted = true;
    const fetchDrinkItems = async () => {
      try {
        const response = await axios.get(
          `https://laborcat.com/api/food/drinks`
        );

        setCategory("Drinks");
        setDrinkItems(response.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setIsError(true);
        setErrorMessage(`${error}`);
        setLoading(false);
      }
    };
    if (mounted) {
      fetchDrinkItems();
      mounted = false;
    }
    return () => {
      mounted = false;
    };
  }, [params.slug]);

  const handleDismiss = () => {
    setMessageVisible("hidden");
  };

  return (
    <div className="md__page-wrapper">
      <div className="md__content-wrapper">
        {isError && (
          <div
            style={{
              display: "block",
              position: "relative",
              visibility: messageVisible,
              transition: "all 0.2s ease",
            }}
          >
            <Message
              error
              attached="top"
              size="large"
              floating
              onDismiss={handleDismiss}
              content={errorMessage}
              style={{
                display: "block",
                width: "75vw",
                position: "absolute",
                left: "50%",
                transform: "translate(-50%)",
              }}
            />
          </div>
        )}

        <Link to="/menu" className="md__back-arrow-link">
          <h3>
            <Icon name="arrow left" />
            Categories
          </h3>
        </Link>

        <div className="md__category-title-header-div">
          <h1>{category}</h1>
        </div>

        <Segment
          raised
          style={{
            width: "93vw",
            display: "flex",
            marginRight: "1vw",
            marginBottom: "60px",
            justifyContent: "center",
            borderRadius: ".5vw",
            alignSelf: "center",
          }}
        >
          {loading ? (
            <h1>Loading...</h1>
          ) : (
            <ItemGroup className="md__menu-item-group d-menu__item-group" divided>
              {drinkItems.sort((a, b) => a.order_index - b.order_index).map((item) => (
                <DrinkItem
                  cat_name={item.name}
                  desc={item.description}
                  listed={item.listed}
                  order_index={item.order_index}
                  items={item.items}
                />
              ))}
            </ItemGroup>
          )}
        </Segment>
      </div>
    </div>
  );
}

export default DrinkMenu;