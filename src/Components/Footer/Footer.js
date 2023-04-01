import React from 'react';
import '../Footer/Footer.css';

class Footer extends React.Component {
    render() {
        
        return <div className='Footer'>
            <div className='FooterSubscribe'>
                <iframe src="https://icantcope.substack.com/embed" width="480" height="100" frameborder="0" ></iframe>
                {/* <div className='OverlayButton'>
                <p className='OverlayButtonCopy'>Send it</p>
            </div> */}
                <p className='FooterSubscribeDescription'>Reflections in your inbox. No spam – that would be <i>against</i> the point.</p>
            </div>
            <a href="https://twitter.com/gvns0x" rel="noreferrer" target="_blank">gvns↗</a>
            
        </div>
    }
}

export default Footer;