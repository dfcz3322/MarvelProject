import axios, { AxiosResponse } from "axios";

const BASE_URL = "http://gateway.marvel.com/v1/public";

export function handleRequest(url: string, searchQuery?: string, limit = 5): Promise<AxiosResponse> {
    return axios.get(`${BASE_URL}/${url}`, {
        params: {
            apikey: process.env.REACT_APP_API_KEY,
            limit: limit,
            ...(searchQuery && { nameStartsWith: searchQuery }),
        },
    });
}
