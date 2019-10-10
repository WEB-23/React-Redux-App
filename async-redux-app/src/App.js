import React, { useState, useEffect } from "react";
import "./App.css";

import axios from "axios";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(
        " https://cors-anywhere.herokuapp.com/http://www.recipepuppy.com/api/"
      )
      .then(res => {
        console.log(res.data.results);
        setData(res.data.results);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="App">
      {data.map(recipe => {
        return (
          <>
            <h1>{recipe.title}</h1>
            <ul>
              <li>{recipe.ingrediants}</li>
            </ul>
          </>
        );
      })}
    </div>
  );
}

export default App;
