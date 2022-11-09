import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css';
import Nav from './Nav/Nav';
import Filter from './Filter/Filter';
import Destinations from './Destinations/Destinations';
import SUPDetails from './SUPDetails/SUPdetails';
import { fetchDestinations } from './apiCalls';

class App extends Component {
    constructor() {
        super()
        this.state = {
            destinations: [], 
            filteredDestination: ''
        }
    }

    componentDidMount = async () => {
        this.setState({ loading: true });
        try {
          const pathList = await fetchDestinations();
          const data = await pathList.json();
          console.log('test', data)
          this.setState({ destinations: data.destination, loading:false });
        } catch {
          this.setState({
          error: "Sorry, no paths available. Take a stroll around the block and try again!",
          });
        }
      };

      filteredDestination = (input) => {
        this.setState({ filteredDestination: input})
      }

    render() {
        return(
            <div>
              <Nav />
           <BrowserRouter>
           <Switch>
              <Route exact path='/' render={() => (
                <div>
                <Filter filteredDestination={this.filteredDestination}/>
                <Destinations 
                destinations={this.state.destinations}
                filteredDestination={this.state.filteredDestination}
              />
              </div>
              )}
              />
              </Switch>
          </BrowserRouter>
            </div>
        )
    }
}

export default App;
