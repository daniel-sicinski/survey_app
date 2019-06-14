import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Payments from './Payments'


class Header extends Component {
    renderNavContent() {
        switch(this.props.auth) {
            case null:
                return;
            case false:
                return <li><a href="/auth/google">Login With Google</a></li>
            default:
                return [
                <li key='1'><Payments></Payments></li>,
                <li key='2'>Credits: {this.props.auth.credits}</li>,
                <li key='3'><a href="/api/logout">Logout</a></li>
            ]
        }
    };

    render() {  
        return (
            <nav>
            <div className="nav-wrapper">
                <Link 
                to={this.props.auth ? '/surveys' : '/'}
                className="left brand-logo"
                >
                Emaily</Link>
              <ul className="right">
                {this.renderNavContent()}
              </ul>
            </div>
          </nav>
         );
    }
}

const mapStateToProps = ({ auth }) => ({ auth })
 
export default connect(mapStateToProps)(Header);