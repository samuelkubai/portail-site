import React, {Component} from 'react';

import '../styles/demo.scss';

class Demo extends Component {
  render() {
    return (
      <div className="s-demo">
        <div className="s-demo__container">
          <div className="s-demo__info">
            <div className="s-demo__title">
              Simple interface
            </div>
            <div className="s-demo__tagline">
              We have a simple interface to manage your recording from, with simple start
              and stop recording. With a simple interface for configuring the
              application’s settings
            </div>
          </div>


          <div className="s-demo__image">
            <img src="./static/demo.png" alt="Demo"/>
          </div>
        </div>
      </div>
    )
  }
}

export default Demo;
