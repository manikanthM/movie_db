/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
// im¯
import { POSTER_SIZE, IMAGE_BASE_URL, BACKDROP_SIZE } from "../config";

import no_image from "../images/no_image.jpg";

import API from "../API";

// import { useHomeFetch } from "../hooks/useHomeFetch";
import HeroImage from "./HeroImage";

// dotenv.config({ path: path.resolve(__dirname, "../.env") });

const Home = () => {
  // const { state1, loading, error } = useHomeFetch();
  const INITIAL_STATE = {
    page: 0,
    results: [],
    total_pages: 0,
    total_results: 0,
  };
  const [state, setState] = useState(INITIAL_STATE);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchMovies = async (page, searchParam = "") => {
    try {
      setError(false);
      setLoading(true);
      const movies = await API.fetchMovies(searchParam, page);
      console.log("32", movies);
      setState((prev) => ({
        ...movies,
        results:
          page > 1 ? [...prev.results, ...movies.results] : [...movies.results],
      }));
    } catch (error) {
      setError(true);
    }
    setLoading(false);
  };
  useEffect(() => {
    console.log("useEffect");
    fetchMovies(1);
  }, []);
  console.log("Home 18", state);
  console.log(state);
  return (
    <div>
      {/* {state1.results} */}
      {state.results[0][0] && (
        <HeroImage
          image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0][0].backdrop_path}`}
          text={state.results[0][0].original_title}
          title={state.results[0][0].overview}
        />
      )}
    </div>
  );
};

export default Home;
