import React from 'react';
import '../Item/Item.css';

class Item extends React.Component {
    render() {
        return <div className='Item'>
            <img className="ItemContent" alt={this.props.alt} src={this.props.url}/> 
        </div>;

    }
}

export default Item;