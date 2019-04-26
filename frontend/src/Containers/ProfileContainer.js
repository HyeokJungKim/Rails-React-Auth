import React, {Component} from 'react';
import {connect} from 'react-redux'
import UserSnacks from '../Components/UserSnacks'

import {Redirect} from 'react-router-dom'

class ProfileContainer extends Component {

  render() {
    return (
      <div>
        {!!this.props.token ?
           (
             <div>
              <p>
                USERNAME: {this.props.username}
              </p>
              <UserSnacks/>
            </div>
           )
            :
          <Redirect to="/login"/>
        }
      </div>

    );
  }

}


const mapStateToProps = ({user}) => {
  return {
    username: user.username,
    money: user.money,
    token: user.token,
  }
}

export default connect(mapStateToProps)(ProfileContainer);
