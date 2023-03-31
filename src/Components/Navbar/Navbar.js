import React from 'react';
import '../Navbar/Navbar.css';
import Logo from '../Logo/Logo.js'

class Navbar extends React.Component {
    render() {
        return <div className='Navbar'>
            <Logo/>
        </div>
    }
}

export default Navbar;