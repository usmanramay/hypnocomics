import React, { Component } from 'react';
import './Cover.css';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import {Grid} from '@material-ui/core';
import img from '../../images/pic1.png'
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Geners from '../Geners/Geners';
import WOW from "wowjs";


const styles = {
    papers:{
        boxShadow:'none',
        
        textAlign:'center'
     
        },
        papers2:{
            
            boxShadow:'none',
            textAlign:'center',
            width: '100%',
            paddingTop:'10px',
            paddingBottom:'10px',
            backgroundColor: 'rgb(107, 139, 241)',
            backgroundImage: 'linear-gradient(to right, rgba(255,0,0,0), rgb(153, 69, 69))',
            borderRadius:'unset',
            },
        textcolor:{
            color:'white',
        },
        btn:{
            color:'white',
            backgroundColor:'rgb(153, 69, 69)',
        }    
  };
class Cover extends Component {
    componentDidMount() {
        new  WOW.WOW().init();
             }
    
    render() {
    const {classes}=this.props;

        return (
            <div id="cover">
                <div  className="mycover"></div>
                  <Paper className={classes.papers2}><Typography id="featured" className={classes.textcolor} variant="h5">FEATURED</Typography><hr size="5" color="white" width="60px"/></Paper> 
                 <Grid container>
                 <Grid xs={12} sm={12} md={6} lg={6}>
        
                    <div className="div-text">
                    <div className="wow slideInLeft" data-wow-duration='3s'>
                        <h1>The Vault of Horror: A Collection of Nightmares</h1>
                        <h4>In the mood for a scare? You've come to the right place. Welcome to a world of nightmares and terror, 
                            created by the masters of horror at LINE Webtoon. Enter at your own risk.</h4>
                            <Button className={classes.btn}>
                             Read More
                            </Button>
                     </div>       
                    </div>
                    
                    </Grid>
                    <Grid xs={12} sm={12} md={6} lg={6}>
                    <Paper className={classes.papers}>
                       <div>
                        <img src={img} aly="comics pictres" width="80%" ></img>
                       </div>
                    </Paper>
                    </Grid>
                    </Grid>

                    <Geners/>
                    
                    </div>
            
        );
    }
}

export default withStyles(styles)(Cover);