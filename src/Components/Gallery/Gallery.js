import React from 'react';
import '../Gallery/Gallery.css';
import Item from '../Item/Item.js';
class Gallery extends React.Component {

    render() {
        const { data } = this.props;
    const items = data.map(item => {
      if (item.fields.Status === 'Live') {
        return (
          <div key={item.id}>
            <Item alt={item.fields.AltText} type={item.fields.Type} url={item.fields.File[0].url} />
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