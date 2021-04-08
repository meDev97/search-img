import React from "react";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: "",
    };
  }

  onFormSubmit(e) {
    e.preventDefault();
    this.props.onFormSubmit(this.state.term);
  }
  onInputChanage = (e) => {
    this.setState({ term: e.target.value });
  };
  render() {
    return (
      <div className="ui segment" style={{ marginTop: "20px" }}>
        <form onSubmit={this.onFormSubmit.bind(this)} className="ui form">
          <div className="ui field">
            <label>search img</label>
            <input
              value={this.state.term}
              type="text"
              onChange={this.onInputChanage}
            ></input>
          </div>
        </form>
      </div>
    );
  }
}
export default SearchBar;
