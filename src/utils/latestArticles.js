import axios from 'axios';

export const fetchAsyncData = async () => {
    try {
        const responseData = await axios.get(`https://content.guardianapis.com/search?order-by=newest&show-fields=byline%2Cthumbnail%2Cheadline%2CbodyText&api-key=${import.meta.env.VITE_APP_GUARDIANAPIKEY}`);
        
        return responseData.data.response.results;
    }

    catch (e) {
        return e;
        alert(`Error!`);
    }
}
