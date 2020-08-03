import React from "react";
import { Typography } from "@material-ui/core";
import { color } from 'react-native-material-design-styles';

const Footer = () => {
  return (
    <div
      style={{
        display: "flex",
        backgroundColor: color.paperPink200.color,
        color: "white",
        height: "50px",
        alignItems: "center",
      }}
    >
      <Typography style={{ textAlign: "center", flex: 1 }}>
        Nabia Sabzwari © 2020
      </Typography>
    </div>
  );
};

export default Footer;
