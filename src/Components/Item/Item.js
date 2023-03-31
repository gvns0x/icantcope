import React from 'react';
import '../Item/Item.css';

class Item extends React.Component {
  render() {
    const type = this.props.type === 'Video';
    const mediaContent = type ? (
      <video className="ItemContent" autoPlay muted loop>
        <source src={this.props.url} type="video/mp4" />
      </video>
    ) : (
      <img className="ItemContent" alt={this.props.alt} src={this.props.url} />
    );

    return <div className="Item">{mediaContent}</div>;
  }
}

export default Item;
