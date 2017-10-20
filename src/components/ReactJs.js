import { render } from 'react-dom';
import { Component } from 'react';

export class ReactJs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        {
          module: "React.js",
          description: "React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes. Declarative views make your code more predictable and easier to debug.",
          version: "16"
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