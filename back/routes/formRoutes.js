import express from 'express';
import logger from '../logger/logger.js';
import { getOriginalUrl, shortTheUrl } from "../controller/formController.js"; // Import only the necessary functions

const router = express.Router(); // Initialize the router

// POST route to shorten URL
router.post('/url', shortTheUrl);

// GET route to retrieve the original URL from a shortened one
router.get('/:shortUrl', getOriginalUrl);

export default router;  

  













