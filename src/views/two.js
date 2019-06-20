import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class two extends Component {
    render() {
        return (
            <div className="two">
                <h1>我是第二个页面</h1>
                <Link to="/">跳转到di1个页面</Link>
            </div>
        );
    }
}

export default two;







