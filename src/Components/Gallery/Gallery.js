import React from 'react';
import '../Gallery/Gallery.css';
import Item from '../Item/Item.js';

const PLACEHOLDER_COUNT = 4;

class Gallery extends React.Component {
  render() {
    const { data, loading } = this.props;

    if (loading) {
      const placeholders = Array.from({ length: PLACEHOLDER_COUNT }, (_, index) => (
        <div key={`placeholder-${index}`}>
          <div
            className="Item Item--placeholder"
            style={{ '--media-w': 1, '--media-h': 1 }}
            aria-hidden="true"
          />
        </div>
      ));

      return <div className="Gallery">{placeholders}</div>;
    }

    const items = data.map((item) => {
      if (item.fields.Status === 'Live') {
        const file = item.fields.File[0];
        return (
          <div key={item.id}>
            <Item
              alt={item.fields.AltText}
              type={item.fields.Type}
              url={file.url}
              width={file.width}
              height={file.height}
              poster={file.thumbnails && file.thumbnails.large && file.thumbnails.large.url}
            />
          </div>
        );
      }
      return null;
    });

    return <div className="Gallery">{items}</div>;
  }
}

export default Gallery;
