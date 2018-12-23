import React, { Component } from 'react';
import './popular.css';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import {Grid} from '@material-ui/core';
import img from '../../images/pic1.png'
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Geners from '../Geners/Geners';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import blockchain from './images/blockchain.png';
import storiesaround from './images/pic2.jpg';
import old from './images/pic3.jpg';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Contact from '../Contact/Contact'
import Trending from '../Trending/Trending';
import IconButton from '@material-ui/core/IconButton';
import WOW from "wowjs";

const images = [
    {
      url: blockchain,
      title: 'What is BlockChain.? ',
      desp:"A digital ledger in which transactions made in bitcoin or another cryptocurrency are recorded chronologically and publicly.",
     
      
    },
    {
      url: storiesaround,
      title: 'The Stories ',
      desp:"Summer is happily in love; Mira is a beautiful and successful woman but doesn’t have a boyfriend; Jung-A lives with her boyfriend for 5 years. ",
    },
    {
      url: old,
      title: 'Old Couples',
      desp:"Summer is happily in love; Mira is a beautiful and successful woman but doesn’t have a boyfriend; Jung-A lives with her boyfriend for 5 years. ",
     
    },
    
    
  ];
  const styles = {
    card: {
      maxWidth: 340,
      },
    media: {
     
      objectFit: 'cover',
      },
    root: {
        flexGrow: 1,
        paddingTop:80,
        width:'97%'
      },
    paper: {
        height: 140,
        width: 100,
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
      
     
  };
class Populor extends Component {
  componentDidMount() {
    new  WOW.WOW().init();
 }

    render() {
    const {classes}=this.props;

        return (
            <div >
                  <Paper className={classes.papers2}><Typography className={classes.textcolor} variant="h5" id="popular">Popular</Typography><hr size="5" color="white" width="60px"/></Paper> 

                <div className="popcover">
                <Grid container className={classes.root} >
                <Grid item xs={12}>
                 <Grid container  justify="center" spacing={16}>
            { 
           images.map((data)=>(
             
        <Grid className="wow zoomIn" data-wow-duration='3s' item  >   
         <Card className={classes.card}>
              <CardActionArea>
              <CardHeader
          avatar={
            <Avatar aria-label="R">
              C
            </Avatar>
          }
          action={
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          }
          
          subheader="September 15, 2018"
        />
                <CardMedia
                 component="img"
                 alt="adds images"
                 className={classes.media}
                 height="180"
                 image={data.url}
                 title={data.title}
                 />
                 <CardContent>
                
                 <Typography variant="h6">
                     {data.title} 
                       <Button size="small" color="primary">
                        <FavoriteBorderIcon/>
                        </Button> 
            
                 </Typography>
                 <Typography paragraph>
                    {data.desp}
                </Typography>
                 
              </CardContent>
             </CardActionArea>
             </Card>
             </Grid>
            
         ))}
            </Grid> 
            </Grid> 
            </Grid>
                    
            </div>
            <Trending/>
            </div>
        );
    }
}

export default withStyles(styles)(Populor);