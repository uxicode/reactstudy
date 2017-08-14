import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, Link, browserHistory, IndexRoute } from 'react-router';

import About from './About';
import Home from './Home';
import Repos from './GithubRepos';
import RepoDetails from './RepoDetails';
import style from '../css/style.css';

class Main extends Component{
    render(){
        //Link 컴포넌트에는 activeClassName 이라는 옵션 속성이 있다.
        // 이속성이 설정되면 자동으로 이 클래스 이름을 활성 링크로 추가한다.
        return(
            <div>
                <header>App</header>
                <menu>
                    <ul>
                        <li><Link to="/about" activeClassName="active">About</Link></li>
                        <li><Link to="/repos" activeClassName="active">Repos</Link></li>
                    </ul>
                </menu>
                {this.props.children}
            </div>
        );
    }
}
//:repo_name 동적 :( 세그먼트 ) - 리액트 라우터가 URL의 해당 부분에 있는 데이터를 컴포넌트 속성내의 매개변수 특성으로 주입한다
const RouteParams=()=>{
    return(
        <Router history={browserHistory}>
            <Route path="/" component={Main}>
                <IndexRoute component={Home}/>
                <Route path="about" component={About} title="About us"/>
                <Route path="repos" component={Repos}>
                    <Route path="details/:repo_name" component={RepoDetails} />
                </Route>
            </Route>
        </Router>
    )
}
ReactDOM.render(<RouteParams />, document.getElementById('appContainer'));
