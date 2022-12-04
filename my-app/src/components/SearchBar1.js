import React, { Component } from "react";
import importedNamed from "../names";

export class SearchBar1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      names: importedNamed,
      name: "",
    };
  }

  handleChange = (event) => {
    const inputText = event.target.value.toLowerCase();
    console.log(inputText);
    const filteredNames = importedNamed.filter((name) =>
      name.toLowerCase().includes(inputText)
    );
    this.setState({
      names: filteredNames,
    });
  };

  render() {
    return (
      <div>
        <h1>Name search</h1>
        <p>Matching names found: {this.state.names.length}</p>
        <form action="">
          <input
            type="text"
            onChange={this.handleChange}
            placeholder="search names"
          />
        </form>
        <div style={{ margin: "auto" }}>
          {this.state.names.map((name) => (
            <p key={name}>{name}</p>
          ))}
        </div>
      </div>
    );
  }
}

export default SearchBar1;
