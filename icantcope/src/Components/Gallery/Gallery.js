import React from 'react';
import '../Gallery/Gallery.css';
import Item from '../Item/Item.js';
import Placeholder from '../../Images/Placeholder.png';
import Vid from '../../Images/SwipeB&W.mov';
import Video from '../Video/Video.js';
import axios from 'axios';
class Gallery extends React.Component {

    render() {
        const { data } = this.props;
    const items = data.map(item => {
      if (item.fields.Status === 'Live') {
        return (
          <div key={item.id}>
            <Item type={item.fields.Type} url={item.fields.File[0].url} />
          </div>
        );
      } else {
        return null;
      }
    });
        
        console.log(data)
        
        return <div className='Gallery'>
            {items}
        </div>
    }
}

export default Gallery;