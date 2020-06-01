import $ from "jquery"
import React from "react"
import { hot } from "react-hot-loader"

class App extends React.Component {
  componentDidMount() {
    $("#spn").tooltip();
  }

  render() {
    return (
      <div className="container">
        <h1>Robot</h1>
        <div id="spn" className="d-inline-block" tabIndex="0" data-toggle="tooltip" title="Disabled tooltip">
          tooltip test
        </div>
      </div>
    )
  }
}

export default hot(module)(App)
