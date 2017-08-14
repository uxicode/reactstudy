import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, Link, browserHistory } from 'react-router';

import About from './About';
import Home from './Home';
import Repos from './Repos';
import style from '../css/style.css';

class Main extends Component{
    render(){
        return(
            <div>
                <header>App</header>
                <menu>
                    <ul>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/repos">Repos</Link></li>
                    </ul>
                </menu>
                {this.props.children}
            </div>
        );
    }
}
const RouteBasic=()=>{
    return(
        <Router history={browserHistory}>
            <Route path="/" component={Main}>
                <Route path="about" component={About} />
                <Route path="repos" component={Repos} />
            </Route>
        </Router>
    )
}
ReactDOM.render(<RouteBasic />, document.getElementById('appContainer'));
