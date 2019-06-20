import React, { Component } from 'react';

class Person extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         
      }
    }
    
    render() {
        return (
            <div className="person">
            <h1>
                当前的用户路由是：
                {this.props.match.params.id}
            </h1>
                
            </div>
        );
    }
    componentDidMount () {
        console.log(this.props)
    }
}

export default Person;
