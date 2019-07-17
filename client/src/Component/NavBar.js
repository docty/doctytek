import React, {Component} from 'react';
import logo from '../assets/img/logo.png'




class NavBar extends Component {
    render() {

        return (
            <nav className="navbar navbar-light navbar-expand-md heading">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">
                    <img src={logo} alt="logo"/>
                    </a>
                    <button className="navbar-toggler" data-toggle="collapse" data-target="#navcol-1">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="navbar-toggler-icon">/</span>
                    </button>
                    <div className="collapse navbar-collapse" id="navcol-1">
                        <ul className="nav navbar-nav mx-auto">
                            <li className="nav-item nav-bar-item" role="presentation">
                                <a className="nav-link"  href="/">Javascript</a>
                            </li>
                            <li className="nav-item nav-bar-item" role="presentation">
                                <a className="nav-link nav-item-active" id="laravel" href="/" style={{color: "#ffffff"}}>Laravel</a>
                            </li>
                            <li className="nav-item nav-bar-item" role="presentation">
                                <a className="nav-link" href="/">Php</a></li>
                            <li className="nav-item nav-bar-item" role="presentation">
                                <a className="nav-link" href="/">React</a>
                            </li>
                            <li className="nav-item nav-bar-item" role="presentation">
                                <a className="nav-link" href="/">Mysql</a>
                            </li>
                            <li className="nav-item nav-bar-item" role="presentation">
                                <a className="nav-link" href="/">Unity 3D</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
         
    }
}

export default NavBar;
