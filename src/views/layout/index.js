import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class layout extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         
      }
    }

    handleJump = (path) => {
        this.props.history.push(path)
    }
    
    render() {
        return (
            <div className="layout">
                <h1 className="title">
                    欢迎来到react
                </h1>
                <aside>
                    <ul>
                        <li>
                            <Link to="/layout">
                                首页
                            </Link>
                        </li>
                        <li>
                            <Link to="/layout/two">
                                第二页
                            </Link>
                        </li>
                        <li>
                            <Link to="/layout/notfound">
                                404页面
                            </Link>
                        </li>
                        <li>
                            <button onClick={() => {
                                this.handleJump('/layout')
                            }}>跳转到第首页</button>
                        </li>
                        <li>
                            <button onClick={() => {
                                this.handleJump('/layout/two')
                            }}>跳转到第二页</button>
                        </li>
                        <li>
                            <button onClick={() => {
                                this.handleJump('/layout/notfound')
                            }}>跳转到第404页</button>
                        </li>
                    </ul>
                </aside>
                <div className="container">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default layout;
