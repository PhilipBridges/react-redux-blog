import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';

export class Header extends Component {
  render() {
    const user = this.props.user
    return (
      <header className="header">
        <div className="content-container">
          <div className="header__content">
            <Link className="header__title" to="/dashboard">
              <h1>Redux Blog</h1>
            </Link>
            <Link className="button button--link" to="/create">
              Create
        </Link>
            <Link className="button button--link" to="/profile">
              Profile ({this.props.user.name})
       </Link>
            <button className="button button--link" onClick={this.props.startLogout}>Logout</button>
          </div>
        </div>
      </header>
    )
  }
}

const mapStateToProps = (state) => ({
  user: state.profile
});

const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
