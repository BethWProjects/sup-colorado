import React, { Component } from "react";
import { fetchDestinations } from "../apiCalls";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./SUPDetails.css";

class SUPDetails extends Component {
  constructor() {
    super();
    this.state = {
      destination: {},
    };
  }

  componentDidMount = async () => {
    try {
      const destList = await fetchDestinations();
      const data = await destList.json();
      const destMatch = await data.destination.find(
        (dest) => dest.id === Number(this.props.destId)
      );
      this.setState({ destination: destMatch, loading: false });
    } catch (error) {
      this.setState({
        error:
          "Sorry, no paddle locations available.  Please try again another time!",
      });
    }
  };

  render() {
    const dest = this.state.destination;
    return (
      <div className="details">
        <div className="dest-details-container">
          <div className="image-container">
            <Link to={"/"}>
              <button className="details-home-button">Home</button>
            </Link>
          </div>
          <div className="details-container">
            <div className="details-section">
              <h3 className="details-title">{dest.title}</h3>
              <p className="details-location"><strong>Location</strong> - {dest.location}</p>
              <p className="details-drive">
                <strong>Drive time from Denver</strong> - {dest.driveTimeFromDenver}
              </p>
              <p className="details-cost"><strong>Cost</strong> - {dest.cost}</p>
              <p className="details-type"><strong>Lake/River?</strong> - {dest.type}</p>
              <p className="details-pets"><strong>Pets Allowed?</strong> - {dest.petsAllowed}</p>
              <p className="details-boats">
                <strong>Motorboats Allowed?</strong> - {dest.motorBoatsAllowed}
              </p>
            </div>
            <div className="overview-container">
              <p className="details-overview">{dest.overview}</p>
            </div>
          </div>
        </div>
        <div className="image-container">
          <img className="details-image" src={dest.image} />
        </div>
      </div>
    );
  }
}

export default SUPDetails;

SUPDetails.propTypes = {
  destId: PropTypes.string,
};
