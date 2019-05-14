import React from 'react';
import '../scss/components/footer.scss';
import Emoji from './emoji';

const Footer = () => (
    <div className='footer-wrapper'>
        <div className='footer-content'>
            <div className='footer-social'>
                Say hi on Twitter <Emoji symbol='👋🏼' /> <a className='twitter-handle' target="_blank" href='https://twitter.com/MarkMurphy37'>@MarkMurphy37</a>
            </div>
            <div className='footer-support'>
                Help support <Emoji symbol='👉🏼' /> <a target="_blank" href='https://fullyequipped.co/'>FullyEquipped</a>
            </div>
        </div>
    </div>
);

export default Footer;