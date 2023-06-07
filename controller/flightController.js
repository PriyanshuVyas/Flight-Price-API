import axios from "axios";
import dotenv from 'dotenv';
import parseResponse from "../util/parseResponse.js";
import { getAuthToken } from "../util/getAuth.js";
import { getCityCode } from "../util/getCityCode.js";

dotenv.config();
const BASE_URL = 'https://test.api.amadeus.com/v2/shopping/flight-offers';

export const getFlightData = async (req,res) => {
    
    const {source : sourceCity, destination : destCity, departureDate : deptDate} = req.body;

    //Obtaining Access Token in order to use API
    const ACCESS_TOKEN = await getAuthToken();
    if(ACCESS_TOKEN === -1){
        res.status(401).json({error:"Access Token Error"});
    }

    //Obtaining IATA codes to get flight data
    const sourceIATA = await getCityCode(sourceCity, ACCESS_TOKEN);
    const destIATA = await getCityCode(destCity, ACCESS_TOKEN);
    if(sourceIATA === -1 || destIATA === -1){
        res.status(500).json({error:"Error occured while fetching IATA codes"});
    }

    //Getting Flight Data
    const {data: flightData}  = await axios.get(
        `${BASE_URL}?originLocationCode=${sourceIATA}&destinationLocationCode=${destIATA}&departureDate=${deptDate}&adults=1&currencyCode=INR&max=5`,
        {
            headers:{
                Authorization: `Bearer ${ACCESS_TOKEN}`
            }
        });

    const ans  = parseResponse(flightData);
    res.status(200).json(ans);

}

