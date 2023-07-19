//Create a fullstack web application(EXPRESS & REACT) that interface with a 3rd party api iTunes search.
//Should allow user to search for content and save as a favorite in a list
//iTunes Search API should be handle by backend server(Express)
//Provide attractive UI
//Should be Snapshot test and Unit test
//Use Helmet to secure

import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
// Import necessary components
import NavBar from "./components/Navbar";
import Home from "./components/Home";
import Search from "./components/Search";
import Favorites from "./components/Favorites";

//The main App component that represents the application.
const App = () => {
  // State to store favorite items
  const [favoriteItems, setFavoriteItems] = useState([]);

  //Function to handle adding an item to favorites.
  const handleAddFavorite = (item) => {
    //The item to be added to favorites.
    // Check if the item is already in favorites
    if (
      !favoriteItems.some(
        (favoriteItem) => favoriteItem.trackId === item.trackId
      )
    ) {
      // Add the item to favorites
      setFavoriteItems(favoriteItems.concat(item));
      alert("Item added to favorites!");
    } else {
      alert("Item is already added to favorites!");
    }
  };

  //Function to handle deleting an item from favorites.
  const handleDeleteFavorite = (trackId) => {
    //The trackId of the item to be deleted.
    // Filter out the item with the given trackId from favorites
    const updatedFavorites = favoriteItems.filter(
      (item) => item.trackId !== trackId
    );
    setFavoriteItems(updatedFavorites);
  };

  return (
    <div className="App">
      {/* Render the navigation bar */}
      <NavBar />
      <Routes>
        {/* Define routes for different components */}
        <Route exact path="/Home" element={<Home />} />
        <Route
          exact
          path="/Search"
          // Pass the handleAddFavorite function as a prop to the Search component
          element={<Search handleAddFavorite={handleAddFavorite} />}
        />
        <Route
          exact
          path="/Favorites"
          // Pass the favoriteItems and handleDeleteFavorite function as props to the Favorites component
          element={
            <Favorites
              favoriteItems={favoriteItems}
              handleDeleteFavorite={handleDeleteFavorite}
            />
          }
        />
      </Routes>
    </div>
  );
};

export default App;


/*References:  Jennifer Bland - Create react app to search- https://www.jenniferbland.com/create-a-react-app-to-search-songs-using-apples-itunes-api/
Itunes Api with React - https://codesandbox.io/s/itunes-api-with-react-6v1z7o0v43
How to connect 3rd party API to React through Express Stack overflow - https://stackoverflow.com/questions/64851324/how-to-connect-a-3rd-party-api-to-react-through-express*/