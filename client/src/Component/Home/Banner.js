import React, {Component} from 'react';
import javascript from '../../assets/img/javascript.jpg'
import unity from '../../assets/img/unity3d.png'
import php from '../../assets/img/php.png'
import laravel from '../../assets/img/laravel.png'
import mysql from '../../assets/img/mysql.png'
import react from '../../assets/img/react.png'


class Banner extends Component {
    render() {
        return (
            <section>
                <div className="container col block">
                    <div className="panel-container">
                        <div className="d-flex flex-column justify-content-center align-items-center carder-1">
                            <img src={javascript} style={{width : '20%'}} alt="javascript"/>
                            <p>
                                Javascript is a client side programming language. Is used to create interaction in
                                the web page.
                            </p>
                            <a className="btn btn-primary" role="button" href="/tutorial/javascript">Learn
                        More</a>
                            </div>
                        <div className="left-sub-container">
                            <div className="d-flex flex-column justify-content-center align-items-center carder-1"><img
                                src={unity} style={{width : '30%'}}  alt="unity"/>
                                <p>Unity 3D is a game development engine. It is a multi platform development tool. It
                                    supports both 2D and 3D games.
                                </p>
                                <a className="btn btn-primary" role="button" href="/tutorial/unity3d">Learn
                            More</a>
                            </div>
                            <div className="d-flex flex-column justify-content-center align-items-center carder-1"><img
                                src={php} style={{width : '40%'}}  alt="php"/>
                                <p>Php is a sever side programming language. It is mostly used to interact with the
                                    database. But it has other useful purposes</p>
                                <a className="btn btn-primary" role="button" href="/tutorial/php">Learn
                                More</a></div>
                        </div>
                    </div>
                    <div className="panel-container">
                        <div className="right-sub-container">
                            <div className="d-flex flex-column align-items-center carder-1"><img
                                src={react} alt="react" style={{width : '30%'}}/>
                                <p>React Js is a javascript framework. It is mainly used for frontend development. It
                                    makes frontend development very easy and fast.</p>
                                <a className="btn btn-primary" role="button" href="/tutorial/reactjs">Learn
                                More</a></div>
                            <div className="d-flex flex-column align-items-center carder-1"><img
                                src={mysql} style={{width : '30%'}}  alt="Mysql"/>
                                <p>Mysql is a database system. It stores data. Sql holds the language which is used to
                                    query from mysql database.</p>
                                <a className="btn btn-primary" role="button" href="/tutorial/mysql">Learn
                                More</a></div>
                        </div>
                        <div className="d-flex flex-column align-items-center carder-1"><img
                            src={laravel} alt="laravel" style={{width : '30%'}}/>
                            <p>Laravel is a web development framework. It makes programming a fun way to go about. It is
                                based on php</p><a className="btn btn-primary" role="button" href="/tutorial/laravel">Learn
                            More</a></div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Banner;
