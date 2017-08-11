import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class App extends Component{
    constructor() {
        super(...arguments);
        this.state={
            route:window.location.hash.substr(1)
        }
    }

    componentDidMount() {
        window.addEventListener('hashchange', ()=>{
            this.setState({
                route:window.location.hash.substr(1)
            });
        });
    }
    render(){
         return(
             <div>
                 <h1>Hello React Router</h1>
             </div>
         )
    }
}
ReactDOM.render(<App />, document.getElementById('appContainer'));