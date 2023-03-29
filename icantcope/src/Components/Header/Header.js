import React from 'react';
import '../Header/Header.css';
import '../../Fonts/MeltedPotato-Regular.otf';

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
                <div className='HeaderContentTwo'>I can't cope</div>
            </div>
        </div>
    }
}

export default Header;