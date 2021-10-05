import React from "react";

class TypeOPForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "coconut" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert("Your severity level is: " + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Select Type of Problem:
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="flu">Flu</option>
            <option value="heart disease">Heart Disease</option>
            <option value="mental">Mental Related</option>
            <option value="others">Others, please describe below</option>
          </select>
        </label>
      </form>
    );
  }
}

export default TypeOPForm;
