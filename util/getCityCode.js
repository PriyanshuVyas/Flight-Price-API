import axios from "axios";

export const getCityCode = async (cityName, ACCESS_TOKEN) => {
    
    try {
        const {data: cityCode} = await axios.get(
            `https://test.api.amadeus.com/v1/reference-data/locations/cities?keyword=${cityName}&max=1`,
            {
                headers:{
                    Authorization: `Bearer ${ACCESS_TOKEN}`
                }
            });
        
        
        return cityCode.data[0].iataCode; 
    } catch (error) {
        console.log("\n -----Error while fetching IATA code ----- \n"+error);
        return -1;
    }
}