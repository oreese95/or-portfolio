import React from 'react'
import o from "../assets/O-Logo 3.png";
import o2 from "../assets/O-Logo.png";
import or from "../assets/OR_memoji.png";
import { Squash as Hamburger } from 'hamburger-react'
import { NavLink } from 'react-router-dom';
import pdf from "../ORresume2024_color.pdf"

function DefaultLayout(props) {
    return (
        <div className="d-flex flex-column min-vh-100">
            <nav className="navbar navbar-expand-lg navbar-light bg-transparent p-2" style={{ width: "100%" }}>
                <a href="/">
                    <img className="navbar-brand" src={o} width="200" />
                </a>
                <button className="navbar-toggler menu-button" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <Hamburger size={28} hideOutline={false} />
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav text-start ms-auto">
                        <li className="nav-item">
                            <NavLink className="nav-link" activeClassName="active" to="/"><b>Home</b></NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" activeClassName="active" to="/edu"><b>Education</b></NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" activeClassName="active" to='/work'><b>Projects</b></NavLink>
                        </li>
                        <li className="nav-item">
                            <a className='nav-link' href={pdf} target="_blank"><b>Resume</b></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="mailto:Reese.Odis29@Gmail.com"><b>Let's Talk</b></a>
                        </li>
                    </ul>
                </div>
            </nav>
            <div className="content">{props.children}</div>
            <div className='footer mt-auto p-3'>
                <hr/>
                <h4><img src={or} width="35"/> by <a href='/'><img src={o2} width="35"/></a></h4>
                <p>&copy; Odis Reese 2024</p>
            </div>
        </div>

    )
}

export default DefaultLayout