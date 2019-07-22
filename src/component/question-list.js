import React from "react";
import QuestionItem from "./question-item";
import { questions } from "../list";
class QuestionList extends React.Component {
  state = { item: 0, quest: [] };

  componentWillMount() {
    this.setState({ quest: questions });
  }
  handleNext = (e, id) => {
    //console.log(id, e);
    if (!this.state.isLastOne) {
      this.setState({ item: this.state.item + 1 });
    } else {
      console.log(this.state);
    }
  };

  handleChoice = (e, id) => {
    let inp = [...this.state.quest];
    inp[this.state.item].selected = id;
    //console.log(inp, id);
    this.setState({ quest: inp });
  };
  render() {
    const { item } = this.state;
    const ques = this.state.quest[item];
    return (
      <div>
        {!ques.isLastOne ? (
          <QuestionItem
            {...ques}
            handleNext={this.handleNext}
            handleChoice={this.handleChoice}
          />
        ) : (
          <div className="card bg-light" style={{ height: "300px" }}>
            <div className="card-body">
              <h2 className="card-title text-success">
                Successfully submitted!
              </h2>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default QuestionList;
