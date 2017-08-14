import React, {Component} from 'react';
import 'whatwg-fetch';// ajax 통신을 위한
import {Link} from 'react-router';

//child 부분을 추가
class GithubRepos extends Component{
    constructor() {
        super(...arguments);
        this.state={
            repositories:[]
        }
    }

    componentDidMount() {
        fetch('https://api.github.com/users/pro-react/repos')
        .then((response)=>response.json() )
        .then((responseData)=>{
                this.setState({repositories: responseData});
            });
    }

    render() {
        let repos=this.state.repositories.map((repo)=>(
            <li key={repo.id}>
               <Link to={"/repos/details/"+repo.name}>{repo.name}</Link>
            </li>
        ));

        let child=this.props.children && React.cloneElement(this.props.children, {repositories:this.state.repositories})

        return(
            <div>
                <h1>Github Repos</h1>
                <ul>
                    {repos}
                </ul>
                <p>이곳에 RepoDetail 컴포넌트가 표시된다.</p>

                {child}
            </div>
        );
    }
}
export default GithubRepos;