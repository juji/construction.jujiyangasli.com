import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class App extends Component {

  componentDidMount(){
    console.log(this.props);
  }

  render() {
    return (
      <div id="app">
        <h1>juji };</h1>
        <h2>Hello,</h2>
        <p>My name is Tri Rahmat Gunadi.<br />
        But my friends call me <Link to="/contacts">Juji</Link>.<br />
        I am a web developer.
        </p> 
        <div className="menu home">
          <Link to="/works">Works</Link>
          <Link to="/technologies">Technologies</Link>
          <Link to="/contacts">Contacts</Link>
        </div>
      </div>
    );
  }
}

export default App;
