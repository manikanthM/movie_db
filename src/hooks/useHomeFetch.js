// import { useState, useEffect } from "react";
// import API from "../API";
// const INITIAL_STATE = {
//   page: 0,
//   results: [],
//   total_pages: 0,
//   total_results: 0,
// };
// export const useHomeFetch = () => {
//   const [state1, setState1] = useState(INITIAL_STATE);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(false);

//   const fetchMovies = async (page, searchParam = "") => {
//     try {
//       setError(false);
//       setLoading(true);
//       const movies = await API.fetchMovies(searchParam, page);
//       console.log(movies);
//       setState1((prev) => ({
//         ...movies,
//         results:
//           page > 1 ? [...prev.results, ...movies.results] : [...movies.results],
//       }));
//     } catch (error) {
//       setError(true);
//     }
//     setLoading(false);
//   };
//   useEffect(() => {
//     console.log("useEffect");
//     fetchMovies(1);
//   }, []);
//   return { state1, loading, error };
// };
