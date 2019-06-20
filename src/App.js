import React from 'react';
import {BrowserRouter as Router, Route,Link, Redirect,Switch,Prompt} from 'react-router-dom'
import one from './views/one'
import two from './views/two'
import Person from './views/person'
import Notfound from './Notfound'
import Layout from './views/layout'



function App() {
  return (
	  	<Router>
			<div className="App">
				{/* <header> */}
					{/* <ul> */}
						{/* <Prompt when={true} message="你确定真的要离开这个页面吗"></Prompt> */}
						{/* <li><Link to="/">首页</Link></li>
						<li><Link to="/two">第二页</Link></li> */}
						{/* <li>
							<Route 
								path='/'
								exact={true}
								children={(props) => (
									<div>
										{JSON.stringify(props)}
										<Link to="/" className={props.match?'active'
										:''}>首页</Link>
									</div>
								)} />
						</li> */}
						{/* <li>
							<Route 
								path='/two'
								children={(props) => (
									<div>
										{JSON.stringify(props)}
										<Link to="/two" className={props.match?'active'
										:''}>第二页</Link>
									</div>
								)} />
						</li> */}
					{/* </ul> */}
				{/* </header> */}
				{/* <hr/> */}
				<Switch>
					<Route path='/' exact component={one}/>
					<Route path='/two' component={two}/>
					<Route path='/layout' render={(props) => (
						<Layout history={props.history}>
							<Switch>
								<Route path='/layout' exact component={one}/>
								<Route path='/layout/two' component={two}/>
								<Route path='/layout/notfound' component={Notfound}/>
								<Route render={() => (
									<Redirect to="/layout/notfound"></Redirect>
								)} />
							</Switch>	
						</Layout>
					)}/>
					<Route path='/person/:id' component={Person}/>
					<Route path='/notfound' component={Notfound}/>
					<Route render={() => (
						<Redirect to="/notfound"></Redirect>
					)} />
				</Switch>
			</div>  
	  	</Router>
  	);
}

export default App;
