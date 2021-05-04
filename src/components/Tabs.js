export default {
    tabData: [
        {
            "Home":{
                "title": "Home.js",
                "start": 0,
                0: '',
                3: `import React, { Component } from 'react'
import axios from "axios";
import RacerRows from '../components/RacerRows';

export default class Home extends Component {
    constructor() {
        super();
        this.state = {
            racers: []
        }
    }
`,
                6: `import React, { Component } from 'react'
import axios from "axios";
import RacerRows from '../components/RacerRows';

export default class Home extends Component {
    constructor() {
        super();
        this.state = {
            racers: []
        }
    }

    handleSubmit = e => {
        e.preventDefault();
        const season = e.target.year.value;

        axios.get(https://ergast.com/api/f1/{season}/driverStandings.json)
            .then(res => {
                    this.setState({
                        racers: res.data.MRData.StandingsTable.StandingsLists[0].DriverStandings
                    })
                })
            }`
                },
            "Header":{
                "title": "Header.js",
                "start": 3,
                0:"",
                3:`import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Header extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                <Link className="navbar-brand" to="/">React App</Link>
                <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>`,
                6:`import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Header extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                <Link className="navbar-brand" to="/">React App</Link>
                <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="collapsibleNavId">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">Home </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}`
            }, 
                "New": {
                    "title": "New.js",
                    "start": 6,
                    0: "",
                    3:`do a thing`
                }
        }
    ]
};
