import React from 'react';
import '../Video/Video.css';

class Video extends React.Component {
    render() {
        return <div className='Video'>
            <video className='VideoContent' autoPlay loop>
                <source src={this.props.url} type="video/mp4"/>
            </video>
        </div>
    }
}

export default Video;