import React, {Component} from 'react';

class Footer extends Component {
    render() {
        return (
            <section className="section-footer">
                <div style={{padding : "27px 87px"}} >
                    <h4 className="text-center">Contact</h4>
                    <p>Asiedu Henry</p>
                    <p>+233501430076</p>
                    <p>Ayeduase - KNUST</p>
                    <p>doctyTek18@gmail.com</p>
                </div>
                <div style={{padding : "20px 87px"}}>
                    <h4 className="text-center">About</h4>
                    <p>DoctyTek is an online tutorial hub. It provides assistance to areas where most developers find
                        challenges. It gives newbie programmers opportunity to enhance of project to boost their
                        skills.</p>
                    <p>DoctyTek @ 2019</p>
                </div>
            </section>
        );
    }
}

export default Footer;
