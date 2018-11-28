import React from 'react';
import '../scss/components/button.scss';

const Button = props => (
    <button
        className='default-button'
        type='submit'
    >
        {props.children}
    </button>
);

export default Button;