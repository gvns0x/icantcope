import React from 'react';
import '../Header/Header.css';

class Header extends React.Component {
    render() {
        return <div className='Header'>
            <div className='HeaderContent'>
                <div className='HeaderContentOne'>
                    Endless wells of relief,<br/>
                    Of connectedness,<br/>
                    Of some peace,<br/>
                    When I look outside it’s dope<br/>
                    Back inside,<br/>
                </div>
                <div className='HeaderContentTwo'></div>
            </div>
        </div>
    }
}

export default Header;