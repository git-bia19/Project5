import "../App.css";
import React from 'react';
import useWebAnimations, { slideInDown } from "@wellyshen/use-web-animations";
import { Grid} from "@material-ui/core";
import { color } from 'react-native-material-design-styles';

const About = () => {
    const { timing } = slideInDown;
    const { ref } = useWebAnimations({
      keyframes: [
        {transform: "translateX(4%)",color: color.paperPurple200.color},
        {transform: "translateY(-2%)",color: color.googleGreen100.color}
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
         <div id="About" >
       <Grid container style={{ marginTop: "335px" }}>
      <Grid item sm={5} xs={12}>
        <h1  ref={ref} style ={{fontSize: "40px"}}>
         What we offer at DesignX?
        </h1>
        <p
          variant="body1"
          style={{ marginTop: "30px",fontSize:"18px",color:"white" }}
          className="target" 
     >
        We make high tech animations and unique designs which set the bar high in the international market. 
        You bring the concept and we turn it into reality.
       None of our works go unnoticed. We have been mentioned on the Forbes Top Designers 2019.
       Designing is our passion and we work with extreme dedication to bring something fresh on the table.
       With our designs you win everyday!
        </p>
        
      </Grid>
      <Grid item sm={1} />
      <Grid item sm={6} xs={12}> 
     <br></br>
       <img src={require( "../images/animation.gif")} width="500" height="280" className ="animation1" alt="animation">

         
       </img>
         </Grid>
    </Grid>
    </div>
      )};
    

    export default About;
   