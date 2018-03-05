import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { browserHistory } from "react-router";
import { Link } from "react-router";

const navbarOptions = ["home", "posts", "about"];

class Navbar extends Component {
  constructor(props) {
    super(props);
  }

  handleNavbarChange(option) {
    this.setState({
      selectedPage: option
    });
    browserHistory.push(`/${option}`);
  }

  render() {
    return (
      <div>
        <ul>
          {navbarOptions.map(option => {
            return (
              <li key={option} onClick={() => this.handleNavbarChange(option)}>
                <FormattedMessage id={`${option}`} /> 
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Navbar;

/* W linii 27 zamiast formatted message :
<li>
              <Link to=`/${option}`><FormattedMessage id={`${option}`} /></Link>
            </li>
*/        
