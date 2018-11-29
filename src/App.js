import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

class App extends Component {

  componentDidMount(){
    console.log(this.props);
  }

  render() {
    return (
      <div id="app">
        <h1>juji };</h1>
        <p><big>Site under construction..</big></p> 
        <p>Contact me anytime: <a href="mailto:him@jujiyangasli.com">him@jujiyangasli.com</a></p>
      </div>
    );
  }
}

export default App;
