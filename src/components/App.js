import React from "react";
import MovieCard from "./MovieCard";
import SocialMedia from "./SocialMedia";
// parent component
function App() {
  const title = "Mad Max";
  const posterURL =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn1OTYGz2GDC1XjA9tirh_1Rd571yE5UFIYsmZp4nACMd7CCHM";
  const genresArr = ["Action", "Adventure", "Science Fiction", "Thriller"];
  const socialLinks = {
    github: "https://github.com/stiflerzak",
    linkedin: "https://www.linkedin.com/in/hilary-kariuki-9b972a17b/",
  };

  return (
    <div className="App">
      <MovieCard title={title} genres={genresArr} poster={posterURL} />
      <SocialMedia socialLinks={socialLinks}/>
      
    </div>
  );
}

export default App;
