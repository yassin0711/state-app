// import logo from './logo.svg';
import './App.css';
import React from 'react';
import KitchenSinkExample from "./componante/card";
import 'bootstrap/dist/css/bootstrap.css'
// import bot from './componante/bouton';
class App extends React.Component {
  render() {
    return (
      <div>
        <KitchenSinkExample />
        {/* <div>{this.Person.imgSrc}</div> */}
      </div>)
  }
}

export default App;
