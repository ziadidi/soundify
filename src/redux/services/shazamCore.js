import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const shazamCoreApi = createApi({
  reducerPath: "shazamCoreApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://shazam-core.p.rapidapi.com/v1",
    prepareHeaders: (headers) => {
      headers.set(
        "X-RapidAPI-Key",
        "a0c58acb90msha36da496af6f0adp103f9ajsnbbb8dd07a3a8"
      );

      return headers;
    },
  }),
  // API ENDPOINTS
  endpoints: (builder) => ({
    // fetching top world charts from API
    getTopCharts: builder.query({ query: () => "/charts/world" }),
    // fetching song id and details from API
    getSongDetails: builder.query({
      query: ({ songid }) => `/tracks/details?track_id=${songid}`,
    }),
    //destructure song id                   //pass it here
    // fetching related songs
    getSongRelated: builder.query({
      query: ({ songid }) => `/tracks/related?track_id=${songid}`,
    }),

    getArtistDetails: builder.query({
      query: (artistId) => `artists/details?artist_id=${artistId}`,
    }),
  }),
});
//passing them as arguments so they can be used
export const {
  useGetTopChartsQuery,
  useGetSongDetailsQuery,
  useGetSongRelatedQuery,
  useGetArtistDetailsQuery,
} = shazamCoreApi;
