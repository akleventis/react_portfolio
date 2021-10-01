import React from "react";
import Header from "./headers/Header"

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  };
  


  render(){
    return (
      <div style={{height: '1000px'}}>
      <Header></Header>
      </div>
    )
  }
}

export default App;
