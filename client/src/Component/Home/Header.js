import React, {Component} from 'react';
import logo from '../../assets/img/logo.png'

class Header extends Component {
    render() {
        return (
            <header className="heading">
                <div className="logo">
                    <img src={logo} alt="Doctytek"/>
                </div>
            </header>
        );
    }
}

export default Header;