//Import React
import React from 'react'

//Import Redux Components
import { connect } from 'react-redux';

//Import Action
import { qryAccts } from '../actions/index';

class Datatable extends React.Component {
  constructor (props)
  {
    super(props);
  }

  //Perform Functions when our React Component is about to mount
  componentWillMount()
  {
    this.props.dispatch(qryAccts());
  }



  render () {
    return (
      <div>
      <div className="slds-text-heading--medium">Accounts</div>

        <table className="slds-table slds-table--bordered">
          <thead>
            <tr className="slds-text-heading--label">

              <th className="slds-is-sortable" scope="col">
                <div className="slds-truncate"> Name
                </div>
              </th>
              <th className="slds-is-sortable" scope="col">
                <div className="slds-truncate"> Id
                </div>
              </th>
              <th className="slds-is-sortable" scope="col">
                <div className="slds-truncate"> Website
                </div>
              </th>
              <th className="slds-is-sortable" scope="col">
                <div className="slds-truncate"> Owner
                </div>
              </th>
              <th className="slds-cell-shrink"></th>
            </tr>
          </thead>
          <tbody>
           {this.props.accts.map((v,i) =>
             <tr className="slds-hint-parent" key={i}>
               <td className="slds-truncate">
                 {v.Name}
               </td>
               <td className="slds-truncate">
                 {v.Id}
               </td>
               <td className="slds-truncate">
                 {v.Website}
               </td>
               <td className="slds-truncate">
                 {v.Owner.Name}
               </td>
             </tr>
           )}
          </tbody>
        </table>
        <ul>

        </ul>
      </div>
    );
  }
}

//Connects Redux State to React, Injects reducer as a property
export default connect(state => ({ accts: state.accts }))(Datatable);
