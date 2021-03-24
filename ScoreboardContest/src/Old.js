import React, { Component } from "react";

class Old extends Component {
  render() {
    const data = this.props.data;
    const style = {
      fontWeight: "bold",
      color: this.props.theme === false ? "white" : "black",
    };
    return (
      <table>
        <tbody>
          {data.map((element, index) => {
            return (
              <tr key={index}>
                <td> {element.medal}</td>
                <td style={style}> {element.name}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}
export default Old;
