
//Import React
import React from 'react'

//Import Redux Components
import { connect } from 'react-redux';

//Import Action
import { qryAccts } from '../actions/index';

class Search extends React.Component {
  constructor (props)
  {
    super(props);
  }

  //Perform Functions when our React Component is about to mount
  componentWillMount()
  {
    // this.props.dispatch(qryAccts());
  }



  render () {
    return (
      <div className="slds-form-element">
       <label className="slds-form-element__label" for="text-input-01">Search Account</label>
       <div className="slds-form-element__control">
         <input id="text-input-01" className="slds-input" type="text" placeholder="Search Account" />
       </div>
     </div>

    );
  }
}

//Connects Redux State to React, Injects reducer as a property
export default connect(state => ({ accts: state.accts }))(Search);
