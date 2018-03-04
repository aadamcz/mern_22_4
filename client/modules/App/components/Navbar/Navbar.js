import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { browserHistory } from 'react-router';

const navOptions = ['home', 'posts', 'about'];

class Navbar extends Component {
  constructor(props) {
    super(props);
  }

  handleNavbarChange(option) {
    this.setState({
      selectedPage: option,
    });
    browserHistory.push(`/${option}`);
  }

  render() {
    return (
      <div>
        <ul>
          {
            navbarOptions.map(option => {
              return (
                <li key={option} onClick={() => this.handleNavbarChange(option)}>
                  <FormattedMessage id={`${option}`} />
                </li>
              );
            })
          }
        </ul>
      </div>
    );
  }
}

export default Navbar;