import React from "react";
// Import styling
import "./favorites.css";

// A component that displays a list of favorite items.
const Favorites = ({ favoriteItems, handleDeleteFavorite }) => {
  return (
    <div>
      <h1>Favorites</h1>
      {/* Map through the favoriteItems array and render each item */}
      {favoriteItems.map((item) => (
        <div key={item.trackId}>
          <img src={item.artworkUrl60} alt={item.artistName} />
          <p>{item.artistName}</p>
          <p>{item.trackName}</p>
          {/* Call the handleDeleteFavorite function with the trackId as an argument */}
          <button onClick={() => handleDeleteFavorite(item.trackId)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default Favorites;
