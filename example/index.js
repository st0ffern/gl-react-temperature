import React,{ Component } from 'react';

import {Surface} from 'gl-react-dom'
import {Temperature} from '../src/'
const {Image: GLImage} = require('gl-react-image');

export default class App extends Component {

  constructor(props) {
    super(props);
  
    this.state = {
      temperature: 7000,
    };
  }
  render() {
    return (
      <div className="wrapper">
        <Surface width={450} height={300}>
          <Temperature temp={this.state.temperature}>
            <GLImage
              source={{
                uri: "https://unsplash.it/450/350?image=301", 
                width: "450", 
                height: "300"
              }}
              resizeMode="cover"
            />
          </Temperature>
        </Surface>
        <input type="range"
          min={1000}
          max={20000}
          value={this.state.temperature}
          onChange={e => this.setState({temperature: parseFloat(e.target.value)})}
        />
      </div>
    );
  }
}
