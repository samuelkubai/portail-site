import React, { Component } from 'react';

import "../styles/footer.scss";

class Footer extends Component {
  render() {
    return (
      <div className="s-footer">
        <div className="s-footer__container">
          Build and maintained by <a target="_blank" href="https://www.linkedin.com/in/samuel-kamau-wizxs/">Samuel Kubai</a>
        </div>
      </div>
    )
  }
}

export default Footer;
