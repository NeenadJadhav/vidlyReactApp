import React, { Component } from "react";
import Like from "./like";
import _ from "lodash";
import { NavLink } from "react-router-dom";

class TableBody extends Component {
  renderCell = (item, column) => {
    if (column.content) {
      return column.content(item);
    }

    if (column.header === "title") {
      const id = item._id;
      return (
        <NavLink to={"/movies/" + id} data={this.props.data}>
          {item.title}
        </NavLink>
      );
    } else return _.get(item, column.header);
  };

  createKey = (item, column) => {
    return item._id + (column.header || column.label);
  };

  render() {
    const { data, columns } = this.props;
    return (
      <tbody>
        {data.map((item) => (
          <tr key={item._id}>
            {columns.map((column) => (
              <td key={this.createKey(item, column)}>
                {this.renderCell(item, column)}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    );
  }
}

export default TableBody;
