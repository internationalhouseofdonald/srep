import { render } from 'react-dom';
import { Component } from 'react';

export class Webpack extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        {
          module: "Webpack",
          description: "Webpack is a module bundler for modern JavaScript applications. When webpack processes your application, it recursively builds a dependency graph that includes every module your application needs, then packages all of those modules into a small number of bundles - often only one - to be loaded by the browser.",
          version: "3"
        }
      ]
    }
  }
  render() {
    return(
      <div>
        <h1>
          {this.state.list[0].module} &nbsp;
          <div className="badge badge-info">v.{this.state.list[0].version}</div>        </h1>
        <p>
          {this.state.list[0].description}
        </p>
      </div>
    )
  }
}