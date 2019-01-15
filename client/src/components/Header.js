import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Payments from './Payments';

class Header extends Component {
renderContent(){
switch (this.props.auth){
case null:
 return ;
case false:
 return <li><a href="/auth/google">Login with google</a></li>;
default:
 return [
 <li key="1"><Payments /></li>,
 <li key="3" style={{ margin: '0 10px' }}>
  Credits:{this.props.auth.credits}  
 </li>,
 <li key="2"><a href="/api/logout">Logout</a></li>
];
}
}
//need unique key 
//prop off property 
render() {
return (
<nav>
<div className="nav-wrapper">
<Link to={this.props.auth ? '/surveys' : '/'} 
className="left brand-logo"
>
  Emaily
 </Link>
 <ul className="right">
    {this.renderContent()} 
 </ul>
 </div>   
</nav>
);
}
} 

function mapStateToProps({auth}) {
return { auth };
}

//mapstateToProps(state) {return {auth: state.auth}}
// mapstatetoprops({ auth}) return {auth}
//mapstatetoprop connect function to export default connect()
export default connect(mapStateToProps)(Header);

//mapstatetoprops ...always state






//class basic components because helper the function //function component is little bit messy 