import React from 'react';
import {connect} from 'react-redux'
import Snack from '../Components/Snack'

const SnackContainer = (props) => (
  <div>
    <h2>Here are the list of snacks that you can buy!</h2>
    <ul>
      {props.snacks.map(snack => <Snack key={snack.id} snack={snack}/>)}
    </ul>
  </div>
);

const mapStateToProps = ({snack}) => {
  return{
    snacks: snack.all
  }
}

export default connect(mapStateToProps)(SnackContainer);
