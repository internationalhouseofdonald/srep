import { PropTypes } from 'prop-types';
import { Component } from 'react';
import { Link } from 'react-router-dom';

// Side-Note: The `modules` parameter is a destructuring of the property that is appended to the element that renders this.
//              in other words, the parameter (enclosed in {}) has to match the property of the element that renders it.
//              The data is stored in the property.
export class ModuleList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        {
          module: "React.js",
          version: "16",
          description: "React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes. Declarative views make your code more predictable and easier to debug.",
          permalink: "/reactjs"
        },
        {
          module: "Webpack",
          version: "3",
          description: "Webpack is a module bundler for modern JavaScript applications. When webpack processes your application, it recursively builds a dependency graph that includes every module your application needs, then packages all of those modules into a small number of bundles - often only one - to be loaded by the browser.",
          permalink: "/webpack"
        },
        {
          module: "Bootstrap",
          version: "4",
          description: "Bootstrap is the most popular HTML, CSS, and JS framework in the world for building responsive, mobile-first projects on the web.",
          permalink: "/bootstrap"
        }
      ]
    }
  }
  render() {
    return(
      <div className="moduleList">
        {this.state.list.map((module, i) =>
          <div key={i} className="card p-3 m-3 text-center">
            <Link to={module.permalink}>
              <button className="btn btn-primary m-2">
                {module.module} &nbsp;
                <div className="badge badge-info">v.{module.version}</div>
              </button>
            </Link>
            <p>
              {module.description}
            </p>
          </div>
        )}
      </div>
    )
  }
}



// ModuleList.PropTypes = {
//   list: function(props) {
//     if(!Array.isArray(props.days)) {
//       return new Error(
//         "ModuleList should be an array"	
//       )
//     } else if(!props.days.length) {
//       return new Error(
//         "ModuleList must have at least one record"
//       )
//     } else {
//       return null
//     }
//   }
// }
