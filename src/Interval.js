import { computeHeadingLevel, render } from "@testing-library/react";
import { Button } from "bootstrap";
import React from "react";
class Interval extends React.Component {
   
        state ={
            count:0
            ,interval:null
        }
    
increment=()=>this.setState({count:this.state.count+1})


decrement=()=>this.setState({count:this.state.count-1})
componentDidMount(){
this.setState({interval:setInterval(() => {this.setState({count:this.state.count+1})
        
}, 1000)})

console.log("componentDidmount",this.state.interval);}
 componentDidUpdate() {
    console.log("componentDidupdate");
 }
//  componentWillUnmount(){
//     clearInterval(this.state.interval)
//  }
 render(){
    return (
        <div>
            <button onClick={()=>this.increment()}>+ </button>
            {this.state.count}
            <button onClick={()=>this.decrement()}>- </button>
        </div>
    )
 }}
 export default Interval;