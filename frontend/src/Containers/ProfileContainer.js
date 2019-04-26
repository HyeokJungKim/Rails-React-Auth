import React from 'react';
import {connect} from 'react-redux'
import UserSnacks from '../Components/UserSnacks'

const ProfileContainer = (props) => (
  <div>
    <h2>Hello {props.username}</h2>
    <p>You have ${props.money} to spend!</p>
    <UserSnacks/>
  </div>

);

const mapStateToProps = ({user}) => {
  return user
}

export default connect(mapStateToProps)(ProfileContainer);
