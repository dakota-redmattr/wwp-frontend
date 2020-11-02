import React, { useState, useEffect } from "react";
import "../../pages/Menu/MenuDetail.css";
import "./WingMenu.css";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import { Message, ItemGroup, Segment, Icon, Divider } from "semantic-ui-react";

function WingMenu() {
  let params = useParams();
  const [loading, setLoading] = useState(true);
  const [foodItems, setFoodItems] = useState([]);
  const [category, setCategory] = useState("");
  const [isError, setIsError] = useState(false);
  const [messageVisible, setMessageVisible] = useState("visible");
  const [errorMessage, setErrorMessage] = useState(null);



  return (
    <div className="md__page-wrapper">
      <div className="md__content-wrapper">
        <Link to="/menu" className="md__back-arrow-link">
          <h3>
            <Icon name="arrow left" />
            Categories
          </h3>
        </Link>

        <div className="md__category-title-header-div">
          <h1>Wings</h1>
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
            <div className="wing-m__content-wrapper">
                <div className="wing-m__top-grid-wrapper">
                    <div className="wing-m__top-grid-col wing-m__top-grid-left-col">
                        <div className="wing-m__wing-cat-header">
                            <h1 className="wing-m__wing-cat-title">Wickedly Wild Bites</h1>
                            <h3 className="wing-m__wing-cat-desc">Fun-sized crispy boneless bites packed with flavor</h3>
                        </div>

                        <div className="wing-m__top-left-wing-content-wrapper">
                            <div className="wing-m__boneless-size-item">
                                <h2 className="wing-m__boneless-size-title">The Snacker</h2>
                                <h4 className="wing-m__boneless-size-desc">(8 oz.) boneless bites tossed in your choice of (1) sauce or rub</h4>
                            </div>

                            <div className="wing-m__boneless-size-item">
                                <h2 className="wing-m__boneless-size-title">The Bare Essential</h2>
                                <h4 className="wing-m__boneless-size-desc">(12 oz.) boneless bites tossed in your choice of (1) sauce or rub</h4>
                            </div>

                            <div className="wing-m__boneless-size-item">
                                <h2 className="wing-m__boneless-size-title">Wicked Size</h2>
                                <h4 className="wing-m__boneless-size-desc">(16 oz.) boneless bites tossed in your choice of (1) sauce or rub</h4>
                            </div>
                        </div>
                    </div>

                    <div className="wing-m__top-grid-col wing-m__top-grid-right-col">
                        <div className="wing-m__wing-cat-header">
                            <h1 className="wing-m__wing-cat-title">Wickedly Wild Wings</h1>
                            <h3 className="wing-m__wing-cat-desc">Traditional Crispy Fried Naked Wings</h3>
                        </div>

                        <div className="wing-m__top-right-wing-content-wrapper">
                            <div className="wing-m__trad-size-item">
                                <h2 className="wing-m__trad-size-title">5 pc.</h2>
                                <h4 className="wing-m__trad-size-desc">Tossed in (1) sauce or rub and served with (1) Housemade ranch or bleu cheese</h4>
                            </div>

                            <div className="wing-m__trad-size-item">
                                <h2 className="wing-m__trad-size-title">10 pc.</h2>
                                <h4 className="wing-m__trad-size-desc">Tossed in (2) sauce or rub and served with (1) Housemade ranch or bleu cheese</h4>
                            </div>

                            <div className="wing-m__trad-size-item">
                                <h2 className="wing-m__trad-size-title">15 pc.</h2>
                                <h4 className="wing-m__trad-size-desc">Tossed in (2) sauce or rub and served with (2) Housemade ranch or bleu cheese</h4>
                            </div>

                            <div className="wing-m__trad-size-item">
                                <h2 className="wing-m__trad-size-title">20 pc.</h2>
                                <h4 className="wing-m__trad-size-desc">Tossed in (3) sauce or rub and served with (3) Housemade ranch or bleu cheese</h4>
                            </div>

                            <div className="wing-m__trad-size-item">
                                <h2 className="wing-m__trad-size-title">40 pc.</h2>
                                <h4 className="wing-m__trad-size-desc">Tossed in (4) sauce or rub and served with (4) Housemade ranch or bleu cheese</h4>
                            </div>
                        </div>
                    </div>
                </div>

                <Divider />

                <div className="wing-m__bottom-content-wrapper">
                    <h1 className="wing-m__sauce-header">Sauces & Rubs</h1>
                    <div className="wing-m__bottom-grid-wrapper">
                        <div className="wing-m__sauce-cat-col">
                            <h1 className="wing-m__sauce-cat-title">
                                Americana
                            </h1>
                            <ul className="wing-m__sauce-cat-items wing-m__sauce-cat-americana">
                                <li className="wing-m__sauce-item">
                                    <h2 className="wing-m__sauce-title">Buffalo Mild</h2>
                                </li>

                                <li className="wing-m__sauce-item">
                                    <h2 className="wing-m__sauce-title">Spiked Garlic</h2>
                                </li>

                                <li className="wing-m__sauce-item">
                                    <h2 className="wing-m__sauce-title">Honey BBQ</h2>
                                </li>

                                <li className="wing-m__sauce-item">
                                    <h2 className="wing-m__sauce-title">Buffalo BBQ</h2>
                                </li>

                                <li className="wing-m__sauce-item">
                                    <h2 className="wing-m__sauce-title">Buffalo Hot</h2>
                                </li>

                                <li className="wing-m__sauce-item">
                                    <h2 className="wing-m__sauce-title">Wickedly Wild</h2>
                                </li>

                                <li className="wing-m__sauce-item">
                                    <h2 className="wing-m__sauce-title">Wicked Nut Shot</h2>
                                </li>
                            </ul>
                        </div>   

                        <div className="wing-m__sauce-cat-col">
                            <h1 className="wing-m__sauce-cat-title">
                                Fusions
                            </h1>
                            <ul className="wing-m__sauce-cat-items wing-m__sauce-cat-fusions">
                                <li className="wing-m__sauce-item">
                                    <h2 className="wing-m__sauce-title">Thai Sweet Chili Herb</h2>
                                </li>

                                <li className="wing-m__sauce-item">
                                    <h2 className="wing-m__sauce-title">Fiery Asian BBQ</h2>
                                </li>

                                <li className="wing-m__sauce-item">
                                    <h2 className="wing-m__sauce-title">Sriracha-Limon</h2>
                                </li>

                                <li className="wing-m__sauce-item">
                                    <h2 className="wing-m__sauce-title">Chipotle Honey</h2>
                                </li>

                                <li className="wing-m__sauce-item">
                                    <h2 className="wing-m__sauce-title">Habanero Mango</h2>
                                </li>
                            </ul>
                        </div>

                        <div className="wing-m__sauce-cat-col">
                            <h1 className="wing-m__sauce-cat-title">
                                Rubs
                            </h1>
                            <ul className="wing-m__sauce-cat-items wing-m__sauce-cat-rubs">
                                <li className="wing-m__sauce-item">
                                    <h2 className="wing-m__sauce-title">Wicked Chicken</h2>
                                </li>

                                <li className="wing-m__sauce-item">
                                    <h2 className="wing-m__sauce-title">Garlic Parmasean</h2>
                                </li>

                                <li className="wing-m__sauce-item">
                                    <h2 className="wing-m__sauce-title">Lemon Pepper</h2>
                                </li>

                                <li className="wing-m__sauce-item">
                                    <h2 className="wing-m__sauce-title">Cajun Spice</h2>
                                </li>

                                <li className="wing-m__sauce-item">
                                    <h2 className="wing-m__sauce-title">Spicy Ranch</h2>
                                </li>

                                <li className="wing-m__sauce-item">
                                    <h2 className="wing-m__sauce-title">Buffalo Hot Dry</h2>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </Segment>
      </div>
    </div>
  );
}

export default WingMenu;
