import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const statsApi = createApi({
    reducerPath: 'statsApi',
    keepUnusedDataFor: 30,
    baseQuery: fetchBaseQuery({ baseUrl: '/' }),
    endpoints: (builder) => ({
        getMatch: builder.query({
            query: () => ({
                url: '/api/match',
                method: 'GET',
            })
        }),
        getPlayer: builder.query({
            query: () => ({
                url: '/api/player',
                method: 'GET',
            })
        }),
        createMatch: builder.mutation({
            query: (payload) => ({
                url: '/api/match',
                method: 'POST',
                body: payload
            })
        }),
        createPlayer: builder.mutation({
            query: (payload) => ({
                url: '/api/player',
                method: 'POST',
                body: payload
            })
        }),
        createPlayerStats: builder.mutation({
            query: (payload) => ({
                url: '/api/playerStats',
                method: 'POST',
                body: payload
            })
        }),
    })
})

export const { useGetMatchQuery, useGetPlayerQuery, useCreateMatchMutation, useCreatePlayerMutation, useCreatePlayerStatsMutation } = statsApi;