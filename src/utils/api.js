import axios from "axios";

// const API_KEY = process.env.REACT_APP_API_KEY;

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    Accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ODg2ODgxYWZkNGRmY2YxYmY4NTE2YjQ4ZTZjNGZlZSIsIm5iZiI6MTcyNTEwNTkwMy4wNzY4OTIsInN1YiI6IjY2ZDJiZjkzYTg3ZTMxOGY3MGI2MDk4ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.p4mN-AVIRuALdDhk4S3UiPbAA9bP0VuGCu0Gshe20Jw",
  },
});

export default api;
