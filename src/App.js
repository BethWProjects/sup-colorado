import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import loader from './images/loader.png'
import Nav from "./Nav/Nav";
import Filter from "./Filter/Filter";
import Destinations from "./Destinations/Destinations";
import SUPDetails from "./SUPDetails/SUPdetails";
import PageNotFound from "./PageNotFound/PageNotFound";
import { fetchDestinations } from "./apiCalls";

class App extends Component {
  constructor() {
    super();
    this.state = {
      destinations: [],
      filteredDestination: "",
      error: ''
    };
  }

  componentDidMount = async () => {
    this.setState({ loading: true });
    try {
      const pathList = await fetchDestinations();
      const data = await pathList.json();
      this.setState({ destinations: data.destination, loading: false });
    } catch {
      this.setState({
        error:
          "Sorry, no paddle locations available.  Please try again another time!",
      });
    }
  };

  filteredDestination = (input) => {
    this.setState({ filteredDestination: input });
  };

  render() {
    return (
      <div>
        <Nav />
        <div className="loader-position">
        {this.state.loading && <img src={loader} className="loader" alt="blue and orange loader" />}
        </div>
        {!this.state.destinations.length && (
          <h2 className="error-message">{this.state.error}</h2>
        )}
     
          <Switch>
            <Route
              exact
              path="/"
              render={() => (
                <div>
                  <Filter filteredDestination={this.filteredDestination} />
                  <Destinations
                    destinations={this.state.destinations}
                    filteredDestination={this.state.filteredDestination}
                  />
                </div>
              )}
            />
            <Route
              exact path="/location/:id"
              render={({ match }) => <SUPDetails destId={match.params.id} />}
            />  
             <Route path='*' component={PageNotFound} />    
          </Switch>
         
       
      </div>
    );
  }
}

export default App;
