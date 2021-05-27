import React from 'react';

const Nav = ()=>{
return (
    <>
<div className="topnav" id="myTopnav">
    <span className='logo'>Abdul Samad</span>
  <a href="upcoming">Upcoming</a>
  <a href="tools">Tools</a>
  <a href="/" className="active">Main</a>
  <a href='null' className="icon" onclick="myFunction()">
    <i className="fa fa-bars"></i>
  </a>
</div>
</>
);
}

export default Nav;