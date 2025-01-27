import PropTypes from "prop-types";

const Search = ({ search, setSearch }) => {
  return (
    <div className="search">
      <div>
        <img src="src/assets/search.svg" alt="search-icon" />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search movies you like"
        />
      </div>
    </div>
  );
};

Search.propTypes = {
  search: PropTypes.string.isRequired,
  setSearch: PropTypes.func.isRequired,
};

export default Search;
