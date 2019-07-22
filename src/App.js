import React from "react";
import "./app.css";
import "bootstrap/dist/css/bootstrap.min.css";
import $ from "jquery";
import Popper from "popper.js";
import "bootstrap/dist/js/bootstrap.bundle.min";
import QuestionList from "./component/question-list";

var rootStyle = {
  backgroundColor: "black",
  height: "100vh",
  color: "#fff",
  boxShadow: "inset 0 0 5rem rgba(0, 0, 0, .5)"
};
class App extends React.Component {
  render() {
    return (
      <div style={rootStyle}>
        <div className="container p-5">
          <QuestionList />
        </div>
      </div>
    );
  }
}

export default App;
