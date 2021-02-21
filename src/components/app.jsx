import React, { Component } from 'react';

import flats from '../../data/flats';
import FlatList from './flat_list';
import FlatDetails from './flat_details';
import Form from './form';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      selectedFlat: flats[0],
      flats
     }
  }

  newFlat = () => {
    this.setState(previousState => ({
      flats: [...previousState.flats, flats[0]]
  }));
  }

  selectFlat = (index) => {
    this.setState({ selectedFlat: flats[index] }); 
  }
  render() { 
    return ( 
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-4">
            <FlatList
              flats={this.state.flats}
              selectedFlat={this.state.selectedFlat}
              selectFlat={this.selectFlat}
              newFlat={this.newFlat}
            />
          </div>
          <div className="col-12 col-lg-4">
            <FlatDetails
              flat={this.state.selectedFlat}
              // key={this.state.selectedFlat.price}
              // index={this.state.selectedFlat.index}
            //  selectFlat={props.selectFlat}
            />
          </div>
          <div className="col-12 col-lg-4">
            <Form />
          </div>
          
        </div>
      </div>
     );
  }
}
 
export default App;