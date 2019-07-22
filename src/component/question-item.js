import React from "react";
const inValid = "form-control m-2 text-left";
const valid = "form-control is-valid m-2 text-left";
class QuestionItem extends React.Component {
  state = { count: 0, interval: "" };

  componentDidMount() {
    this.state.interval = setInterval(() => {
      this.setState({ count: this.state.count + 1 });
    }, 1000);
    setTimeout(() => {
      clearInterval(this.state.interval);
    }, 60000);
  }

  componentWillReceiveProps(nextProps) {
    //console.log(nextProps, this.props);
    if (this.props.id != nextProps.id) {
      clearInterval(this.state.interval);
      this.setState({ count: 0 });
      this.setState({
        interval: setInterval(() => {
          this.setState({ count: this.state.count + 1 });
        }, 1000)
      });
      setTimeout(() => {
        clearInterval(this.state.interval);
      }, 60000);
    }
  }
  componentWillUnmount() {
    clearInterval(this.state.interval);
  }
  renderChoice = () => {
    return this.props.choice.map(el => {
      return (
        <button
          className={this.props.selected === el ? valid : inValid}
          onClick={e => this.props.handleChoice(e, el)}
        >
          {el}
        </button>
      );
    });
  };

  render() {
    const { count } = this.state;
    const perc = (count / 60) * 100;
    return (
      <div className="card  bg-light text-dark" style={{ height: "450px" }}>
        <div className="card-header ">
          <span className="align-middle">Question No.{this.props.id}</span>
          <div
            class="rounded-circle border border-dark p-2  float-right"
            role="status"
          >
            {count}
          </div>
        </div>

        <div class="progress" style={{ height: "2px" }}>
          <div
            class="progress-bar-animated bg-secondary"
            role="progressbar"
            aria-valuenow="25"
            style={{ width: perc + "%" }}
            aria-valuemin="0"
            aria-valuemax="100"
          />
        </div>
        <div className="card-body ">
          <h5 class="card-title">{this.props.title}</h5>
          {this.renderChoice()}
        </div>
        {this.props.selected && (
          <div className="card-footer">
            <div className="text-muted">
              Proceed to Next Question?
              <button
                className="btn btn-warning float-right"
                onClick={e => this.props.handleNext(e, this.props.id)}
              >
                Next Question
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default QuestionItem;
