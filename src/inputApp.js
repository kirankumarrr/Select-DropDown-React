import { Card } from "semantic-ui-react";
import React from "react";
import { Dropdown } from "semantic-ui-react";

class InputApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "coconut",
      selectedEmployes: [],
      yearly_meeting: [
        {
          name: "A",
          euid: "1"
        },
        {
          name: "B",
          euid: "2"
        },
        {
          name: "C",
          euid: "3"
        }
      ]
    };
  }

  render() {
    return (
      <div>
        {" "}
        <select onChange={this.handleChange}>
          <option key="1" value="All">
           <input value="All">
          </option>
          {this.state.yearly_meeting.map((m, i) => {
            return (
              <option key={i} value={m.name}>
                {m.name}
              </option>
            );
          })}
        </select>
      </div>
    );
  }
}
export default InputApp;
