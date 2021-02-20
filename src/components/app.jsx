import React, { Component } from 'react';
import flats from '../../data/flats';
import FlatList from './flat_list';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      flats
     }
  }
  render() { 
    return ( 
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-4">
            <FlatList
              flats={this.state.flats}
              // selectedFlat={this.state.selectedFlat}
              selectFlat={this.selectFlat}
            />
          </div>
          <div className="col-12 col-lg-4">
            <h1>You</h1>
          </div>
          <div className="col-12 col-lg-4">
            <h1>World</h1>
          </div>
          
        </div>
      </div>
     );
  }
}
 
export default App;