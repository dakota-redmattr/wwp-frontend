import React from "react";
import "./Home.css";
import { Button, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home__main-content-wrapper">
      <div className="home__jumbo-seg">
        <div className="home__jumbo-content-wrapper">
          <div className="home__jumbo-header-text-wrapper">
            <h1 className="home__jumbo-header-text-1 home__jumbo-header-text">
              Let's Talk
            </h1>

            <h1 className="home__jumbo-header-text-2 home__jumbo-header-text">
              About Being
            </h1>

            <h1 className="home__jumbo-header-text-3 home__jumbo-header-text">
              Wicked
            </h1>
          </div>

          <div className="home__jumbo-right-column-wrapper">
            <h1 className="home__jumbo-right-column-text">
              Welcome to Your New Wicked Addiction. Bring Your Friends, Bring Your Family, <span style={{marginRight: '2px'}}>(</span>But Most Importantly<span style={{marginLeft: '2px'}}>)</span> Bring Your Appetite. Click The Button Below To Get A Sneak Peek.
            </h1>
            <Link to="/menu">
            <Button size="huge" className="home__jumbo-right-column-btn">
              Our Menu
              <Icon
                name="caret square right outline"
                className="home__jumbo-right-column-btn-icon"
              />
            </Button>
            </Link>
          </div>
        </div>
      </div>
      <div className="home__secondary-content-container">
        <div className="home__secondary-wrapper-one home__secondary-wrapper">
          <div className="home__secondary-content-one home__secondary-content-wrapper">
            
            <div className="home__secondary-one-header-wrapper">
              <h1 className="home__secondary-one-header home__secondary-header">
                JOIN OUR WICKED FAMILY
              </h1>
              <hr className="home__secondary-one-header-underline" />
            </div>
            <h2 className="home__secondary-one-desc">
              We're Hiring at Wicked Wing Pub! Click Below To Apply. What Are You, Chicken?
            </h2>
            <Link to="/opportunities">
            <Button size="massive" className="home__secondary-one-btn">
              Get Adopted
              <Icon
                className="home__secondary-one-btn-icon"
                name="caret square right outline"
              />
            </Button>
            </Link>
          </div>
        </div>

        <div className="home__secondary-wrapper-two home__secondary-wrapper">
          <div className="home__secondary-content-two home__secondary-content-wrapper">
            <div className="home__secondary-two-header-wrapper">
              <h1 className="home__secondary-two-header">GET YOUR FIX</h1>
            </div>
            <div className="home__secondary-two-right-wrapper">
              <h2 className="home__secondary-two-desc">
                Find A Location Near You
              </h2>
              <Link to="/about">
              <Button size="massive" className="home__secondary-two-btn">
                Store Info
                <Icon
                  name="caret square right outline"
                  className="home__secondary-two-btn-icon"
                />
              </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
