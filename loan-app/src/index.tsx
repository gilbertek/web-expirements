import * as React from "react";
import * as ReactDOM from "react-dom";

import Message from "./components/Message";

ReactDOM.render(
  <Message from='World' body='Hello !' />,
  document.getElementById("root")
);
