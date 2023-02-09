import React, { Component } from "react";

// columns: Array
// sortColumn: object
// onSort: function
class TableHeader extends Component {
  rasieSort = (header) => {
    const sortColumn = { ...this.props.sortColumn };
    if (sortColumn.header === header) {
      sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
    } else {
      sortColumn.header = header;
      sortColumn.order = "asc";
    }
    this.props.onSort(sortColumn);
  };

  renderSortIcon = (column) => {
    if (column.header !== this.props.sortColumn.header) return null;

    let className = "m-2 ";
    this.props.sortColumn.order === "asc"
      ? (className += "fa fa-caret-up")
      : (className += "fa fa-caret-down");

    return <i className={className}></i>;
  };

  render() {
    return (
      <thead>
        <tr>
          {this.props.columns.map((column) => (
            <th
              className="clickable"
              key={column.label}
              onClick={() => this.rasieSort(column.header)}
            >
              {column.label}
              {this.renderSortIcon(column)}
            </th>
          ))}
        </tr>
      </thead>
    );
  }
}

export default TableHeader;
