import express from "express";

import { getUsers, filteredByCountry, filteredByIntensity, filteredByLikelihood, filteredByPestle, filteredByRegion, filteredBySector, filteredBySource, filteredByTopic, filteredByTitle, filteredByYear, getAllData } from '../controller/user-controller.js';

const router = express.Router();

//filters
router.get('/view', getUsers)

router.get('/all', getAllData);

// api to get data filtered by year
router.get("/year/:year", filteredByYear)

// api to get data filtered by topic
router.get("/topic/:topic", filteredByTopic)

// api to get data filtered by title
router.get("/title/:title", filteredByTitle)

// api to get data filtered by sector
router.get("/sector/:sector", filteredBySector)

// api to get data filtered by region
router.get("/region/:region", filteredByRegion)

// api to get data filtered by country
router.get("/country/:country", filteredByCountry)

// api to get data filtered by pestle
router.get("/pestle/:pestle", filteredByPestle)

// api to get data filtered by source
router.get("/source/:source", filteredBySource)

// api to get data filtered by intensity
router.get("/intensity/:intensity", filteredByIntensity)

// api to get data filtered by likelihood
router.get("/likelihood/:likelihood", filteredByLikelihood)

export default router;
