import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Navbar extends Component {
  static defaultProps = {
    title: 'Github',
    icon: 'fab fa-github-alt'
  }

  render() {
    return (
      <nav className="navbar bg-primary">
        <h1><i className={this.props.icon}></i> {this.props.title}</h1>
      </nav>
    );
  }

  static propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
  }
}

export default Navbar;