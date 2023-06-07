import express from 'express';
import { getFlightData } from '../controller/flightController.js';

const Router = express.Router();

Router.get('/prices', getFlightData);
Router.post('/prices', getFlightData);
export default Router;