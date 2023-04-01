import React from 'react';
import '../Footer/Footer.css';

class Footer extends React.Component {
    state = {
        isHovered: false
    }

    handleLinkHover = () => {
        this.setState({
            isHovered: true
        });
    }

    handleLinkMouseOut = () => {
        this.setState({
            isHovered: false
        });
    }

    render() {
        const { isHovered } = this.state;

        return (
            <div className='Footer'>
                <div className='FooterContent'>
                <div className='FooterSubscribe'>
                    <iframe src="https://icantcope.substack.com/embed" title="Newsletter subscription form" max-width="480" height="100" frameborder="0"></iframe>
                    {/* <div className='OverlayButton'>
                    <p className='OverlayButtonCopy'>Send it</p>
                </div> */}
                    <p className='FooterSubscribeDescription'>Reflections in your inbox. No spam – that would defeat the purpose.</p>
                </div>
                <a href="https://twitter.com/gvns0x" rel="noreferrer" target="_blank" onMouseOver={this.handleLinkHover} onMouseOut={this.handleLinkMouseOut}>gvns↗</a>
                <p className={`Warning ${isHovered ? 'visible' : ''}`}>This will take you to my profile on Twitter. Be intentional. Don't get lost.</p>
                </div>
                </div>
        );
    }
}

export default Footer;
