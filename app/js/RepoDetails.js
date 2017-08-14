import React, {Component} from 'react';
import 'whatwg-fetch';
import 'babel-polyfill'; // Array.prototype.find는 이전 브라우저에서 지원안되기에 폴리필 버전 설치.


class RepoDetails extends Component{
   /* 부모컴포넌트( GithubRepos )에서 추가 속성을 전달하기에
   아래 constructor/fetchData/componentDidMount/componentWillReceiveProps 제거해서 순수컴포넌트로 취급하게 한다.


   constructor() {
        super(...arguments);
        this.state={
            repository:{}
        }
    }

    fetchData(repo_name) {
        fetch('http://api.github.com/repos/pro-react/'+repo_name)
        .then((response)=>response.json() )
        .then( (responseData)=>{
                this.setState({repository:responseData})
            })
    }

    componentDidMount() {
        //라우터
        let repo_name=this.props.params.repo_name;
        this.fetchData(repo_name);
    }

    componentWillReceiveProps(nextProps) {
        let repo_name=nextProps.params.repo_name;
        this.fetchData(repo_name);
    }*/

    renderRepository() {
        let repository=this.props.repositories.find( (repo)=>repo.name===this.props.params.repo_name);
        let stars=[];
        for( var i=0;i< repository.stargazers_count;i++){
            stars.push('★');
        }
        return(
            <div>
                <h2>{repository.name}</h2>
                <p>{repository.description}</p>
                <span>{stars}</span>
            </div>
        )
    }

    render() {
        /*let stars = [];
        for( var i=0;i<this.state.repository.stargazers_count;i++){
            stars.push('★');
        }

        return(
            <div>
                <h2>{this.state.repository.name}</h2>
                <p>{this.state.repository.description}</p>
                <span>{stars}</span>
            </div>
        )*/
        console.log( this.props.repositories )
        if(this.props.repositories.length>0) {
            return this.renderRepository();
        }else{
            return <h4>Loading.....</h4>
        }

    }
}
export default RepoDetails;