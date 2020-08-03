import React from 'react';
import useWebAnimations, { slideInDown } from "@wellyshen/use-web-animations";
 import { color } from 'react-native-material-design-styles';
 import NavBar from "./NavBar.js"
 import { Row, Col } from 'antd';
import "../App.css";


export default function Main  ()  {
    const { timing } = slideInDown;
    const { ref } = useWebAnimations({
      keyframes: [
        {transform: "translateX(39%)"},
        {transform: "translateX(45%)",color: color.paperPurple200.color},
        {transform: "translateX(50%)",color: "black"}
    ],
      timing: {
        ...timing,
        delay: 500,
        direction: "alternate",
        iterations: Infinity,
        duration: timing.duration * 5,
        easing: "ease-in-out",
      }
    });

       return(
              <Row id="Home" >
   
   <NavBar/>
    <Col xs={2} sm={4} md={6} lg={8} xl={10}>
      <br></br><br></br><br></br>
    <h2  className ="header"   style={{fontSize: "90px",color: color.googleGreen100.color,width:"600px",height: "150px"}} >DesignX</h2>
    
    <p  className ="target" ref ={ref}  style={{fontSize: "38px",color: color.googleGreen100.color,width:"600px",height: "150px"}} ><br>
    </br><br></br><br></br>
    Design that puts the fun in functional</p>
    <img className= "stickman1" src={require("../images/fin_2.gif")} alt= "stickman" width="400" height ="300"></img>
    </Col>
    <Col xs={20} sm={16} md={12} lg={8} xl={4}>
      
    </Col>
    <Col xs={2} sm={4} md={6} lg={8} xl={10}>
      
    </Col>
  </Row>
          )};
        
    
