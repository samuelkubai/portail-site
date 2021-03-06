import React, { Component } from 'react';

import '../styles/hero.scss';

class Hero extends Component {
  render() {
    return (
      <div className="s-hero">
        <div className="s-hero__container" >
          <div className="s-hero__logo">
            <svg width="85" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13.559.113A11.944 11.944 0 0 0 12 0C5.383 0 0 5.383 0 12s5.383 12 12 12 12-5.383 12-12C24 5.913 19.44.88 13.559.113zm7.606 6.778H10.783L13.8 1.666a10.519 10.519 0 0 1 7.365 5.225zm-7.082 8.714H9.917l-2.083-3.607 2.083-3.607h4.166l2.083 3.607-2.083 3.607zM12 1.5c.054 0 .106.007.159.008l-5.19 8.99-3.02-5.227A10.481 10.481 0 0 1 12 1.5zM3 6.622l5.186 8.983H2.15A10.418 10.418 0 0 1 1.5 12c0-1.967.554-3.803 1.5-5.378zm-.167 10.483h10.384l-3.019 5.229a10.517 10.517 0 0 1-7.365-5.229zM12 22.5c-.054 0-.107-.007-.16-.008l5.191-8.994 3.02 5.23A10.48 10.48 0 0 1 12 22.5zm9.002-5.124l-5.188-8.985h6.033A10.42 10.42 0 0 1 22.5 12c0 1.966-.553 3.801-1.498 5.376zM35.173 12.99V18h-1.688V5.203h4.72c1.4 0 2.496.358 3.287 1.072.797.715 1.196 1.662 1.196 2.84 0 1.241-.39 2.2-1.17 2.873-.773.668-1.883 1.002-3.33 1.002h-3.015zm0-1.38h3.032c.902 0 1.594-.21 2.074-.633.48-.427.721-1.042.721-1.845 0-.762-.24-1.371-.72-1.828-.481-.457-1.14-.695-1.978-.712h-3.13v5.018zm8.86 1.547c0-.931.18-1.77.544-2.513.37-.745.88-1.319 1.53-1.723.656-.404 1.403-.607 2.24-.607 1.296 0 2.341.449 3.138 1.345.803.897 1.205 2.089 1.205 3.577v.115c0 .925-.18 1.757-.537 2.496a4.004 4.004 0 0 1-1.52 1.714c-.656.41-1.412.615-2.268.615-1.289 0-2.335-.448-3.138-1.345-.796-.896-1.195-2.083-1.195-3.56v-.114zm1.634.194c0 1.054.243 1.901.73 2.54.492.638 1.148.958 1.968.958.826 0 1.483-.323 1.969-.967.486-.65.73-1.559.73-2.725 0-1.043-.25-1.886-.748-2.531-.492-.65-1.148-.976-1.968-.976-.803 0-1.45.32-1.943.958-.492.64-.738 1.553-.738 2.743zm13.658-3.402a4.872 4.872 0 0 0-.8-.061c-1.066 0-1.79.454-2.17 1.362V18h-1.627V8.49h1.582l.027 1.099c.533-.85 1.289-1.275 2.267-1.275.317 0 .557.041.721.123V9.95zm4.149-3.761V8.49h1.775v1.257h-1.775v5.898c0 .38.079.668.237.86.158.188.428.282.808.282.188 0 .446-.035.774-.105V18a4.714 4.714 0 0 1-1.248.176c-.727 0-1.275-.22-1.644-.66-.369-.439-.553-1.063-.553-1.871V9.747h-1.732V8.49h1.732V6.187h1.626zM73.027 18c-.093-.188-.17-.521-.228-1.002-.756.785-1.658 1.178-2.707 1.178-.938 0-1.708-.264-2.312-.791-.597-.533-.896-1.207-.896-2.022 0-.99.375-1.758 1.125-2.303.756-.55 1.816-.826 3.181-.826h1.582v-.747c0-.568-.17-1.02-.51-1.353-.34-.34-.84-.51-1.502-.51-.58 0-1.067.147-1.46.44-.392.292-.588.647-.588 1.063h-1.635c0-.475.167-.932.501-1.371.34-.445.797-.797 1.371-1.055a4.643 4.643 0 0 1 1.907-.387c1.096 0 1.955.276 2.576.827.62.545.943 1.297.966 2.258v4.377c0 .873.112 1.568.334 2.083V18h-1.705zm-2.698-1.24c.51 0 .993-.131 1.45-.395.457-.263.788-.606.993-1.028v-1.951h-1.274c-1.992 0-2.988.583-2.988 1.749 0 .51.17.908.51 1.195.34.287.776.43 1.31.43zM78.714 18h-1.626V8.49h1.626V18zM76.956 5.968c0-.264.08-.487.237-.668.164-.182.405-.273.721-.273.317 0 .557.091.72.273a.96.96 0 0 1 .247.668.929.929 0 0 1-.246.659c-.164.176-.404.264-.72.264-.317 0-.558-.088-.722-.264a.949.949 0 0 1-.237-.66zM83.091 18h-1.626V4.5h1.626V18z" fill="#1E2834"/>
            </svg>
          </div>

          <div className="s-hero__headline">
            Screen recording should be easy
          </div>

          <div className="s-hero__tagline">
            Portail is a beautiful, flexible screen recording app built with the user in mind.
            This is our public alpha shoot some feedback our way
          </div>

          <div className="s-hero__action">
            <input type="text" value="> brew install portal" readOnly={true} />
            <a target="_blank" href="https://dl.dropbox.com/s/o4336tvlkuadeh5/Portail-darwin-x64-1.0.1.zip?dl=0">
               Download Portail
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Hero;
