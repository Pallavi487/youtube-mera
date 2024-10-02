import React, { useEffect, useState } from "react";
import { toggleMenu } from "../utils/appSlice";
import { useDispatch, useSelector } from "react-redux";
import { YouTube_SEARCH_API } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const searchCache = useSelector((store) => store.search);
  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    try {
      if (searchQuery.trim()) {
        const data = await fetch(YouTube_SEARCH_API + searchQuery);
        const json = await data.json();
        console.log("API Response:", json);

        // Safely access the response using optional chaining

        setSuggestions(json[1]);

        dispatch(
          cacheResults({
            [searchQuery]: json[1],
          })
        );
      }
    } catch (error) {
      console.error("Error fetching suggestions:", error);
      setSuggestions([]); // Set suggestions to an empty array in case of error
    }
  };

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg">
      <div className="flex col-span-1">
        <img
          onClick={() => toggleMenuHandler()}
          className="h-8 cursor-pointer"
          alt="menu"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAb1BMVEX///8iICGSkZIkHyEPDA3z8vIyMTEhGx40MDEeHB4jICEeHR4AAAAxMTEgHh4gHB3W1tYtKyyXlpe6uroKBQhzcnJ+fX7CwsKysrJmZWX19fXk5OQYFhc5ODgoJidta2xUVFRfXV7Kysqsq6yjo6MHDa+eAAAB8UlEQVR4nO3c3VLaQBgGYJY/IQtE1Iogrfbn/q+xCaQ2TqtFm222+jwHDC8MMO8EdjnY+QYDAAAAAAAAAAAAAAAAeI/OL4Z5uDhP0m+yXYwzcbX4cJug4d045GN8Pem84GYd+67VUq6/dN7wou9Sjy1u0jQcjUZ9V2skaHhZfUuLbBrGYtN5w8F2HLNpGFOsNIPddlo3XGUgTK9T7BbVFzWbHX+zS1IQAAAAAAAAAABeZJKHVPXO76dHs9msul1OH+JfpOmr0ufuz15Wbhb78uzBvJzPWym2U/XU6Sk+lc6eTnEfv3Zf8PZjeTib2AihnYpwOJl5Qhp1kULY33d/1Pvbp9XTDcO/bhjGl503HD5uUX/Mn1PxTPr964pTUkhygra+hj9U16V10LS6+/pUtFLxTAo/00GCa1j/DhtFDw2Lxw1T/A7rtTRWS+ZhES2rdS3O22lep/qBX1LZSmetFI+pfvzk1HximrW03g9ns4edadboIy2XafbDWt9/Zhqp6gEAAAAAAAAAwAu89Zl7u+00xFXse2ZiLdHcxO24PLx7DpLMvrxcHy9f3+WOUswvHYZVRg2TTNktqnqjTCa0Jmm4WZcZNUwxC3pwd5VPwyLJlN3JdnHV9zD2RqKZ7G9/rj4AAAAAAAAAAAAAAAD8T74DVhZG6MsBqOQAAAAASUVORK5CYII="
        />
        <a href="/">
          <img
            className="h-8"
            alt="youtube-logo"
            src="https://1000logos.net/wp-content/uploads/2017/05/Youtube-logo.jpg"
          />
        </a>
      </div>
      <div className="col-span-10 px-10">
        <input
          className="px-5 w-1/2 border border-gray-400 p-2 rounded-l-full"
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={() => setShowSuggestions(true)}
          onBlur={() => setShowSuggestions(false)}
        />
        <button className="border border-gray-400 px-5 bg-gray-100 p-2 rounded-r-full">
          🍳
        </button>
      </div>

      {showSuggestions && (
        <div className="fixed left-56 top-20 z-10 bg-white py-2 px-5 w-96 shadow-lg rounded-lg border border-gray">
          <ul>
            {suggestions.length > 0 ? (
              suggestions.map((s) => (
                <li key={s} className="px-2 py-2 shadow-sm hover:bg-gray-100">
                  {s}
                </li>
              ))
            ) : (
              <li className="px-2 py-2">No suggestions available</li>
            )}
          </ul>
        </div>
      )}

      <div className="col-span-1">
        <img
          className="h-8"
          alt="users"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwdKxIRjksVafQ72NgTnGQ6uvATF9jUgD_Pw&s"
        />
      </div>
    </div>
  );
};

export default Head;
