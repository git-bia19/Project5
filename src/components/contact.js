import { Form, Input,  Button } from 'antd';
import {Grid} from "@material-ui/core";
import React from "react"; 
import "../App.css";
import useWebAnimations, { slideInDown } from "@wellyshen/use-web-animations";
 import { color } from 'react-native-material-design-styles';

 const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const validateMessages = {
  required: '',
  types: {
    email: '',
    number: '',
  },
  number: {
    range: '',
  },
};

export default function Contact() {
  const onFinish = values => {
    console.log(values);
  }
  const { timing } = slideInDown;
    const { ref } = useWebAnimations({
      keyframes: [
        {transform: "translateX(0%)",backgroundColor:color.googleGreen100.color},
        {transform: "translateX(0%)",backgroundColor: color.paperPurple200.color},
        {transform: "translateX(0%)",backgroundcolor: "black"}
    ],
      timing: {
        ...timing,
        delay: 500,
        direction: "alternate",
        iterations: Infinity,
        duration: timing.duration * 6,
        easing: "ease-in-out",
      }
    });

  return (
    <div ref={ref} id="contact" >
    <Grid container style={{ marginTop: "330px",width:'100%',height:'100vh',fontSize:"20px",color:"white" }}>
    <Grid item sm={5} xs={12}>
    < h1 style={{fontSize:"50px",color:"white"}} >Contact us</h1>
    <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages} className="formItems" >
      <Form.Item
        name={['user', 'name']}
        label="Name"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input style={{width:"300px",height:"25px"}} />
      </Form.Item>
      <Form.Item
        name={['user', 'email']}
        label="Email"
        rules={[
          {
            type: 'email',
          },
        ]}
      >
        <Input style={{width:"300px",height:"25px"}} />
      </Form.Item>
      <Form.Item
        name={['user', 'age']}
        label="Age"
        rules={[
          {
            type: 'number',
            min: 0,
            max: 99,
          },
        ]}
      >
    <Input type="number" style={{width:"300px",height:"25px"}} />
      </Form.Item>
      <Form.Item name={['user', 'website']} label="Contact number">
        <Input style={{width:"300px",height:"25px"}} />
      </Form.Item>
      <Form.Item name={['user', 'introduction']} label="Leave us a message here">
        <Input.TextArea  style={{width:"300px",height:"45px"}} />
      </Form.Item>
      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
        <Button type="ghost" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
    </Grid>
    </Grid>
    <Grid sm={1} className="top" style={{fontSize:"25px",color:"white"}} >
      <Grid item sm={6} xs={12}>
    <h2>Our Social Media</h2> 
       <p style={{fontSize:"20px",color:"white"}} >
       <img src={require("../images/phone.png")} style={{width:"50px", height:"50px"}} alt=""></img> &nbsp;&nbsp; +03127636734 
       <p><br></br></p>
       <img src={require("../images/instaa.png")} style={{width:"40px", height:"50px"}} alt=""></img> 
       TheDesignX
       <p><br></br></p>
       <img src={require("../images/fb.jpg")} style={{width:"40px", height:"50px"}} alt=""></img>https://fb/designX.com
       </p>
      </Grid>
    </Grid> 
    </div>
  )};

