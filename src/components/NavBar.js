import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PhoneIcon from '@material-ui/icons/Phone';
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import useWebAnimations, { slideInDown } from "@wellyshen/use-web-animations";
 import { color } from 'react-native-material-design-styles';
 import {Link} from "react-scroll";

 
 
const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    maxWidth:2000,
  },


});

export default function NavBar() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    
  };
  
  const { timing } = slideInDown;
  const { ref } = useWebAnimations({
    keyframes: [
      {transform: "translate(0px)",backgroundColor:color.googleGreen100.color},
      {transform: "translate(0px)",backgroundColor:color.paperPurple200.color},
      {transform: "translate(0px)" ,backgroundColor:color.paperRed100.color}
  ],
    timing: {
      ...timing,
      delay: 500,
      direction: "alternate",
      iterations: Infinity,
      duration: timing.duration * 3,
      easing: "ease-in-out",
    }
  });
  return (
    <Paper square className={classes.root}  >
      <Tabs
        value={value}
        onChange={handleChange}
        variant="fullWidth"
        indicatorColor="secondary"
        textColor="inherit"
        aria-label="icon tabs example"
        ref={ref}
        
      >
        <Tab icon={<HomeIcon />}  aria-label="phone"  component={Link} to="Home" smooth = "true"  duration={1000} ></Tab>
        <Tab icon={<InfoIcon />}   aria-label="favorite" component={Link} to="About" smooth = "true"  duration={1000} />
        <Tab icon={<PhoneIcon />} aria-label="person"  component={Link} to="contact" smooth = "true"  duration={1000} />
      </Tabs>
    </Paper>
  );
}
