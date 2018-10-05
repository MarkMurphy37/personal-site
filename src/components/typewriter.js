import React from 'react';
import Typed from 'typed.js';

class TypeWriter extends React.Component {
   
    componentDidMount() {
      const { strings, startDelay, elementId } = this.props;
      const options = {
        strings: strings,
        typeSpeed: 50,
        backSpeed: 50,
        cursorChar: '_',
        showCursor: false,
        startDelay: startDelay,
        preStringTyped: (arrayPos, self) => {
          document.getElementById(elementId).style.display = 'block';
        },
      };
      this.typed = new Typed(this.el, options);
    }

    componentWillUnmount() {
      this.typed.destroy();
    }
  
    render() {
      return (
        <div id={this.props.elementId} className='display-none terminal-line'>mark@markmurphy ~$&nbsp;
            <span className='typewriter-text'
              ref={(el) => { this.el = el; }}
            />
        </div>
      );
    }
  }

  export default TypeWriter;