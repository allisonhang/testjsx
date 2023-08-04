import axios from 'axios';

const accessKey = "pibL7zK5nB7XXlrT8UwJCa8g-AIF7wjOHhAgauUMr2M";
const unSplachLocation = "https://api.unsplash.com/";
const searchPath = "search/photos?query=";

const generateRequestParams = (queryString) => {
    return {
        headers: {
            Authorization: `Client-ID ${accessKey}`,
        },
        params: {
            query: queryString
        },
        }
}

export const searchImages = async (queryString) => {
    const url = unSplachLocation + searchPath;
    const response = await axios.get(url, generateRequestParams(queryString || 'cars'))
    return response.data.results;
}