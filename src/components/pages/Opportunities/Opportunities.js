import React, { useState, useEffect } from "react";
import "./Opportunities.css";
import listings from "./listings";
import JobCard from "../../parts/JobCard/JobCard";
import {
  Header,
  Placeholder,
  Segment,
  Item,
  ItemGroup,
  Button,
  Icon,
} from "semantic-ui-react";
import ListingLoading from "../../parts/ListingLoading/ListingLoading";
import { Link } from "react-router-dom";

function Opportunities() {
  const [loading, setLoading] = useState(true);
  const [jobListings, setJobListings] = useState([]);

  const fetchJobs = async () => {
    const response = await listings.get("/opportunities/");
    setJobListings(response.data);
    console.log(response.data);
    setLoading(false);
  };

  const createListingCards = () => {
    console.log("Help");
    return (
      <ItemGroup>
        {jobListings.map((listing) => {
          if (!listing) {
            return <ListingLoading />;
          } else {
            return (
              <JobCard
                listingId={listing.id}
                jobTitle={listing.position.name}
                jobDescription={listing.position.description}
                locationAddress={listing.location.street_address_1}
              />
            );
          }
        })}
      </ItemGroup>
    );
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  return (
    <div className="opp__main-page-wrapper">
      <div className="opp__title-header-seg">
        <h1 className="opp__title-header-text">Opportunities</h1>
      </div>
      <div className="opp__content-grid-wrapper">
        <div className="opp__position-listing-column">
          {createListingCards()}
        </div>
        <div className="opp__mobile-column-divider">
          <hr className="opp__mobile-column-divider" />
        </div>

        <div className="opp__position-listing-side-column">
          <div className="opp__business-opportunities">
            <h2 className="opp__business-opportunities-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime,
              voluptatem?
            </h2>
            <Link to="/opportunities/contact">
            <Button size="large" className="opp__business-opp-btn">
              Contact Us{" "}
              <Icon
                className="opp__business-opp-btn-icon"
                name="right chevron"
              />
            </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Opportunities;
