import React, {Component} from 'react';
import NavBar from "../../NavBar";
import Footer from "../../Footer";

class IntroductionToReactJs extends Component {
    render() {
        return (
            <div>
                <NavBar/>
                <section>
                    <div className="container content-container">
                        <section>
                            <div className="container">
                                <h2>Introduction to ReactJs - Beginners </h2>
                                <p>08/ 13/ 2019</p>
                            </div>
                        </section>
                        <section>
                            <div className="container">
                                <p>Hi everyone, my &nbsp;name is Henry Asiedu. Welcome to doctyTek online tutorial
                                    section. In this tutorial we will be taking an overview of reactjs. I will guide you through
                                    any aspect necessary for you to be a pro in reactjs library</p>
                                <p>About some few years ago, i was facing big challenges on how to figure this ReactJs  library.
                                A lot of online materials were available but each book or material just assumed i had a proir knowledge
                                of some concept like node, npm, yarn. Worry not about these terminologies, by the end of this tutorial,
                                you will stand out to be different in the scope of understanding how these terms work. </p>
                            </div>
                        </section>
                        <hr/>
                        <section>
                            <div className="container">
                                <p><b>ReactJs</b> is a very popular library used among companies in the software industry. It has gained
                                more popularity in the last few couple of years. It was created by Facebook. It makes frontend development very
                                easy because it extracts the user interface from the logic functions. It is very fast as well.</p>
                                <p><b>ReactJs</b> is simply a javascript library for creating user interfaces or frontend.</p>
                                <p>Javascript library is a collection of instructions to perform various "complicated" task.</p>
                                <p>On that view, react can be thought of as a collection of codes to create user interface. It is a light-weight
                                library which can be included to any project.</p>
                                <h3>Document Object Model (DOM) </h3>
                                <p>DOM is just the representation of information on a webpage.</p>
                                <p>All the information seen on the webpage which are enclosed by html tags make up the <b>"Object"</b> from the DOM.
                                The webpage itself is the <b>"document"</b> and the arrangement of the tags form the <b>"model"</b></p>
                                <h5>Virtual Document Object Model (VDOM) </h5>
                                <p>Most online materials refer to reactjs as a virtual DOM. This is because react does not interact with the DOM directly.</p>
                                <h5>How ReactJs Works</h5>
                                <p>In the traditional method, each time you make changes to a code and refresh the browser,
                                the entire page is refreshed and the DOM is also updated for changes to occur. This process is good but when
                                the data becomes a bit huge, the DOM begins to slow down. Here is why react comes in to change the phase. This is
                                what happens when changes occur in the code:</p>
                                <ul>
                                    <li>React create an exact copy of the DOM on initial refresh</li>
                                    <li>On subsequent changes, react figures which part is new and updates only that portion. This is called VDOM </li>
                                    <li>React pass the VDOM to the orginal DOM for changes to be seen</li>
                                </ul>
                                <h3>React Syntax - JSX </h3>
                                <p><b>JSX - Javascript XML </b> is a syntax extension to javascript used by react. JSX simply allows HTML tags to be embedded in
                                javascript. Since JSX is an advanced form of javascript, most browsers do not support this extension.</p>
                                <p>In order to be compactible, a library called <b>"babel"</b> is used to transpile it into normally javascript</p>
                            </div>
                        </section>
                        <section>
                            <div className="container">
                                <h3>Advice </h3>
                                <p>Don't be in a hurry to know everything in reactjs just by an overnight. Take a deep breath in things doesn't work the way you want.
                                Just go over and over and understanding will just flow</p>
                            </div>
                        </section>
                        <section>
                            <div className="container">
                                <h3>Conclusion </h3>
                                <p>It might seems boring and confusing, but stable understanding comes from massive confusion</p>
                                <p>This is just the overview of react js. You shall proceed to other areas by looking at how to setup for
                                machine for react readiness. Installing all packages to get started and other interesting aspect in reactjs.</p>
                                <p>Thank you reading</p>
                            </div>
                        </section>
                    </div>
                </section>
                <Footer/>
            </div>
        );
    }
}

export default IntroductionToReactJs;
