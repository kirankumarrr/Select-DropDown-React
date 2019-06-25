import { Card } from "semantic-ui-react";
import React from "react";
import { Dropdown } from "semantic-ui-react";
const yearly_meeting = [
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
];
const stateOptions = yearly_meeting.map((state, index) => ({
  key: index,
  text: state.name,
  value: state.name,
  euid: state.euid
}));
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "coconut",
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
      ],
      selectedEmployes: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert("Your favorite flavor is: " + this.state.value);
    event.preventDefault();
  }
  handleChange = (event, data) => {
    console.log(data);
    console.log("value length", data.value.length);
    var obj = [];
    var allpbj = {};
    for (let i = 0; i < data.value.length; i++) {
      let value = data.value[i];
      let key = data.options.find(o => o.value === value);
      var newObj = {
        name: value,
        euid: key.euid
      };
      obj.push(newObj);
    }
    if (data.value.length === 0) {
      console.log("Yeahh!!!");
      var result = this.state.yearly_meeting.map(function(el) {
        var o = Object.assign({}, el);
        return o;
      });
      obj.push(result);
    }

    this.setState({ selectedEmployes: obj });
  };
  render() {
    const { selectedEmployes } = this.state;
    console.log(selectedEmployes);
    return (
      <div>
        <h1>Select multiple</h1>
        <Dropdown
          placeholder="All selected by Default"
          fluid
          multiple
          search
          selection
          options={stateOptions}
          onChange={this.handleChange}
        />
        {selectedEmployes.map((m, i) => {
          return (
            <Card key={i}>
              <Card.Content key={i}>
                <Card.Header content={m.name} />
                <Card.Meta content={m.euid} />
              </Card.Content>
            </Card>
          );
        })}
      </div>
    );
  }
}
export default App;
