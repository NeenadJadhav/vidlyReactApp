import React, { Component } from "react";
import { getMovies, deleteMovie } from "../services/fakeMovieService";
import MovieTable from "./movieTableComponent";
import Pagination from "./common/pagination";
import { paginate } from "../utils/paginate";
import ListGroup from "./common/listGroup";
import { getGenres } from "../services/fakeGenreService";
import _ from "lodash";

class Movies extends Component {
  state = {
    movies: [],
    genres: [],
    pageSize: 4,
    currentPage: 1,
    sortColumn: { header: "title", order: "asc" },
  };

  componentDidMount() {
    //To add the All Genres in the list, we need an item in the genres which we will be using to generate the actual list in the ListGroup component
    const genres = [{ _id: "", name: "All Movies" }, ...getGenres()];

    this.setState({
      movies: getMovies(),
      genres,
    });
  }

  handleDelete = (movie) => {
    const newMovies = this.state.movies.filter((m) => m._id !== movie._id);
    this.setState({
      movies: newMovies,
    });
  };

  handleLike = (movie) => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    //We do not want to modify the objects in the array directly so we clone it in the next line.
    movies[index] = { ...movies[index] };
    movies[index].liked = !movies[index].liked;
    this.setState({
      movies,
    });
  };

  handlePageChange = (page) => {
    this.setState({
      currentPage: page,
    });
  };

  handleGenreSelect = (genreName) => {
    this.setState({
      selectedGenre: genreName,
      currentPage: 1,
    });
  };

  handleSort = (sortColumn) => {
    this.setState({
      sortColumn: sortColumn,
    });
  };

  getPagedData = () => {
    const { selectedGenre, movies: allMovies, sortColumn } = this.state;

    const filtered =
      this.state.selectedGenre && this.state.selectedGenre._id
        ? allMovies.filter((movie) => movie.genre._id === selectedGenre._id)
        : allMovies;

    const sortedMovies = _.orderBy(
      filtered,
      [sortColumn.header],
      [sortColumn.order]
    );

    const newPaginatedMovieArray = paginate(
      sortedMovies,
      this.state.currentPage,
      this.state.pageSize
    );

    return { totalCount: filtered.length, data: newPaginatedMovieArray };
  };

  render() {
    const { length: count } = this.state.movies;
    const { sortColumn } = this.state;

    if (count === 0) return <span>Please add new movies to the DB</span>;

    const { totalCount, data: movies } = this.getPagedData();

    return (
      <React.Fragment>
        <div className="row mt-4">
          <div className="col-2 ml-2">
            <ListGroup
              selectedItem={this.state.selectedGenre}
              itemList={this.state.genres}
              onItemSelect={this.handleGenreSelect}
            />
          </div>
          <div className="col mr-2">
            <span>Showing {totalCount} movies from the DB</span>
            <MovieTable
              newMovies={movies}
              onHandleLike={this.handleLike}
              onHandleDelete={this.handleDelete}
              onSort={this.handleSort}
              sortColumn={sortColumn}
            />
            <Pagination
              totalMovieCount={totalCount}
              pageSize={this.state.pageSize}
              currentPage={this.state.currentPage}
              onPageChange={this.handlePageChange}
            />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Movies;
