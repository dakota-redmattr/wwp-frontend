import React, { createRef, useState, useEffect } from "react";
import "./Menu.css";
import category from "./category";
import { Header, Segment, Ref, Sticky, Dimmer, Icon } from "semantic-ui-react";
import MenuCatCard from "../../parts/MenuCatCard/MenuCatCard";

function Menu() {
  const [loading, setLoading] = useState(true);
  const [categoryInfo, setCategoryInfo] = useState([]);
  const [menuCatActive, setMenuCatActive] = useState(false);

  const handleCatActive = () => setMenuCatActive(true);
  const handleCatDeactivate = () => setMenuCatActive(false);

  const fetchCategoryInfo = async () => {
    const response = await category.get("/food/");
    setCategoryInfo(response.data);
    console.log(response.data);
    setLoading(false);
  };

  const createCategoryCards = () => {
    return (
      <div className="menu__category-grid-wrapper">
        {categoryInfo.sort((a,b)=>a.order_index - b.order_index).map((category) => {
          if (!category) {
            return (
              <div className="menu__category-grid-wrapper">
                <h1>Loading...</h1>
              </div>
            );
          } else {
            return (
              <MenuCatCard
                catTitle={category.name}
                catSlug={category.slug}
                imageUrl={category.image}
              />
            );
          }
        })}
      </div>
    );
  };

  useEffect(() => {
    fetchCategoryInfo();
  }, []);

  return (
    <div className="menu__cat-page-wrapper">
      <div className="menu__title-jumbo">
        <h1 className="menu__title-jumbo-text">Our Menu</h1>
        <h2 className="menu__title-jumbo-desc">
          Lorem ipsum dolar sit amet, consectetur adipiscing elit.
        </h2>
      </div>
      {createCategoryCards()}
      {/* <div className="menu__category-grid-wrapper">
        <MenuCatCard
          catSlug="queso"
          imageUrl="https://wickedwingpub.s3.amazonaws.com/chiliquesoThumb.jpg"
        />

        <MenuCatCard
          catSlug="queso"
          imageUrl="https://wickedwingpub.s3.amazonaws.com/chiliquesoThumb.jpg"
        />

        <MenuCatCard
          catSlug="queso"
          imageUrl="https://wickedwingpub.s3.amazonaws.com/chiliquesoThumb.jpg"
        />

        <MenuCatCard
          catSlug="queso"
          imageUrl="https://wickedwingpub.s3.amazonaws.com/chiliquesoThumb.jpg"
        />

        <MenuCatCard
          catSlug="queso"
          imageUrl="https://wickedwingpub.s3.amazonaws.com/chiliquesoThumb.jpg"
        />

        <MenuCatCard
          catSlug="queso"
          imageUrl="https://wickedwingpub.s3.amazonaws.com/chiliquesoThumb.jpg"
        />
      </div> */}
    </div>
  );
}

export default Menu;
