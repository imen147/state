import "./App.css";
import Interval from "./Interval";

import React from "react";
class Person extends React.Component {
  state = {
    fullName: "Imen benbelgacem",
    bio: "full stack web developer",
    imgSrc:
      "https://images.assetsdelivery.com/compings_v2/apoev/apoev1901/apoev190100092.jpg" ,
    profession: "Ingenieur agronome",
    show: true,
  };
  handleShow = () => {
    this.setState({
      show:!this.state.show
    })
    console.log(this.state.show)
  }
  render() {
    return (
      < div className ="App">
        <button onClick= {this.handleShow}> {this.state.show ? "show":"null"} clickMe </button>
      {this.state.show ? (
        <div style={{border:"black double",  marginTop:"20px", background:"blue"}}> 
          
        <h2 >fullName: {this.state.fullName}</h2>
        <h2> bio : {this.state.bio}</h2>
        <h2> imgSr : {this.state.imgSrc}</h2>
        <h2> profession :{this.state.profession}</h2>
         </div>):( <div>
          <h1 > profile </h1> 
          <Interval/>
         </div>
          ) }
        
        
       
      </div>
    );
     }
      }
  

export default Person ;
