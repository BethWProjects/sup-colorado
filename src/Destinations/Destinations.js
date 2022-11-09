import React, { Component } from 'react'
import './Destinations.css'
import { fetchDestinations } from '../apiCalls'

class Destinations extends Component {
    constructor() {
        super()
        this.state = {
            reservations: []
        }
    }


    componentDidMount = async () => {
        this.setState({ loading: true });
        try {
          const pathList = await fetchDestinations();
          const data = await pathList.json();
          console.log('test', data)
          this.setState({ reservations: data, loading:false });
        } catch {
          this.setState({
          error: "Sorry, no paths available. Take a stroll around the block and try again!",
          });
        }
      };

    render() {
        return(
            <div></div>
        )
    }
}

export default Destinations