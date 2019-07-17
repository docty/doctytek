import React, {Component} from 'react';
import NavBar from "../../NavBar";

class SetupLaravelProject extends Component {
    render() {
        return (
            <div>
                <NavBar/>
                <section>
                    <div className="container content-container">
                        <section>
                            <div className="container">
                                <h2>Installing and Setting up laravel project</h2>
                                <p>07/ 07, 2019</p>
                            </div>
                        </section>
                        <section>
                            <div className="container">
                                <p>Hi everyone, my &nbsp;name is Henry Asiedu. Welcome to doctyTek online tutorial
                                    section. In this tutorial we shall be installing laravel and setting our system up
                                    for laravel journey.&nbsp;</p>
                                <p>Laravel is a cool framework for developing web applications. The use of frameworks in
                                    web development makes team work effective and enhances development. We promise not
                                    to give unnecessary stuffs as others do but we will be going through
                                    most of the codes ourselves</p>
                            </div>
                        </section>

                    </div>
                </section>
            </div>
        );
    }
}

export default SetupLaravelProject;
