import React from 'react';
import Typed from 'typed.js';
import '../scss/components/typewriter.scss';
class TypeWriter extends React.Component {
   
    componentDidMount() {
      const { strings, startDelay, elementId } = this.props;
      const options = {
        strings: strings,
        typeSpeed: 40,
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
        <div id={this.props.elementId}>
            <span className='typewriter-text'
              ref={(el) => { this.el = el; }}
            />
        </div>
      );
    }
  }

  export default TypeWriter;