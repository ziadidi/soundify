import { createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

    export const shazamCoreApi = createApi({
        reducerPath: 'shazamCoreApi',
        baseQuery: fetchBaseQuery({
            baseUrl: 'https://shazam-core.p.rapidapi.com/v1',
            prepareHeaders: (headers) => {
                headers.set('X-RapidAPI-Key', 'a0c58acb90msha36da496af6f0adp103f9ajsnbbb8dd07a3a8')
                
                return headers;
            },
        }),
        endpoints: (builder) => ({
            getTopCharts: builder.query({ query: () => '/charts/world'}),
        }),
    })

    export const {
        useGetTopChartsQuery,
    } = shazamCoreApi;