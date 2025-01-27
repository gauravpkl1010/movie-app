import PropTypes from "prop-types";

const MovieCard = ({
  movie: { title, vote_average, release_date, original_language, poster_path },
}) => {
  return (
    <div className="movie-card">
      <img
        src={
          poster_path
            ? `https://image.tmdb.org/t/p/w500/${poster_path}`
            : "src/assets/no-movie.png"
        }
      />
      <div className="mt-4">
        <h3 className="text-left">{title}</h3>
        <div className="content">
          <div className="rating">
            <img src="src/assets/Rating.svg" alt="rating" />
            <p>{vote_average ? vote_average.toFixed(1) : "N/A"}</p>
          </div>
          <span>•</span>
          <p className="lang">{original_language}</p>
          <span>•</span>
          <p className="year">
            {release_date ? release_date.split("-")[0] : "N/A"}
          </p>
        </div>
      </div>
    </div>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    poster_path: PropTypes.string.isRequired,
    vote_average: PropTypes.number.isRequired,
    release_date: PropTypes.string.isRequired,
    original_language: PropTypes.string.isRequired,
  }).isRequired,
};

export default MovieCard;
