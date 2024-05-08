const Location = require("../db/models/Location");

exports.getAllBoroughs = async (req, res) => {
    const boroughs = await Location.getAllBorough()
    return res.send(boroughs);
}

exports.getAllNeighborhoodBasedOnBorough = async (req, res) => {
    const { borough } = req.param
    const neighborhood = await Location.getAllNeighborhoodsBasedOnBorough(borough)
    return res.send(neighborhood);
}

exports.getAllComplexBasedOnNeighborhood = async (req, res) => {
    const { neighborhood } = req.param
    const complex = await Location.getAllComplexBasedOnNeighborhoods(neighborhood)
    res.send(complex);
}