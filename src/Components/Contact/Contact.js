import React, { Component } from 'react';

import {Button,Input} from '@material-ui/core';
import PhoneInTalkIcon from '@material-ui/icons/PhoneInTalk';
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import TextField from '@material-ui/core/TextField';
import './Contact.css';
import Footer from '../Footer/Footer';
import WOW from "wowjs";


const styles = theme => ({
    layout: {
      width: 'auto',
      display: 'block', // Fix IE 11 issue.
      marginLeft: theme.spacing.unit * 3,
      marginRight: theme.spacing.unit * 3,
      
      [theme.breakpoints.up(600 + theme.spacing.unit * 3 * 2)]: {
        width: 600,
        // marginLeft: 'auto',
        marginRight: 'auto',
      },
    },
    paper: {
      marginTop: theme.spacing.unit * 8,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      backgroundColor:'#538ccc',
      backgroundImage: 'linear-gradient(to right, rgba(300,0,0,0), rgb(130, 69, 69))',
      padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
    },
    avatar: {
      margin: theme.spacing.unit,
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing.unit,
    },
    submit: {
      marginTop: theme.spacing.unit * 3,
    },
    txtcolor:{
        color:'white'
    },
    bgcolor:{
        backgroundColor:'#538ccc',
      backgroundImage: 'linear-gradient(to right, rgba(300,0,0,0), rgb(130, 69, 69))',
    }
   
  });
class Contact extends Component {

  componentDidMount() {
    new  WOW.WOW().init();
         }

    constructor(){
        super();
        this.state={
           username:'',
           password:'' 
        }
    }
    changehandler = name => event => {
        this.setState({
          [name]: event.target.value,
        }); 
      };

    
       

   

    render() {
        const { classes } = this.props;
        return (  
      <div id="contact-us">
        <div className="backcover">
          <div className={classes.layout}>
          <div className="wow zoomIn" data-wow-duration='3s'>
            <Paper className={classes.paper}>
              <Avatar className={classes.avatar}>
                <PhoneInTalkIcon />
              </Avatar>
              <Typography className={classes.txtcolor} variant="h5">
                Contact Us
              </Typography>
              <form   className={classes.form}>
                <FormControl margin="normal" required fullWidth>
                  <InputLabel className={classes.txtcolor}  htmlFor="name">Enter Name</InputLabel>
                  <Input name="name" onChange={this.changehandler('username')}   />
                </FormControl>
                <FormControl margin="normal" required fullWidth>
                  <InputLabel className={classes.txtcolor}  htmlFor="email">Enter Email</InputLabel>
                  <Input
                    name="email"
                    type="email"
                    onChange={this.changehandler('email')}
                  />
                </FormControl>
                <FormControl margin="normal" required fullWidth>
                  <InputLabel className={classes.txtcolor}  htmlFor="subjct">Enter Subject</InputLabel>
                  <Input
                    name="subject"
                    type="text"
                    onChange={this.changehandler('subject')}
                  />
                </FormControl>
                <FormControl margin="normal" required fullWidth>
                  
                  <TextField
                   id="outlined-textarea"
                   placeholder="Enter Discription"
                   rows="5"
                   multiline
                   margin="normal"
                   variant="outlined"
                 />
                </FormControl>
      
                 <Button
                   type="submit"           
                   fullWidth
                   variant="contained"
                   color="primary"
                   className={classes.submit}
                 >
                   Submit
                 </Button>
               </form>
            </Paper>
            </div>
           </div>
           </div>
           <Footer/>
           </div>
           
        );
    }
}

export default withStyles(styles)(Contact);


