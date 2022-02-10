import React from "react";
import axios from "axios";
import Movie from "../components/Movie";
import "./Home.css";

// https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year
class Home extends React.Component {
  state = {
    isLoading: true,
    movie: [],
  }
  getMovies = async () => {
    const {
      data: {
        data: { movies }
      }
    } = await axios.get("https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year");
    this.setState({ movies, isLoading: false });
  }
  componentDidMount() {
    this.getMovies();
  };
  render() {
    const { isLoading, movies } = this.state;
    return (
      <section className="container">
        {isLoading ? (
          <div key="loader" className="loader">
            <span className="loader">Loading...</span>
          </div>
        ) : (
          <div key="movies" className="movies">
            {movies.map(movie => {
              return (
                <Movie
                  id={movie.id}
                  year={movie.year}
                  title={movie.title}
                  summary={movie.summary}
                  poster={movie.medium_cover_image}
                  genres={movie.genres} />
              );
            })}
          </div>
        )}
      </section>
    );
  }
}

export default Home;
