import React from "react";
import Header from "./headers/Header"
import Resume from "./resume/Resume"
import Projects from "./_projects/Projects"
import Footer from "./headers/Footer"
import "./App.css"


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  };
  


  render(){
    return (
      <div style={{height: '1000px'}}>
      <Header></Header>
      <Resume></Resume>
      <Projects></Projects>
      <Footer></Footer>
      </div>
    )
  }
}

export default App;
