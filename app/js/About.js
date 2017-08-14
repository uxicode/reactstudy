import React, {Component} from 'react';

//부모에서 설정한 About 컴포넌트의 임의 title속성값을 this.props.route를 통해 라우트 구성에 접근할 수 있다.
class About extends Component{
    render() {
        return(
                <div>
                    <h1>About</h1>
                    <h2>{this.props.route.title}</h2>
                </div>
            );
    }
}
export default About;