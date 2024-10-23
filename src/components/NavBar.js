import React, { Component } from 'react'


export class NavBar extends Component {
    static propTypes = {

    }

    render() {
        return (
            <div>
                <ul className="nav">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="/">NewsNest</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/">Link</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/">Link</a>
                    </li>
                </ul>
            </div>
        )
    }
}

export default NavBar
