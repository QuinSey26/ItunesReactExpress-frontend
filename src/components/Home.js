import React from "react";
//Import page styling
import "./home.css";

//The Home component displays a welcome message and provides information about the search website.
const Home = () => {
  return (
    <div>
      <h1>Welcome</h1>
      <p>
        Welcome to our Search website! We are delighted to have you here, where
        you can explore and discover a wide range of media content at your
        fingertips. Whether you are looking for movies, TV shows, music, or
        books, our platform is designed to help you easily find and access your
        favorite media. To enhance your experience, we offer a convenient
        feature that allows you to create and manage personalized favorite
        lists. This way, you can easily save and revisit the content that
        captivates your attention, ensuring you never miss out on the ones you
        love. Navigate through our user-friendly interface, organized
        categories, and powerful search capabilities to discover an abundance of
        entertainment options. Start exploring now and make this website your
        go-to destination for all your media searches and favorites. Happy
        searching and discovering!
      </p>
    </div>
  );
};

export default Home;
