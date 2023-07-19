import React, { useState } from "react";
//Import styling for search section
import "./search.css";

// A component that allows users to search for songs and add them to favorites.
const Search = ({ handleAddFavorite }) => {
  const [term, setTerm] = useState("");
  const [media, setMedia] = useState("all");
  const [results, setResults] = useState([]);

  //Fetches the search results from the server based on the search term and media type.
  const fetchData = async () => {
    try {
      const response = await fetch(`https://react-express-itune-api.onrender.com/search?term=${term}&media=${media}`);
      const data = await response.json();
      setResults(data.data);
    } catch (error) {
      console.error(error);
      alert("There was an error fetching the results. Please try again later.");
    }
  };

  //Handles the form submission when the user clicks the search button.
  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform search based on term and media type
    // Update the results state with the search results
    if (term === "") {
      alert("Please enter a search term before searching.");
    } else {
      fetchData();
    }
  };

  //Handles the change event when the user types in the search term input.
  const handleTermChange = (e) => {
    setTerm(e.target.value);
  };

  //Handles the change event when the user selects a media type from the dropdown.
  const handleMediaChange = (e) => {
    setMedia(e.target.value);
  };

  //Handles adding a song to favorites when the user clicks the add button.
  const handleAddItem = (trackId) => {
    // Add the item with the specified trackId to the user's collection
    const selectedResult = results.find((result) => result.trackId === trackId);
    if (selectedResult) {
      handleAddFavorite(selectedResult);
    }
  };

  return (
    <div className="App">
      <h1>Song Finder</h1>
      <form onSubmit={handleSubmit}>
        {" "}
        {/*Search bar to enter term, calls function handleSubmit */}
        <input
          type="text"
          placeholder="Enter search term"
          value={term}
          onChange={handleTermChange}
        />
        <select value={media} onChange={handleMediaChange}>
          {" "}
          {/*Dropdown for media type, calls function handleMediaChange */}
          <option value="all">All</option>
          <option value="music">Music</option>
          <option value="movie">Movie</option>
          <option value="tvShow">TV Show</option>
          <option value="audiobook">Audio Book</option>
          <option value="ebook">EBook</option>
          <option value="podcast">Podcast</option>
        </select>
        <button type="submit">Search</button>
      </form>
      {results.length > 0 && (
        <table>
          <thead>
            <tr>
              {/*Table Headings */}
              <th>Artwork</th>
              <th>Artist Name</th>
              <th>Track Name</th>
              <th>Add</th>
            </tr>
          </thead>
          <tbody>
            {/*The map() method is called on the results array and it iterates over each result object to create a table row for each item in the array. */}
            {results.map((result) => (
              <tr key={result.trackId}>
                <td>
                  <img src={result.artworkUrl60} alt={result.artistName} />
                </td>
                <td>{result.artistName}</td>
                <td>{result.trackName}</td>
                <td>
                  {/*The onClick event handler is set to call the handleAddItem() function with the result.trackId as an argument whenever the button is clicked. This allows the user to add the track to a list or perform any custom action. */}
                  <button onClick={() => handleAddItem(result.trackId)}>
                    Add
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Search;
