import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./Movie.css";

function Movie({ id, year, title, summary, poster, genres }) {
  return (
    <div className="movie__link">
      <Link to={{
        pathname: '/movie-detail',
        state: {
          year,
          title,
          summary,
          poster,
          genres,
        }
      }}>
        <div className="movie">
          <img className="movie__img" src={poster} alt={title} title={title} />
          <div className="movie__data">
            <h3 className="movie__title">{title}</h3>
            <h5 className="movie__year">{year}</h5>
            <ul key={id} className="movie__genres">
              {genres.map((g, index) =>
                <li key={index} className="genres"> {g} </li>)}
            </ul>
            <p className="movie__summary">
              {summary.length > 250 ? `${summary.slice(0, 250)}...` : summary}
            </p>
          </div>
        </div>
      </Link>
    </div>
  )
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Movie;