import axios from 'axios';

export const fetchAsyncData = async () => {
    try {
        const responseData = await axios.get(`https://content.guardianapis.com/search?order-by=newest&show-fields=byline%2Cthumbnail%2Cheadline%2CbodyText&api-key=078b26d2-5f6d-41ef-b2e4-7602376c1365`);
        
        return responseData.data.response.results;
    }

    catch (e) {
        return e;
        alert(`Error!`);
    }
}
