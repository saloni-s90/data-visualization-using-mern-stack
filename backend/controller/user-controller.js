import reportModel  from "../Schemas/user-schema.js";

export const getUsers = async (req, res) => {

    try {
        const u = await reportModel.find()
        res.status(200).json(u)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}


// function to get all the data
export const getAllData = async (req, res) => {
    try {
        const allData = await reportModel.find();
        if (!allData || allData.length === 0) {
            return res.status(400).json({
                success: false,
                message: "No data found"
            })
        }
        return res.status(200).json({
            success: true,
            message: "All data",
            data: allData
        })
    } catch (e) {
        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
        })
    }
}

// function to get data filtered by year
export const filteredByYear = async (req, res) => {
    try {
        const { year } = req.params;
        if (year.length !== 4) {
            return res.status(400).json({
                success: false,
                message: "Invalid year",
            })
        }
        
        const allData = await reportModel.find({
            $or: [{ start_year: year }, { end_year: year }, { published: { $regex: year, $options: 'i' } },
            { added: { $regex: year, $options: 'i' } }]
        });
        if (!allData || allData.length === 0) {
            return res.status(400).json({
                success: false,
                message: "No Data Found",
            })
        }
        return res.status(200).json({
            success: true,
            message: `Filtered by year ${year}`,
            data: allData
        })
    } catch (e) {
        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
        })
    }
}

// function to get data filtered by topics
export const filteredByTopic = async (req, res) => {
    try {
        const { topic } = req.params;
        if (topic.length < 3) {
            return res.status(400).json({
                success: false,
                message: "Invalid topic",
            })
        }
        const allData = await reportModel.find({ topic: { $regex: topic, $options: 'i' } });
        if (!allData || allData.length === 0) {
            return res.status(400).json({
                success: false,
                message: "No Data Found",
            })
        }
        return res.status(200).json({
            success: true,
            message: `Filtered by topic: ${topic}`,
            data: allData
        })
    } catch (e) {
        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
        })
    }
}

// function to get data filtered by title
export const filteredByTitle = async (req, res) => {
    try {
        const { title } = req.params;
        if (title.length < 3) {
            return res.status(400).json({
                success: false,
                message: "Invalid title",
            })
        }
        const allData = await reportModel.find({ title: { $regex: title, $options: 'i' } });
        if (!allData || allData.length === 0) {
            return res.status(400).json({
                success: false,
                message: "No Data Found",
            })
        }
        return res.status(200).json({
            success: true,
            message: `Filtered by title: ${title}`,
            data: allData
        })
    } catch (e) {
        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
        })
    }
}

// function to get data filtered by sector
export const filteredBySector = async (req, res) => {
    try {
        const { sector } = req.params;
        if (sector.length < 3) {
            return res.status(400).json({
                success: false,
                message: "Invalid sector",
            })
        }
        const allData = await reportModel.find({ sector: { $regex: sector, $options: 'i' } });
        if (!allData || allData.length === 0) {
            return res.status(400).json({
                success: false,
                message: "No Data Found",
            })
        }
        return res.status(200).json({
            success: true,
            message: `Filtered by sector: ${sector}`,
            data: allData
        })
    } catch (e) {
        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
        })
    }
}

// function to get data filtered by region
export const filteredByRegion = async (req, res) => {
    try {
        const { region } = req.params;
        if (region.length < 3) {
            return res.status(400).json({
                success: false,
                message: "Invalid region",
            })
        }
        const allData = await reportModel.find({ region: { $regex: region, $options: 'i' } });
        if (!allData || allData.length === 0) {
            return res.status(400).json({
                success: false,
                message: "No Data Found",
            })
        }
        return res.status(200).json({
            success: true,
            message: `Filtered by region: ${region}`,
            data: allData
        })
    } catch (e) {
        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
        })
    }
}

// function to get data filtered by country
export const filteredByCountry = async (req, res) => {
    try {
        const { country } = req.params;
        if (country.length < 3) {
            return res.status(400).json({
                success: false,
                message: "Invalid country",
            })
        }
        const allData = await reportModel.find({ country: { $regex: country, $options: 'i' } });
        if (!allData || allData.length === 0) {
            return res.status(400).json({
                success: false,
                message: "No Data Found",
            })
        }
        return res.status(200).json({
            success: true,
            message: `Filtered by country: ${country}`,
            data: allData
        })
    } catch (e) {
        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
        })
    }
}

// function to get data filtered by pestle
export const filteredByPestle = async (req, res) => {
    try {
        const { pestle } = req.params;
        if (pestle.length < 3) {
            return res.status(400).json({
                success: false,
                message: "Invalid pestle",
            })
        }
        const allData = await reportModel.find({ pestle: { $regex: pestle, $options: 'i' } });
        if (!allData || allData.length === 0) {
            return res.status(400).json({
                success: false,
                message: "No Data Found",
            })
        }
        return res.status(200).json({
            success: true,
            message: `Filtered by pestle: ${pestle}`,
            data: allData
        })
    } catch (e) {
        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
        })
    }
}

// function to get data filtered by source
export const filteredBySource = async (req, res) => {
    try {
        const { source } = req.params;
        if (source.length < 3) {
            return res.status(400).json({
                success: false,
                message: "Invalid source",
            })
        }
        const allData = await reportModel.find({ source: { $regex: source, $options: 'i' } });
        if (!allData || allData.length === 0) {
            return res.status(400).json({
                success: false,
                message: "No Data Found",
            })
        }
        return res.status(200).json({
            success: true,
            message: `Filtered by source: ${source}`,
            data: allData
        })
    } catch (e) {
        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
        })
    }
}

// function to get data filtered by intensity
export const filteredByIntensity = async (req, res) => {
    try {
        const { intensity } = req.params;
        const allData = await reportModel.find({ intensity: parseInt(intensity) });
        if (!allData || allData.length === 0) {
            return res.status(400).json({
                success: false,
                message: "No Data Found",
            })
        }
        return res.status(200).json({
            success: true,
            message: `Filtered by intensity: ${intensity}`,
            data: allData
        })
    } catch (e) {
        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
        })
    }
}

// function to get data filtered by likelihood
export const filteredByLikelihood = async (req, res) => {
    try {
        const { likelihood } = req.params;
        const allData = await reportModel.find({ likelihood: parseInt(likelihood) });
        if (!allData || allData.length === 0) {
            return res.status(400).json({
                success: false,
                message: "No Data Found",
            })
        }
        return res.status(200).json({
            success: true,
            message: `Filtered by likelihood: ${likelihood}`,
            data: allData
        })
    } catch (e) {
        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
        })
    }
}
