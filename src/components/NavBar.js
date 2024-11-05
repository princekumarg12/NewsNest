import React, { Component } from 'react'


export class NavBar extends Component {
    static propTypes = {

    }

    render() {
        return (
            <div>
                <ul className="nav">
                    <li className="nav-item"><a className="nav-link active" aria-current="page" href="/">NewsNest</a></li>
                    <li className="nav-item"><a className="nav-link" href="/">Link</a></li>
                    <li className="nav-item"><a className="nav-link" href="/">country</a></li>
                    <li className="nav-item"><a className="nav-link" href="/">pageSize</a></li>
                    <li className="nav-item"><a className="nav-link" href="/">business</a></li>
                    <li className="nav-item"><a className="nav-link" href="/">entertainment</a></li>
                    <li className="nav-item"><a className="nav-link" href="/">general</a></li>
                    <li className="nav-item"><a className="nav-link" href="/">health</a></li>
                    <li className="nav-item"><a className="nav-link" href="/">science</a></li>
                    <li className="nav-item"><a className="nav-link" href="/">sports</a></li>
                    <li className="nav-item"><a className="nav-link" href="/">technology</a></li>
                </ul>
            </div>
        )
    }
}

export default NavBar
