import React, { Component } from 'react'
import './App.css';
import Nav from './Nav/Nav';
import Destinations from './Destinations/Destinations';
import { fetchDestinations } from './apiCalls';

class App extends Component {
    constructor() {
        super()
        this.state = {
            destinations: []
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

    render() {
        return(
            <div>
              <Nav />
              <Destinations 
                destinations={this.state.destinations}
              />
            </div>
        )
    }
}

export default App;
