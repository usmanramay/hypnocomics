import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import Logo from '../../images/images.jpg';
import HomeIcon from '@material-ui/icons/Home';
import HowToRegIcon from '@material-ui/icons/HowToReg';
import ListAltIcon from '@material-ui/icons/ListAlt';
import InputIcon from '@material-ui/icons/Input';
import PhoneInTalkIcon from '@material-ui/icons/PhoneInTalk';
import StarIcon from '@material-ui/icons/Star';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import DashboardIcon from '@material-ui/icons/Dashboard';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';


const styles = {
  list: {
    width: 250,
    backgroundColor: 'rgb(107, 139, 241)',
    backgroundImage: 'linear-gradient(to right, rgba(255,0,0,0), rgb(153, 69, 69))',
  },
  fullList: {
    width: 'auto',
  },
  mainIcon:{
    marginLeft:65, 
  },
  img_width:{
    width:'80px',
    borderRadius:'60px'
  }
};

class MainDrawer extends Component {

  state = {
   
    left: false,
    
  };

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });
  };

  render() {
    const { classes } = this.props;

    
    const sideList = (
      <div className={classes.list} >
      <IconButton className={classes.mainIcon} >
              <img  src={Logo} className={classes.img_width} alt="logo"></img>
           </IconButton >
        <List>
        
           <Divider/>
          <ListItem><Button href="#cover" ><ListItemIcon><HomeIcon/></ListItemIcon>Home</Button></ListItem> 
          <ListItem><Button href="#featured" ><ListItemIcon><ListAltIcon/></ListItemIcon>Featured</Button></ListItem> 
          <ListItem><Button href="#geners" ><ListItemIcon><DashboardIcon/></ListItemIcon>Geners</Button></ListItem> 
          <ListItem><Button href="#popular" ><ListItemIcon><StarIcon/></ListItemIcon>populor</Button></ListItem> 
          <ListItem><Button href="#trending" ><ListItemIcon><TrendingUpIcon/></ListItemIcon>trending</Button></ListItem> 
          <ListItem><Button href="#contact-us" ><ListItemIcon><PhoneInTalkIcon/></ListItemIcon>contact us</Button></ListItem> 
          
        </List>
        
        
      </div>
    );


    return (
      <div >
       <IconButton color="inherit" aria-label="Menu">
            <MenuIcon onClick={this.toggleDrawer('left', true)}/>
       </IconButton>
        
        <Drawer open={this.state.left} onClose={this.toggleDrawer('left', false)}>
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer('left', false)}
            onKeyDown={this.toggleDrawer('left', false)}
          >
            {sideList}
          </div>
        </Drawer>
        
      </div>
    );
  }
}

export default withStyles(styles)(MainDrawer);






