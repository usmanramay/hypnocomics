import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import drama from './images/Drama.jpg';
import fantasy from './images/Fantasy.jpg';
import loneiless from './images/loniless.jpg';
import action from './images/action.jpg';
import historical from './images/histrorical.jpg';
import romance from './images/romance.jpg';
import IconButton from '@material-ui/core/IconButton';
import Popular from '../Popular/Popular'; 
import WOW from "wowjs";
import Paper from '@material-ui/core/Paper';

const images = [
  {
    url: drama,
    title: 'Drama',
   
    
  },
  {
    url: fantasy,
    title: 'Fantasy',
  
  },
  {
    url: action,
    title: 'Action',
   
  },
  {
    url: loneiless,
    title: 'LoneLiness',
   
  },
  
  {
    url: historical,
    title: 'Historical',
   
  },
  
  {
    url: romance,
    title: 'Romance',
   
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
        marginTop:10,
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

class Geners extends Component {
  componentDidMount() {
     new  WOW.WOW().init();
  }

    render() {
       
        let { classes } = this.props;

        return (
          <div>
        <Paper className={classes.papers2}><Typography className={classes.textcolor} variant="h5" id="geners">Geners</Typography><hr size="5" color="white" width="60px"/></Paper> 
            
            <div className="wow slideInUp" data-wow-duration='2s'>
            <Grid container className={classes.root} >
          <Grid item xs={12}>
           <Grid container  justify="center" spacing={16}>
          { 
           images.map((data)=>(
             
        <Grid item  >   
         <Card className={classes.card}>
              <CardActionArea>
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
                 
                 
              </CardContent>
             </CardActionArea>
             </Card>
             </Grid>
            
         ))}
            </Grid> 
            </Grid> 
            </Grid>
            <Grid ><Popular/></Grid> 
        </div>
     </div>
    );
    }
}



export default withStyles(styles)(Geners);

