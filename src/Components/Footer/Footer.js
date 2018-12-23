import React from 'react';
import img from  './icons/facebook.png';
import img1 from './icons/flickr.png';
import img2 from './icons/twitter.png';
import img3 from './icons/yahoo.png';
import img4 from './icons/youtube.png';

const Footer =()=>{
    const style={
        // marginTop:'1px',
        paddingTop:'20px',
        paddingBottom:'20px',
        textAlign:'center',
        backgroundColor:'#538ccc',
      backgroundImage: 'linear-gradient(to right, rgba(300,0,0,0), rgb(130, 69, 69))',
    }
return(
    <div id="footer" style={style}>
        <div className="  text-center bg-dark py-5 ">
        <p className="display-5 text-white ">Developed By Usman</p>
        <img src={img} alt="images"></img>
        <img src={img1} alt="images"></img>
        <img src={img2} alt="images"></img>
        <img src={img3} alt="images"></img>
        <img src={img4} alt="images"></img><br/>
        <p>Copyright© Gomics 2018 All rights reserved</p>
        </div>
    </div>
     
)
}

export default Footer;