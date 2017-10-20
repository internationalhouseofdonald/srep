import { Component } from 'react';
import { Link, Route, Switch, Redirect } from 'react-router-dom';
import { Whoops404 } from './Whoops404';
import { ReactJs } from './ReactJs';
import { Webpack } from './Webpack';
import { Bootstrap } from './Bootstrap';
import { ModuleList } from './ModuleList';
import data from '../data.json';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state= {
      list: [
        {
          
        }
      ]
    }
  }
  render() {
    return (
      <div className="app">
      {
        console.log(this.props.location.pathname)
      }
        <div className="jumbotron jumbotron-fluid text-white text-center">
          <h1 style={{fontSize: "8rem"}}>{data.key}</h1>
          <Link to="/">
            <div className="btn btn-primary m-2">Main</div>
          </Link>
        </div>
        <Switch>
          <Route exact path="/reactjs" component={ReactJs} /> 
          <Route exact path="/webpack" component={Webpack} /> 
          <Route exact path="/bootstrap" component={Bootstrap} /> 
          <Route exact path="/" component={ModuleList} /> 
          <Route component={Whoops404} />
        </Switch>
      </div>
    )
  }
}
