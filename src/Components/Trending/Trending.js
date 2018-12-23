import React, {Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
import blockchain2 from './blockchain/Capture2.PNG';
import play from './blockchain/trend.jpg';
import home from './blockchain/SweetHome.jpg';
import superhero from './blockchain/super.jpg';

import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Contact from '../Contact/Contact';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import WOW from "wowjs";

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 500,
    height: 450,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
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
});


  
   const tileData = [
     {
       img: blockchain2,
       title: 'What is Bockchain?',
       author: 'usman',
     },
     {
        img: play,
        title: 'Lets Play',
        author: 'Ashraf',
      },
      {
        img: home,
        title: 'Super Hero',
        author: 'Zeshan',
      },
      {
        img: superhero,
        title: 'Sweet Home',
        author: 'Zeshan',
      },
     
   ]
   
class Trending extends Component {
  componentDidMount() {
    new  WOW.WOW().init();
         }

render(){
  const { classes } = this.props;

  return (
     <div  > 
    <div className={classes.root}>
     <Paper className={classes.papers2}><Typography className={classes.textcolor} variant="h5" id="trending">Trending Of The Day</Typography><hr size="5" color="white" width="60px"/></Paper> 

      <GridList cellHeight={180} className={classes.gridList}>
        <GridListTile className="wow slideInUp" data-wow-duration='3s' key="Subheader" cols={2} style={{ height: 'auto' }}>
          <ListSubheader component="div">Top Stories</ListSubheader>
        </GridListTile>
        {tileData.map(tile => (
          <GridListTile className="wow zoomIn" data-wow-duration='3s' key={tile.img}>
            <img src={tile.img} alt={tile.title} />
            <GridListTileBar
              title={tile.title}
              subtitle={<span>by: {tile.author}</span>}
              actionIcon={
                <IconButton className={classes.icon}>
                  <InfoIcon />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
       
    </div>
    <Contact/>
    </div>
  );
}}

export default withStyles(styles)(Trending);