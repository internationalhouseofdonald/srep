import { render } from 'react-dom';
import { Component } from 'react';

export class Bootstrap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        {
          module: "Bootstrap",
          description: "Bootstrap is the most popular HTML, CSS, and JS framework in the world for building responsive, mobile-first projects on the web.",
          version: "4"
        }
      ]
    }
  }
  render() {
    return(
      <div>
        <h1>
          {this.state.list[0].module} &nbsp;
          <div className="badge badge-info">v.{this.state.list[0].version}</div>
        </h1>
        <p>
          {this.state.list[0].description}
        </p>
      </div>
    )
  }
}