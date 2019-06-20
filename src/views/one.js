import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class one extends Component {
    render() {
        return (
            <div className="one">
               <h1>我是第一个页面</h1>
               <Link to="/two">跳转到第二个页面</Link>
            </div>
        );
    }
}

export default one;
