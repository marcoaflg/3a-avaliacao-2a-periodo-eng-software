import React, { Component } from 'react'
import './css/Main.css'


class Navbar extends Component {
    render() {
        return (
            <nav className="navbar">
                <a href="/"><i className="fa fa-fw fa-home"></i>Home</a>
                <a id="protofolio-link" href="https://github.com/marcoaflg" target="_blank"><i className="fa fa-github-alt"></i>Projetos</a>
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=marcosl19@gmail.com" target="_blank"><i className="fa fa-fw fa-envelope"></i>Email</a>
            </nav>
        )
    }
}

export default Navbar
