import React, { Component } from 'react'

class Contact extends Component {
        render() {
                return (
                        <section className="container-1">

                                <h4>Email Id: marcosl19@gmail.com</h4>

                                <a href="https://twitter.com/Marcoaflg" target="_blank" >
                                        <span className="icon fa fa-twitter" style={{ color: 'antiquewhite' }}></span>
                                </a>
                                <a href="https://github.com/marcoaflg" target="_blank">
                                        <span className="icon fa fa-github" style={{ color: 'antiquewhite' }} ></span>
                                </a>
                                <a href="https://www.linkedin.com/in/marco-ant%C3%B4nio-felipe-de-lima-garcia-28515363/" target="_blank">
                                        <span className="icon fa fa-linkedin-square" style={{ color: 'antiquewhite' }}></span>
                                </a>

                        </section>
                )
        }
}

export default Contact
