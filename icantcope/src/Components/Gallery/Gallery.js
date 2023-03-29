import React from 'react';
import '../Gallery/Gallery.css';
import Item from '../Item/Item.js';
import Placeholder from '../../Images/Placeholder.png'

class Gallery extends React.Component {
    render() {
        return <div className='Gallery'>
            <Item url={Placeholder} alt="photo of the weeknd" />
            <Item url={Placeholder} alt="photo of the weeknd" />
            <Item url={Placeholder} alt="photo of the weeknd" />
            <Item url={Placeholder} alt="photo of the weeknd" />
            <Item url={Placeholder} alt="photo of the weeknd" />
            <Item url={Placeholder} alt="photo of the weeknd" />
            <Item url={Placeholder} alt="photo of the weeknd" />
            <Item url="https://pyxis.nymag.com/v1/imgs/1d1/117/9af62e05e25ed279f53830b7805ef667ad-The-Weeknd.rsquare.w700.jpg" alt="photo of the weeknd" />
            <Item url="https://pyxis.nymag.com/v1/imgs/1d1/117/9af62e05e25ed279f53830b7805ef667ad-The-Weeknd.rsquare.w700.jpg" alt="photo of the weeknd" />
            <Item url="https://pyxis.nymag.com/v1/imgs/1d1/117/9af62e05e25ed279f53830b7805ef667ad-The-Weeknd.rsquare.w700.jpg" alt="photo of the weeknd"/>
        </div>
    }
}

export default Gallery;