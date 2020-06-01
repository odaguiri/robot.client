import $ from "jquery"
import Popper from "popper.js"
import "bootstrap/dist/js/bootstrap.bundle.min"

import React from "react"
import { hydrate } from "react-dom"
import App  from "./App"
import "./app.scss"

hydrate(<App/>, document.getElementById("root"))
