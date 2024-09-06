import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";

const fetchMovierTrailer = ({ id }) => {
  return api.get(`/movie/${id}/videos`);
};

export const useMovieTrailerQuery = (id) => {
  return useQuery({
    queryKey: ["movie-trailer", { id }],
    queryFn: () => fetchMovierTrailer({ id }),
    select: (result) => result.data,
  });
};
