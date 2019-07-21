import React, { Component } from 'react';

import '../styles/newsletter.scss';

class Newsletter extends Component {
  render() {
    return (
      <div className="s-newsletter">
        <div className="s-newsletter__container">
          <div className="c-divider"></div>
          <div className="s-newsletter__headline">
            Subscribe to Portail Newsletter
          </div>
          <div className="s-newsletter__tagline">
            No spam, ever. Your email address will only ever be used for Portail News
            and you can easily unsubscribe with a single click any time.
          </div>
          <div className="s-newsletter__action">
            <input type="email" placeholder="your email address"/>
            <button>
              Subscribe
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Newsletter;
