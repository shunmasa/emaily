import React,{ Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Payments extends Component {
render() {
return (
  <StripeCheckout 
  name="Emaily"
  description="$5 for 5 email credits"
  amount={500} 
  token={ token => this.props.handleToken(token)}
  stripeKey={process.env.REACT_APP_STRIPE_KEY}
  >
 <button className="btn">
Add credits
</button>
  </StripeCheckout>    
 );
 }
}
//process.env.REACT_APP....it does not exist entirely replace by the actualle key
//process.env is nesecarry 
//specify what currency and denomination they uses
//cents 5$ = 500 cents//token ->callback property to go stripe .authorization api 



export default connect(null,actions)(Payments);