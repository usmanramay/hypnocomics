import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { withStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import MainDrawer from '../Drawer/Drawer';
import Button from '@material-ui/core/Button';
import logo from '../../images/images.jpg';
import { Link} from 'react-router-dom';

import './Header.css';
const styles = theme => ({
    root: {
      width: '100%',
    },
    grow: {
      flexGrow: 1,
    },
    menuButton: {
      marginLeft: 0,
      marginRight: 20,
    },
    title: {
      flexGrow: 1,
      fontSize:'20px',
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
    },
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing.unit,
        width: 'auto',
      },
    },
    searchIcon: {
      width: theme.spacing.unit * 9,
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'inherit',
      width: '100%',
    },
    button:{
      padding: theme.spacing.unit*3,
      color:'white',
      fontWeight: 'bold',
      fontSize:'12px',
      [theme.breakpoints.down('md')]: {
        display:'none',
        
      },
      
    },
    
    inputInput: {
      paddingTop: theme.spacing.unit,
      paddingRight: theme.spacing.unit,
      paddingBottom: theme.spacing.unit,
      paddingLeft: theme.spacing.unit * 10,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: 120,
        '&:focus': {
          width: 200,
        },
      },
    },
  });
class Header extends Component {
    render() {
        const { classes } = this.props;
        return (
          
             <div className={classes.root}>
              <AppBar position="fixed" >
                       <Toolbar className="bgcolor">
                      
                       <IconButton className={classes.menuButton} color="inherit" aria-label="Open drawer">
                       <MainDrawer/>   
                       </IconButton>
                       <IconButton>
                        <img  className="logo" src={logo} alt="logo"></img>
                       </IconButton >
                       <Typography className={classes.title} variant="h6" color="inherit" noWrap>
                         HYPNO COMICS
                       </Typography>
                       <Button  color="primary" href="#cover" className={classes.button}>
                        Home
                      </Button>
                      <Button href="#featured"  color="primary" className={classes.button}>
                        Featured
                      </Button>
                      <Button href="#geners"  color="primary" className={classes.button}>
                        Geners
                      </Button>
                      <Button href="#popular"  color="primary" className={classes.button}>
                        Popular
                      </Button>
                      <Button href="#trending"  color="primary" className={classes.button}>
                        Trending
                      </Button>
                      <Button  href="#contact-us" color="primary" className={classes.button}>
                        Contact Us
                      </Button>
                       
                   <div className={classes.grow} />
                   <div className={classes.search}>
                   <div className={classes.searchIcon}>
                       <SearchIcon />
                   </div>
                     <InputBase
                       placeholder="Search…"
                       classes={{
                       root: classes.inputRoot,
                       input: classes.inputInput,
                     }}
                   />
                 </div>
               </Toolbar>
             </AppBar>
           </div>
   
        );
    }
}

export default withStyles(styles)(Header);