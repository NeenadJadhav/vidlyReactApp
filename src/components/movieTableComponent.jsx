import React, { Component } from "react";
import Like from "./common/like";
import Table from "./common/table";
import TableBody from "./common/tableBody";
import TableHeader from "./common/tableHeader";

class MovieTable extends Component {
  columns = [
    { header: "title", label: "Title" },
    { header: "genre.name", label: "Genre" },
    { header: "numberInStock", label: "Stock" },
    { header: "dailyRentalRate", label: "Rate" },
    {
      label: "Liked",
      content: (movie) => (
        <Like
          liked={movie.liked}
          onLike={() => this.props.onHandleLike(movie)}
        />
      ),
    },
    {
      label: "Action",
      content: (movie) => (
        <button
          onClick={() => this.props.onHandleDelete(movie)}
          className="btn btn-danger btn-sm"
        >
          Delete
        </button>
      ),
    },
  ];

  render() {
    const { newMovies, sortColumn, onSort } = this.props;

    return (
      <Table
        sortColumn={sortColumn}
        onSort={onSort}
        columns={this.columns}
        data={newMovies}
      ></Table>
    );
  }
}

export default MovieTable;
