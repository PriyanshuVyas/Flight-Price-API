import axios from "axios";
import dotenv from 'dotenv';
dotenv.config();

export const getAuthToken = async () => {

    try {
        const authURL = 'https://test.api.amadeus.com/v1/security/oauth2/token';
        const { data } = await axios.post(authURL,
        {
            grant_type: "client_credentials",
            client_id: process.env.CLIENT_ID,
            client_secret: process.env.CLIENT_SECRET,
        },
        {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            }
        }
        );

    return data.access_token;

    } catch (error) {
        console.log("\n -----Error while fetching Auth Token----- \n"+error);
        return -1;
    }
}