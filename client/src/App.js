import React, {Component} from 'react';

import Header from "./Component/Home/Header";
import Banner from "./Component/Home/Banner";
import Task from "./Component/Home/Task";
import Contact from "./Component/Home/Contact";
import Footer from "./Component/Footer";





class App extends Component {



    render() {
        return (
            <div>
              <Header/>

              <Banner/>
                <section>
                    <div className="container">
                        <hr/>
                    </div>
                </section>
                <Task/>
                <Contact/>
                <Footer/>
            </div>
        );
    }
}

export default App;
